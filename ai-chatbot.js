// ضع مفتاح Gemini API هنا مباشرة
require('dotenv').config();           // يحمّل متغيّرات .env
const apiKey = process.env.API_KEY;   // يقرأ المفتاح من .env

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent';

// Intent detection and natural responses
const GREETING_PATTERNS = [
    /^هلا/,
    /^هلاو/,
    /^هلاوي/,
    /^مرحبا/,
    /^السلام عليكم/,
    /^أهلا/,
    /^أهلا وسهلا/,
    /^كيفك/,
    /^كيف الحال/,
    /^شو الأخبار/,
    /^شو أخبارك/,
    /^أخبارك إيه/,
    /^إيه الأخبار/,
    /^صباح الخير/,
    /^مساء الخير/,
    /^صباح النور/,
    /^مساء النور/,
    /^صباح الفل/,
    /^مساء الفل/,
    /^صباح الورد/,
    /^مساء الورد/
];

const CASUAL_PATTERNS = [
    /^شكرا/,
    /^شكراً/,
    /^مشكور/,
    /^مشكورة/,
    /^تسلم/,
    /^تسلمي/,
    /^الله يسلمك/,
    /^الله يسلمكِ/,
    /^تمام/,
    /^ممتاز/,
    /^رائع/,
    /^جميل/,
    /^حلو/,
    /^حلوة/,
    /^عظيم/,
    /^ماشي/,
    /^أوكي/,
    /^أوك/,
    /^حاضر/,
    /^فهمت/,
    /^أفهم/,
    /^أفهمت/
];

const FAREWELL_PATTERNS = [
    /^مع السلامة/,
    /^سلام/,
    /^باي/,
    /^وداعا/,
    /^وداعاً/,
    /^إلى اللقاء/,
    /^إلى اللقاء/,
    /^شكرا لك/,
    /^شكراً لك/,
    /^شكرا لكم/,
    /^شكراً لكم/
];

// Natural response templates
const GREETING_RESPONSES = [
    "هلا! كيف حالك؟ 😊",
    "أهلاً وسهلاً! كيف إيدك؟",
    "هلاو! شو الأخبار؟",
    "مرحبا! كيف الحال؟",
    "أهلا! كيفك؟",
    "هلا! شو أخبارك؟",
    "مرحبا! كيف إيدك؟",
    "أهلاً! شو الأخبار؟"
];

const CASUAL_RESPONSES = [
    "العفو! 😊",
    "تسلم!",
    "الله يسلمك!",
    "مشكور!",
    "أهلا وسهلا!",
    "تمام!",
    "ممتاز! 👍",
    "رائع!",
    "جميل! 😊"
];

const FAREWELL_RESPONSES = [
    "مع السلامة! 😊",
    "سلام!",
    "إلى اللقاء!",
    "باي! 👋",
    "وداعاً!",
    "مع السلامة! أتمنى أن أكون ساعدتك"
];

const MATH_HELP_RESPONSES = [
    "أنا هنا لمساعدتك في الرياضيات! ما السؤال؟",
    "أنا جاهز لمساعدتك في الرياضيات! شو السؤال؟",
    "أنا هنا لمساعدتك! ما المشكلة الرياضية؟",
    "أنا جاهز! ما السؤال الرياضي؟",
    "أنا هنا لمساعدتك في الرياضيات! ما المشكلة؟"
];

function detectIntent(message) {
    const lowerMessage = message.toLowerCase().trim();
    
    // Check for greetings
    if (GREETING_PATTERNS.some(pattern => pattern.test(lowerMessage))) {
        return 'greeting';
    }
    
    // Check for casual responses
    if (CASUAL_PATTERNS.some(pattern => pattern.test(lowerMessage))) {
        return 'casual';
    }
    
    // Check for farewells
    if (FAREWELL_PATTERNS.some(pattern => pattern.test(lowerMessage))) {
        return 'farewell';
    }
    
    // Check if it's a math question (contains math keywords or symbols)
    const mathKeywords = ['حل', 'سؤال', 'مسألة', 'معادلة', 'تكامل', 'تفاضل', 'جذر', 'قوة', 'ضرب', 'قسمة', 'جمع', 'طرح', '+', '-', '*', '/', '=', 'x', 'y', '∫', '√', '²', '³'];
    if (mathKeywords.some(keyword => lowerMessage.includes(keyword))) {
        return 'math';
    }
    
    // Check if it's a question (contains question words)
    const questionWords = ['كيف', 'ما', 'ماذا', 'أين', 'متى', 'لماذا', 'من', 'أي', 'هل', '؟', '?'];
    if (questionWords.some(word => lowerMessage.includes(word))) {
        return 'question';
    }
    
    return 'general';
}

