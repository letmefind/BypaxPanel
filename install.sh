#!/bin/bash

set -e

echo "🚀 Bypax Panel - Easy Installation Script"
echo "=========================================="
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed!"
    echo "Please install Docker first:"
    echo "  curl -fsSL https://get.docker.com -o get-docker.sh"
    echo "  sudo sh get-docker.sh"
    exit 1
fi

# Check if docker compose is available
if docker compose version &> /dev/null; then
    DOCKER_COMPOSE="docker compose"
elif docker-compose --version &> /dev/null; then
    DOCKER_COMPOSE="docker-compose"
else
    echo "❌ Docker Compose is not installed!"
    echo "Please install Docker Compose plugin:"
    echo "  sudo apt install docker-compose-plugin"
    exit 1
fi

echo "✅ Docker found: $(docker --version)"
echo "✅ Docker Compose found"
echo ""

# Get installation parameters
ADMIN_EMAIL=${ADMIN_ACCOUNT:-admin@example.com}
ENABLE_SQLITE=${ENABLE_SQLITE:-true}
ENABLE_REDIS=${ENABLE_REDIS:-true}

echo "📋 Installation Configuration:"
echo "   Admin Email: $ADMIN_EMAIL"
echo "   SQLite: $ENABLE_SQLITE"
echo "   Redis: $ENABLE_REDIS"
echo ""

# Step 1: Copy compose file if needed
if [ ! -f "docker-compose.yml" ]; then
    echo "📝 Creating docker-compose.yml from sample..."
    cp compose.sample.yaml docker-compose.yml
fi

# Step 2: Create required directories
echo "📁 Creating required directories..."
mkdir -p .docker/.data/redis
chmod -R 777 .docker/.data 2>/dev/null || true

# Step 3: Start Redis first
echo "🔴 Starting Redis container..."
$DOCKER_COMPOSE up -d redis

# Wait for Redis to be ready and socket file to be created
echo "⏳ Waiting for Redis to start and create socket file..."
MAX_WAIT=30
WAIT_COUNT=0
SOCKET_FOUND=false

while [ $WAIT_COUNT -lt $MAX_WAIT ]; do
    # Check if Redis container is running
    if ! $DOCKER_COMPOSE ps | grep -q "redis.*Up"; then
        echo ""
        echo "❌ Redis container is not running"
        exit 1
    fi
    
    # Check if socket file exists in the mounted volume (from inside the container)
    # We need to check from inside a container that has the volume mounted
    if $DOCKER_COMPOSE run --rm web test -S /data/redis.sock 2>/dev/null; then
        SOCKET_FOUND=true
        echo ""
        echo "✅ Redis socket file found and ready"
        break
    fi
    
    WAIT_COUNT=$((WAIT_COUNT + 1))
    if [ $((WAIT_COUNT % 3)) -eq 0 ]; then
        echo -n "."
    fi
    sleep 1
done

if [ "$SOCKET_FOUND" = false ]; then
    echo ""
    echo "⚠️  Warning: Redis socket file not found after $MAX_WAIT seconds"
    echo "   The socket should be at /data/redis.sock inside containers"
    echo "   Continuing anyway - installation will retry connection..."
fi

# Give Redis a moment to fully initialize
sleep 2
echo ""

# Step 4: Install Composer dependencies and run installation
echo "📦 Installing Composer dependencies..."
$DOCKER_COMPOSE run --rm web sh -c "
    rm -rf composer.phar
    wget -q https://github.com/composer/composer/releases/latest/download/composer.phar -O composer.phar
    php composer.phar install -vvv --no-interaction
"

if [ $? -ne 0 ]; then
    echo "❌ Failed to install Composer dependencies"
    exit 1
fi

echo "✅ Dependencies installed"
echo ""

# Step 5: Run installation
echo "🔧 Running Bypax Panel installation..."
echo ""

# Ensure the web container has access to Redis volume
# Socket file access works via shared volume, not network
$DOCKER_COMPOSE run -it --rm \
    -e ENABLE_SQLITE=$ENABLE_SQLITE \
    -e ENABLE_REDIS=$ENABLE_REDIS \
    -e ADMIN_ACCOUNT=$ADMIN_EMAIL \
    -e docker=true \
    --volume "$(pwd)/.docker/.data/redis:/data" \
    --volume "$(pwd):/www" \
    web php artisan bypax:install

if [ $? -ne 0 ]; then
    echo "❌ Installation failed"
    exit 1
fi

echo ""
echo "🎉 Installation completed successfully!"
echo ""

# Step 6: Start all services
echo "🚀 Starting all services..."
$DOCKER_COMPOSE up -d

if [ $? -eq 0 ]; then
    echo "✅ All services started successfully!"
    echo ""
    echo "📝 Service Status:"
    $DOCKER_COMPOSE ps
    echo ""
    echo "🌐 Access admin panel: http://YOUR_SERVER_IP:7001"
    echo "📧 Use the admin credentials shown above"
    echo ""
    echo "💡 To view logs: $DOCKER_COMPOSE logs -f"
    echo "💡 To stop services: $DOCKER_COMPOSE down"
else
    echo "⚠️  Some services may have failed to start. Check logs with: $DOCKER_COMPOSE logs"
fi
echo ""

