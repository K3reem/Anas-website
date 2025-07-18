# موقع أنس أبو زهرة التعليمي - خادم محلي
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   موقع أنس أبو زهرة التعليمي" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "جاري تشغيل الخادم المحلي..." -ForegroundColor Green
Write-Host ""
Write-Host "يمكنك الوصول للموقع على:" -ForegroundColor White
Write-Host "http://localhost:8000" -ForegroundColor Blue
Write-Host ""
Write-Host "للاختبار:" -ForegroundColor White
Write-Host "http://localhost:8000/test.html" -ForegroundColor Blue
Write-Host ""
Write-Host "اضغط Ctrl+C لإيقاف الخادم" -ForegroundColor Red
Write-Host ""

# تشغيل الخادم
try {
    python -m http.server 8000
} catch {
    Write-Host "خطأ في تشغيل Python. جاري تجربة Node.js..." -ForegroundColor Yellow
    try {
        npx serve . -p 8000
    } catch {
        Write-Host "خطأ في تشغيل الخادم. تأكد من تثبيت Python أو Node.js" -ForegroundColor Red
        Read-Host "اضغط Enter للخروج"
    }
} 