function getNaturalResponse(intent, message = '') {
    switch (intent) {
        case 'greeting':
            return GREETING_RESPONSES[Math.floor(Math.random() * GREETING_RESPONSES.length)] + 
                   ' ' + MATH_HELP_RESPONSES[Math.floor(Math.random() * MATH_HELP_RESPONSES.length)];
        
        case 'casual':
            return CASUAL_RESPONSES[Math.floor(Math.random() * CASUAL_RESPONSES.length)];
        
        case 'farewell':
            return FAREWELL_RESPONSES[Math.floor(Math.random() * FAREWELL_RESPONSES.length)];
        
        case 'question':
            return "أنا هنا لمساعدتك! ما السؤال الرياضي الذي تريد حله؟";
        
        case 'general':
            return "أنا المعلم الذكي! كيف يمكنني مساعدتك في الرياضيات اليوم؟";
        
        default:
            return "أهلاً! كيف يمكنني مساعدتك في الرياضيات؟";
    }
}

function initializeGeminiChatbot() {
    const chatContainer = document.getElementById('chatbotMessages');
    const messageInput = document.getElementById('chatbotInput');
    const sendButton = document.getElementById('sendBtn');
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const voiceButton = document.getElementById('voiceButton');

    function addMessage(type, content, fileData = null) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${type}-message`;
        
        let contentHtml = content.replace(/\n/g, '<br>');
        
        // Add file preview if file data exists
        if (fileData) {
            if (fileData.type.startsWith('image/')) {
                contentHtml = `
                    <div class="file-preview">
                        <img src="${fileData.url}" alt="Uploaded image" style="max-width: 200px; max-height: 200px; border-radius: 8px;">
                        <div class="file-info">
                            <span class="file-name">${fileData.name}</span>
                            <span class="file-size">${(fileData.size / 1024).toFixed(1)} KB</span>
                        </div>
                    </div>
                    <div class="message-text">${content}</div>
                `;
            } else {
                contentHtml = `
                    <div class="file-preview">
                        <div class="file-icon">
                            <i class="fas fa-file"></i>
                        </div>
                        <div class="file-info">
                            <span class="file-name">${fileData.name}</span>
                            <span class="file-size">${(fileData.size / 1024).toFixed(1)} KB</span>
                        </div>
                    </div>
                    <div class="message-text">${content}</div>
                `;
            }
        }
        
        messageElement.innerHTML = `
            <div class="message-header">
                <span class="message-sender">${type === 'bot' ? '🤖 المعلم الذكي' : '👤 أنت'}</span>
                <span class="message-time">${new Date().toLocaleTimeString('ar-SA', {hour:'2-digit',minute:'2-digit'})}</span>
            </div>
            <div class="message-content">${contentHtml}</div>
        `;
        chatContainer.appendChild(messageElement);
        setTimeout(() => { chatContainer.scrollTop = chatContainer.scrollHeight; }, 100);
    }

    // أضف رسالة ترحيبية تلقائية عند فتح الشات
    addMessage('bot', 'هلا! أنا المعلم الذكي 😊 كيف يمكنني مساعدتك في الرياضيات؟');

    // دالة مساعدة للتحقق من منطقية الرد
    function isValidGeminiResponse(response) {
        if (!response) return false;
        const genericPhrases = [
            'أنا هنا لمساعدتك',
            'كيف يمكنني مساعدتك',
            'يرجى توضيح السؤال',
            'لم أفهم',
            'عذراً',
            'لا أستطيع',
            'أحتاج مزيدًا من التفاصيل',
            'يرجى إعادة صياغة السؤال'
        ];
        if (response.length < 10) return false;
        for (let phrase of genericPhrases) {
            if (response.includes(phrase)) return false;
        }
        return true;
    }

    // عدل دالة sendToGemini لتعيد المحاولة تلقائياً إذا كان الرد غير منطقي
    async function sendToGemini(userMessage, fileData = null, retryCount = 0) {
        try {
            let requestBody = {
                contents: [{
                    parts: [{ text: userMessage }]
                }]
            };
            if (fileData) {
                if (fileData.type.startsWith('image/')) {
                    const imagePrompt = userMessage || `اقرأ الصورة بدقة. اكتب التكامل أو المعادلة كما هي مكتوبة في الصورة بالضبط. ثم اكتب الحل باختصار شديد. مثال: "التكامل: ∫₀¹ (x² - 8x) dx" ثم "الحل: -11/3" فقط.`;
                    requestBody.contents[0].parts[0].text = imagePrompt;
                    requestBody.contents[0].parts.push({
                        inline_data: {
                            mime_type: fileData.type,
                            data: fileData.base64
                        }
                    });
                } else {
                    requestBody.contents[0].parts[0].text += `\n\nملف مرفق: ${fileData.name} (${fileData.type})`;
                }
            }
            const res = await fetch(GEMINI_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${GEMINI_API_KEY}`
                },
                body: JSON.stringify(requestBody)
            });
            const data = await res.json();
            let responseText = '';
            if (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
                responseText = data.candidates[0].content.parts.map(p => p.text).join('\n');
            } else if (data.error && data.error.message) {
                console.error('Gemini API error:', data.error);
                return 'حدث خطأ أثناء معالجة الطلب. يرجى المحاولة لاحقاً.';
            } else {
                console.error('Unexpected Gemini API response:', data);
                return 'لم أستطع معالجة الرد من Gemini API.';
            }
            // تحقق من منطقية الرد، إذا لم يكن منطقياً أعد المحاولة حتى 3 مرات
            if (!isValidGeminiResponse(responseText) && retryCount < 3) {
                console.warn('رد غير منطقي، إعادة المحاولة...', {responseText, retryCount});
                await new Promise(r => setTimeout(r, 800)); // انتظر قليلاً قبل إعادة المحاولة
                return await sendToGemini(userMessage, fileData, retryCount + 1);
            }
            if (!isValidGeminiResponse(responseText)) {
                return 'عذراً، لم أتمكن من فهم سؤالك أو حل المسألة بدقة. حاول إعادة صياغة السؤال أو أرسل صورة أو تفاصيل أوضح.';
            }
            return responseText;
        } catch (e) {
            console.error('Fetch or processing error:', e);
            return 'حدث خطأ في الاتصال أو المعالجة. تحقق من الكونسول.';
        }
    }

    async function handleSend(fileData = null) {
        const message = messageInput.value.trim();
        if (!message && !fileData) return;
        
        const displayMessage = message || (fileData ? `تم رفع ملف: ${fileData.name}` : '');
        addMessage('user', displayMessage, fileData);
        messageInput.value = '';
        
        // أضف مؤشر الكتابة فقط بدون حذف أي عنصر
        const typingElement = document.createElement('div');
        typingElement.className = 'message bot-message typing-indicator';
        typingElement.innerHTML = `
            <div class="message-header">
                <span class="message-sender">🤖 المعلم الذكي</span>
                <span class="message-time">جاري الكتابة...</span>
            </div>
            <div class="message-content"><span style="color:#888">جاري الكتابة...</span></div>
        `;
        chatContainer.appendChild(typingElement);
        setTimeout(() => { chatContainer.scrollTop = chatContainer.scrollHeight; }, 100);
        
        const response = await sendToGemini(message || 'حلل هذه الصورة بدقة وأعطني الحل مباشرة', fileData);
        
        // احذف فقط مؤشر الكتابة (typing-indicator)
        const typing = chatContainer.querySelector('.typing-indicator');
        if (typing) typing.remove();
        addMessage('bot', response);
    }

    // File upload handling
    if (uploadButton && fileInput) {
        uploadButton.addEventListener('click', () => {
            fileInput.click();
        });
        fileInput.addEventListener('change', async (event) => {
            const file = event.target.files[0];
            if (!file) return;

            // Check file size (max 10MB)
            if (file.size > 10 * 1024 * 1024) {
                showNotification('حجم الملف كبير جداً. الحد الأقصى 10 ميجابايت.', 'error');
                return;
            }

            // Check file type
            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!allowedTypes.includes(file.type)) {
                showNotification('نوع الملف غير مدعوم. الأنواع المدعومة: صور، PDF، نص، Word.', 'error');
                return;
            }

            try {
                // Convert file to base64 for API
                const base64 = await fileToBase64(file);
                const fileData = {
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    base64: base64.split(',')[1], // Remove data URL prefix
                    url: base64 // Keep full URL for preview
                };

                await handleSend(fileData);
            } catch (error) {
                showNotification('خطأ في رفع الملف. حاول مرة أخرى.', 'error');
            }

            // Clear the input
            fileInput.value = '';
        });
    }

    // Voice input handling (placeholder for future implementation)
    if (voiceButton) {
        voiceButton.addEventListener('click', () => {
            showNotification('ميزة الصوت ستكون متاحة قريباً!', 'info');
        });
    }

    if (sendButton) {
        sendButton.onclick = () => handleSend();
    }
    if (messageInput) {
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        });
    }
}

