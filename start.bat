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
echo للاختبار:
echo http://localhost:8000/test.html
echo.
echo اضغط Ctrl+C لإيقاف الخادم
echo.
python -m http.server 8000
pause 