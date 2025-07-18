// حل صور الرياضيات: OCR + LaTeX + MathJS
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5001;

// إعداد التخزين المؤقت للصور
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowed = ['image/png', 'image/jpeg'];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error('Only PNG and JPEG images are allowed'));
  }
});

// نقطة النهاية الرئيسية
app.post('/api/solve-image', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'لم يتم رفع أي صورة.' });
  }
  // لاحقاً: OCR + pix2tex + mathjs
  res.json({
    message: 'تم رفع الصورة بنجاح. سيتم معالجة الصورة في الخطوات التالية.',
    filename: req.file.filename,
    originalname: req.file.originalname
  });
});

app.listen(PORT, () => {
  console.log(`Solve Image API running on https://k3reem.github.io/Anas-website/`);
}); 