// تحويل الملف إلى base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = err => reject(err);
      reader.readAsDataURL(file);
    });
  }
  
  uploadButton.addEventListener('click', async () => {
    const files = fileInput.files;
    for (let file of files) {
      try {
        const url = await fileToBase64(file);
        // ترسل رسالة للمستخدم مع المعطيات التالية للعرض
        addMessage('user', '', {
          name: file.name,
          type: file.type,
          size: file.size,
          url: url
        });
        // هنا ممكن تبعت url للبوت أو السيرفر حسب تصميمك
        await handleSend({ name: file.name, type: file.type, size: file.size, url });
      } catch (e) {
        console.error('خطأ في قراءة الملف:', e);
      }
    }
    fileInput.value = ''; // تفريغ الاختيار
  });  

// ====== دوال أزرار التنقل ======
function openSettings() {
  // ... هنا من المفترض فتح نافذة الإعدادات
  alert('فتح الإعدادات');
}
function showProgress() {
  // ... هنا من المفترض عرض التقدم
  alert('عرض التقدم');
}
function createAccount() {
  // ... هنا من المفترض فتح نافذة إنشاء حساب
  alert('إنشاء حساب جديد');
}
function openChatbot() {
  // ... هنا من المفترض فتح بوت الدردشة
  alert('فتح بوت الدردشة');
}

