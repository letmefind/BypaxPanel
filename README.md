# Bypax Panel

<div align="center">

![PHP](https://img.shields.io/badge/PHP-8.2+-green.svg)
![MySQL](https://img.shields.io/badge/MySQL-5.7+-blue.svg)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

## 📖 Introduction

Bypax Panel is a modern panel system built on Laravel 11, focusing on providing a clean and efficient user experience. **Bypax Panel is originally based on [Xboard](https://github.com/cedar2025/Xboard)**, which in turn is based on [V2Board](https://github.com/v2board/v2board). This project has been rebranded and enhanced with new features and improved internationalization support including English, Chinese, Korean, and Persian languages.

## ✨ Features

- 🚀 Built with Laravel 12 + Octane for significant performance gains
- 🎨 Redesigned admin interface (React + Shadcn UI)
- 📱 Modern user frontend (Vue3 + TypeScript)
- 🐳 Ready-to-use Docker deployment solution
- 🎯 Optimized system architecture for better maintainability
- 🌍 Multi-language support: English, Chinese, Korean, and Persian
- 🔧 Simplified installation process with automated scripts
- 🔐 **New Protocol Support**: OpenVPN, WireGuard, and IKE tunnel protocols

## 🚀 Quick Start

### One-Command Installation

```bash
git clone --depth 1 https://github.com/letmefind/BypaxPanel.git && \
cd BypaxPanel && \
cp compose.sample.yaml docker-compose.yml && \
bash install.sh
```

### Custom Admin Email

If you want to set a custom admin email, set the `ADMIN_ACCOUNT` environment variable:

```bash
export ADMIN_ACCOUNT=admin@yourdomain.com
bash install.sh
```

> After installation, visit: http://SERVER_IP:7001  
> ⚠️ Make sure to save the admin credentials shown during installation

## 📖 Documentation

### Installation Guides
- [Deploy with Docker Compose](./docs/en/installation/docker-compose.md) - Recommended for most users
- [Deploy with 1Panel](./docs/en/installation/1panel.md)
- [Deploy with aaPanel](./docs/en/installation/aapanel.md)
- [Deploy with aaPanel + Docker](./docs/en/installation/aapanel-docker.md)

### Development Guides
- [Plugin Development Guide](./docs/en/development/plugin-development-guide.md) - Complete guide for developing Bypax Panel plugins

### Migration Guides
- [Migrate from v2board dev](./docs/en/migration/v2board-dev.md)
- [Migrate from v2board 1.7.4](./docs/en/migration/v2board-1.7.4.md)
- [Migrate from v2board 1.7.3](./docs/en/migration/v2board-1.7.3.md)

## 🛠️ Tech Stack

- Backend: Laravel 11 + Octane
- Admin Panel: React + Shadcn UI + TailwindCSS
- User Frontend: Vue3 + TypeScript + NaiveUI
- Deployment: Docker + Docker Compose
- Caching: Redis + Octane Cache

## 📷 Preview
![Admin Preview](./docs/images/admin.png)

![User Preview](./docs/images/user.png)

## ⚠️ Disclaimer

This project is for learning and communication purposes only. Users are responsible for any consequences of using this project.

## 🔔 Important Notes

1. Restart required after modifying admin path:
```bash
docker compose restart
```

2. For aaPanel installations, restart the Octane daemon process

3. Update command:
```bash
php artisan bypax:update
```

## 🤝 Contributing

Issues and Pull Requests are welcome to help improve the project.

## 🙏 Acknowledgments & Attribution

Bypax Panel is based on [Xboard](https://github.com/cedar2025/Xboard), which in turn is based on [V2Board](https://github.com/v2board/v2board). We acknowledge and credit the original developers for their excellent work.

- **Xboard**: Original modern panel system implementation
- **V2Board**: Original panel system foundation

This project maintains compatibility with the original systems while adding improvements and additional language support.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🇮🇷 فارسی (Persian)

### 📖 معرفی

Bypax Panel یک سیستم پنل مدرن است که بر روی Laravel 11 ساخته شده و بر ارائه تجربه کاربری تمیز و کارآمد تمرکز دارد. **Bypax Panel در اصل بر اساس [Xboard](https://github.com/cedar2025/Xboard) ساخته شده است** که خود بر اساس [V2Board](https://github.com/v2board/v2board) است. این پروژه با نام جدید و ویژگی‌های جدید و پشتیبانی بهبود یافته از چندزبانه شامل انگلیسی، چینی، کره‌ای و فارسی ارائه شده است.

### ✨ ویژگی‌ها

- 🚀 ساخته شده با Laravel 12 + Octane برای افزایش قابل توجه عملکرد
- 🎨 رابط مدیریتی بازطراحی شده (React + Shadcn UI)
- 📱 فرانت‌اند کاربری مدرن (Vue3 + TypeScript)
- 🐳 راه‌حل استقرار آماده Docker
- 🎯 معماری سیستم بهینه شده برای قابلیت نگهداری بهتر
- 🌍 پشتیبانی چندزبانه: انگلیسی، چینی، کره‌ای و فارسی
- 🔧 فرآیند نصب ساده شده با اسکریپت‌های خودکار
- 🔐 **پشتیبانی پروتکل‌های جدید**: OpenVPN، WireGuard و پروتکل‌های تونل IKE

### 🚀 شروع سریع

#### نصب با یک دستور

```bash
git clone --depth 1 https://github.com/letmefind/BypaxPanel.git && \
cd BypaxPanel && \
cp compose.sample.yaml docker-compose.yml && \
bash install.sh
```

#### ایمیل ادمین سفارشی

اگر می‌خواهید یک ایمیل ادمین سفارشی تنظیم کنید، متغیر محیطی `ADMIN_ACCOUNT` را تنظیم کنید:

```bash
export ADMIN_ACCOUNT=admin@yourdomain.com
bash install.sh
```

> پس از نصب، به آدرس زیر مراجعه کنید: http://SERVER_IP:7001  
> ⚠️ مطمئن شوید که اطلاعات ورود ادمین نمایش داده شده در طول نصب را ذخیره کنید

### 📖 مستندات

#### راهنماهای نصب
- [استقرار با Docker Compose](./docs/en/installation/docker-compose.md) - برای اکثر کاربران توصیه می‌شود
- [استقرار با 1Panel](./docs/en/installation/1panel.md)
- [استقرار با aaPanel](./docs/en/installation/aapanel.md)
- [استقرار با aaPanel + Docker](./docs/en/installation/aapanel-docker.md)

#### راهنماهای توسعه
- [راهنمای توسعه افزونه](./docs/en/development/plugin-development-guide.md) - راهنمای کامل برای توسعه افزونه‌های Bypax Panel

#### راهنماهای مهاجرت
- [مهاجرت از v2board dev](./docs/en/migration/v2board-dev.md)
- [مهاجرت از v2board 1.7.4](./docs/en/migration/v2board-1.7.4.md)
- [مهاجرت از v2board 1.7.3](./docs/en/migration/v2board-1.7.3.md)

### 🛠️ پشته فناوری

- بک‌اند: Laravel 11 + Octane
- پنل مدیریت: React + Shadcn UI + TailwindCSS
- فرانت‌اند کاربر: Vue3 + TypeScript + NaiveUI
- استقرار: Docker + Docker Compose
- کش: Redis + Octane Cache

### ⚠️ سلب مسئولیت

این پروژه فقط برای اهداف یادگیری و ارتباط است. کاربران مسئول هرگونه عواقب استفاده از این پروژه هستند.

### 🔔 نکات مهم

1. پس از تغییر مسیر ادمین نیاز به راه‌اندازی مجدد است:
```bash
docker compose restart
```

2. برای نصب‌های aaPanel، فرآیند دیمون Octane را مجدداً راه‌اندازی کنید

3. دستور به‌روزرسانی:
```bash
php artisan bypax:update
```

### 🤝 مشارکت

مسائل و درخواست‌های Pull برای کمک به بهبود پروژه خوش‌آمد هستند.

### 🙏 قدردانی و انتساب

Bypax Panel بر اساس [Xboard](https://github.com/cedar2025/Xboard) است که خود بر اساس [V2Board](https://github.com/v2board/v2board) است. ما از توسعه‌دهندگان اصلی برای کار عالی‌شان قدردانی و اعتبار می‌دهیم.

- **Xboard**: پیاده‌سازی اصلی سیستم پنل مدرن
- **V2Board**: پایه اصلی سیستم پنل

این پروژه سازگاری با سیستم‌های اصلی را حفظ می‌کند در حالی که بهبودها و پشتیبانی زبان اضافی را اضافه می‌کند.
