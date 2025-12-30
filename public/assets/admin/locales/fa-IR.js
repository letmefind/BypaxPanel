window.BYPAX_TRANSLATIONS = window.BYPAX_TRANSLATIONS || {};
window.XBOARD_TRANSLATIONS = window.XBOARD_TRANSLATIONS || {};
window.BYPAX_TRANSLATIONS['fa-IR'] = window.XBOARD_TRANSLATIONS['fa-IR'] = {
  "payment": {
    "title": "پیکربندی پرداخت",
    "description": "پیکربندی روش‌های پرداخت شامل Alipay، WeChat Pay و غیره",
    "table": {
      "columns": {
        "id": "شناسه",
        "enable": "فعال",
        "name": "نام نمایشی",
        "payment": "درگاه پرداخت",
        "notify_url": "URL اطلاع‌رسانی",
        "notify_url_tooltip": "درگاه پرداخت اعلان‌ها را به این آدرس ارسال می‌کند. لطفاً اطمینان حاصل کنید که از طریق فایروال شما قابل دسترسی است.",
        "actions": "عملیات"
      },
      "actions": {
        "edit": "ویرایش",
        "delete": {
          "title": "تأیید حذف",
          "description": "آیا مطمئن هستید که می‌خواهید این روش پرداخت را حذف کنید؟ این عمل قابل بازگشت نیست.",
          "success": "با موفقیت حذف شد"
        }
      },
      "toolbar": {
        "search": "جستجوی روش‌های پرداخت...",
        "reset": "بازنشانی",
        "sort": {
          "hint": "روش‌های پرداخت را بکشید تا مرتب شوند، پس از اتمام روی ذخیره کلیک کنید",
          "save": "ذخیره ترتیب",
          "edit": "ویرایش ترتیب"
        }
      }
    },
    "form": {
      "add": {
        "button": "افزودن روش پرداخت",
        "title": "افزودن روش پرداخت"
      },
      "edit": {
        "title": "ویرایش روش پرداخت"
      },
      "fields": {
        "name": {
          "label": "نام نمایشی",
          "placeholder": "نام پرداخت را وارد کنید",
          "description": "برای نمایش در فرانت‌اند استفاده می‌شود"
        },
        "icon": {
          "label": "URL آیکون",
          "placeholder": "https://example.com/icon.svg",
          "description": "URL آیکون برای نمایش در فرانت‌اند"
        },
        "notify_domain": {
          "label": "دامنه اطلاع‌رسانی",
          "placeholder": "https://example.com",
          "description": "دامنه برای اعلان‌های درگاه"
        },
        "handling_fee_percent": {
          "label": "کارمزد درصدی (%)",
          "placeholder": "0-100"
        },
        "handling_fee_fixed": {
          "label": "کارمزد ثابت",
          "placeholder": "0"
        },
        "payment": {
          "label": "درگاه پرداخت",
          "placeholder": "درگاه پرداخت را انتخاب کنید",
          "description": "درگاه پرداخت مورد استفاده را انتخاب کنید"
        }
      },
      "validation": {
        "name": {
          "min": "نام باید حداقل 2 کاراکتر باشد",
          "max": "نام نمی‌تواند بیش از 30 کاراکتر باشد"
        },
        "notify_domain": {
          "url": "لطفاً یک URL معتبر وارد کنید"
        },
        "payment": {
          "required": "لطفاً یک درگاه پرداخت انتخاب کنید"
        }
      },
      "buttons": {
        "cancel": "لغو",
        "submit": "ثبت"
      },
      "sections": {
        "payment_config": "پیکربندی پرداخت"
      },
      "messages": {
        "success": "با موفقیت ذخیره شد"
      }
    }
  },
  "knowledge": {
    "title": "پایگاه دانش",
    "description": "در اینجا می‌توانید پایگاه دانش را پیکربندی کنید، شامل عملیات افزودن، حذف و ویرایش.",
    "columns": {
      "id": "شناسه",
      "status": "وضعیت",
      "title": "عنوان",
      "category": "دسته‌بندی",
      "actions": "عملیات"
    },
    "form": {
      "add": "افزودن دانش",
      "edit": "ویرایش دانش",
      "title": "عنوان",
      "titlePlaceholder": "لطفاً عنوان دانش را وارد کنید",
      "category": "دسته‌بندی",
      "categoryPlaceholder": "لطفاً دسته‌بندی را وارد کنید، به طور خودکار طبقه‌بندی می‌شود",
      "language": "زبان",
      "languagePlaceholder": "لطفاً زبان را انتخاب کنید",
      "content": "محتوای",
      "show": "نمایش",
      "cancel": "لغو",
      "submit": "ثبت"
    },
    "languages": {
      "en-US": "English",
      "ja-JP": "日本語",
      "ko-KR": "한국어",
      "vi-VN": "Tiếng Việt",
      "zh-CN": "简体中文",
      "zh-TW": "繁體中文",
      "fa-IR": "فارسی"
    },
    "messages": {
      "deleteConfirm": "تأیید حذف",
      "deleteDescription": "این عمل به طور دائمی این رکورد پایگاه دانش را حذف می‌کند و قابل بازیابی نیست. آیا مطمئن هستید که می‌خواهید ادامه دهید؟",
      "deleteButton": "حذف",
      "operationSuccess": "عملیات موفق بود"
    },
    "toolbar": {
      "searchPlaceholder": "جستجوی دانش...",
      "reset": "بازنشانی",
      "sortModeHint": "آیتم‌های دانش را بکشید تا مرتب شوند، پس از اتمام روی ذخیره کلیک کنید",
      "editSort": "ویرایش ترتیب",
      "saveSort": "ذخیره ترتیب"
    }
  },
  "search": {
    "placeholder": "جستجوی منوها و توابع...",
    "title": "ناوبری منو",
    "noResults": "نتیجه‌ای یافت نشد",
    "shortcut": {
      "label": "جستجو",
      "key": "⌘K"
    }
  },
  "nav": {
    "dashboard": "داشبورد",
    "systemManagement": "مدیریت سیستم",
    "systemConfig": "پیکربندی سیستم",
    "themeConfig": "پیکربندی تم",
    "noticeManagement": "مدیریت اعلان‌ها",
    "pluginManagement": "مدیریت افزونه‌ها",
    "paymentConfig": "پیکربندی پرداخت",
    "knowledgeManagement": "مدیریت دانش",
    "nodeManagement": "مدیریت نود",
    "permissionGroupManagement": "گروه دسترسی",
    "routeManagement": "مدیریت مسیر",
    "subscriptionManagement": "اشتراک",
    "planManagement": "مدیریت طرح",
    "orderManagement": "مدیریت سفارش",
    "couponManagement": "مدیریت کوپن",
    "giftCardManagement": "مدیریت کارت هدیه",
    "userManagement": "مدیریت کاربران",
    "trafficResetLogs": "لاگ‌های بازنشانی ترافیک",
    "ticketManagement": "مدیریت تیکت"
  },
  "plugin": {
    "title": "مدیریت افزونه‌ها",
    "description": "مدیریت و پیکربندی افزونه‌های سیستم",
    "search": {
      "placeholder": "جستجوی نام یا توضیحات افزونه..."
    },
    "type": {
      "placeholder": "انتخاب نوع افزونه",
      "all": "همه انواع"
    },
    "tabs": {
      "all": "همه افزونه‌ها",
      "installed": "نصب شده",
      "available": "در دسترس"
    },
    "status": {
      "enabled": "فعال",
      "disabled": "غیرفعال",
      "not_installed": "نصب نشده",
      "protected": "محافظت شده",
      "filter_placeholder": "وضعیت نصب",
      "all": "همه وضعیت‌ها",
      "installed": "نصب شده",
      "available": "در دسترس"
    },
    "button": {
      "install": "نصب",
      "upgrade": "ارتقا",
      "config": "پیکربندی",
      "enable": "فعال کردن",
      "disable": "غیرفعال کردن",
      "uninstall": "حذف نصب",
      "readme": "مشاهده مستندات"
    },
    "upload": {
      "button": "آپلود افزونه",
      "title": "آپلود افزونه",
      "description": "آپلود بسته افزونه (.zip)",
      "dragText": "بسته افزونه را اینجا بکشید و رها کنید، یا",
      "clickText": "مرور",
      "supportText": "فقط فایل‌های .zip پشتیبانی می‌شود",
      "uploading": "در حال آپلود...",
      "error": {
        "format": "فقط فایل‌های .zip پشتیبانی می‌شود"
      }
    },
    "delete": {
      "title": "حذف افزونه",
      "description": "آیا مطمئن هستید که می‌خواهید این افزونه را حذف کنید؟ این عمل قابل بازگشت نیست.",
      "button": "حذف"
    },
    "uninstall": {
      "title": "حذف نصب افزونه",
      "description": "آیا مطمئن هستید که می‌خواهید این افزونه را حذف نصب کنید؟ داده‌های افزونه پس از حذف نصب پاک می‌شود.",
      "button": "حذف نصب"
    },
    "upgrade": {
      "title": "ارتقای افزونه",
      "description": "آیا مطمئن هستید که می‌خواهید این افزونه را ارتقا دهید؟ افزونه در طول فرآیند ارتقا به طور موقت در دسترس نخواهد بود.",
      "button": "ارتقا"
    },
    "config": {
      "title": "پیکربندی",
      "description": "تغییر پیکربندی افزونه",
      "save": "ذخیره",
      "cancel": "لغو"
    },
    "readme": {
      "title": "مستندات افزونه"
    },
    "author": "نویسنده",
    "messages": {
      "installSuccess": "Plugin installed successfully",
      "installError": "Failed to install plugin",
      "upgradeSuccess": "Plugin upgraded successfully",
      "upgradeError": "Failed to upgrade plugin",
      "uninstallSuccess": "Plugin uninstalled successfully",
      "uninstallError": "Failed to uninstall plugin",
      "enableSuccess": "Plugin enabled successfully",
      "enableError": "Failed to enable plugin",
      "disableSuccess": "افزونه با موفقیت غیرفعال شد",
      "disableError": "غیرفعال کردن افزونه ناموفق بود",
      "configLoadError": "بارگذاری پیکربندی افزونه ناموفق بود",
      "configSaveSuccess": "پیکربندی با موفقیت ذخیره شد",
      "configSaveError": "ذخیره پیکربندی ناموفق بود",
      "uploadSuccess": "افزونه با موفقیت آپلود شد",
      "uploadError": "آپلود افزونه ناموفق بود",
      "deleteSuccess": "افزونه با موفقیت حذف شد",
      "deleteError": "حذف افزونه ناموفق بود"
    }
  },
  "settings": {
    "title": "تنظیمات سیستم",
    "description": "مدیریت پیکربندی‌های اصلی سیستم، شامل سایت، امنیت، اشتراک، کمیسیون دعوت، نودها، ایمیل و اعلان‌ها",
    "server": {
      "title": "پیکربندی سرور",
      "description": "پیکربندی تنظیمات ارتباط و همگام‌سازی نودها، شامل کلیدهای ارتباطی، فواصل نظرسنجی، تعادل بار و سایر گزینه‌های پیشرفته.",
      "server_token": {
        "title": "Communication Token",
        "placeholder": "Enter communication token",
        "description": "Used for authentication between servers",
        "generate_tooltip": "Click to generate random token"
      },
      "server_pull_interval": {
        "title": "Node Pull Action Polling Interval",
        "description": "The frequency at which nodes retrieve data from the panel.",
        "placeholder": "Enter pull interval"
      },
      "server_push_interval": {
        "title": "Node Push Action Polling Interval",
        "description": "The frequency at which nodes push data to the panel.",
        "placeholder": "Enter push interval"
      },
      "device_limit_mode": {
        "title": "Device Limit Mode",
        "description": "In relaxed mode, using multiple nodes from the same IP address counts as one device.",
        "strict": "Strict Mode",
        "relaxed": "Relaxed Mode",
        "placeholder": "Select device limit mode"
      }
    },
    "invite": {
      "title": "Invitation & Commission Settings",
      "description": "Configure invitation registration and commission related settings.",
      "invite_force": {
        "title": "Enable Forced Invitation",
        "description": "When enabled, only invited users can register."
      },
      "invite_commission": {
        "title": "Invitation Commission Percentage",
        "description": "Default global commission distribution ratio, you can configure individual ratios in user management.",
        "placeholder": "Enter commission percentage"
      },
      "invite_gen_limit": {
        "title": "Invitation Code Generation Limit",
        "description": "Maximum number of invitation codes a user can create",
        "placeholder": "Enter generation limit"
      },
      "invite_never_expire": {
        "title": "Never Expire Invitation Code",
        "description": "When enabled, invitation codes will not expire after use, otherwise they will expire after being used."
      },
      "commission_first_time": {
        "title": "First-time Commission Only",
        "description": "When enabled, commission will only be generated on the first payment of the invitee, can be configured individually in user management."
      },
      "commission_auto_check": {
        "title": "Automatic Commission Confirmation",
        "description": "When enabled, commission will be automatically confirmed 3 days after order completion."
      },
      "commission_withdraw_limit": {
        "title": "Withdrawal Threshold (Yuan)",
        "description": "Withdrawal requests below this threshold will not be submitted.",
        "placeholder": "Enter withdrawal threshold"
      },
      "commission_withdraw_method": {
        "title": "Withdrawal Methods",
        "description": "Supported withdrawal methods, separate multiple methods with commas.",
        "placeholder": "Enter withdrawal methods, separate with commas"
      },
      "withdraw_close": {
        "title": "Disable Withdrawals",
        "description": "When enabled, users will be prohibited from requesting withdrawals, and invitation commissions will go directly to user balance."
      },
      "commission_distribution": {
        "title": "Three-level Distribution",
        "description": "When enabled, commission will be split according to the three set ratios, total should not exceed 100%.",
        "l1": "Level 1 Inviter Ratio",
        "l2": "Level 2 Inviter Ratio",
        "l3": "Level 3 Inviter Ratio",
        "placeholder": "Enter ratio e.g. 50"
      },
      "saving": "Saving..."
    },
    "site": {
      "title": "تنظیمات سایت",
      "description": "پیکربندی اطلاعات پایه سایت، شامل نام سایت، توضیحات، واحد ارز و سایر تنظیمات اصلی.",
      "form": {
        "siteName": {
          "label": "نام سایت",
          "placeholder": "لطفاً نام سایت را وارد کنید",
          "description": "در جایی که نام سایت باید نمایش داده شود استفاده می‌شود."
        },
        "siteDescription": {
          "label": "توضیحات سایت",
          "placeholder": "لطفاً توضیحات سایت را وارد کنید",
          "description": "در جایی که توضیحات سایت باید نمایش داده شود استفاده می‌شود."
        },
        "siteUrl": {
          "label": "آدرس سایت",
          "placeholder": "لطفاً آدرس سایت را وارد کنید، بدون / در انتها",
          "description": "آدرس فعلی وب‌سایت، در ایمیل‌ها و سایر مکان‌هایی که URL نیاز است استفاده می‌شود."
        },
        "forceHttps": {
          "label": "اجبار HTTPS",
          "description": "هنگامی که سایت از HTTPS استفاده نمی‌کند اما CDN یا پروکسی معکوس HTTPS را اجباری کرده است، باید فعال شود."
        },
        "logo": {
          "label": "لوگو",
          "placeholder": "لطفاً آدرس لوگو را وارد کنید، بدون / در انتها",
          "description": "در جایی که لوگو باید نمایش داده شود استفاده می‌شود."
        },
        "subscribeUrl": {
          "label": "آدرس اشتراک",
          "placeholder": "برای اشتراک استفاده می‌شود، چندین URL با ',' جدا می‌شوند. خالی بگذارید تا از آدرس سایت استفاده شود.",
          "description": "برای اشتراک استفاده می‌شود، خالی بگذارید تا از آدرس سایت استفاده شود."
        },
        "tosUrl": {
          "label": "آدرس شرایط استفاده (TOS)",
          "placeholder": "لطفاً آدرس TOS را وارد کنید، بدون / در انتها",
          "description": "برای لینک به شرایط استفاده (TOS) استفاده می‌شود"
        },
        "stopRegister": {
          "label": "توقف ثبت‌نام کاربر جدید",
          "description": "هنگامی که فعال شود، هیچ کس قادر به ثبت‌نام نخواهد بود."
        },
        "tryOut": {
          "label": "آزمایش ثبت‌نام",
          "placeholder": "غیرفعال",
          "description": "اشتراک را برای آزمایش انتخاب کنید، اگر گزینه‌ای وجود ندارد لطفاً ابتدا در مدیریت اشتراک اضافه کنید.",
          "duration": {
            "label": "مدت زمان آزمایش",
            "placeholder": "0",
            "description": "مدت زمان آزمایش به ساعت."
          }
        },
        "currency": {
          "label": "واحد ارز",
          "placeholder": "CNY",
          "description": "فقط برای نمایش، تغییر این مورد بر تمام واحدهای ارز در سیستم تأثیر می‌گذارد."
        },
        "currencySymbol": {
          "label": "نماد ارز",
          "placeholder": "¥",
          "description": "فقط برای نمایش، تغییر این مورد بر تمام نمادهای ارز در سیستم تأثیر می‌گذارد."
        }
      }
    },
    "safe": {
      "title": "تنظیمات امنیتی",
      "description": "پیکربندی گزینه‌های امنیتی سیستم، شامل تأیید ورود، سیاست‌های رمز عبور و تنظیمات دسترسی API.",
      "form": {
        "emailVerify": {
          "label": "Email Verification",
          "description": "When enabled, users will be required to verify their email."
        },
        "gmailLimit": {
          "label": "Disable Gmail Aliases",
          "description": "When enabled, Gmail aliases will not be allowed to register."
        },
        "safeMode": {
          "label": "Safe Mode",
          "description": "When enabled, accessing the site through domains other than the site URL will be blocked with 403."
        },
        "securePath": {
          "label": "Admin Path",
          "placeholder": "admin",
          "description": "Admin management path, changing this will modify the original admin path"
        },
        "emailWhitelist": {
          "label": "Email Suffix Whitelist",
          "description": "When enabled, only email suffixes in the list will be allowed to register.",
          "suffixes": {
            "label": "Email Suffixes",
            "placeholder": "Enter email suffixes, one per line",
            "description": "Enter the allowed email suffixes, one per line"
          }
        },
        "captcha": {
          "enable": {
            "label": "Enable Captcha",
            "description": "When enabled, users will need to pass captcha verification when registering."
          },
          "type": {
            "label": "Captcha Type",
            "description": "Select the captcha service type to use",
            "options": {
              "recaptcha": "Google reCAPTCHA v2",
              "recaptcha-v3": "Google reCAPTCHA v3",
              "turnstile": "Cloudflare Turnstile"
            }
          },
          "recaptcha": {
            "key": {
              "label": "reCAPTCHA Key",
              "placeholder": "Enter reCAPTCHA key",
              "description": "Enter your reCAPTCHA key"
            },
            "siteKey": {
              "label": "reCAPTCHA Site Key",
              "placeholder": "Enter reCAPTCHA site key",
              "description": "Enter your reCAPTCHA site key"
            }
          },
          "recaptcha_v3": {
            "secretKey": {
              "label": "reCAPTCHA v3 Key",
              "placeholder": "Enter reCAPTCHA v3 key",
              "description": "Enter your reCAPTCHA v3 server key"
            },
            "siteKey": {
              "label": "reCAPTCHA v3 Site Key",
              "placeholder": "Enter reCAPTCHA v3 site key",
              "description": "Enter your reCAPTCHA v3 site key"
            },
            "scoreThreshold": {
              "label": "Score Threshold",
              "placeholder": "0.5",
              "description": "Set verification score threshold (0-1), higher scores indicate more likely human behavior"
            }
          },
          "turnstile": {
            "secretKey": {
              "label": "Turnstile Key",
              "placeholder": "Enter Turnstile key",
              "description": "Enter your Cloudflare Turnstile key"
            },
            "siteKey": {
              "label": "Turnstile Site Key",
              "placeholder": "Enter Turnstile site key",
              "description": "Enter your Cloudflare Turnstile site key"
            }
          }
        },
        "registerLimit": {
          "enable": {
            "label": "IP Registration Limit",
            "description": "When enabled, the number of registrations from the same IP will be limited."
          },
          "count": {
            "label": "Registration Count",
            "placeholder": "Enter maximum registration count",
            "description": "Maximum number of registrations allowed from the same IP"
          },
          "expire": {
            "label": "Limit Duration",
            "placeholder": "Enter limit duration in minutes",
            "description": "Duration of the registration limit in minutes"
          }
        },
        "passwordLimit": {
          "enable": {
            "label": "Password Attempt Limit",
            "description": "When enabled, the number of password attempts will be limited."
          },
          "count": {
            "label": "Attempt Count",
            "placeholder": "Enter maximum attempt count",
            "description": "Maximum number of password attempts allowed"
          },
          "expire": {
            "label": "Lock Duration",
            "placeholder": "Enter lock duration in minutes",
            "description": "Duration of the account lock in minutes"
          }
        }
      }
    },
    "subscribe": {
      "title": "تنظیمات اشتراک",
      "description": "مدیریت پیکربندی‌های مربوط به اشتراک، شامل فرمت لینک اشتراک، فرکانس به‌روزرسانی، آمار ترافیک و سایر تنظیمات.",
      "plan_change_enable": {
        "title": "Allow Subscription Changes",
        "description": "When enabled, users will be able to change their subscription plans."
      },
      "reset_traffic_method": {
        "title": "Monthly Traffic Reset Method",
        "description": "Global traffic reset method, defaults to the 1st of each month. Can be set individually for subscriptions in subscription management.",
        "options": {
          "monthly_first": "1st of Each Month",
          "monthly_reset": "Monthly Reset",
          "no_reset": "No Reset",
          "yearly_first": "January 1st",
          "yearly_reset": "Yearly Reset"
        }
      },
      "surplus_enable": {
        "title": "Enable Deduction Plan",
        "description": "When enabled, the system will deduct from the original subscription when users change subscriptions, refer to documentation for details."
      },
      "new_order_event": {
        "title": "Trigger Event on New Subscription",
        "description": "This task will be triggered when a new subscription is completed.",
        "options": {
          "no_action": "No Action",
          "reset_traffic": "Reset User Traffic"
        }
      },
      "renew_order_event": {
        "title": "Trigger Event on Subscription Renewal",
        "description": "This task will be triggered when a subscription renewal is completed.",
        "options": {
          "no_action": "No Action",
          "reset_traffic": "Reset User Traffic"
        }
      },
      "change_order_event": {
        "title": "Trigger Event on Subscription Change",
        "description": "This task will be triggered when a subscription change is completed.",
        "options": {
          "no_action": "No Action",
          "reset_traffic": "Reset User Traffic"
        }
      },
      "subscribe_path": {
        "title": "Subscription Path",
        "description": "Subscription path, modifying will change the original subscribe path",
        "current_format": "Current subscription path format: {path}/xxxxxxxxxx",
        "restart_tip": "You may need to restart the service for the new subscribe path to take effect."
      },
      "show_info_to_server": {
        "title": "Show Subscription Info in Nodes",
        "description": "When enabled, subscription information will be output when users subscribe to nodes."
      },
      "show_protocol_to_server": {
        "title": "Show Protocol in Node Names",
        "description": "When enabled, subscription lines will include protocol names (e.g., [Hy2]Hong Kong)"
      },
      "saving": "Saving...",
      "plan": {
        "title": "Subscription Plans",
        "add": "Add Plan",
        "search": "Search plans...",
        "sort": {
          "edit": "Edit Sort",
          "save": "Save Sort"
        },
        "columns": {
          "id": "ID",
          "show": "Show",
          "sell": "Sell",
          "renew": "Renew",
          "renew_tooltip": "Whether existing users can renew when the subscription stops selling",
          "name": "Name",
          "stats": "Statistics",
          "group": "Permission Group",
          "price": "Price",
          "actions": "Actions",
          "edit": "Edit",
          "delete": "Delete",
          "delete_confirm": {
            "title": "Confirm Delete",
            "description": "This action will permanently delete this subscription and cannot be undone. Are you sure you want to continue?",
            "success": "Successfully deleted"
          },
          "price_period": {
            "monthly": "Monthly",
            "quarterly": "Quarterly",
            "half_yearly": "Half Yearly",
            "yearly": "Yearly",
            "two_yearly": "Two Years",
            "three_yearly": "Three Years",
            "onetime": "One Time",
            "reset_traffic": "Reset Traffic",
            "unit": {
              "month": "/month",
              "quarter": "/quarter",
              "half_year": "/half year",
              "year": "/year",
              "two_year": "/2 years",
              "three_year": "/3 years",
              "times": "/time"
            }
          }
        },
        "form": {
          "add_title": "Add Plan",
          "edit_title": "Edit Plan",
          "name": {
            "label": "Plan Name",
            "placeholder": "Enter plan name"
          },
          "group": {
            "label": "Permission Group",
            "placeholder": "Select permission group",
            "add": "Add Group"
          },
          "transfer": {
            "label": "Traffic",
            "placeholder": "Enter traffic size",
            "unit": "GB"
          },
          "speed": {
            "label": "Speed Limit",
            "placeholder": "Enter speed limit",
            "unit": "Mbps"
          },
          "price": {
            "title": "Price Settings",
            "base_price": "Base monthly price",
            "clear": {
              "button": "Clear Prices",
              "tooltip": "Clear all period price settings"
            }
          },
          "device": {
            "label": "Device Limit",
            "placeholder": "Leave empty for no limit",
            "unit": "devices"
          },
          "capacity": {
            "label": "Capacity Limit",
            "placeholder": "Leave empty for no limit",
            "unit": "users"
          },
          "reset_method": {
            "label": "Traffic Reset Method",
            "placeholder": "Select traffic reset method",
            "description": "Set how subscription traffic is reset, different methods affect how user traffic is calculated",
            "options": {
              "follow_system": "Follow System Settings",
              "monthly_first": "1st of Each Month",
              "monthly_reset": "Monthly Reset",
              "no_reset": "No Reset",
              "yearly_first": "January 1st",
              "yearly_reset": "Yearly Reset"
            }
          },
          "content": {
            "label": "Plan Description",
            "placeholder": "Write plan description here...",
            "description": "Supports Markdown format, you can use headings, lists, bold, italic and other styles to beautify the content",
            "preview": "Preview",
            "preview_button": {
              "show": "Show Preview",
              "hide": "Hide Preview"
            },
            "template": {
              "button": "Use Template",
              "tooltip": "Click to use preset plan description template",
              "content": "## Plan Features\n• High-speed and stable global network access\n• Support multiple devices online simultaneously\n• Unlimited traffic reset\n\n## Usage Instructions\n1. Supported devices: iOS, Android, Windows, macOS\n2. 24/7 technical support\n3. Automatic periodic traffic reset\n\n## Notes\n- No abuse allowed\n- Comply with local laws and regulations\n- Support plan changes anytime"
            }
          },
          "force_update": {
            "label": "Force Update to Users"
          },
          "submit": {
            "submitting": "Submitting...",
            "submit": "Submit",
            "cancel": "Cancel",
            "success": {
              "add": "Plan added successfully",
              "update": "Plan updated successfully"
            }
          }
        },
        "page": {
          "description": "Here you can configure subscription plans, including adding, deleting, and editing operations."
        }
      }
    },
    "email": {
      "title": "Email Settings",
      "description": "Configure system email service for sending verification codes, password resets, and notifications, supporting various SMTP providers.",
      "email_host": {
        "title": "SMTP Host",
        "description": "SMTP server address, e.g., smtp.gmail.com"
      },
      "email_port": {
        "title": "SMTP Port",
        "description": "SMTP server port, common ports: 25, 465, 587"
      },
      "email_username": {
        "title": "SMTP Username",
        "description": "SMTP authentication username"
      },
      "email_password": {
        "title": "SMTP Password",
        "description": "SMTP authentication password or application-specific password"
      },
      "email_encryption": {
        "title": "Encryption Method",
        "description": "Email encryption method",
        "none": "None",
        "ssl": "SSL/TLS",
        "tls": "STARTTLS"
      },
      "email_from": {
        "title": "From Address",
        "description": "Sender's email address"
      },
      "email_from_name": {
        "title": "From Name",
        "description": "Sender's display name"
      },
      "email_template": {
        "title": "Email Template",
        "description": "You can check the documentation for how to customize email templates",
        "placeholder": "Select email template"
      },
      "remind_mail": {
        "title": "Email Reminders",
        "description": "When enabled, users will receive email notifications when their subscription is about to expire or when traffic is running low."
      },
      "test": {
        "title": "Send Test Email",
        "sending": "Sending...",
        "description": "Send a test email to verify the configuration",
        "success": "Test email sent successfully",
        "error": "Failed to send test email"
      }
    },
    "telegram": {
      "title": "Telegram Settings",
      "description": "Configure Telegram bot functionality for user notifications, account binding, and command interactions.",
      "bot_token": {
        "title": "Bot Token",
        "description": "Please enter the token provided by Botfather.",
        "placeholder": "0000000000:xxxxxxxxx_xxxxxxxxxxxxxxx"
      },
      "webhook": {
        "title": "Set Webhook",
        "description": "Set up webhook for the bot. Without setting it, you won't receive Telegram notifications.",
        "button": "One-Click Setup",
        "setting": "Setting Webhook...",
        "success": "Webhook set successfully"
      },
      "bot_enable": {
        "title": "Enable Telegram Binding Guide",
        "description": "When enabled, a Telegram binding guide will be displayed on the user side to help users bind their Telegram accounts for notifications."
      },
      "discuss_link": {
        "title": "Group Link",
        "description": "Once filled in, it will be displayed on the user side or used where needed.",
        "placeholder": "https://t.me/xxxxxx"
      }
    },
    "app": {
      "title": "APP Settings",
      "description": "Manage mobile application configurations, including API interfaces, version control, and push notifications.",
      "common": {
        "placeholder": "Please input"
      },
      "windows": {
        "version": {
          "title": "Windows Version",
          "description": "Current version number of Windows client"
        },
        "download": {
          "title": "Windows Download URL",
          "description": "Download link for Windows client"
        }
      },
      "macos": {
        "version": {
          "title": "macOS Version",
          "description": "Current version number of macOS client"
        },
        "download": {
          "title": "macOS Download URL",
          "description": "Download link for macOS client"
        }
      },
      "android": {
        "version": {
          "title": "Android Version",
          "description": "Current version number of Android client"
        },
        "download": {
          "title": "Android Download URL",
          "description": "Download link for Android client"
        }
      }
    },
    "common": {
      "saving": "Saving...",
      "save_success": "Saved automatically",
      "placeholder": "Please input",
      "autoSaved": "Saved automatically"
    },
    "subscribe_template": {
      "title": "Subscribe Templates",
      "description": "Configure subscription templates for different clients",
      "singbox": {
        "title": "Sing-box Template",
        "description": "Configure subscription template format for Sing-box"
      },
      "clash": {
        "title": "Clash Template",
        "description": "Configure subscription template format for Clash"
      },
      "clashmeta": {
        "title": "Clash Meta Template",
        "description": "Configure subscription template format for Clash Meta"
      },
      "stash": {
        "title": "Stash Template",
        "description": "Configure subscription template format for Stash"
      },
      "surge": {
        "title": "Surge Template",
        "description": "Configure subscription template format for Surge"
      },
      "surfboard": {
        "title": "Surfboard Template",
        "description": "Configure subscription template format for Surfboard"
      }
    }
  },
  "group": {
    "title": "گروه‌های دسترسی",
    "description": "مدیریت تمام گروه‌های دسترسی، شامل عملیات افزودن، حذف و ویرایش.",
    "columns": {
      "id": "شناسه گروه",
      "name": "نام گروه",
      "usersCount": "تعداد کاربران",
      "serverCount": "تعداد نودها",
      "actions": "عملیات"
    },
    "form": {
      "add": "افزودن گروه",
      "edit": "ویرایش گروه",
      "create": "ایجاد گروه",
      "update": "به‌روزرسانی",
      "name": "نام گروه",
      "namePlaceholder": "لطفاً نام گروه را وارد کنید",
      "nameDescription": "نام گروه برای شناسایی گروه‌های مختلف کاربران استفاده می‌شود، توصیه می‌شود از نام‌های معنی‌دار استفاده کنید.",
      "cancel": "لغو",
      "editDescription": "تغییر اطلاعات گروه، تغییرات بلافاصله اعمال می‌شود.",
      "createDescription": "ایجاد یک گروه دسترسی جدید برای اختصاص دسترسی‌های مختلف به کاربران مختلف."
    },
    "toolbar": {
      "searchPlaceholder": "جستجوی گروه‌ها...",
      "reset": "بازنشانی"
    },
    "messages": {
      "deleteConfirm": "تأیید حذف",
      "deleteDescription": "این عمل به طور دائمی این گروه دسترسی را حذف می‌کند و قابل بازیابی نیست. آیا مطمئن هستید که می‌خواهید ادامه دهید؟",
      "deleteButton": "حذف",
      "createSuccess": "با موفقیت ایجاد شد",
      "updateSuccess": "Updated Successfully",
      "nameValidation": {
        "min": "Group name must be at least 2 characters",
        "max": "Group name cannot exceed 50 characters",
        "pattern": "Group name can only contain letters, numbers, Chinese characters, underscores and hyphens"
      }
    }
  },
  "traffic": {
    "trafficRecord": {
      "title": "Traffic Usage Records",
      "time": "Time",
      "upload": "Upload",
      "download": "Download",
      "rate": "Rate",
      "total": "Total",
      "noRecords": "No records found",
      "perPage": "Show per page",
      "records": "records",
      "page": "Page {{current}} / {{total}}",
      "multiplier": "{{value}}x"
    }
  },
  "common": {
    "loading": "در حال بارگذاری...",
    "error": "خطا",
    "success": "موفق",
    "save": "ذخیره",
    "cancel": "لغو",
    "confirm": "تأیید",
    "close": "بستن",
    "delete": {
      "success": "با موفقیت حذف شد",
      "failed": "حذف ناموفق بود"
    },
    "edit": "ویرایش",
    "view": "مشاهده",
    "toggleNavigation": "تغییر ناوبری",
    "toggleSidebar": "تغییر نوار کناری",
    "search": "جستجو...",
    "theme": {
      "light": "روشن",
      "dark": "تیره",
      "system": "سیستم"
    },
    "user": "کاربر",
    "defaultEmail": "user@example.com",
    "settings": "تنظیمات",
    "logout": "خروج",
    "copy": {
      "success": "با موفقیت کپی شد",
      "failed": "کپی ناموفق بود",
      "error": "کپی ناموفق بود",
      "errorLog": "خطا در کپی به کلیپ‌بورد"
    },
    "submit": "ثبت",
    "saving": "در حال ذخیره...",
    "table": {
      "noData": "داده‌ای در دسترس نیست",
      "pagination": {
        "selected": "{{selected}} از {{total}} مورد انتخاب شده",
        "itemsPerPage": "در هر صفحه",
        "page": "صفحه",
        "pageOf": "از {{total}} صفحه",
        "firstPage": "رفتن به صفحه اول",
        "previousPage": "صفحه قبلی",
        "nextPage": "صفحه بعدی",
        "lastPage": "رفتن به صفحه آخر"
      },
      "viewOptions": {
        "button": "ستون‌ها",
        "label": "تغییر ستون‌ها"
      }
    },
    "update": {
      "title": "به‌روزرسانی سیستم",
      "newVersion": "نسخه جدید در دسترس است",
      "currentVersion": "نسخه فعلی",
      "latestVersion": "آخرین نسخه",
      "updateLater": "بعداً به‌روزرسانی",
      "updateNow": "اکنون به‌روزرسانی",
      "updating": "در حال به‌روزرسانی...",
      "updateSuccess": "به‌روزرسانی موفق، سیستم به زودی راه‌اندازی مجدد می‌شود",
      "updateFailed": "به‌روزرسانی ناموفق بود، لطفاً بعداً دوباره تلاش کنید"
    },
    "time": {
      "day": "روز",
      "hour": " ساعت"
    },
    "reset": "بازنشانی",
    "export": "خروجی",
    "currency": {
      "yuan": "یوان"
    },
    "languages": {
      "en-US": "English",
      "zh-CN": "中文",
      "ko-KR": "한국어",
      "fa-IR": "فارسی"
    }
  },
  "dashboard": {
    "title": "داشبورد",
    "stats": {
      "newUsers": "کاربران جدید",
      "totalScore": "امتیاز کل",
      "monthlyUpload": "آپلود ماهانه",
      "vsLastMonth": "در مقایسه با ماه گذشته",
      "vsYesterday": "در مقایسه با دیروز",
      "todayIncome": "درآمد امروز",
      "monthlyIncome": "درآمد ماهانه",
      "totalIncome": "درآمد کل",
      "totalUsers": "کل کاربران",
      "activeUsers": "کاربران فعال: {{count}}",
      "totalOrders": "کل سفارشات",
      "revenue": "درآمد",
      "todayRegistered": "ثبت‌نام امروز",
      "monthlyRegistered": "ثبت‌نام ماهانه",
      "onlineUsers": "کاربران آنلاین",
      "pendingTickets": "تیکت‌های در انتظار",
      "hasPendingTickets": "تیکت‌هایی وجود دارد که نیاز به توجه دارند",
      "noPendingTickets": "تیکت در انتظاری وجود ندارد",
      "pendingCommission": "کمیسیون در انتظار",
      "hasPendingCommission": "کمیسیون‌هایی وجود دارد که نیاز به تأیید دارند",
      "noPendingCommission": "کمیسیون در انتظاری وجود ندارد",
      "monthlyNewUsers": "کاربران جدید ماهانه",
      "monthlyDownload": "دانلود ماهانه",
      "todayTraffic": "امروز: {{value}}",
      "activeUserTrend": "روند کاربران فعال",
      "realtimeUsers": "کاربران لحظه‌ای",
      "todayPeak": "اوج امروز",
      "vsLastWeek": "در مقایسه با هفته گذشته"
    },
    "trafficRank": {
      "nodeTrafficRank": "رتبه ترافیک نود",
      "userTrafficRank": "رتبه ترافیک کاربر",
      "today": "امروز",
      "last7days": "۷ روز گذشته",
      "last30days": "۳۰ روز گذشته",
      "customRange": "محدوده سفارشی",
      "selectTimeRange": "انتخاب محدوده زمانی",
      "selectDateRange": "انتخاب محدوده تاریخ",
      "currentTraffic": "ترافیک فعلی",
      "previousTraffic": "ترافیک قبلی",
      "changeRate": "نرخ تغییر",
      "recordTime": "زمان ثبت"
    },
    "overview": {
      "title": "نمای کلی درآمد",
      "thisMonth": "این ماه",
      "lastMonth": "ماه گذشته",
      "to": "تا",
      "selectTimeRange": "Select Range",
      "selectDate": "Select Date",
      "last7Days": "Last 7 Days",
      "last30Days": "Last 30 Days",
      "last90Days": "Last 90 Days",
      "last180Days": "Last 180 Days",
      "lastYear": "Last Year",
      "customRange": "Custom Range",
      "amount": "Amount",
      "count": "Count",
      "transactions": "{{count}} transactions",
      "orderAmount": "Order Amount",
      "commissionAmount": "Commission Amount",
      "orderCount": "Order Count",
      "commissionCount": "Commission Count",
      "totalIncome": "Total Income",
      "totalCommission": "Total Commission",
      "totalTransactions": "Total: {{count}} transactions",
      "avgOrderAmount": "Average Order Amount:",
      "commissionRate": "Commission Rate:"
    },
    "traffic": {
      "title": "Traffic Ranking",
      "rank": "Rank",
      "domain": "Domain",
      "todayTraffic": "Today's Traffic",
      "monthlyTraffic": "Monthly Traffic"
    },
    "queue": {
      "title": "Queue Status",
      "jobDetails": "Job Details",
      "status": {
        "description": "Current queue running status",
        "running": "Running Status",
        "normal": "Normal",
        "abnormal": "Abnormal",
        "waitTime": "Current wait time: {{seconds}} seconds",
        "pending": "Pending",
        "processing": "Processing",
        "completed": "Completed",
        "failed": "Failed",
        "cancelled": "Cancelled"
      },
      "details": {
        "description": "Queue processing details",
        "recentJobs": "Recent Jobs",
        "statisticsPeriod": "Statistics Period: {{hours}} hours",
        "jobsPerMinute": "Jobs Per Minute",
        "maxThroughput": "Max Throughput: {{value}}",
        "failedJobs7Days": "Failed Jobs (7 days)",
        "retentionPeriod": "Retention Period: {{hours}} hours",
        "longestRunningQueue": "Longest Running Queue",
        "activeProcesses": "Active Processes",
        "id": "Job ID",
        "type": "Job Type",
        "status": "Status",
        "progress": "Progress",
        "createdAt": "Created At",
        "updatedAt": "Updated At",
        "error": "Error Message",
        "data": "Job Data",
        "result": "Result",
        "duration": "Duration",
        "attempts": "Attempts",
        "nextRetry": "Next Retry",
        "failedJobsDetailTitle": "Failed Jobs Details",
        "viewFailedJobs": "View Failed Jobs",
        "jobDetailTitle": "Job Details",
        "time": "Time",
        "queue": "Queue",
        "name": "Job Name",
        "exception": "Exception",
        "noFailedJobs": "No failed jobs",
        "connection": "Connection",
        "payload": "Job Payload",
        "viewDetail": "View Details",
        "action": "Action"
      },
      "actions": {
        "retry": "Retry",
        "cancel": "Cancel",
        "delete": "Delete",
        "viewDetails": "View Details"
      },
      "empty": "No jobs in queue",
      "loading": "Loading queue status...",
      "error": "Failed to load queue status"
    },
    "systemLog": {
      "title": "System Logs",
      "description": "View system operation logs",
      "viewAll": "View All",
      "level": "Level",
      "time": "Time",
      "message": "Message",
      "logTitle": "Title",
      "method": "Method",
      "action": "Action",
      "context": "Context",
      "search": "Search logs...",
      "noLogs": "No logs available",
      "noInfoLogs": "No info logs available",
      "noWarningLogs": "No warning logs available",
      "noErrorLogs": "No error logs available",
      "noSearchResults": "No matching logs found",
      "detailTitle": "Log Details",
      "viewDetail": "View Details",
      "host": "Host",
      "ip": "IP Address",
      "uri": "URI",
      "requestData": "Request Data",
      "exception": "Exception",
      "totalLogs": "Total logs",
      "tabs": {
        "all": "All",
        "info": "Info",
        "warning": "Warning",
        "error": "Error"
      },
      "filter": {
        "searchAndLevel": "Filter results: {{count}} logs containing \\\"{{keyword}}\\\" with level \\\"{{level}}\\\"",
        "searchOnly": "Search results: {{count}} logs containing \\\"{{keyword}}\\\"",
        "levelOnly": "Filter results: {{count}} logs with level \\\"{{level}}\\\"",
        "reset": "Reset Filters"
      },
      "clearLogs": "Clear Logs",
      "clearDays": "Clear Days",
      "clearDaysDesc": "Clear logs older than how many days (0-365 days, 0 means today)",
      "clearLevel": "Log Level",
      "clearLimit": "Batch Limit",
      "clearLimitDesc": "Batch clear quantity limit (100-10000 records)",
      "clearPreview": "Clear Preview",
      "getStats": "Get Statistics",
      "cutoffDate": "Cutoff Date",
      "willClear": "Will Clear",
      "logsUnit": " logs",
      "clearWarning": "This operation cannot be undone, please proceed with caution!",
      "clearing": "Clearing...",
      "confirmClear": "Confirm Clear",
      "clearSuccess": "Clear completed! {{count}} logs cleared",
      "clearFailed": "Clear failed",
      "getStatsFailed": "Failed to get clear statistics",
      "clearLogsFailed": "Failed to clear logs"
    },
    "common": {
      "refresh": "Refresh",
      "close": "Close",
      "pagination": "Page {{current}}/{{total}}, {{count}} items total"
    },
    "search": {
      "placeholder": "Search menus and functions...",
      "title": "Menu Navigation",
      "noResults": "No results found",
      "loading": "Searching..."
    }
  },
  "giftCard": {
    "title": "Gift Card Management",
    "description": "Manage gift card templates, redemption codes, and usage records.",
    "tabs": {
      "templates": "Template Management",
      "codes": "Redemption Code Management",
      "usages": "Usage Records",
      "statistics": "Statistics"
    },
    "template": {
      "title": "Template Management",
      "description": "Manage gift card templates, including creating, editing, and deleting templates.",
      "table": {
        "title": "Template List",
        "columns": {
          "id": "ID",
          "name": "Name",
          "type": "Type",
          "status": "Status",
          "sort": "Sort",
          "rewards": "Rewards",
          "created_at": "Created At",
          "actions": "Actions",
          "no_rewards": "No Rewards"
        }
      },
      "form": {
        "add": "Add Template",
        "edit": "Edit Template",
        "name": {
          "label": "Template Name",
          "placeholder": "Please enter template name",
          "required": "Please enter template name"
        },
        "sort": {
          "label": "Sort",
          "placeholder": "Smaller numbers appear first"
        },
        "type": {
          "label": "Type",
          "placeholder": "Please select gift card type"
        },
        "description": {
          "label": "Description",
          "placeholder": "Please enter gift card description"
        },
        "status": {
          "label": "Status",
          "description": "When disabled, this template cannot generate or redeem new gift cards."
        },
        "display": {
          "title": "Display Effect"
        },
        "theme_color": {
          "label": "Theme Color"
        },
        "icon": {
          "label": "Icon",
          "placeholder": "Please enter icon URL"
        },
        "background_image": {
          "label": "Background Image",
          "placeholder": "Please enter background image URL"
        },
        "conditions": {
          "title": "Usage Conditions",
          "new_user_max_days": {
            "label": "New User Registration Days Limit",
            "placeholder": "Example: 7 (Only for users registered within 7 days)"
          },
          "new_user_only": {
            "label": "New Users Only"
          },
          "paid_user_only": {
            "label": "Paid Users Only"
          },
          "require_invite": {
            "label": "Require Invitation Relationship"
          },
          "allowed_plans": {
            "label": "Allowed Plans",
            "placeholder": "Select plans allowed for redemption (leave empty for no restriction)"
          },
          "disallowed_plans": {
            "label": "Disallowed Plans",
            "placeholder": "Select plans forbidden for redemption (leave empty for no restriction)"
          }
        },
        "limits": {
          "title": "Usage Limits",
          "max_use_per_user": {
            "label": "Max Uses Per User",
            "placeholder": "Leave empty for no limit"
          },
          "cooldown_hours": {
            "label": "Cooldown Hours for Same Type",
            "placeholder": "Leave empty for no limit"
          },
          "invite_reward_rate": {
            "label": "Inviter Reward Rate",
            "placeholder": "Example: 0.2 (represents 20%)",
            "description": "When user has an inviter, inviter reward = balance reward × this rate"
          }
        },
        "rewards": {
          "title": "Rewards",
          "balance": {
            "label": "Reward Balance (Yuan)",
            "short_label": "Balance",
            "placeholder": "Please enter reward amount (Yuan)"
          },
          "transfer_enable": {
            "label": "Reward Traffic (GB)",
            "short_label": "Traffic",
            "placeholder": "Please enter reward traffic (GB)"
          },
          "expire_days": {
            "label": "Extend Validity (Days)",
            "short_label": "Validity",
            "placeholder": "Please enter extension days"
          },
          "transfer": {
            "label": "Reward Traffic (Bytes)",
            "placeholder": "Please enter reward traffic (bytes)"
          },
          "days": {
            "label": "Extend Validity (Days)",
            "placeholder": "Please enter extension days"
          },
          "device_limit": {
            "label": "Increase Device Count",
            "short_label": "Devices",
            "placeholder": "Please enter increased device count"
          },
          "reset_package": {
            "label": "Reset Monthly Traffic",
            "description": "When enabled, redemption will clear the user's current plan's used traffic."
          },
          "reset_count": {
            "description": "This type of card will reset the user's monthly traffic usage."
          },
          "task_card": {
            "description": "Specific rewards for task gift cards will be configured in the task system."
          },
          "plan_id": {
            "label": "Specified Plan",
            "short_label": "Plan",
            "placeholder": "Please select a plan"
          },
          "plan_validity_days": {
            "label": "Plan Validity (Days)",
            "short_label": "Plan Validity",
            "placeholder": "Leave empty to use plan default validity"
          },
          "random_rewards": {
            "label": "Random Reward Pool",
            "add": "Add Random Reward Item",
            "weight": "Weight"
          }
        },
        "special_config": {
          "title": "Special Configuration",
          "start_time": {
            "label": "Event Start Time",
            "placeholder": "Please select start date"
          },
          "end_time": {
            "label": "Event End Time",
            "placeholder": "Please select end date"
          },
          "festival_bonus": {
            "label": "Festival Reward Multiplier",
            "placeholder": "Example: 1.5 (represents 1.5x)"
          }
        },
        "submit": {
          "saving": "Saving...",
          "save": "Save"
        }
      },
      "actions": {
        "edit": "Edit",
        "delete": "Delete",
        "deleteConfirm": {
          "title": "Confirm Delete",
          "description": "This action will permanently delete this template. Are you sure you want to continue?",
          "confirmText": "Delete"
        }
      }
    },
    "code": {
      "title": "Redemption Code Management",
      "form": {
        "generate": "Generate Redemption Codes",
        "template_id": {
          "label": "Select Template",
          "placeholder": "Please select a template to generate redemption codes"
        },
        "count": {
          "label": "Generation Count"
        },
        "prefix": {
          "label": "Custom Prefix (Optional)"
        },
        "expires_hours": {
          "label": "Validity (Hours)"
        },
        "max_usage": {
          "label": "Max Usage Count"
        },
        "download_csv": "Export CSV",
        "submit": {
          "generating": "Generating...",
          "generate": "Generate Now"
        }
      },
      "description": "Manage gift card redemption codes, including generation, viewing, and exporting codes.",
      "generate": {
        "title": "Generate Redemption Codes",
        "template": "Select Template",
        "count": "Generation Count",
        "prefix": "Custom Prefix",
        "expires_hours": "Validity (Hours)",
        "max_usage": "Max Usage Count",
        "submit": "Generate"
      },
      "table": {
        "title": "Redemption Code List",
        "columns": {
          "id": "ID",
          "code": "Redemption Code",
          "template_name": "Template Name",
          "status": "Status",
          "expires_at": "Expires At",
          "usage_count": "Used Count",
          "max_usage": "Available Count",
          "created_at": "Created At"
        }
      },
      "actions": {
        "enable": "Enable",
        "disable": "Disable",
        "export": "Export",
        "exportConfirm": {
          "title": "Confirm Export",
          "description": "This will export all redemption codes from the selected batch as a text file. Are you sure you want to continue?",
          "confirmText": "Export"
        }
      },
      "status": {
        "0": "Unused",
        "1": "Used",
        "2": "Disabled",
        "3": "Expired"
      }
    },
    "usage": {
      "title": "Usage Records",
      "description": "View gift card usage records and detailed information.",
      "table": {
        "columns": {
          "id": "ID",
          "code": "Redemption Code",
          "template_name": "Template Name",
          "user_email": "User Email",
          "rewards_given": "Rewards Given",
          "invite_rewards": "Invitation Rewards",
          "multiplier_applied": "Multiplier Applied",
          "ip_address": "IP Address",
          "created_at": "Usage Time",
          "actions": "Actions"
        }
      },
      "actions": {
        "view": "View Details"
      }
    },
    "statistics": {
      "title": "Statistics",
      "description": "View gift card statistics and usage analysis.",
      "total": {
        "title": "Overall Statistics",
        "templates_count": "Total Templates",
        "active_templates_count": "Active Templates",
        "codes_count": "Total Redemption Codes",
        "used_codes_count": "Used Redemption Codes",
        "usages_count": "Usage Records"
      },
      "daily": {
        "title": "Daily Usage",
        "chart": "Usage Trend Chart"
      },
      "type": {
        "title": "Type Statistics",
        "chart": "Type Distribution Chart"
      },
      "dateRange": {
        "label": "Date Range",
        "start": "Start Date",
        "end": "End Date"
      }
    },
    "types": {
      "1": "General Gift Card",
      "2": "Plan Gift Card",
      "3": "Mystery Gift Card",
      "4": "Task Gift Card"
    },
    "common": {
      "search": "Search gift cards...",
      "reset": "Reset",
      "filter": "Filter",
      "export": "Export",
      "refresh": "Refresh",
      "back": "Back",
      "close": "Close",
      "confirm": "Confirm",
      "cancel": "Cancel",
      "enabled": "Enabled",
      "disabled": "Disabled",
      "loading": "Loading...",
      "noData": "No Data",
      "success": "Operation Successful",
      "error": "Operation Failed"
    },
    "messages": {
      "formInvalid": "Please check if the form input is correct",
      "templateCreated": "Template created successfully",
      "templateUpdated": "Template updated successfully",
      "templateDeleted": "Template deleted successfully",
      "codeGenerated": "Redemption codes generated successfully",
      "generateCodeFailed": "Failed to generate redemption codes",
      "codeStatusUpdated": "Redemption code status updated successfully",
      "updateCodeStatusFailed": "Failed to update redemption code status",
      "codesExported": "Redemption codes exported successfully",
      "createTemplateFailed": "Failed to create template",
      "updateTemplateFailed": "Failed to update template",
      "deleteTemplateFailed": "Failed to delete template",
      "loadDataFailed": "Failed to load data",
      "codesGenerated": "Redemption codes generated successfully"
    }
  },
  "route": {
    "title": "Route Management",
    "description": "Manage all route groups, including adding, deleting, and editing operations.",
    "columns": {
      "id": "Group ID",
      "remarks": "Remarks",
      "action": "Action",
      "actions": "Actions",
      "matchRules": "Match {{count}} rules",
      "action_value": {
        "title": "Action Value",
        "dns": "DNS: {{value}}",
        "block": "Block Access",
        "direct": "Direct Connection"
      }
    },
    "actions": {
      "dns": "Resolve using specified DNS server",
      "block": "Block access"
    },
    "form": {
      "add": "Add Route",
      "edit": "Edit Route",
      "create": "Create Route",
      "remarks": "Remarks",
      "remarksPlaceholder": "Please enter remarks",
      "match": "Match Rules",
      "matchPlaceholder": "example.com\n*.example.com",
      "action": "Action",
      "actionPlaceholder": "Please select action",
      "dns": "DNS Server",
      "dnsPlaceholder": "Please enter DNS server",
      "cancel": "Cancel",
      "submit": "Submit",
      "validation": {
        "remarks": "Please enter valid remarks"
      }
    },
    "toolbar": {
      "searchPlaceholder": "Search routes...",
      "reset": "Reset"
    },
    "messages": {
      "deleteConfirm": "Confirm Delete",
      "deleteDescription": "This action will permanently delete this route group and cannot be recovered. Are you sure you want to continue?",
      "deleteButton": "Delete",
      "deleteSuccess": "Deleted Successfully",
      "createSuccess": "Created Successfully",
      "updateSuccess": "Updated Successfully"
    }
  },
  "order": {
    "title": "Order Management",
    "description": "Here you can view user orders, including assignment, viewing, deletion and other operations.",
    "table": {
      "columns": {
        "tradeNo": "Order No.",
        "type": "Type",
        "plan": "Subscription Plan",
        "period": "Period",
        "amount": "Payment Amount",
        "status": "Order Status",
        "commission": "Commission Amount",
        "commissionStatus": "Commission Status",
        "createdAt": "Created At"
      }
    },
    "type": {
      "NEW": "New Purchase",
      "RENEWAL": "Renewal",
      "UPGRADE": "Upgrade",
      "RESET_FLOW": "Reset Traffic"
    },
    "period": {
      "month_price": "Monthly",
      "quarter_price": "Quarterly",
      "half_year_price": "Semi-annually",
      "year_price": "Annually",
      "two_year_price": "2 Years",
      "three_year_price": "3 Years",
      "onetime_price": "One-time",
      "reset_price": "Reset Package"
    },
    "status": {
      "PENDING": "Pending",
      "PROCESSING": "Processing",
      "CANCELLED": "Cancelled",
      "COMPLETED": "Completed",
      "DISCOUNTED": "Discounted",
      "tooltip": "After marking as [Paid], the system will proceed with activation and completion"
    },
    "commission": {
      "PENDING": "Pending",
      "PROCESSING": "Processing",
      "VALID": "Valid",
      "INVALID": "Invalid"
    },
    "actions": {
      "markAsPaid": "Mark as Paid",
      "cancel": "Cancel Order",
      "openMenu": "Open Menu",
      "reset": "Reset"
    },
    "search": {
      "placeholder": "Search orders..."
    },
    "dialog": {
      "title": "Order Information",
      "basicInfo": "Basic Information",
      "amountInfo": "Amount Information",
      "timeInfo": "Time Information",
      "commissionInfo": "Commission Information",
      "commissionStatusActive": "Active",
      "addOrder": "Add Order",
      "assignOrder": "Assign Order",
      "fields": {
        "userEmail": "User Email",
        "orderPeriod": "Order Period",
        "subscriptionPlan": "Subscription Plan",
        "callbackNo": "Callback No.",
        "paymentAmount": "Payment Amount",
        "balancePayment": "Balance Payment",
        "discountAmount": "Discount Amount",
        "refundAmount": "Refund Amount",
        "deductionAmount": "Deduction Amount",
        "createdAt": "Created At",
        "updatedAt": "Updated At",
        "commissionStatus": "Commission Status",
        "commissionAmount": "Commission Amount",
        "actualCommissionAmount": "Actual Commission",
        "inviteUser": "Inviter",
        "inviteUserId": "Inviter ID"
      },
      "placeholders": {
        "email": "Please enter user email",
        "plan": "Please select subscription plan",
        "period": "Please select subscription period",
        "amount": "Please enter payment amount"
      },
      "actions": {
        "cancel": "Cancel",
        "confirm": "Confirm"
      },
      "messages": {
        "addSuccess": "Added successfully"
      }
    }
  },
  "coupon": {
    "title": "Coupon Management",
    "description": "Here you can manage coupons, including adding, viewing, and deleting operations.",
    "table": {
      "columns": {
        "id": "ID",
        "show": "Enable",
        "name": "Coupon Name",
        "type": "Type",
        "code": "Code",
        "limitUse": "Remaining Uses",
        "limitUseWithUser": "Uses Per User",
        "validity": "Validity Period",
        "actions": "Actions"
      },
      "validity": {
        "expired": "Expired {{days}} days ago",
        "notStarted": "Starts in {{days}} days",
        "remaining": "{{days}} days remaining",
        "startTime": "Start Time",
        "endTime": "End Time",
        "unlimited": "Unlimited",
        "noLimit": "No Limit"
      },
      "actions": {
        "edit": "Edit",
        "delete": "Delete",
        "deleteConfirm": {
          "title": "Confirm Delete",
          "description": "This action will permanently delete this coupon and cannot be undone. Are you sure you want to continue?",
          "confirmText": "Delete"
        }
      },
      "toolbar": {
        "search": "Search coupons...",
        "type": "Type",
        "reset": "Reset",
        "types": {
          "1": "Fixed Amount",
          "2": "Percentage"
        }
      }
    },
    "form": {
      "add": "Add Coupon",
      "edit": "Edit Coupon",
      "name": {
        "label": "Coupon Name",
        "placeholder": "Enter coupon name",
        "required": "Please enter coupon name"
      },
      "type": {
        "label": "Coupon Type and Value",
        "placeholder": "Select coupon type"
      },
      "value": {
        "placeholder": "Enter value"
      },
      "validity": {
        "label": "Validity Period",
        "to": "to",
        "endTimeError": "End time must be later than start time"
      },
      "limitUse": {
        "label": "Maximum Uses",
        "placeholder": "Set maximum uses, leave empty for unlimited",
        "description": "Set the total number of times this coupon can be used, leave empty for unlimited uses"
      },
      "limitUseWithUser": {
        "label": "Uses Per User",
        "placeholder": "Set uses per user, leave empty for unlimited",
        "description": "Limit how many times each user can use this coupon, leave empty for unlimited uses per user"
      },
      "limitPeriod": {
        "label": "Subscription Periods",
        "placeholder": "Limit to specific subscription periods, leave empty for no restrictions",
        "description": "Select which subscription periods can use this coupon, leave empty for no period restrictions",
        "empty": "No matching periods found"
      },
      "limitPlan": {
        "label": "Subscription Plans",
        "placeholder": "Limit to specific subscription plans, leave empty for no restrictions",
        "empty": "No matching plans found"
      },
      "code": {
        "label": "Custom Coupon Code",
        "placeholder": "Enter custom code, leave empty for auto-generation",
        "description": "Customize the coupon code, leave empty for auto-generation"
      },
      "generateCount": {
        "label": "Batch Generation Count",
        "placeholder": "Number of coupons to generate, leave empty for single coupon",
        "description": "Generate multiple coupon codes at once, leave empty to generate a single code"
      },
      "submit": {
        "saving": "Saving...",
        "save": "Save"
      },
      "error": {
        "saveFailed": "Failed to save coupon"
      },
      "timeRange": {
        "quickSet": "Quick Set",
        "presets": {
          "1week": "1 Week",
          "2weeks": "2 Weeks",
          "1month": "1 Month",
          "3months": "3 Months",
          "6months": "6 Months",
          "1year": "1 Year"
        }
      }
    },
    "period": {
      "monthly": "Monthly",
      "quarterly": "Quarterly",
      "half_yearly": "Half Yearly",
      "yearly": "Yearly",
      "two_yearly": "Two Yearly",
      "three_yearly": "Three Yearly",
      "onetime": "One Time",
      "reset_traffic": "Reset Traffic"
    }
  },
  "notice": {
    "title": "Notice Management",
    "description": "Here you can configure notices, including adding, deleting, editing and other operations.",
    "table": {
      "columns": {
        "id": "ID",
        "show": "Display Status",
        "title": "Title",
        "actions": "Actions"
      },
      "toolbar": {
        "search": "Search notice title...",
        "reset": "Reset",
        "sort": {
          "edit": "Edit Order",
          "save": "Save Order"
        }
      },
      "actions": {
        "edit": "Edit",
        "delete": {
          "title": "Delete Confirmation",
          "description": "Are you sure you want to delete this notice? This action cannot be undone.",
          "success": "Successfully deleted"
        }
      }
    },
    "form": {
      "add": {
        "title": "Add Notice",
        "button": "Add Notice"
      },
      "edit": {
        "title": "Edit Notice"
      },
      "fields": {
        "title": {
          "label": "Title",
          "placeholder": "Please enter notice title"
        },
        "content": {
          "label": "Content"
        },
        "img_url": {
          "label": "Background Image",
          "placeholder": "Please enter notice background image URL"
        },
        "show": {
          "label": "Display"
        },
        "tags": {
          "label": "Tags",
          "placeholder": "Press Enter to add tags"
        }
      },
      "buttons": {
        "cancel": "Cancel",
        "submit": "Submit",
        "success": "Successfully submitted"
      }
    }
  },
  "theme": {
    "title": "پیکربندی تم",
    "description": "پیکربندی تم، شامل رنگ‌های تم، اندازه فونت و غیره. اگر V2board را به صورت جداگانه فرانت‌اند و بک‌اند مستقر کنید، پیکربندی تم اعمال نخواهد شد.",
    "upload": {
      "button": "آپلود تم",
      "title": "آپلود تم",
      "description": "لطفاً یک بسته تم معتبر (.zip) آپلود کنید. بسته تم باید شامل ساختار کامل فایل تم باشد.",
      "dragText": "فایل تم را اینجا بکشید و رها کنید، یا",
      "clickText": "برای انتخاب کلیک کنید",
      "supportText": "بسته‌های تم با فرمت .zip پشتیبانی می‌شود",
      "uploading": "در حال آپلود...",
      "error": {
        "format": "فقط فایل‌های تم با فرمت ZIP پشتیبانی می‌شود"
      }
    },
    "preview": {
      "title": "پیش‌نمایش تم",
      "imageCount": "{{current}} / {{total}}"
    },
    "card": {
      "version": "نسخه: {{version}}",
      "currentTheme": "تم فعلی",
      "activateTheme": "فعال کردن تم",
      "configureTheme": "تنظیمات تم",
      "preview": "پیش‌نمایش",
      "delete": {
        "title": "حذف تم",
        "description": "آیا مطمئن هستید که می‌خواهید این تم را حذف کنید؟ این عمل قابل بازگشت نیست.",
        "button": "حذف",
        "error": {
          "active": "نمی‌توان تم فعال فعلی را حذف کرد"
        }
      }
    },
    "config": {
      "title": "پیکربندی تم {{name}}",
      "description": "تغییر سبک‌ها، چیدمان‌ها و سایر گزینه‌های نمایش تم.",
      "cancel": "لغو",
      "save": "ذخیره",
      "success": "تنظیمات با موفقیت ذخیره شد"
    }
  },
  "ticket": {
    "title": "مدیریت تیکت",
    "description": "مشاهده و مدیریت تیکت‌های کاربران، شامل عملیات مشاهده، پاسخ و بستن.",
    "columns": {
      "id": "شناسه تیکت",
      "subject": "موضوع",
      "level": "اولویت",
      "status": "وضعیت",
      "updated_at": "آخرین به‌روزرسانی",
      "created_at": "ایجاد شده در",
      "actions": "عملیات"
    },
    "status": {
      "closed": "بسته شده",
      "replied": "پاسخ داده شده",
      "pending": "در انتظار",
      "processing": "در حال پردازش"
    },
    "level": {
      "low": "اولویت پایین",
      "medium": "اولویت متوسط",
      "high": "اولویت بالا"
    },
    "filter": {
      "placeholder": "جستجوی {field}...",
      "no_results": "نتیجه‌ای یافت نشد",
      "selected": "{count} مورد انتخاب شده",
      "clear": "پاک کردن فیلترها"
    },
    "actions": {
      "view_details": "مشاهده جزئیات",
      "close_ticket": "بستن تیکت",
      "close_confirm_title": "تأیید بستن تیکت",
      "close_confirm_description": "آیا مطمئن هستید که می‌خواهید این تیکت را ببندید؟ پس از بستن نمی‌توانید پاسخ دهید.",
      "close_confirm_button": "تأیید بستن",
      "close_success": "تیکت با موفقیت بسته شد",
      "view_ticket": "مشاهده تیکت"
    },
    "detail": {
      "no_messages": "هنوز پیامی وجود ندارد",
      "created_at": "ایجاد شده در",
      "user_info": "اطلاعات کاربر",
      "traffic_records": "سوابق ترافیک",
      "order_records": "سوابق سفارش",
      "input": {
        "closed_placeholder": "تیکت بسته شده است",
        "reply_placeholder": "پاسخ خود را تایپ کنید...",
        "sending": "در حال ارسال...",
        "send": "ارسال"
      }
    },
    "list": {
      "title": "فهرست تیکت‌ها",
      "search_placeholder": "جستجوی موضوع تیکت یا ایمیل کاربر",
      "no_tickets": "تیکت در انتظاری وجود ندارد",
      "no_search_results": "تیکت مطابقی یافت نشد"
    }
  },
  "server": {
    "title": "پیکربندی نود",
    "description": "پیکربندی تنظیمات ارتباط و همگام‌سازی نودها، شامل کلید ارتباطی، فواصل نظرسنجی، تعادل بار و سایر گزینه‌های پیشرفته.",
    "server_token": {
      "title": "کلید ارتباطی",
      "description": "کلید ارتباط بین Bypax Panel و نودها برای جلوگیری از دسترسی غیرمجاز به داده‌ها.",
      "placeholder": "لطفاً کلید ارتباطی را وارد کنید"
    },
    "server_pull_interval": {
      "title": "فاصله نظرسنجی عملیات Pull نود",
      "description": "فرکانسی که نودها داده‌ها را از پنل دریافت می‌کنند.",
      "placeholder": "لطفاً فاصله pull را وارد کنید"
    },
    "server_push_interval": {
      "title": "فاصله نظرسنجی عملیات Push نود",
      "description": "فرکانسی که نودها داده‌ها را به پنل ارسال می‌کنند.",
      "placeholder": "لطفاً فاصله push را وارد کنید"
    },
    "device_limit_mode": {
      "title": "حالت محدودیت دستگاه",
      "description": "در حالت آسان‌گیر، استفاده از چندین نود از یک آدرس IP به عنوان یک دستگاه محاسبه می‌شود.",
      "strict": "حالت سخت‌گیر",
      "relaxed": "حالت آسان‌گیر",
      "placeholder": "لطفاً حالت محدودیت دستگاه را انتخاب کنید"
    },
    "saving": "در حال ذخیره...",
    "manage": {
      "title": "مدیریت نود",
      "description": "مدیریت تمام نودها، شامل افزودن، حذف، ویرایش و سایر عملیات."
    },
    "columns": {
      "sort": "ترتیب",
      "nodeId": "شناسه نود",
      "show": "نمایش",
      "node": "نود",
      "address": "آدرس",
      "onlineUsers": {
        "title": "کاربران آنلاین",
        "tooltip": "تعداد کاربران آنلاین بر اساس فرکانس گزارش‌دهی سرور"
      },
      "rate": {
        "title": "نرخ",
        "tooltip": "نرخ صورتحساب ترافیک"
      },
      "groups": {
        "title": "گروه‌های دسترسی",
        "tooltip": "گروه‌هایی که می‌توانند به این نود اشتراک داشته باشند",
        "empty": "--"
      },
      "loadStatus": {
        "title": "وضعیت بار",
        "tooltip": "استفاده از منابع سرور",
        "noData": "داده‌ای وجود ندارد",
        "details": "جزئیات بار سیستم",
        "cpu": "استفاده از CPU",
        "memory": "استفاده از حافظه",
        "swap": "استفاده از Swap",
        "disk": "استفاده از دیسک",
        "lastUpdate": "آخرین به‌روزرسانی"
      },
      "customId": "شناسه سفارشی",
      "originalId": "شناسه اصلی",
      "type": "نوع",
      "actions": "عملیات",
      "copyAddress": "کپی آدرس اتصال",
      "internalPort": "پورت داخلی",
      "status": {
        "0": "در حال اجرا نیست",
        "1": "استفاده نشده یا غیرعادی",
        "2": "در حال اجرا عادی"
      },
      "actions_dropdown": {
        "edit": "ویرایش",
        "copy": "کپی",
        "delete": {
          "title": "تأیید حذف",
          "description": "این عمل به طور دائمی این نود را حذف می‌کند و قابل بازگشت نیست. آیا مطمئن هستید که می‌خواهید ادامه دهید؟",
          "confirm": "حذف"
        },
        "copy_success": "با موفقیت کپی شد",
        "delete_success": "با موفقیت حذف شد"
      }
    },
    "toolbar": {
      "search": "جستجوی نودها...",
      "type": "نوع",
      "reset": "بازنشانی",
      "sort": {
        "tip": "نودها را بکشید تا مرتب شوند، سپس روی ذخیره کلیک کنید",
        "edit": "ویرایش ترتیب",
        "save": "ذخیره ترتیب"
      }
    },
    "form": {
      "add_node": "افزودن نود",
      "edit_node": "ویرایش نود",
      "new_node": "نود جدید",
      "name": {
        "label": "نام نود",
        "placeholder": "لطفاً نام نود را وارد کنید",
        "error": "لطفاً یک نام معتبر وارد کنید"
      },
      "rate": {
        "label": "نرخ پایه",
        "error": "نرخ پایه الزامی است",
        "error_numeric": "نرخ پایه باید یک عدد باشد",
        "error_gte_zero": "نرخ پایه باید بزرگتر یا مساوی 0 باشد",
        "child_node_tooltip": "نرخ پایه نود فرزند از نود والد به ارث می‌رسد و نمی‌تواند به طور جداگانه تنظیم شود",
        "child_node_note": "نرخ نود فرزند از والد به ارث می‌رسد"
      },
      "dynamic_rate": {
        "section_title": "پیکربندی نرخ پویا",
        "enable_label": "فعال کردن نرخ پویا",
        "enable_description": "تنظیم ضریب‌های نرخ مختلف بر اساس دوره‌های زمانی",
        "rules_label": "قوانین دوره زمانی",
        "add_rule": "افزودن قانون",
        "rule_title": "قانون {{index}}",
        "start_time": "زمان شروع",
        "end_time": "زمان پایان",
        "multiplier": "ضریب نرخ",
        "no_rules": "هنوز قانونی وجود ندارد، روی دکمه بالا کلیک کنید تا اضافه کنید",
        "start_time_error": "زمان شروع الزامی است",
        "end_time_error": "زمان پایان الزامی است",
        "multiplier_error": "ضریب نرخ الزامی است",
        "multiplier_error_numeric": "ضریب نرخ باید یک عدد باشد",
        "multiplier_error_gte_zero": "ضریب نرخ باید بزرگتر یا مساوی 0 باشد"
      },
      "code": {
        "label": "شناسه نود سفارشی",
        "optional": "(اختیاری)",
        "placeholder": "لطفاً شناسه نود سفارشی را وارد کنید"
      },
      "tags": {
        "label": "برچسب‌های نود",
        "placeholder": "برای افزودن برچسب Enter را فشار دهید"
      },
      "groups": {
        "label": "گروه‌های دسترسی",
        "add": "افزودن گروه",
        "placeholder": "لطفاً گروه‌های دسترسی را انتخاب کنید",
        "empty": "نتیجه‌ای یافت نشد"
      },
      "host": {
        "label": "آدرس نود",
        "placeholder": "لطفاً دامنه یا IP را وارد کنید",
        "error": "آدرس نود الزامی است"
      },
      "port": {
        "label": "پورت اتصال",
        "placeholder": "پورت اتصال کاربر",
        "tooltip": "پورتی که کاربران در واقع به آن متصل می‌شوند، این شماره پورتی است که باید در پیکربندی کلاینت پر شود. اگر از ترانزیت یا تونل استفاده می‌کنید، این پورت ممکن است با پورتی که سرور در واقع به آن گوش می‌دهد متفاوت باشد.",
        "sync": "همگام‌سازی با پورت سرور",
        "error": "پورت اتصال الزامی است"
      },
      "server_port": {
        "label": "پورت سرور",
        "placeholder": "پورت سرور را وارد کنید",
        "error": "پورت سرور الزامی است",
        "tooltip": "پورت گوش دادن واقعی در سرور.",
        "sync": "همگام‌سازی با پورت سرور"
      },
      "parent": {
        "label": "نود والد",
        "placeholder": "نود والد را انتخاب کنید",
        "none": "هیچکدام"
      },
      "route": {
        "label": "گروه‌های مسیر",
        "placeholder": "گروه‌های مسیر را انتخاب کنید",
        "empty": "نتیجه‌ای یافت نشد"
      },
      "submit": "ثبت",
      "cancel": "لغو",
      "success": "با موفقیت ثبت شد"
    },
    "dynamic_form": {
      "shadowsocks": {
        "cipher": {
          "label": "Encryption Method",
          "placeholder": "Select encryption method",
          "search_placeholder": "Search or enter custom encryption method...",
          "description": "Select preset encryption method or enter custom encryption method",
          "preset_group": "Preset Encryption Methods",
          "custom_group": "Custom Encryption Method",
          "current_value": "Current Value",
          "use_custom": "Use",
          "no_results": "No matching encryption method found",
          "custom_hint": "You can directly enter a custom encryption method, such as: aes-256-cfb",
          "custom_label": "Custom"
        },
        "plugin": {
          "label": "Plugin",
          "placeholder": "Select plugin",
          "obfs_hint": "Hint: Configuration format like obfs=http;obfs-host=www.bing.com;path=/",
          "v2ray_hint": "Hint: WebSocket mode format is mode=websocket;host=mydomain.me;path=/;tls=true, QUIC mode format is mode=quic;host=mydomain.me"
        },
        "plugin_opts": {
          "label": "Plugin Options",
          "description": "Enter plugin options in key=value;key2=value2 format",
          "placeholder": "Example: mode=tls;host=bing.com"
        },
        "client_fingerprint": "Client Fingerprint",
        "client_fingerprint_placeholder": "Select client fingerprint",
        "client_fingerprint_description": "Client spoofing fingerprint to reduce detection risk",
        "obfs": {
          "label": "Obfuscation",
          "placeholder": "Select obfuscation method",
          "none": "None",
          "http": "HTTP"
        },
        "obfs_settings": {
          "path": "Path",
          "host": "Host"
        }
      },
      "vmess": {
        "tls": {
          "label": "TLS",
          "placeholder": "Please select security",
          "disabled": "Disabled",
          "enabled": "Enabled"
        },
        "tls_settings": {
          "server_name": {
            "label": "Server Name Indication (SNI)",
            "placeholder": "Leave empty if not used"
          },
          "allow_insecure": "Allow Insecure?"
        },
        "network": {
          "label": "Transport Protocol",
          "placeholder": "Select transport protocol"
        }
      },
      "trojan": {
        "server_name": {
          "label": "Server Name Indication (SNI)",
          "placeholder": "Used for certificate verification when node address differs from certificate"
        },
        "allow_insecure": "Allow Insecure?",
        "network": {
          "label": "Transport Protocol",
          "placeholder": "Select transport protocol"
        }
      },
      "hysteria": {
        "version": {
          "label": "Protocol Version",
          "placeholder": "Protocol version"
        },
        "alpn": {
          "label": "ALPN",
          "placeholder": "ALPN"
        },
        "obfs": {
          "label": "Obfuscation",
          "type": {
            "label": "Obfuscation Implementation",
            "placeholder": "Select obfuscation implementation",
            "salamander": "Salamander"
          },
          "password": {
            "label": "Obfuscation Password",
            "placeholder": "Please enter obfuscation password",
            "generate_success": "Obfuscation password generated successfully"
          }
        },
        "tls": {
          "server_name": {
            "label": "Server Name Indication (SNI)",
            "placeholder": "Used for certificate verification when node address differs from certificate"
          },
          "allow_insecure": "Allow Insecure?"
        },
        "bandwidth": {
          "up": {
            "label": "Upload Bandwidth",
            "placeholder": "Please enter upload bandwidth",
            "suffix": "Mbps",
            "bbr_tip": ", leave empty to use BBR"
          },
          "down": {
            "label": "Download Bandwidth",
            "placeholder": "Please enter download bandwidth",
            "suffix": "Mbps",
            "bbr_tip": ", leave empty to use BBR"
          }
        }
      },
      "vless": {
        "tls": {
          "label": "Security",
          "placeholder": "Please select security",
          "none": "None",
          "tls": "TLS",
          "reality": "Reality"
        },
        "tls_settings": {
          "server_name": {
            "label": "Server Name Indication (SNI)",
            "placeholder": "Leave empty if not used"
          },
          "allow_insecure": "Allow Insecure?"
        },
        "reality_settings": {
          "server_name": {
            "label": "Destination Site (dest)",
            "placeholder": "e.g., example.com"
          },
          "server_port": {
            "label": "Port",
            "placeholder": "e.g., 443"
          },
          "allow_insecure": "Allow Insecure?",
          "private_key": {
            "label": "Private Key"
          },
          "public_key": {
            "label": "Public Key"
          },
          "short_id": {
            "label": "Short ID",
            "placeholder": "Optional, length must be even, max 16 characters",
            "description": "List of shortIds available to clients, can be used to distinguish different clients, using hexadecimal characters 0-f",
            "generate": "Generate Short ID",
            "success": "Short ID generated successfully"
          },
          "key_pair": {
            "generate": "Generate Key Pair",
            "success": "Key pair generated successfully",
            "error": "Failed to generate key pair"
          }
        },
        "network": {
          "label": "Transport Protocol",
          "placeholder": "Select transport protocol"
        },
        "flow": {
          "label": "Flow Control",
          "placeholder": "Select flow control"
        }
      },
      "tuic": {
        "version": {
          "label": "Protocol Version",
          "placeholder": "Select TUIC Version"
        },
        "password": {
          "label": "Password",
          "placeholder": "Enter Password",
          "generate_success": "Password Generated Successfully"
        },
        "congestion_control": {
          "label": "Congestion Control",
          "placeholder": "Select Congestion Control Algorithm"
        },
        "udp_relay_mode": {
          "label": "UDP Relay Mode",
          "placeholder": "Select UDP Relay Mode"
        },
        "tls": {
          "server_name": {
            "label": "Server Name Indication (SNI)",
            "placeholder": "Used for certificate verification when domain differs from node address"
          },
          "allow_insecure": "Allow Insecure?",
          "alpn": {
            "label": "ALPN",
            "placeholder": "Select ALPN Protocols",
            "empty": "No ALPN Protocols Available"
          }
        }
      },
      "socks": {
        "version": {
          "label": "Protocol Version",
          "placeholder": "Select SOCKS Version"
        },
        "tls": {
          "label": "TLS",
          "placeholder": "Please select security",
          "disabled": "Disabled",
          "enabled": "Enabled"
        },
        "tls_settings": {
          "server_name": {
            "label": "Server Name Indication (SNI)",
            "placeholder": "Leave empty if not used"
          },
          "allow_insecure": "Allow Insecure?"
        },
        "network": {
          "label": "Transport Protocol",
          "placeholder": "Select transport protocol"
        }
      },
      "naive": {
        "tls_settings": {
          "server_name": {
            "label": "Server Name Indication (SNI)",
            "placeholder": "Used for certificate verification when domain differs from node address"
          },
          "allow_insecure": "Allow Insecure"
        },
        "tls": {
          "label": "TLS",
          "placeholder": "Please select security",
          "disabled": "Disabled",
          "enabled": "Enabled",
          "server_name": {
            "label": "Server Name Indication (SNI)",
            "placeholder": "Used for certificate verification when domain differs from node address"
          },
          "allow_insecure": "Allow Insecure"
        }
      },
      "http": {
        "tls_settings": {
          "server_name": {
            "label": "Server Name Indication (SNI)",
            "placeholder": "Used for certificate verification when domain differs from node address"
          },
          "allow_insecure": "Allow Insecure"
        },
        "tls": {
          "label": "TLS",
          "placeholder": "Please select security",
          "disabled": "Disabled",
          "enabled": "Enabled",
          "server_name": {
            "label": "Server Name Indication (SNI)",
            "placeholder": "Used for certificate verification when domain differs from node address"
          },
          "allow_insecure": "Allow Insecure"
        }
      },
      "mieru": {
        "transport": {
          "label": "Transport Protocol",
          "placeholder": "Select transport protocol"
        },
        "multiplexing": {
          "label": "Multiplexing",
          "placeholder": "Select multiplexing level",
          "MULTIPLEXING_OFF": "Disabled",
          "MULTIPLEXING_LOW": "Low",
          "MULTIPLEXING_MIDDLE": "Medium",
          "MULTIPLEXING_HIGH": "High"
        }
      }
    },
    "network_settings": {
      "edit_protocol": "Edit Protocol",
      "edit_protocol_config": "Edit Protocol Configuration",
      "use_template": "Use {{template}} Template",
      "json_config_placeholder": "Please enter JSON configuration",
      "json_config_placeholder_with_template": "Please enter JSON configuration or select template above",
      "validation": {
        "must_be_object": "Configuration must be a JSON object",
        "invalid_json": "Invalid JSON format"
      },
      "errors": {
        "save_failed": "Error occurred while saving"
      }
    },
    "common": {
      "cancel": "Cancel",
      "confirm": "Confirm"
    }
  },
  "user": {
    "manage": {
      "title": "مدیریت کاربران",
      "description": "در اینجا می‌توانید کاربران را مدیریت کنید، شامل عملیات افزودن، حذف، ویرایش و جستجو."
    },
    "columns": {
      "is_admin": "مدیر",
      "is_staff": "کارمند",
      "id": "شناسه",
      "email": "ایمیل",
      "online_count": "دستگاه‌های آنلاین",
      "status": "وضعیت",
      "subscription": "اشتراک",
      "group": "گروه",
      "used_traffic": "ترافیک استفاده شده",
      "total_traffic": "ترافیک کل",
      "expire_time": "زمان انقضا",
      "balance": "موجودی",
      "commission": "کمیسیون",
      "register_time": "زمان ثبت‌نام",
      "actions": "عملیات",
      "next_reset_at": "بازنشانی بعدی در",
      "device_limit": {
        "unlimited": "بدون محدودیت دستگاه",
        "limited": "حداکثر {{count}} دستگاه مجاز است"
      },
      "status_text": {
        "normal": "عادی",
        "banned": "مسدود شده"
      },
      "online_status": {
        "online": "در حال حاضر آنلاین",
        "never": "هرگز آنلاین نبوده",
        "last_online": "آخرین آنلاین: {{time}}",
        "offline_duration": {
          "days": "مدت زمان آفلاین: {{count}} روز",
          "hours": "مدت زمان آفلاین: {{count}} ساعت",
          "minutes": "مدت زمان آفلاین: {{count}} دقیقه",
          "seconds": "مدت زمان آفلاین: {{count}} ثانیه"
        }
      },
      "expire_status": {
        "permanent": "دائمی",
        "expired": "{{days}} روز پیش منقضی شده",
        "remaining": "{{days}} روز باقی مانده"
      },
      "actions_menu": {
        "edit": "ویرایش",
        "view_details": "مشاهده جزئیات",
        "assign_order": "اختصاص سفارش",
        "copy_url": "کپی URL اشتراک",
        "reset_secret": "بازنشانی UUID و URL",
        "orders": "سفارشات",
        "invites": "دعوت‌ها",
        "traffic_records": "سوابق ترافیک",
        "reset_traffic": "بازنشانی ترافیک",
        "delete": "حذف",
        "delete_confirm_title": "تأیید حذف کاربر",
        "delete_confirm_description": "این عمل به طور دائمی کاربر {{email}} و تمام داده‌های مرتبط، شامل سفارشات، کوپن‌ها، سوابق ترافیک و تیکت‌های پشتیبانی را حذف می‌کند. این عمل قابل بازگشت نیست. آیا می‌خواهید ادامه دهید؟"
      }
    },
    "filter": {
      "selected": "{{count}} مورد انتخاب شده",
      "no_results": "نتیجه‌ای یافت نشد.",
      "clear": "پاک کردن فیلترها",
      "search_placeholder": "جستجو...",
      "email_search": "جستجوی ایمیل کاربر...",
      "advanced": "فیلتر پیشرفته",
      "reset": "بازنشانی فیلتر",
      "sheet": {
        "title": "فیلتر پیشرفته",
        "description": "یک یا چند شرط فیلتر اضافه کنید تا کاربران را دقیق پیدا کنید",
        "conditions": "شرایط فیلتر",
        "add": "افزودن شرط",
        "condition": "شرط {{number}}",
        "field": "انتخاب فیلد",
        "operator": "انتخاب عملگر",
        "value": "وارد کردن مقدار",
        "value_number": "وارد کردن مقدار ({{unit}})",
        "reset": "بازنشانی",
        "apply": "اعمال فیلتر"
      },
      "fields": {
        "email": "ایمیل",
        "id": "شناسه کاربر",
        "plan_id": "اشتراک",
        "transfer_enable": "ترافیک",
        "total_used": "ترافیک استفاده شده",
        "online_count": "دستگاه‌های آنلاین",
        "expired_at": "زمان انقضا",
        "uuid": "UUID",
        "token": "Token",
        "banned": "وضعیت حساب",
        "remark": "یادداشت",
        "inviter_email": "ایمیل دعوت‌کننده",
        "invite_user_id": "شناسه دعوت‌کننده",
        "is_admin": "مدیر",
        "is_staff": "کارمند"
      },
      "operators": {
        "contains": "شامل",
        "eq": "برابر",
        "gt": "بزرگتر از",
        "lt": "کوچکتر از"
      },
      "status": {
        "normal": "عادی",
        "banned": "مسدود شده"
      },
      "boolean": {
        "true": "بله",
        "false": "خیر"
      }
    },
    "generate": {
      "button": "ایجاد کاربر",
      "title": "ایجاد کاربر",
      "form": {
        "email": "ایمیل",
        "email_prefix": "حساب (برای تولید دسته‌ای خالی بگذارید)",
        "email_domain": "دامنه",
        "password": "رمز عبور",
        "password_placeholder": "خالی بگذارید تا از ایمیل به عنوان رمز عبور استفاده شود",
        "expire_time": "زمان انقضا",
        "expire_time_placeholder": "تاریخ انقضای کاربر را انتخاب کنید، برای دائمی خالی بگذارید",
        "permanent": "دائمی",
        "subscription": "طرح اشتراک",
        "subscription_none": "هیچکدام",
        "generate_count": "تعداد تولید",
        "generate_count_placeholder": "برای تولید دسته‌ای تعداد را وارد کنید",
        "cancel": "لغو",
        "submit": "تولید",
        "success": "با موفقیت تولید شد",
        "download_csv": "صادرات به عنوان فایل CSV"
      }
    },
    "edit": {
      "button": "ویرایش اطلاعات کاربر",
      "title": "مدیریت کاربران",
      "form": {
        "email": "Email",
        "email_placeholder": "Please enter email",
        "inviter_email": "Inviter Email",
        "inviter_email_placeholder": "Please enter email",
        "password": "Password",
        "password_placeholder": "Enter new password if you want to change it",
        "balance": "Balance",
        "balance_placeholder": "Please enter balance",
        "commission_balance": "Commission Balance",
        "commission_balance_placeholder": "Please enter commission balance",
        "upload": "Upload Traffic",
        "upload_placeholder": "Upload traffic",
        "download": "Download Traffic",
        "download_placeholder": "Download traffic",
        "total_traffic": "Total Traffic",
        "total_traffic_placeholder": "Please enter traffic",
        "expire_time": "Expire Time",
        "expire_time_placeholder": "Select user expire date, leave empty for permanent",
        "expire_time_specific": "Specific Time",
        "expire_time_today": "Set to end of today",
        "expire_time_permanent": "Permanent",
        "expire_time_1month": "One Month",
        "expire_time_3months": "Three Months",
        "expire_time_confirm": "Confirm",
        "subscription": "Subscription Plan",
        "subscription_none": "None",
        "account_status": "Account Status",
        "commission_type": "Commission Type",
        "commission_type_system": "Follow System Settings",
        "commission_type_cycle": "Cycle Commission",
        "commission_type_onetime": "One-time Commission",
        "commission_rate": "Commission Rate",
        "commission_rate_placeholder": "Leave empty to follow site commission rate",
        "discount": "Exclusive Discount",
        "discount_placeholder": "Leave empty for no exclusive discount",
        "speed_limit": "Speed Limit",
        "speed_limit_placeholder": "Leave empty for no speed limit",
        "device_limit": "Device Limit",
        "device_limit_placeholder": "Leave empty for no device limit",
        "is_admin": "Is Admin",
        "is_staff": "Is Staff",
        "remarks": "Remarks",
        "remarks_placeholder": "Please enter remarks here",
        "cancel": "Cancel",
        "submit": "Submit",
        "success": "Modified successfully"
      }
    },
    "actions": {
      "title": "Actions",
      "send_email": "Send Email",
      "export_csv": "Export CSV",
      "traffic_reset_stats": "Traffic Reset Stats",
      "batch_ban": "Batch Ban",
      "confirm_ban": {
        "title": "Confirm Batch Ban",
        "filtered_description": "This action will ban all users that match your current filters. This action cannot be undone.",
        "all_description": "This action will ban all users in the system. This action cannot be undone.",
        "cancel": "Cancel",
        "confirm": "Confirm Ban",
        "banning": "Banning..."
      }
    },
    "messages": {
      "success": "Success",
      "error": "Error",
      "export": {
        "success": "Export successful",
        "failed": "Export failed"
      },
      "batch_ban": {
        "success": "Batch ban successful",
        "failed": "Batch ban failed"
      },
      "send_mail": {
        "success": "Email sent successfully",
        "failed": "Failed to send email",
        "required_fields": "Please fill in all required fields"
      }
    },
    "traffic_reset": {
      "title": "Traffic Reset",
      "description": "Reset traffic usage for user {{email}}",
      "tabs": {
        "reset": "Reset Traffic",
        "history": "Reset History"
      },
      "user_info": "User Information",
      "warning": {
        "title": "Important Notice",
        "irreversible": "Traffic reset operation is irreversible, please proceed with caution",
        "reset_to_zero": "After reset, user's upload and download traffic will be cleared to zero",
        "logged": "All reset operations will be logged in the system"
      },
      "reason": {
        "label": "Reset Reason",
        "placeholder": "Please enter the reason for traffic reset (optional)",
        "optional": "This field is optional and used to record the reason for reset"
      },
      "confirm_reset": "Confirm Reset",
      "resetting": "Resetting...",
      "reset_success": "Traffic reset successful",
      "reset_failed": "Traffic reset failed",
      "history": {
        "summary": "Reset Overview",
        "reset_count": "Reset Count",
        "last_reset": "Last Reset",
        "next_reset": "Next Reset",
        "never": "Never Reset",
        "no_schedule": "No Scheduled Reset",
        "records": "Reset Records",
        "recent_records": "Recent 10 Reset Records",
        "no_records": "No reset records",
        "reset_time": "Reset Time",
        "traffic_cleared": "Traffic Cleared"
      },
      "stats": {
        "title": "Traffic Reset Statistics",
        "description": "View system traffic reset statistics",
        "time_range": "Statistics Time Range",
        "total_resets": "Total Resets",
        "auto_resets": "Auto Resets",
        "manual_resets": "Manual Resets",
        "cron_resets": "Cron Resets",
        "in_period": "In the last {{days}} days",
        "breakdown": "Reset Type Breakdown",
        "breakdown_description": "Percentage breakdown of different reset operation types",
        "auto_percentage": "Auto Reset Percentage",
        "manual_percentage": "Manual Reset Percentage",
        "cron_percentage": "Cron Reset Percentage",
        "days_options": {
          "week": "Last Week",
          "month": "Last Month",
          "quarter": "Last Quarter",
          "year": "Last Year"
        }
      }
    },
    "traffic_reset_logs": {
      "title": "Traffic Reset Logs",
      "description": "View detailed records of all traffic reset operations in the system",
      "columns": {
        "id": "Log ID",
        "user": "User",
        "reset_type": "Reset Type",
        "trigger_source": "Trigger Source",
        "cleared_traffic": "Cleared Traffic",
        "cleared": "Cleared",
        "upload": "Upload",
        "download": "Download",
        "reset_time": "Reset Time",
        "log_time": "Log Time"
      },
      "filters": {
        "search_user": "Search user email...",
        "reset_type": "Reset Type",
        "trigger_source": "Trigger Source",
        "all_types": "All Types",
        "all_sources": "All Sources",
        "start_date": "Start Date",
        "end_date": "End Date",
        "apply_date": "Apply Filter",
        "reset": "Reset Filter",
        "filter_title": "Filter Options",
        "filter_description": "Set filter conditions to find specific traffic reset records",
        "reset_types": {
          "monthly": "Monthly Reset",
          "first_day_month": "First Day of Month Reset",
          "yearly": "Yearly Reset",
          "first_day_year": "First Day of Year Reset",
          "manual": "Manual Reset"
        },
        "trigger_sources": {
          "auto": "Auto Trigger",
          "manual": "Manual Trigger",
          "cron": "Cron Job"
        }
      },
      "actions": {
        "export": "Export Logs",
        "exporting": "Exporting...",
        "export_success": "Export successful",
        "export_failed": "Export failed"
      },
      "trigger_descriptions": {
        "manual": "Manually executed traffic reset by administrator",
        "cron": "Automatically executed by system scheduled task",
        "auto": "Automatically triggered by system based on conditions",
        "other": "Triggered by other methods"
      }
    },
    "send_mail": {
      "title": "Send Email",
      "description": "Send email to selected or filtered users",
      "subject": "Subject",
      "content": "Content",
      "sending": "Sending...",
      "send": "Send"
    },
    "dialog": {
      "title": "User Details",
      "basicInfo": "Basic Information",
      "subscriptionInfo": "Subscription Information",
      "trafficInfo": "Traffic Information",
      "financialInfo": "Financial Information",
      "activityInfo": "Activity Information",
      "inviteInfo": "Invitation Information",
      "timeInfo": "Time Information",
      "subscriptionUrl": "Subscription URL",
      "fields": {
        "userId": "User ID",
        "email": "Email",
        "uuid": "UUID",
        "token": "Token",
        "remarks": "Remarks",
        "subscriptionPlan": "Subscription Plan",
        "permissionGroup": "Permission Group",
        "expiredAt": "Expired At",
        "deviceLimit": "Device Limit",
        "speedLimit": "Speed Limit",
        "transferEnable": "Total Traffic",
        "uploadUsed": "Upload Used",
        "downloadUsed": "Download Used",
        "totalUsed": "Total Used",
        "lastResetAt": "Last Reset",
        "nextResetAt": "Next Reset",
        "resetCount": "Reset Count",
        "balance": "Balance",
        "commissionBalance": "Commission Balance",
        "commissionType": "Commission Type",
        "commissionRate": "Commission Rate",
        "lastLoginAt": "Last Login",
        "lastLoginIp": "Last Login IP",
        "lastOnlineAt": "Last Online",
        "onlineCount": "Online Devices",
        "inviteUser": "Inviter",
        "inviteUserId": "Inviter ID",
        "createdAt": "Created At",
        "updatedAt": "Updated At",
        "subscribeUrl": "Subscription URL",
        "telegramId": "Telegram ID"
      }
    },
    "status": {
      "normal": "Normal",
      "banned": "Banned",
      "admin": "Admin",
      "staff": "Staff"
    }
  },
  "subscribe": {
    "plan": {
      "title": "طرح‌های اشتراک",
      "add": "افزودن طرح",
      "search": "جستجوی طرح‌ها...",
      "sort": {
        "edit": "ویرایش ترتیب",
        "save": "ذخیره ترتیب"
      },
      "columns": {
        "id": "شناسه",
        "show": "نمایش",
        "sell": "فروش",
        "renew": "تمدید",
        "renew_tooltip": "آیا کاربران موجود می‌توانند هنگام توقف فروش اشتراک تمدید کنند",
        "name": "نام",
        "stats": "آمار",
        "group": "گروه دسترسی",
        "price": "قیمت",
        "actions": "عملیات",
        "edit": "ویرایش",
        "delete": "حذف",
        "delete_confirm": {
          "title": "تأیید حذف",
          "description": "این عمل به طور دائمی این اشتراک را حذف می‌کند و قابل بازگشت نیست. آیا مطمئن هستید که می‌خواهید ادامه دهید؟",
          "success": "با موفقیت حذف شد"
        },
        "price_period": {
          "monthly": "ماهانه",
          "quarterly": "سه‌ماهه",
          "half_yearly": "شش‌ماهه",
          "yearly": "سالانه",
          "two_yearly": "دو ساله",
          "three_yearly": "سه ساله",
          "onetime": "یکباره",
          "reset_traffic": "بازنشانی ترافیک",
          "no_price": "بدون قیمت",
          "unit": {
            "month": "/ماه",
            "quarter": "/سه‌ماه",
            "half_year": "/شش‌ماه",
            "year": "/سال",
            "two_year": "/2 سال",
            "three_year": "/3 سال",
            "times": "/بار"
          }
        }
      },
      "form": {
        "add_title": "افزودن طرح",
        "edit_title": "ویرایش طرح",
        "name": {
          "label": "نام طرح",
          "placeholder": "نام طرح را وارد کنید"
        },
        "group": {
          "label": "گروه سرور",
          "add": "افزودن گروه",
          "placeholder": "گروه سرور را انتخاب کنید"
        },
        "transfer": {
          "label": "ترافیک",
          "placeholder": "محدودیت ترافیک را وارد کنید",
          "unit": "GB"
        },
        "speed": {
          "label": "محدودیت سرعت",
          "placeholder": "محدودیت سرعت را وارد کنید",
          "unit": "Mbps"
        },
        "price": {
          "title": "تنظیمات قیمت",
          "base_price": "قیمت پایه",
          "clear": {
            "button": "پاک کردن",
            "tooltip": "پاک کردن تمام قیمت‌ها"
          },
          "period": {
            "monthly": "ماهانه",
            "months": "{{count}} ماه"
          },
          "onetime_desc": "بسته ترافیک یکباره، بدون محدودیت زمانی",
          "reset_desc": "Reset traffic package, can be used multiple times"
        },
        "device": {
          "label": "Device Limit",
          "placeholder": "Enter device limit",
          "unit": "Devices"
        },
        "capacity": {
          "label": "Capacity Limit",
          "placeholder": "Enter capacity limit",
          "unit": "Users"
        },
        "tags": {
          "label": "Tags",
          "placeholder": "Enter a tag and press Enter to confirm"
        },
        "reset_method": {
          "label": "Traffic Reset Method",
          "placeholder": "Select reset method",
          "description": "Traffic reset method will determine how the traffic is reset",
          "options": {
            "follow_system": "Follow System Settings",
            "monthly_first": "Monthly First Day",
            "monthly_reset": "Monthly Purchase Day",
            "no_reset": "No Reset",
            "yearly_first": "Yearly First Day",
            "yearly_reset": "Yearly Purchase Day"
          }
        },
        "content": {
          "label": "Plan Description",
          "placeholder": "Enter plan description",
          "description": "Support Markdown format",
          "preview": "Preview",
          "preview_button": {
            "show": "Show Preview",
            "hide": "Hide Preview"
          },
          "template": {
            "button": "Use Template",
            "tooltip": "Use default template",
            "content": "## Plan Details\n\n- Data: {{transfer}} GB\n- Speed Limit: {{speed}} Mbps\n- Concurrent Devices: {{devices}}\n\n## Service Information\n\n1. Data {{reset_method}}\n2. Multi-platform Support\n3. 24/7 Technical Support"
          }
        },
        "force_update": {
          "label": "Force Update User Plans"
        },
        "submit": {
          "cancel": "Cancel",
          "submit": "Submit",
          "submitting": "Submitting...",
          "success": {
            "add": "Plan added successfully",
            "update": "Plan updated successfully"
          },
          "error": {
            "validation": "Form validation failed. Please check for errors and try again."
          }
        }
      },
      "page": {
        "description": "Here you can configure subscription plans, including adding, deleting, and editing operations."
      }
    }
  },
  "auth": {
    "signIn": {
      "title": "ورود",
      "description": "ایمیل و رمز عبور خود را وارد کنید",
      "email": "ایمیل",
      "emailPlaceholder": "name@example.com",
      "password": "رمز عبور",
      "passwordPlaceholder": "رمز عبور خود را وارد کنید",
      "forgotPassword": "رمز عبور را فراموش کرده‌اید؟",
      "submit": "ورود",
      "rememberMe": "مرا به خاطر بسپار",
      "resetPassword": {
        "title": "بازنشانی رمز عبور",
        "description": "برای بازنشانی رمز عبور، دستور زیر را در دایرکتوری سایت اجرا کنید",
        "command": "php artisan reset:password admin-email"
      },
      "validation": {
        "emailRequired": "لطفاً آدرس ایمیل خود را وارد کنید",
        "emailInvalid": "لطفاً یک آدرس ایمیل معتبر وارد کنید",
        "passwordRequired": "لطفاً رمز عبور خود را وارد کنید",
        "passwordLength": "رمز عبور باید حداقل 7 کاراکتر باشد"
      }
    }
  },
  "signIn": {
    "title": "ورود",
    "description": "ایمیل و رمز عبور خود را وارد کنید",
    "email": "ایمیل",
    "emailPlaceholder": "name@example.com",
    "password": "رمز عبور",
    "passwordPlaceholder": "رمز عبور خود را وارد کنید",
    "forgotPassword": "رمز عبور را فراموش کرده‌اید؟",
    "submit": "ورود",
    "rememberMe": "مرا به خاطر بسپار"
  },
  "title": "Bypax Panel",
  "description": "پنل مدیریت Bypax",
  "sidebar": {
    "dashboard": "داشبورد",
    "systemManagement": "مدیریت سیستم",
    "systemConfig": "تنظیمات سیستم",
    "themeConfig": "تنظیمات تم",
    "noticeManagement": "مدیریت اعلان‌ها",
    "paymentConfig": "تنظیمات پرداخت",
    "knowledgeManagement": "پایگاه دانش",
    "nodeManagement": "مدیریت نود",
    "permissionGroupManagement": "گروه‌های دسترسی",
    "routeManagement": "مدیریت مسیر",
    "subscriptionManagement": "مدیریت اشتراک",
    "planManagement": "مدیریت پلن",
    "orderManagement": "مدیریت سفارش",
    "couponManagement": "مدیریت کوپن",
    "userManagement": "مدیریت کاربران",
    "ticketManagement": "مدیریت تیکت"
  }
};