// ====== إضافة مستمعي الأحداث للأزرار ======
document.addEventListener('DOMContentLoaded', function() {
  // أزرار التنقل
  const settingsBtn = document.getElementById('settings-btn');
  const progressBtn = document.getElementById('progress-btn');
  const createAccountBtn = document.getElementById('create-account-btn');
  const chatbotBtn = document.getElementById('chatbot-btn');

  if (settingsBtn) {
    settingsBtn.addEventListener('click', openSettings);
  } else {
    console.warn('زر الإعدادات غير موجود في DOM');
  }
  if (progressBtn) {
    progressBtn.addEventListener('click', showProgress);
  } else {
    console.warn('زر التقدم غير موجود في DOM');
  }
  if (createAccountBtn) {
    createAccountBtn.addEventListener('click', createAccount);
  } else {
    console.warn('زر إنشاء الحساب غير موجود في DOM');
  }
  if (chatbotBtn) {
    chatbotBtn.addEventListener('click', openChatbot);
  } else {
    console.warn('زر بوت الدردشة غير موجود في DOM');
  }

  // ====== عرض بيانات المستخدم في الملف الشخصي ======
  function renderProfile() {
    const nameEl  = document.getElementById('profilename');
    const emailEl = document.getElementById('profileemail');
    const dateEl  = document.getElementById('profiledate');
    const raw     = localStorage.getItem('currentUser');
    const user    = raw ? JSON.parse(raw) : null;
  
    // أضف تحقق قبل التعيين
    if (user) {
      if (nameEl)  nameEl.textContent  = user.name;
      if (emailEl) emailEl.textContent = user.email;
      if (dateEl)  dateEl.textContent  = new Date(user.createdAt).toLocaleDateString('ar-EG');
    } else {
      if (nameEl)  nameEl.textContent  = 'اسم عربي تجريبي';
      if (emailEl) emailEl.textContent = 'test@example.com';
      if (dateEl)  dateEl.textContent  = new Date().toLocaleDateString('ar-EG');
    }
  }
  renderProfile();  

  // ... استدعاء بوت الدردشة (موجود مسبقاً)
  initializeGeminiChatbot();
});

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    setTimeout(() => { notification.classList.add('show'); }, 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => { notification.remove(); }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        'success': 'fa-check-circle',
        'error': 'fa-exclamation-circle',
        'warning': 'fa-exclamation-triangle',
        'info': 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

ddocument.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const filePreview = document.getElementById('filePreview');
    if (!fileInput || !filePreview) return;
  
    fileInput.addEventListener('change', function(event) {
      const files = Array.from(event.target.files);
      filePreview.innerHTML = '';
      files.forEach(file => {
        if (file.type.startsWith('image/')) {
          const img = document.createElement('img');
          img.src = URL.createObjectURL(file);
          img.style.maxWidth = '80px';
          img.style.maxHeight = '80px';
          img.alt = file.name;
          img.style.marginLeft = '8px';
          filePreview.appendChild(img);
        } else {
          const icon = document.createElement('span');
          icon.textContent = '📄';
          icon.style.marginLeft = '4px';
          filePreview.appendChild(icon);
          filePreview.appendChild(document.createTextNode(' ' + file.name));
        }
      });
    });
  });
