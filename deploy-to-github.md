# دليل النشر على GitHub Pages

## الخطوة 1: إنشاء مستودع GitHub

1. اذهب إلى [GitHub](https://github.com)
2. اضغط على "New repository"
3. أسم المستودع: `anas-math-website`
4. اختر "Public"
5. اضغط "Create repository"

## الخطوة 2: رفع الملفات

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

## الخطوة 3: تفعيل GitHub Pages

1. اذهب إلى إعدادات المستودع (Settings)
2. ابحث عن "Pages" في القائمة الجانبية
3. في "Source"، اختر "Deploy from a branch"
4. اختر "main" branch
5. اضغط "Save"

## الخطوة 4: تحديث الروابط

بعد النشر، قم بتحديث الروابط في الملفات التالية:

### في index.html:
```html
<meta property="og:url" content="https://your-username.github.io/anas-math-website">
```

### في sitemap.xml:
```xml
<loc>https://your-username.github.io/anas-math-website/</loc>
```

### في robots.txt:
```
Sitemap: https://your-username.github.io/anas-math-website/sitemap.xml
```

### في package.json:
```json
"homepage": "https://your-username.github.io/anas-math-website"
```

## الخطوة 5: النشر النهائي

```bash
git add .
git commit -m "Update URLs for GitHub Pages"
git push
```

## الرابط النهائي

سيكون الموقع متاحاً على:
`https://your-username.github.io/anas-math-website`

## ملاحظات مهمة

1. **تأكد من أن المستودع عام (Public)**
2. **انتظر بضع دقائق بعد التفعيل**
3. **تحقق من أن جميع الملفات موجودة**
4. **اختبر جميع الوظائف بعد النشر**

## استكشاف الأخطاء

### إذا لم يظهر الموقع:
1. تحقق من إعدادات GitHub Pages
2. تأكد من أن الملف الرئيسي هو `index.html`
3. تحقق من سجلات النشر في تبويب Actions

### إذا لم تعمل بعض الوظائف:
1. تحقق من وحدة تحكم المتصفح للأخطاء
2. تأكد من أن جميع الملفات محملة
3. اختبر على متصفحات مختلفة

## التحديثات المستقبلية

لنشر تحديثات جديدة:
```bash
git add .
git commit -m "Update description"
git push
```

سيتم النشر تلقائياً خلال بضع دقائق. 