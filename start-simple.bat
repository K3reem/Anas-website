@echo off
echo ========================================
echo    موقع أنس أبو زهرة التعليمي
echo ========================================
echo.
echo جاري تشغيل الخادم المحلي...
echo.
echo يمكنك الوصول للموقع على:
echo http://localhost:8000
echo.
echo اضغط Ctrl+C لإيقاف الخادم
echo.
npx http-server . -p 8000
pause 