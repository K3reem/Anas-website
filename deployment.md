# دليل النشر - موقع أنس أبو زهرة التعليمي

## النشر على GitHub Pages

### الخطوة 1: إنشاء مستودع GitHub
1. اذهب إلى [GitHub](https://github.com)
2. اضغط على "New repository"
3. أسم المستودع: `anas-math-website`
4. اختر "Public"
5. اضغط "Create repository"

### الخطوة 2: رفع الملفات
```bash
# تهيئة Git
git init
git add .
git commit -m "Initial commit - Anas Math Website"

# إضافة المستودع البعيد
git remote add origin https://github.com/your-username/anas-math-website.git
git branch -M main
git push -u origin main
```

### الخطوة 3: تفعيل GitHub Pages
1. اذهب إلى إعدادات المستودع (Settings)
2. ابحث عن "Pages" في القائمة الجانبية
3. في "Source"، اختر "Deploy from a branch"
4. اختر "main" branch
5. اضغط "Save"

### الخطوة 4: تحديث الروابط
بعد النشر، قم بتحديث الروابط في الملفات التالية:
- `index.html` - تحديث `og:url`
- `sitemap.xml` - تحديث `loc` URLs
- `robots.txt` - تحديث `Sitemap` URL
- `package.json` - تحديث `homepage` URL

## النشر على Netlify

### الخطوة 1: إنشاء حساب Netlify
1. اذهب إلى [Netlify](https://netlify.com)
2. سجل دخول باستخدام GitHub
3. اضغط "New site from Git"

### الخطوة 2: ربط المستودع
1. اختر GitHub
2. اختر مستودع `anas-math-website`
3. اضغط "Deploy site"

### الخطوة 3: إعدادات النطاق المخصص
1. اذهب إلى "Domain settings"
2. اضغط "Add custom domain"
3. أدخل اسم النطاق المطلوب
4. اتبع التعليمات لإعداد DNS

## النشر على Vercel

### الخطوة 1: إنشاء حساب Vercel
1. اذهب إلى [Vercel](https://vercel.com)
2. سجل دخول باستخدام GitHub
3. اضغط "New Project"

### الخطوة 2: استيراد المشروع
1. اختر مستودع `anas-math-website`
2. اضغط "Deploy"

## النشر على خادم تقليدي

### الخطوة 1: تحضير الملفات
```bash
# إنشاء نسخة للإنتاج
mkdir production
cp -r * production/
cd production
```

### الخطوة 2: رفع الملفات
```bash
# باستخدام FTP
ftp your-server.com
# أدخل بيانات الدخول
# ارفع الملفات

# أو باستخدام SCP
scp -r . user@your-server.com:/var/www/html/
```

### الخطوة 3: إعداد الخادم
1. تأكد من تفعيل mod_rewrite
2. تأكد من وجود ملف `.htaccess`
3. اضبط صلاحيات الملفات (644 للملفات، 755 للمجلدات)

## تحسين الأداء

### تحسين الصور
```bash
# تثبيت أداة تحسين الصور
npm install -g imagemin-cli

# تحسين جميع الصور
imagemin assets/images/* --out-dir=assets/images/optimized
```

### ضغط الملفات
```bash
# ضغط CSS
npm install -g clean-css-cli
cleancss -o styles.min.css styles.css

# ضغط JavaScript
npm install -g uglify-js
uglifyjs script.js -o script.min.js
uglifyjs ai-chatbot.js -o ai-chatbot.min.js
```

### إضافة Service Worker
```javascript
// sw.js
const CACHE_NAME = 'anas-math-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  '/ai-chatbot.js',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

## مراقبة الأداء

### أدوات المراقبة
- **Google Analytics**: لتتبع الزوار
- **Google Search Console**: لمراقبة SEO
- **Lighthouse**: لقياس الأداء
- **PageSpeed Insights**: لتحليل السرعة

### إعداد Google Analytics
```html
<!-- إضافة إلى index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## الأمان

### إعدادات الأمان
1. **HTTPS**: تأكد من تفعيل SSL
2. **Security Headers**: موجودة في `.htaccess`
3. **Content Security Policy**: إضافة CSP headers
4. **Regular Updates**: تحديث المكتبات بانتظام

### إضافة CSP
```html
<!-- إضافة إلى index.html -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';">
```

## النسخ الاحتياطي

### إعداد النسخ الاحتياطي التلقائي
```bash
#!/bin/bash
# backup.sh
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf backup_$DATE.tar.gz /var/www/html/
aws s3 cp backup_$DATE.tar.gz s3://your-backup-bucket/
```

### جدولة النسخ الاحتياطي
```bash
# إضافة إلى crontab
0 2 * * * /path/to/backup.sh
```

## استكشاف الأخطاء

### مشاكل شائعة
1. **404 Errors**: تأكد من وجود ملف `.htaccess`
2. **CORS Issues**: تأكد من إعدادات الخادم
3. **Slow Loading**: تحقق من ضغط الملفات
4. **Mobile Issues**: اختبر على أجهزة مختلفة

### أدوات التشخيص
- **Browser DevTools**: لفحص الأخطاء
- **GTmetrix**: لتحليل الأداء
- **WebPageTest**: لاختبار السرعة
- **Mobile-Friendly Test**: لاختبار التجاوب

## الدعم

إذا واجهت أي مشاكل في النشر:
1. راجع ملف `README.md`
2. تحقق من إعدادات الخادم
3. راجع سجلات الأخطاء
4. اتصل بالدعم التقني

---

**ملاحظة**: تأكد من تحديث جميع الروابط والنطاقات قبل النشر النهائي. 