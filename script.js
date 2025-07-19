// Global Variables
let currentLanguage = 'ar';
let currentUser = null;
let isLoggedIn = false;

// Language Translations
const translations = {
    ar: {
        // Navigation
        'nav-home': 'الرئيسية',
        'nav-courses': 'الدورات',
        'nav-about': 'حول المعلم',
        'nav-contact': 'تواصل معنا',
        
        // Hero Section
        'hero-title': 'تعلم الرياضيات بطريقة حديثة وممتعة',
        'hero-subtitle': 'منصة تعليمية متطورة مع بوت ذكاء اصطناعي متقدم يساعدك في فهم كل شيء',
        'start-learning': 'ابدأ التعلم الآن',
        'watch-demo': 'شاهد العرض التوضيحي',
        
        // Stats
        'stat-lessons': 'درس',
        'stat-students': 'طالب',
        'stat-rating': 'تقييم',
        
        // Floating Cards
        'ai-assistant': 'مساعد ذكي',
        'video-lessons': 'دروس فيديو',
        'interactive': 'تفاعلي',
        
        // Courses
        'courses-title': 'الدورات التعليمية المتطورة',
        'courses-subtitle': 'دورات شاملة ومتدرجة من المبتدئ إلى المتقدم',
        'calculus1-title': 'كالكولاس 1',
        'calculus1-desc': 'أساسيات التفاضل والتكامل بطريقة سهلة وممتعة',
        'calculus2-title': 'كالكولاس 2',
        'calculus2-desc': 'التكاملات المتعددة والمتسلسلات والتفاضل المتقدم',
        'calculus3-title': 'كالكولاس 3',
        'calculus3-desc': 'المتجهات والتفاضل المتعدد والهندسة التفاضلية',
        'linear-title': 'الجبر الخطي',
        'linear-desc': 'المصفوفات والفضاءات المتجهية والتحويلات الخطية',
        '50-lessons': '50 درس',
        '45-lessons': '45 درس',
        '40-lessons': '40 درس',
        '35-lessons': '35 درس',
        '20-hours': '20 ساعة',
        '18-hours': '18 ساعة',
        '16-hours': '16 ساعة',
        '14-hours': '14 ساعة',
        
        // About
        'about-title': 'حول المعلم أنس أبو زهرة',
        'about-desc': 'مهندس ومدرس رياضيات متخصص في تدريس الكالكولاس والرياضيات الجامعية. يهدف إلى تبسيط المفاهيم المعقدة وجعل الرياضيات سهلة الفهم للجميع من خلال تقنيات تعليمية حديثة.',
        'experience': 'خبرة 10+ سنوات',
        'students': '50,000+ طالب',
        'rating': 'تقييم 4.9/5',
        
        // Contact
        'contact-title': 'تواصل معنا',
        'contact-subtitle': 'تابعنا على وسائل التواصل الاجتماعي',
        'youtube': 'يوتيوب',
        'facebook': 'فيسبوك',
        'instagram': 'انستغرام',
        'whatsapp': 'واتساب',
        
        // AI Chatbot
        'ai-assistant-name': 'المعلم الذكي',
        'ai-status-online': 'متصل',
        
        // Auth
        'login': 'تسجيل الدخول',
        'register': 'إنشاء حساب',
        'logout': 'تسجيل الخروج',
        'profile': 'الملف الشخصي',
        'progress': 'التقدم',
        'settings': 'الإعدادات',
        
        // Forms
        'login-title': 'تسجيل الدخول',
        'register-title': 'إنشاء حساب جديد',
        'email': 'البريد الإلكتروني',
        'password': 'كلمة المرور',
        'full-name': 'الاسم الكامل',
        'confirm-password': 'تأكيد كلمة المرور',
        'verification-code': 'رمز التحقق',
        'verify': 'تحقق',
        'or': 'أو',
        'login-google': 'تسجيل الدخول بـ Google',
        'register-google': 'إنشاء حساب بـ Google',
        'no-account': 'ليس لديك حساب؟',
        'have-account': 'لديك حساب بالفعل؟',
        
        // Profile
        'edit-profile': 'تعديل الملف الشخصي',
        'save-changes': 'حفظ التغييرات',
        'profile-picture': 'الصورة الشخصية',
        'change-picture': 'تغيير الصورة',
        'grade-level': 'المستوى الدراسي',
        'account-created': 'تاريخ إنشاء الحساب',
        'last-activity': 'آخر نشاط',
        
        // Progress
        'learning-progress': 'التقدم في التعلم',
        'lessons-completed': 'الدروس المكتملة',
        'total-lessons': 'إجمالي الدروس',
        'time-spent': 'الوقت المستغرق',
        'recent-lessons': 'آخر الدروس',
        'progress-chart': 'رسم بياني للتقدم',
        'achievements': 'الإنجازات',
        'streak-days': 'أيام متتالية',
        
        // Settings
        'account-settings': 'إعدادات الحساب',
        'change-password': 'تغيير كلمة المرور',
        'current-password': 'كلمة المرور الحالية',
        'new-password': 'كلمة المرور الجديدة',
        'confirm-new-password': 'تأكيد كلمة المرور الجديدة',
        'notifications': 'الإشعارات',
        'email-notifications': 'إشعارات البريد الإلكتروني',
        'push-notifications': 'الإشعارات الفورية',
        'theme': 'المظهر',
        'light-mode': 'الوضع الفاتح',
        'dark-mode': 'الوضع الداكن',
        'delete-account': 'حذف الحساب',
        'delete-account-warning': 'تحذير: لا يمكن التراجع عن حذف الحساب',
        'apply-changes': 'تطبيق التغييرات'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-courses': 'Courses',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Learn Mathematics in a Modern and Fun Way',
        'hero-subtitle': 'Advanced educational platform with AI assistant to help you understand everything',
        'start-learning': 'Start Learning Now',
        'watch-demo': 'Watch Demo',
        
        // Stats
        'stat-lessons': 'Lessons',
        'stat-students': 'Students',
        'stat-rating': 'Rating',
        
        // Floating Cards
        'ai-assistant': 'Smart Assistant',
        'video-lessons': 'Video Lessons',
        'interactive': 'Interactive',
        
        // Courses
        'courses-title': 'Advanced Educational Courses',
        'courses-subtitle': 'Comprehensive courses from beginner to advanced',
        'calculus1-title': 'Calculus 1',
        'calculus1-desc': 'Fundamentals of differentiation and integration in an easy and fun way',
        'calculus2-title': 'Calculus 2',
        'calculus2-desc': 'Multiple integrals, series, and advanced differentiation',
        'calculus3-title': 'Calculus 3',
        'calculus3-desc': 'Vectors, multivariable calculus, and differential geometry',
        'linear-title': 'Linear Algebra',
        'linear-desc': 'Matrices, vector spaces, and linear transformations',
        '50-lessons': '50 Lessons',
        '45-lessons': '45 Lessons',
        '40-lessons': '40 Lessons',
        '35-lessons': '35 Lessons',
        '20-hours': '20 Hours',
        '18-hours': '18 Hours',
        '16-hours': '16 Hours',
        '14-hours': '14 Hours',
        
        // About
        'about-title': 'About Teacher Anas Abu Zahra',
        'about-desc': 'Engineer and mathematics teacher specialized in teaching calculus and university mathematics. Aims to simplify complex concepts and make mathematics easy to understand for everyone through modern educational techniques.',
        'experience': '10+ Years Experience',
        'students': '50,000+ Students',
        'rating': '4.9/5 Rating',
        
        // Contact
        'contact-title': 'Contact Us',
        'contact-subtitle': 'Follow us on social media',
        'youtube': 'YouTube',
        'facebook': 'Facebook',
        'instagram': 'Instagram',
        'whatsapp': 'WhatsApp',
        
        // AI Chatbot
        'ai-assistant-name': 'Smart Teacher',
        'ai-status-online': 'Online',
        
        // Auth
        'login': 'Login',
        'register': 'Register',
        'logout': 'Logout',
        'profile': 'Profile',
        'progress': 'Progress',
        'settings': 'Settings',
        
        // Forms
        'login-title': 'Login',
        'register-title': 'Create New Account',
        'email': 'Email',
        'password': 'Password',
        'full-name': 'Full Name',
        'confirm-password': 'Confirm Password',
        'verification-code': 'Verification Code',
        'verify': 'Verify',
        'or': 'Or',
        'login-google': 'Login with Google',
        'register-google': 'Register with Google',
        'no-account': "Don't have an account?",
        'have-account': 'Already have an account?',
        
        // Profile
        'edit-profile': 'Edit Profile',
        'save-changes': 'Save Changes',
        'profile-picture': 'Profile Picture',
        'change-picture': 'Change Picture',
        'grade-level': 'Grade Level',
        'account-created': 'Account Created',
        'last-activity': 'Last Activity',
        
        // Progress
        'learning-progress': 'Learning Progress',
        'lessons-completed': 'Lessons Completed',
        'total-lessons': 'Total Lessons',
        'time-spent': 'Time Spent',
        'recent-lessons': 'Recent Lessons',
        'progress-chart': 'Progress Chart',
        'achievements': 'Achievements',
        'streak-days': 'Streak Days',
        
        // Settings
        'account-settings': 'Account Settings',
        'change-password': 'Change Password',
        'current-password': 'Current Password',
        'new-password': 'New Password',
        'confirm-new-password': 'Confirm New Password',
        'notifications': 'Notifications',
        'email-notifications': 'Email Notifications',
        'push-notifications': 'Push Notifications',
        'theme': 'Theme',
        'light-mode': 'Light Mode',
        'dark-mode': 'Dark Mode',
        'delete-account': 'Delete Account',
        'delete-account-warning': 'Warning: Account deletion cannot be undone',
        'apply-changes': 'Apply Changes'
    }
};
// تخزين بيانات وهمية مؤقتًا لاختبار صفحة الملف الشخصي
localStorage.setItem("currentUser", JSON.stringify({
    name: "أحمد رائد",
    email: "ahmad@example.com",
    grade: "رابع جامعي",
    createdAt: "2024-10-01T12:34:56Z"
  }));  

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    bindAllButtonEvents();
    renderBasicProfileInfo();
    // ربط زر الملف الشخصي
    const profileLink = document.querySelector('a[href="#profile"]');
    if (profileLink) {
        profileLink.onclick = function(e) {
            e.preventDefault();
            showProfileModal();
        };
    }
    // ربط زر التقدم
    const progressLink = document.querySelector('a[href="#progress"]');
    if (progressLink) {
        progressLink.onclick = function(e) {
            e.preventDefault();
            showProgressModal();
        };
    }
    // ربط زر الإعدادات
    const settingsLink = document.querySelector('a[href="#settings"]');
    if (settingsLink) {
        settingsLink.onclick = function(e) {
            e.preventDefault();
            showSettingsModal();
        };
    }
});

function renderBasicProfileInfo() {
    const raw = localStorage.getItem('currentUser');
    const user = raw ? JSON.parse(raw) : null;
  
    if (!user) return;

    const nameSpan = document.getElementById('profile-name');
    const emailSpan = document.getElementById('profile-email');
    const gradeSpan = document.getElementById('profile-grade');
    const dateSpan = document.getElementById('profile-created-at');
  
    if (nameSpan) nameSpan.textContent = user.name || '';
    if (emailSpan) emailSpan.textContent = user.email || '';
    if (gradeSpan) gradeSpan.textContent = user.grade || '';
    if (dateSpan) dateSpan.textContent = new Date(user.createdAt).toLocaleDateString();
}

// ==========================

function initializeApp() {
    // Check for existing user session
    checkUserSession();
    
    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Initialize loading screen
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 2000);
    
    // Initialize header scroll effect
    initializeHeaderScroll();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize counters
    initializeCounters();
    
    // Initialize user system
    initializeUserSystem();
    
    // Initialize language system
    initializeLanguageSystem();
    
    // Initialize modals with enhanced system
    initializeModalsEnhanced();
    
    // Initialize course progress
    initializeCourseProgress();
    
    // Initialize floating cards animation
    initializeFloatingCards();
    
    // Initialize particles effect
    initializeParticles();
    
    // Initialize chatbot functions
    initializeChatbotFunctions();
    
    // Bind dropdown events immediately (for both logged in and logged out users)
    bindDropdownEvents();
}

// ========== نظام المستخدم المحسن ========== //

// بيانات المستخدمين (محفوظة في LocalStorage)
function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// المستخدم الحالي (محفوظ في LocalStorage)
function getCurrentUser() {
    const userData = localStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
}

function setCurrentUser(user) {
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('lastActivity', new Date().toISOString());
    } else {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('lastActivity');
    }
}

// Check if user is logged in
function isUserLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true' && getCurrentUser() !== null;
}

// التحقق من وجود جلسة مستخدم محفوظة
function checkUserSession() {
    const user = getCurrentUser();
    const isLoggedIn = isUserLoggedIn();
    
    console.log('Checking user session...');
    console.log('User data:', user);
    console.log('Is logged in:', isLoggedIn);
    
    if (!user || !isLoggedIn) {
        console.log('No valid session found');
        setCurrentUser(null);
        updateUserUI();
        return;
    }
    
    const users = getUsers();
    const validUser = users.find(u => u.email === user.email);
    
    if (validUser) {
        setCurrentUser(validUser);
        console.log('✅ Valid session found, user:', validUser.username);
    } else {
        console.warn('⚠️ User not found in users DB, but keeping currentUser for now');
        // لا تسوي setCurrentUser(null)
    }
    
    updateUserUI();
    
}

// تحديث واجهة المستخدم بعد تسجيل الدخول/الخروج
function updateUserUI() {
    const user = getCurrentUser();
    const userBtn = document.querySelector('.user-btn');
    const userNameSpan = document.getElementById('userName');
    const dropdownUserName = document.getElementById('dropdownUserName');
    const dropdownUserEmail = document.getElementById('dropdownUserEmail');
    const userInfo = document.getElementById('userInfo');
    const dropdownItems = document.querySelectorAll('.user-dropdown .dropdown-item');
    const logoutBtn = document.querySelector('.logout-btn');
    
    if (user && isUserLoggedIn()) {
        // User is logged in - show user info
        userBtn.classList.remove('login');
        userBtn.classList.add('logged-in');
        userNameSpan.textContent = user.username;
        dropdownUserName.textContent = user.username;
        dropdownUserEmail.textContent = user.email;
        userInfo.style.display = 'flex';
        
        // Show dropdown items
        dropdownItems.forEach(item => item.style.display = 'flex');
        logoutBtn.style.display = 'flex';
        
        // Set user button to open dropdown
        userBtn.onclick = toggleUserMenu;
        
        // Bind dropdown events
        bindDropdownEvents();
        
        // Show progress section when logged in
        toggleProgressSection();
        
    } else {
        // User is not logged in - show login button
        userBtn.classList.remove('logged-in');
        userBtn.classList.add('login');
        userNameSpan.textContent = translations[currentLanguage]['login'];
        dropdownUserName.textContent = '';
        dropdownUserEmail.textContent = '';
        userInfo.style.display = 'none';
        
        // Hide dropdown items
        dropdownItems.forEach(item => item.style.display = 'none');
        logoutBtn.style.display = 'none';
        
        // Set user button to open login modal
        userBtn.onclick = showLoginModal;

        // Hide progress section when not logged in
        toggleProgressSection();
    }
}
function toggleProgressSection() {
    const progressSection = document.getElementById('progress');
    if (!progressSection) return;
    if (isUserLoggedIn()) {
        progressSection.style.display = '';
    } else {
        progressSection.style.display = 'none';
    }
}

// Bind dropdown menu events
function bindDropdownEvents() {
    // Profile link
    const profileLink = document.querySelector('a[href="#profile"]');
    if (profileLink) {
        profileLink.onclick = function(e) {
            e.preventDefault();
            showProfileModal();
        };
    }
    
    // Progress link
    const progressLink = document.querySelector('a[href="#progress"]');
    if (progressLink) {
        progressLink.onclick = function(e) {
            e.preventDefault();
            showProgressModal();
        };
    }
    
    // Settings link
    const settingsLink = document.querySelector('a[href="#settings"]');
    if (settingsLink) {
        settingsLink.onclick = function(e) {
            e.preventDefault();
            showSettingsModal();
        };
    }
    
    // Logout button
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.onclick = logout;
    }
}

// تبديل القائمة المنسدلة للمستخدم
function toggleUserMenu() {
    const user = getCurrentUser();
    if (user) {
        const dropdown = document.getElementById('userDropdown');
        const userMenu = document.getElementById('userMenu');
        
        // Toggle dropdown
        dropdown.classList.toggle('show');
        
        // Position dropdown properly
        if (dropdown.classList.contains('show')) {
            positionDropdown(dropdown, userMenu);
        }
    } else {
        showLoginModal();
    }
}

// Position dropdown properly
function positionDropdown(dropdown, userMenu) {
    const rect = userMenu.getBoundingClientRect();
    const dropdownRect = dropdown.getBoundingClientRect();
    
    // Reset positioning
    dropdown.style.top = '';
    dropdown.style.left = '';
    dropdown.style.right = '';
    
    // Check if dropdown goes off-screen
    const viewportWidth = window.innerWidth;
    const dropdownWidth = dropdownRect.width;
    
    if (rect.left + dropdownWidth > viewportWidth) {
        // Position from right edge
        dropdown.style.right = '0';
    } else {
        // Position from left edge
        dropdown.style.left = '0';
    }
}

// إغلاق القائمة المنسدلة
function closeUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.remove('show');
}

// إظهار نافذة تسجيل الدخول
function showLoginModal() {
    console.log('showLoginModal called');
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        loginModal.classList.add('show');
        console.log('Login modal shown');
    } else {
        console.error('Login modal not found');
    }
}

function closeLoginModal() {
    console.log('closeLoginModal called');
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        loginModal.classList.remove('show');
        console.log('Login modal closed');
    }
    // Clear form fields when closing
    const loginInput = document.getElementById('loginInput');
    const passwordInput = document.getElementById('loginPassword');
    if (loginInput) loginInput.value = '';
    if (passwordInput) passwordInput.value = '';
}

// إظهار نافذة التسجيل
function showRegisterModal() {
    console.log('showRegisterModal called');
    const registerModal = document.getElementById('registerModal');
    if (registerModal) {
        registerModal.classList.add('show');
        console.log('Register modal shown');
    } else {
        console.error('Register modal not found');
    }
}

function closeRegisterModal() {
    console.log('closeRegisterModal called');
    const registerModal = document.getElementById('registerModal');
    if (registerModal) {
        registerModal.classList.remove('show');
        console.log('Register modal closed');
    }
    // Clear form fields when closing
    const usernameInput = document.getElementById('registerUsername');
    const emailInput = document.getElementById('registerEmail');
    const passwordInput = document.getElementById('registerPassword');
    const confirmInput = document.getElementById('registerConfirm');
    if (usernameInput) usernameInput.value = '';
    if (emailInput) emailInput.value = '';
    if (passwordInput) passwordInput.value = '';
    if (confirmInput) confirmInput.value = '';
}

// Modal switching functions
function switchToRegister() {
    console.log('switchToRegister called');
    closeLoginModal();
    setTimeout(() => {
        showRegisterModal();
    }, 100); // Small delay to ensure smooth transition
}

function switchToLogin() {
    console.log('switchToLogin called');
    closeRegisterModal();
    setTimeout(() => {
        showLoginModal();
    }, 100); // Small delay to ensure smooth transition
}

// تسجيل الدخول
function handleLogin(event) {
    event.preventDefault();
    const loginInput = document.getElementById('loginInput');
    const passwordInput = document.getElementById('loginPassword');
    
    const loginValue = loginInput.value.trim();
    const password = passwordInput.value;
    
    // تحقق من الحقول المطلوبة فقط
    if (!loginValue || !password) {
        showNotification('يرجى تعبئة جميع الحقول', 'error');
        return;
    }
    
    const users = getUsers();
    const user = users.find(u => (u.email === loginValue || u.username === loginValue) && u.password === password);
    
    if (user) {
        // Clear form fields first
        loginInput.value = '';
        passwordInput.value = '';
        
        // Set user session
        setCurrentUser(user);
        
        // Close modal
        closeLoginModal();
        
        // Update UI
        updateUserUI();
        
        // Show success message
        showNotification('تم تسجيل الدخول بنجاح', 'success');
        
        console.log('Login successful:', user.username);
        console.log('Session stored:', isUserLoggedIn());
        
    } else {
        showNotification('بيانات الدخول غير صحيحة', 'error');
    }
}

// Test function for manual testing
function testRegisterButton() {
    console.log('=== TESTING REGISTER BUTTON ===');
    
    const registerForm = document.getElementById('registerForm');
    const registerButton = registerForm?.querySelector('.btn-primary');
    
    console.log('Register form:', registerForm);
    console.log('Register button:', registerButton);
    
    if (registerButton) {
        console.log('Button is clickable, testing click...');
        registerButton.style.backgroundColor = 'red';
        setTimeout(() => {
            registerButton.style.backgroundColor = '';
        }, 1000);
        
        // Simulate a click
        registerButton.click();
    } else {
        console.error('Register button not found!');
    }
}

// Make it available globally
window.testRegisterButton = testRegisterButton;

// ========== MODAL SYSTEM - COMPLETE REWRITE ========== //

// Global modal state management
let currentModal = null;

// Enhanced modal functions with proper error handling
function showLoginModal() {
    console.log('🔄 showLoginModal called');
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        // Check if user is already logged in
        const user = getCurrentUser();
        if (user && isUserLoggedIn()) {
            showNotification(`مرحباً بعودتك، ${user.username}! 😊`, 'success');
            return;
        }
        
        // Close any currently open modal
        closeCurrentModal();
        
        // Show login modal
        loginModal.classList.add('show');
        currentModal = 'login';
        console.log('✅ Login modal shown successfully');
        
        // Focus on first input
        setTimeout(() => {
            const firstInput = loginModal.querySelector('input');
            if (firstInput) firstInput.focus();
        }, 100);
    } else {
        console.error('❌ Login modal element not found');
    }
}

function closeLoginModal() {
    console.log('🔄 closeLoginModal called');
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        loginModal.classList.remove('show');
        if (currentModal === 'login') currentModal = null;
        console.log('✅ Login modal closed successfully');
        
        // Clear form fields
        const inputs = loginModal.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
    } else {
        console.error('❌ Login modal element not found');
    }
}

function showRegisterModal() {
    console.log('🔄 showRegisterModal called');
    const registerModal = document.getElementById('registerModal');
    if (registerModal) {
        // Close any currently open modal
        closeCurrentModal();
        
        // Show register modal
        registerModal.classList.add('show');
        currentModal = 'register';
        console.log('✅ Register modal shown successfully');
        
        // Focus on first input
        setTimeout(() => {
            const firstInput = registerModal.querySelector('input');
            if (firstInput) firstInput.focus();
        }, 100);
    } else {
        console.error('❌ Register modal element not found');
    }
}

function closeRegisterModal() {
    console.log('🔄 closeRegisterModal called');
    const registerModal = document.getElementById('registerModal');
    if (registerModal) {
        registerModal.classList.remove('show');
        if (currentModal === 'register') currentModal = null;
        console.log('✅ Register modal closed successfully');
        
        // Clear form fields
        const inputs = registerModal.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
    } else {
        console.error('❌ Register modal element not found');
    }
}

// Close any currently open modal
function closeCurrentModal() {
    if (currentModal === 'login') {
        closeLoginModal();
    } else if (currentModal === 'register') {
        closeRegisterModal();
    }
}

// Modal switching functions with smooth transitions
function switchToRegister() {
    console.log('🔄 switchToRegister called');
    closeLoginModal();
    
    // Small delay for smooth transition
    setTimeout(() => {
        showRegisterModal();
    }, 150);
}

function switchToLogin() {
    console.log('🔄 switchToLogin called');
    closeRegisterModal();
    
    // Small delay for smooth transition
    setTimeout(() => {
        showLoginModal();
    }, 150);
}

// Enhanced event binding with multiple fallbacks
function bindModalEvents() {
    console.log('🔄 Binding modal events...');
    
    // Method 1: Direct event listeners on elements
    bindDirectEvents();
    
    // Method 2: Event delegation for dynamic elements
    bindEventDelegation();
    
    // Method 3: Global click handler for modal links
    bindGlobalModalHandler();
    
    console.log('✅ Modal events bound successfully');
}

// Direct event binding
function bindDirectEvents() {
    // Bind toRegister link
    const toRegisterLink = document.getElementById('toRegister');
    if (toRegisterLink) {
        console.log('📌 Found toRegister link, binding events...');
        
        // Remove existing listeners by cloning
        const newLink = toRegisterLink.cloneNode(true);
        toRegisterLink.parentNode.replaceChild(newLink, toRegisterLink);
        
        // Add multiple event listeners
        newLink.addEventListener('click', handleToRegisterClick);
        newLink.addEventListener('mousedown', handleToRegisterClick);
        newLink.onclick = handleToRegisterClick;
        
        console.log('✅ toRegister link events bound');
    } else {
        console.error('❌ toRegister link not found');
    }
    
    // Bind toLogin link
    const toLoginLink = document.getElementById('toLogin');
    if (toLoginLink) {
        console.log('📌 Found toLogin link, binding events...');
        
        // Remove existing listeners by cloning
        const newLink = toLoginLink.cloneNode(true);
        toLoginLink.parentNode.replaceChild(newLink, toLoginLink);
        
        // Add multiple event listeners
        newLink.addEventListener('click', handleToLoginClick);
        newLink.addEventListener('mousedown', handleToLoginClick);
        newLink.onclick = handleToLoginClick;
        
        console.log('✅ toLogin link events bound');
    } else {
        console.error('❌ toLogin link not found');
    }
}

// Event delegation for dynamic elements
function bindEventDelegation() {
    document.addEventListener('click', function(e) {
        // Handle toRegister clicks
        if (e.target && e.target.id === 'toRegister') {
            console.log('🎯 toRegister clicked via event delegation');
            handleToRegisterClick(e);
        }
        
        // Handle toLogin clicks
        if (e.target && e.target.id === 'toLogin') {
            console.log('🎯 toLogin clicked via event delegation');
            handleToLoginClick(e);
        }
    });
}

// Global modal handler
function bindGlobalModalHandler() {
    document.addEventListener('click', function(e) {
        // Check if clicked element is a modal link
        if (e.target && e.target.matches && e.target.matches('a[href="#"]')) {
            const text = e.target.textContent.trim();
            if (text === 'إنشاء حساب' || text === 'Create Account') {
                console.log('🌐 toRegister clicked via global handler');
                handleToRegisterClick(e);
            } else if (text === 'تسجيل الدخول' || text === 'Login') {
                console.log('🌐 toLogin clicked via global handler');
                handleToLoginClick(e);
            }
        }
    });
}

// Event handlers
function handleToRegisterClick(e) {
    console.log('🎯 handleToRegisterClick triggered');
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    
    // Visual feedback
    if (e.target) {
        e.target.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
        setTimeout(() => {
            e.target.style.backgroundColor = '';
        }, 200);
    }
    
    // Switch to register modal
    switchToRegister();
}

function handleToLoginClick(e) {
    console.log('🎯 handleToLoginClick triggered');
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    
    // Visual feedback
    if (e.target) {
        e.target.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
        setTimeout(() => {
            e.target.style.backgroundColor = '';
        }, 200);
    }
    
    // Switch to login modal
    switchToLogin();
}

function handleRegister(event) {
    event.preventDefault();
    
    // جلب العناصر مباشرة من document
    const nameInput = document.getElementById('registerName');
    const emailInput = document.getElementById('registerEmail');
    const passwordInput = document.getElementById('registerPassword');
    const confirmInput = document.getElementById('registerConfirmPassword');

    // تحقق من وجود جميع العناصر
    if (!nameInput || !emailInput || !passwordInput || !confirmInput) {
        console.error('عناصر الإدخال مفقودة:', { 
            nameInput: !!nameInput, 
            emailInput: !!emailInput, 
            passwordInput: !!passwordInput, 
            confirmInput: !!confirmInput 
        });
        showNotification('يرجى تعبئة جميع الحقول', 'error');
        return;
    }

    // قراءة القيم مع معالجة آمنة
    const name = (nameInput.value || '').trim();
    const email = (emailInput.value || '').trim().toLowerCase();
    const password = (passwordInput.value || '').trim();
    const confirmPassword = (confirmInput.value || '').trim();

    console.log('القيم المدخلة:', { name, email, password: password ? '***' : '', confirmPassword: confirmPassword ? '***' : '' });

    // تحقق من جميع الحقول المطلوبة
    if (!name || !email || !password || !confirmPassword) {
        showNotification('يرجى تعبئة جميع الحقول', 'error');
        return;
    }

    // تحقق من تطابق كلمتي المرور
    if (password !== confirmPassword) {
        showNotification('كلمتا المرور غير متطابقتين', 'error');
        return;
    }

    // تحقق من صحة البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('يرجى إدخال بريد إلكتروني صحيح', 'error');
        return;
    }

    try {
        // تحقق من عدم تكرار البريد الإلكتروني
        const users = getUsers();
        if (users.some(u => u.email === email)) {
            showNotification('البريد الإلكتروني مستخدم بالفعل', 'error');
            return;
        }

        // تحقق من عدم تكرار اسم المستخدم
        if (users.some(u => u.username === name)) {
            showNotification('اسم المستخدم مستخدم بالفعل', 'error');
            return;
        }

        // إنشاء المستخدم الجديد
        const user = {
            username: name,
            email: email,
            password: password,
            achievements: [],
            watchedVideos: [],
            lastWatched: null,
            gradeLevel: '',
            profilePicture: '',
            createdAt: new Date().toISOString(),
            lastActivity: new Date().toISOString(),
            settings: {
                theme: 'light',
                emailNotifications: true,
                pushNotifications: true
            }
        };

        // حفظ المستخدم
        users.push(user);
        saveUsers(users);

        // مسح الحقول
        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        confirmInput.value = '';

        // تسجيل الدخول تلقائياً
        setCurrentUser(user);
        
        // إغلاق المودال وتحديث الواجهة
        if (typeof closeRegisterModal === 'function') {
            closeRegisterModal();
        }
        
        if (typeof updateUserUI === 'function') {
            updateUserUI();
        }
        
        showNotification('تم إنشاء الحساب وتسجيل الدخول بنجاح', 'success');
        console.log('Registration successful:', user.username);
        
    } catch (error) {
        console.error('خطأ في إنشاء الحساب:', error);
        showNotification('حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة مرة أخرى.', 'error');
    }
}

// تسجيل الخروج
function logout() {
    // Clear session
    setCurrentUser(null);
    
    // Close dropdown
    closeUserDropdown();
    
    // Update UI
    updateUserUI();
    
    // Show notification
    showNotification('تم تسجيل الخروج', 'info');
    
    console.log('Logout successful');
    console.log('Session cleared:', isUserLoggedIn());
}

// ========== Modal Functions ========== //

// Profile Modal
// زر اختيار صورة
const attachBtn = document.getElementById('attachBtn');
const fileInput = document.getElementById('profilePictureInput');
attachBtn.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const base64 = e.target.result;

        const user = getCurrentUser();
        if (user) {
            user.profileImage = base64;
            setCurrentUser(user);

            const users = getUsers();
            const index = users.findIndex(u => u.email === user.email);
            if (index !== -1) {
                users[index] = user;
                saveUsers(users);
            }

            showProfilePicture(base64);
        }
    };
    reader.readAsDataURL(file);
});

if (fileData) {
    if (fileData.type.startsWith('image/')) {
      content += `
        <div class="file-preview">
          <img src="${fileData.url}" alt="صورة مرفوعة" />
          <div class="file-info">${fileData.name}</div>
        </div>`;
    } else {
      content += `
        <div class="file-preview">
          <i class="fas fa-file"></i>
          <div class="file-info">${fileData.name}</div>
        </div>`;
    }
  }  

function showProfilePicture(base64) {
    const preview = document.getElementById('profilePicturePreview');
    const placeholder = document.querySelector('.profile-picture-placeholder');
    if (base64) {
        preview.src = base64;
        preview.style.display = 'block';
        if (placeholder) placeholder.style.display = 'none';
    } else {
        preview.style.display = 'none';
        if (placeholder) placeholder.style.display = 'flex';
    }
}

// عند فتح المودال
function showProfileModal() {
    const modal = document.getElementById('profileModal');
    if (!modal) return;

    const raw = localStorage.getItem('currentUser');
    const user = raw ? JSON.parse(raw) : null;

    document.getElementById('profileNameField').value = user?.fullName || '';
    document.getElementById('profileEmailField').value = user?.email || '';
    document.getElementById('profileGradeField').value = user?.gradeLevel || '';
    document.getElementById('profileDateField').value = user?.createdAt
        ? new Date(user.createdAt).toLocaleDateString('ar-EG')
        : '';

    showProfilePicture(user?.profileImage || '');
    modal.classList.add('show');
}

function closeProfileModal() {
    document.getElementById('profileModal').classList.remove('show');
}

function saveProfile() {
    const user = getCurrentUser();
    if (!user) return;

    const name = document.getElementById('profileNameField').value.trim();
    const gradeLevel = document.getElementById('profileGradeField').value.trim();
    const profileImageSrc = document.getElementById('profilePicturePreview').src;

    if (!name) {
        showNotification('يرجى تعبئة الاسم الكامل', 'error');
        return;
    }

    // Update user data
    user.username = name;
    user.gradeLevel = gradeLevel;
    user.profileImage = profileImageSrc; // 👈 أضف الصورة هنا
    user.lastActivity = new Date().toISOString();

    // Update in users array
    const users = getUsers();
    const userIndex = users.findIndex(u => u.email === user.email);
    if (userIndex !== -1) {
        users[userIndex] = user;
        saveUsers(users);
    }

    // Update current user
    setCurrentUser(user);

    // Update UI
    updateUserUI();

    // Close modal
    closeProfileModal();

    // Show success message
    showNotification('تم حفظ التغييرات بنجاح', 'success');
}
// لحفظ الصورة بعد اختيارها
document.getElementById('profilePictureInput').addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = function (e) {
      const base64 = e.target.result;
  
      // اعرض الصورة
      const preview = document.getElementById('profilePicturePreview');
      const placeholder = document.querySelector('.profile-picture-placeholder');
      preview.src = base64;
      preview.style.display = 'block';
      if (placeholder) placeholder.style.display = 'none';
  
      // احفظها للمستخدم الحالي
      const user = getCurrentUser();
      if (user) {
        user.profileImage = base64;
        setCurrentUser(user);
  
        const users = getUsers();
        const index = users.findIndex(u => u.email === user.email);
        if (index !== -1) {
          users[index] = user;
          saveUsers(users);
        }
      }
    };
    reader.readAsDataURL(file);
  });
  

// Progress Modal
function showProgressModal() {
    closeUserDropdown();
    const modal = document.getElementById('progressModal');
    const user = getCurrentUser();
    
    if (user) {
        // Calculate progress
        const totalLessons = 180; // Total lessons across all courses
        const completedLessons = user.watchedVideos ? user.watchedVideos.length : 0;
        const progressPercentage = Math.round((completedLessons / totalLessons) * 100);
        
        // Update progress display
        document.getElementById('progressPercentage').textContent = progressPercentage + '%';
        document.getElementById('completedLessons').textContent = completedLessons;
        document.getElementById('totalLessons').textContent = totalLessons;
        document.getElementById('progressBarFill').style.width = progressPercentage + '%';
        
        // Update progress circle
        updateProgressCircle(progressPercentage);
        
        // Update recent lessons
        const recentLessonsList = document.getElementById('recentLessonsList');
        recentLessonsList.innerHTML = '';
        
        if (user.watchedVideos && user.watchedVideos.length > 0) {
            const recentVideos = user.watchedVideos.slice(-5).reverse(); // Last 5 videos
            recentVideos.forEach(video => {
                const li = document.createElement('li');
                li.textContent = video;
                recentLessonsList.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = 'لا توجد دروس شاهدتها بعد';
            li.className = 'no-lessons';
            recentLessonsList.appendChild(li);
        }
        
        // Update achievements
        const achievementsList = document.getElementById('achievementsList');
        achievementsList.innerHTML = '';
        
        if (user.achievements && user.achievements.length > 0) {
            user.achievements.forEach(achievement => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-trophy"></i> ${achievement}`;
                achievementsList.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = 'لا توجد إنجازات بعد';
            li.className = 'no-achievements';
            achievementsList.appendChild(li);
        }
    }
    
    modal.classList.add('show');
}

function updateProgressCircle(percentage) {
    const circle = document.querySelector('.progress-circle');
    if (circle) {
        const degrees = (percentage / 100) * 360;
        circle.style.background = `conic-gradient(var(--primary-color) 0deg ${degrees}deg, var(--gray-200) ${degrees}deg 360deg)`;
    }
}

function closeProgressModal() {
    document.getElementById('progressModal').classList.remove('show');
}

// Settings Modal
function showSettingsModal() {
    closeUserDropdown();
    const modal = document.getElementById('settingsModal');
    const user = getCurrentUser();
    
    if (user) {
        // Set current settings
        document.getElementById('currentPassword').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmNewPassword').value = '';
        
        // Set theme preference
        const themeSelect = document.getElementById('themeSelect');
        themeSelect.value = user.settings?.theme || 'light';
        
        // Set notification preferences
        document.getElementById('emailNotifications').checked = user.settings?.emailNotifications !== false;
        document.getElementById('pushNotifications').checked = user.settings?.pushNotifications !== false;
    }
    
    modal.classList.add('show');
}

function closeSettingsModal() {
    document.getElementById('settingsModal').classList.remove('show');
}

function saveSettings() {
    const theme = document.getElementById('themeSelect').value;
    const emailNotifications = document.getElementById('emailNotifications').checked;
    const pushNotifications = document.getElementById('pushNotifications').checked;
    
    // Handle theme change
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
    
    showNotification('تم حفظ الإعدادات بنجاح', 'success');
    closeModal('settingsModal');
}

function deleteAccount() {
    const user = getCurrentUser();
    if (!user) return;
    
    if (confirm('هل أنت متأكد من حذف الحساب؟ لا يمكن التراجع عن هذا الإجراء.')) {
        // Remove user from users array
        const users = getUsers();
        const filteredUsers = users.filter(u => u.username !== user.username);
        saveUsers(filteredUsers);
        
        // Clear session
        setCurrentUser(null);
        
        // Close modal
        closeSettingsModal();
        
        // Update UI
        updateUserUI();
        
        // Show notification
        showNotification('تم حذف الحساب بنجاح', 'info');
    }
}

function applyTheme(theme) {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
    localStorage.setItem('theme', theme);
}

// Handle profile picture change
function handleProfilePictureChange(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const user = getCurrentUser();
            if (user) {
                user.profilePicture = e.target.result;
                user.lastActivity = new Date().toISOString();
                
                // Update in users array
                const users = getUsers();
                const userIndex = users.findIndex(u => u.username === user.username);
                if (userIndex !== -1) {
                    users[userIndex] = user;
                    saveUsers(users);
                }
                
                // Update current user
                setCurrentUser(user);
                
                // Update preview
                const profilePic = document.getElementById('profilePicturePreview');
                profilePic.src = e.target.result;
                profilePic.style.display = 'block';
                
                // Update UI
                updateUserUI();
                
                showNotification('تم تحديث الصورة الشخصية بنجاح', 'success');
            }
        };
        reader.readAsDataURL(file);
    }
}

// تفعيل الأحداث
function initializeUserSystem() {
    console.log('🔄 === USER SYSTEM INITIALIZATION START ===');
    
    // Check for existing session first
    checkUserSession();
    
    // Update UI based on session
    updateUserUI();
    
    // فورم تسجيل الدخول
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.onsubmit = handleLogin;
        console.log('✅ loginForm found and bound');
    } else {
        console.error('❌ loginForm NOT FOUND');
    }
    
    // فورم التسجيل
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.onsubmit = handleRegister;
        console.log('✅ registerForm found and bound');
        
        // Direct click handler for register button
        const registerButton = registerForm.querySelector('.btn-primary');
        if (registerButton) {
            console.log('📌 Register button found:', registerButton);
            console.log('📌 Register button text:', registerButton.textContent);
            console.log('📌 Register button type:', registerButton.type);
            
            // Remove any existing event listeners
            registerButton.replaceWith(registerButton.cloneNode(true));
            const newRegisterButton = registerForm.querySelector('.btn-primary');
            
            // Add direct click handler
            newRegisterButton.addEventListener('click', function(e) {
                console.log('🎯 Register button DIRECT CLICK detected');
                e.preventDefault();
                e.stopPropagation();
                
                // Manually trigger form submission
                const formData = new FormData(registerForm);
                console.log('📋 Form data:', Object.fromEntries(formData));
                
                // Call handleRegister manually
                handleRegister(e);
            });
            
            console.log('✅ Direct click handler added to register button');
        } else {
            console.error('❌ Register button NOT FOUND in form');
        }
    } else {
        console.error('❌ registerForm NOT FOUND');
    }
    
    // إغلاق القائمة المنسدلة عند النقر خارجها
    document.addEventListener('click', function(e) {
        const userMenu = document.getElementById('userMenu');
        const userDropdown = document.getElementById('userDropdown');
        if (userMenu && userDropdown && !userMenu.contains(e.target)) {
            userDropdown.classList.remove('show');
        }
    });
    
    // Handle window resize for dropdown positioning
    window.addEventListener('resize', function() {
        const dropdown = document.getElementById('userDropdown');
        const userMenu = document.getElementById('userMenu');
        if (dropdown && dropdown.classList.contains('show')) {
            positionDropdown(dropdown, userMenu);
        }
    });
    
    console.log('✅ === USER SYSTEM INITIALIZATION COMPLETE ===');
    console.log('📊 Current user:', getCurrentUser());
    console.log('📊 Is logged in:', isUserLoggedIn());
}

// Language system
function initializeLanguageSystem() {
    const languageBtn = document.getElementById('current-lang');
    if (languageBtn) {
        languageBtn.textContent = currentLanguage === 'ar' ? 'العربية' : 'English';
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    
    // Update document direction
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    
    // Update all translatable elements
    updateTranslations();
    
    // Update language button
    const languageBtn = document.getElementById('current-lang');
    if (languageBtn) {
        languageBtn.textContent = currentLanguage === 'ar' ? 'العربية' : 'English';
    }
    
    // Save language preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

function updateTranslations() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// Modal system
function initializeModals() {
    console.log('🔄 Initializing modal system...');
    
    // Bind modal events
    bindModalEvents();
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            console.log('🔄 Modal backdrop clicked, closing modal');
            closeCurrentModal();
        }
    });
    
    // Close modals with close button
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('🔄 Modal close button clicked');
            closeCurrentModal();
        });
    });
    
    // Handle form submissions
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
        console.log('✅ Login form event bound');
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
        console.log('✅ Register form event bound');
    }
    
    console.log('✅ Modal system initialized successfully');
}

// Course system
function initializeCourseProgress() {
    // Load user progress from localStorage
    const userProgress = JSON.parse(localStorage.getItem('userProgress') || '{}');
    
    // Update progress bars
    document.querySelectorAll('.course-card').forEach(card => {
        const courseId = card.getAttribute('onclick').match(/'([^']+)'/)[1];
        const progress = userProgress[courseId] || 0;
        
        const progressFill = card.querySelector('.progress-fill');
        const progressText = card.querySelector('.progress-text');
        
        if (progressFill && progressText) {
            progressFill.style.width = `${progress}%`;
            progressText.textContent = `${progress}% مكتمل`;
        }
    });
}

function openCourse(courseId) {
    if (!isLoggedIn) {
        showLoginModal();
        showNotification('يرجى تسجيل الدخول للوصول للدورات', 'warning');
        return;
    }
    
    showNotification(`سيتم فتح دورة ${courseId} قريباً`, 'info');
}

// Utility functions
function scrollToCourses() {
    document.getElementById('courses').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function openDemo() {
    showNotification('سيتم فتح العرض التوضيحي قريباً', 'info');
}

// Mobile menu
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('show');
}

// Loading states
function showLoadingState(type) {
    const btn = document.querySelector(`#${type}Form .btn-primary`);
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<div class="loading-spinner"></div> جاري التحميل...';
    }
}

function hideLoadingState(type) {
    const btn = document.querySelector(`#${type}Form .btn-primary`);
    if (btn) {
        btn.disabled = false;
        btn.textContent = translations[currentLanguage][type === 'login' ? 'login' : 'register'];
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Floating cards animation
function initializeFloatingCards() {
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.5}s`;
    });
}

// Particles effect
function initializeParticles() {
    const particlesContainer = document.getElementById('heroParticles');
    if (!particlesContainer) return;
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${Math.random() * 10 + 10}s infinite linear;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add CSS for notifications and loading spinner
const additionalStyles = `
<style>
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 10000;
    animation: slideInRight 0.3s ease-out;
    max-width: 400px;
}

.notification-success {
    border-left: 4px solid #22c55e;
}

.notification-error {
    border-left: 4px solid #ef4444;
}

.notification-warning {
    border-left: 4px solid #f59e0b;
}

.notification-info {
    border-left: 4px solid #3b82f6;
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
}

.notification-content i {
    font-size: 18px;
}

.notification-success .notification-content i {
    color: #22c55e;
}

.notification-error .notification-content i {
    color: #ef4444;
}

.notification-warning .notification-content i {
    color: #f59e0b;
}

.notification-info .notification-content i {
    color: #3b82f6;
}

.notification-close {
    background: none;
    border: none;
    color: #6b7280;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: all 0.2s;
}

.notification-close:hover {
    background: #f3f4f6;
    color: #374151;
}

.loading-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    display: inline-block;
    margin-left: 8px;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes float-particle {
    0% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
    }
}

@media (max-width: 768px) {
    .nav-menu.show {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        border-top: 1px solid #e5e7eb;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', additionalStyles); 

// Global test functions for debugging
window.testModalSwitching = function() {
    console.log('🧪 === TESTING MODAL SWITCHING ===');
    
    const toRegisterLink = document.getElementById('toRegister');
    const toLoginLink = document.getElementById('toLogin');
    
    console.log('toRegister link:', toRegisterLink);
    console.log('toLogin link:', toLoginLink);
    
    if (toRegisterLink) {
        console.log('🧪 Testing toRegister link...');
        toRegisterLink.click();
    }
    
    setTimeout(() => {
        if (toLoginLink) {
            console.log('🧪 Testing toLogin link...');
            toLoginLink.click();
        }
    }, 1000);
};

// Make functions globally available for debugging
window.switchToRegister = switchToRegister;
window.switchToLogin = switchToLogin;
window.showLoginModal = showLoginModal;
window.showRegisterModal = showRegisterModal;
window.closeLoginModal = closeLoginModal;
window.closeRegisterModal = closeRegisterModal;
window.handleToRegisterClick = handleToRegisterClick;
window.handleToLoginClick = handleToLoginClick;

// ========== CHATBOT FUNCTIONS ========== //

// Initialize chatbot functions
function initializeChatbotFunctions() {
    console.log('🤖 Initializing chatbot functions...');
    
    // Bind chatbot toggle button
    const chatbotToggle = document.getElementById('chatbotToggle');
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', toggleChatbot);
        console.log('✅ Chatbot toggle button bound');
    } else {
        console.error('❌ Chatbot toggle button not found');
    }
    
    // Bind chatbot input
    const chatbotInput = document.getElementById('chatbotInput');
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', handleChatbotInput);
        console.log('✅ Chatbot input bound');
    } else {
        console.error('❌ Chatbot input not found');
    }
    
    // Bind clear chat button
    const clearChatBtn = document.querySelector('.chatbot-btn[onclick="clearChat()"]');
    if (clearChatBtn) {
        clearChatBtn.addEventListener('click', clearChat);
        console.log('✅ Clear chat button bound');
    }
    
    console.log('🤖 Chatbot functions initialized');

    document.addEventListener('DOMContentLoaded', () => {
        const attachBtn = document.getElementById('attachBtn');
        const fileInput = document.getElementById('chatbotFileInput');
    
        if (attachBtn && fileInput) {
            attachBtn.addEventListener('click', () => fileInput.click());
            fileInput.addEventListener('change', handleFileSelect);
        } else {
            console.warn("❌ attachBtn or chatbotFileInput not found in DOM.");
        }
    });    

    // Drag-and-drop
    const chatArea = document.getElementById('chatbotMessages');
    chatArea.addEventListener('dragover', e => e.preventDefault());
    chatArea.addEventListener('drop', handleChatDrop);
}

// Toggle chatbot window
function toggleChatbot() {
    const chatbot = document.getElementById('chatbotWindow');
    if (!chatbot) return;
    const isOpen = chatbot.classList.contains('show');
    if (isOpen) {
        chatbot.classList.remove('show');
        chatbot.style.visibility = 'hidden';
        chatbot.style.opacity = '0';
    } else {
        chatbot.classList.add('show');
        chatbot.style.visibility = 'visible';
        chatbot.style.opacity = '1';
    }
}

// Handle chatbot input
function handleChatbotInput(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const input = event.target;
        const message = input.value.trim();
        
        if (message) {
            console.log('�� Sending message:', message);
            sendChatbotMessage(message);
            input.value = '';
        }
    }
}

// Send message to chatbot
async function sendChatbotMessage(message) {
    const messagesContainer = document.getElementById('chatbotMessages');
    if (!messagesContainer) return;
    
    // Add user message
    addChatbotMessage('user', message);
    
    // Show typing indicator
    showTypingIndicator();
    
    try {
        // Send to Gemini API
        const GEMINI_API_KEY = 'AIzaSyCXAbT1CJao4spicXn5Ebpkaohod6zZ4E0';
        const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent';
        
        const requestBody = {
            contents: [{
                parts: [{ text: message }]
            }]
        };

        const res = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });
        
        const data = await res.json();
        let botResponse;
        
        if (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
            botResponse = data.candidates[0].content.parts.map(p => p.text).join('\n');
        } else if (data.error && data.error.message) {
            botResponse = 'عذراً، حدث خطأ في المعالجة. حاول مرة أخرى.';
        } else {
            botResponse = 'عذراً، لم أستطع معالجة طلبك. حاول مرة أخرى.';
        }
        
        hideTypingIndicator();
        addChatbotMessage('bot', botResponse);
        
    } catch (e) {
        hideTypingIndicator();
        addChatbotMessage('bot', 'عذراً، حدث خطأ في الاتصال. تحقق من اتصالك بالإنترنت.');
    }
}

// Add message to chatbot
function addChatbotMessage(type, content) {
    const messagesContainer = document.getElementById('chatbotMessages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${type}-message`;
    
    const sender = type === 'bot' ? '🤖 المعلم الذكي' : '👤 أنت';
    const alignment = type === 'bot' ? 'right' : 'left';
    
    messageDiv.innerHTML = `
        <div class="message-content" style="text-align: ${alignment};">
            <div class="message-sender">${sender}</div>
            <div class="message-text">${content}</div>
        </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatbotMessages');
    if (!messagesContainer) return;
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chatbot-message bot-message typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="message-content" style="text-align: right;">
            <div class="message-sender">🤖 المعلم الذكي</div>
            <div class="message-text">
                <span class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
        </div>
    `;
    
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Clear chat
function clearChat() {
    console.log('🤖 Clearing chat...');
    const messagesContainer = document.getElementById('chatbotMessages');
    if (messagesContainer) {
        messagesContainer.innerHTML = '';
        const welcomeMessages = [
            "هلا! أنا المعلم الذكي 😊 كيف يمكنني مساعدتك في الرياضيات؟",
            "أهلاً وسهلاً! أنا هنا لمساعدتك في الرياضيات. ما السؤال؟",
            "مرحبا! أنا المعلم الذكي. كيف يمكنني مساعدتك اليوم؟",
            "هلاو! أنا جاهز لمساعدتك في الرياضيات. ما المشكلة؟"
        ];
        const randomWelcome = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
        addChatbotMessage('bot', randomWelcome);
    }
}

// ========== ENHANCED MODAL BINDING ========== //

// Enhanced modal initialization
function initializeModalsEnhanced() {
    console.log('🔧 Initializing enhanced modals...');
    
    // Bind all modal events with multiple fallbacks
    bindModalEventsEnhanced();
    
    // Add global event delegation
    bindGlobalEventDelegation();
    
    // Test modal elements
    testModalElements();
    
    console.log('🔧 Enhanced modals initialized');
}

// Enhanced modal event binding
function bindModalEventsEnhanced() {
    // Direct event binding for toRegister
    const toRegisterLink = document.getElementById('toRegister');
    if (toRegisterLink) {
        // Remove existing listeners
        toRegisterLink.replaceWith(toRegisterLink.cloneNode(true));
        const newToRegisterLink = document.getElementById('toRegister');
        
        // Add multiple event listeners
        newToRegisterLink.addEventListener('click', function(e) {
            console.log('🎯 toRegister clicked (direct)');
            e.preventDefault();
            e.stopPropagation();
            switchToRegister();
        });
        
        newToRegisterLink.addEventListener('mousedown', function(e) {
            console.log('🎯 toRegister mousedown (direct)');
            e.preventDefault();
            e.stopPropagation();
            switchToRegister();
        });
        
        // Add onclick as fallback
        newToRegisterLink.onclick = function(e) {
            console.log('🎯 toRegister onclick (fallback)');
            e.preventDefault();
            e.stopPropagation();
            switchToRegister();
        };
        
        console.log('✅ toRegister events bound (enhanced)');
    } else {
        console.error('❌ toRegister link not found');
    }
    
    // Direct event binding for toLogin
    const toLoginLink = document.getElementById('toLogin');
    if (toLoginLink) {
        // Remove existing listeners
        toLoginLink.replaceWith(toLoginLink.cloneNode(true));
        const newToLoginLink = document.getElementById('toLogin');
        
        // Add multiple event listeners
        newToLoginLink.addEventListener('click', function(e) {
            console.log('🎯 toLogin clicked (direct)');
            e.preventDefault();
            e.stopPropagation();
            switchToLogin();
        });
        
        newToLoginLink.addEventListener('mousedown', function(e) {
            console.log('🎯 toLogin mousedown (direct)');
            e.preventDefault();
            e.stopPropagation();
            switchToLogin();
        });
        
        // Add onclick as fallback
        newToLoginLink.onclick = function(e) {
            console.log('🎯 toLogin onclick (fallback)');
            e.preventDefault();
            e.stopPropagation();
            switchToLogin();
        };
        
        console.log('✅ toLogin events bound (enhanced)');
    } else {
        console.error('❌ toLogin link not found');
    }
}

// Global event delegation
function bindGlobalEventDelegation() {
    document.addEventListener('click', function(e) {
        const target = e.target;
        
        // Check for toRegister
        if (target && (target.id === 'toRegister' || target.textContent.trim() === 'إنشاء حساب')) {
            console.log('🌐 toRegister clicked (global delegation)');
            e.preventDefault();
            e.stopPropagation();
            switchToRegister();
            return;
        }
        
        // Check for toLogin
        if (target && (target.id === 'toLogin' || target.textContent.trim() === 'تسجيل الدخول')) {
            console.log('🌐 toLogin clicked (global delegation)');
            e.preventDefault();
            e.stopPropagation();
            switchToLogin();
            return;
        }
    });
}

// Test modal elements
function testModalElements() {
    console.log('🧪 Testing modal elements...');
    
    const elements = {
        toRegister: document.getElementById('toRegister'),
        toLogin: document.getElementById('toLogin'),
        loginModal: document.getElementById('loginModal'),
        registerModal: document.getElementById('registerModal')
    };
    
    Object.entries(elements).forEach(([name, element]) => {
        if (element) {
            console.log(`✅ ${name} found`);
        } else {
            console.error(`❌ ${name} not found`);
        }
    });
}

// Enhanced switch functions
function switchToRegister() {
    console.log('🔄 Switching to register modal...');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    
    if (loginModal && registerModal) {
        loginModal.classList.remove('show');
        registerModal.classList.add('show');
        console.log('✅ Switched to register modal');
    } else {
        console.error('❌ Modal elements not found for switching');
        // Fallback: try to show register modal directly
        if (registerModal) {
            registerModal.classList.add('show');
            console.log('✅ Showed register modal directly');
        } else {
            console.error('❌ Register modal not found');
        }
    }
}

function switchToLogin() {
    console.log('🔄 Switching to login modal...');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    
    if (loginModal && registerModal) {
        registerModal.classList.remove('show');
        loginModal.classList.add('show');
        console.log('✅ Switched to login modal');
    } else {
        console.error('❌ Modal elements not found for switching');
        // Fallback: try to show login modal directly
        if (loginModal) {
            loginModal.classList.add('show');
            console.log('✅ Showed login modal directly');
        } else {
            console.error('❌ Login modal not found');
        }
    }
}

// Make new functions globally available
window.initializeModalsEnhanced = initializeModalsEnhanced;
window.toggleChatbot = toggleChatbot;
window.clearChat = clearChat;
window.sendChatbotMessage = sendChatbotMessage;
window.switchToRegister = switchToRegister;
window.switchToLogin = switchToLogin;

// Global modal close function
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
    }
}

// Make closeModal globally available
window.closeModal = closeModal;

// Handle chatbot key press
function handleChatbotKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const input = event.target;
        const message = input.value.trim();
        
        if (message) {
            sendChatbotMessage(message);
            input.value = '';
        }
    }
}

// Make handleChatbotKeyPress globally available
window.handleChatbotKeyPress = handleChatbotKeyPress;

// Send message function
function sendMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value.trim();
    
    if (message) {
        sendChatbotMessage(message);
        input.value = '';
    }
}

// Make sendMessage globally available
window.sendMessage = sendMessage;

// Additional required functions
function previewProfilePicture(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('profilePicturePreview');
            preview.src = e.target.result;
            preview.style.display = 'block';
            document.querySelector('.profile-picture-placeholder').style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
}

function saveProfile() {
    const user = getCurrentUser();
    if (!user) return;
    
    const nameEl = document.getElementById('profileName');
    const name = nameEl ? nameEl.value.trim() : '';

    const gradeLevel = document.getElementById('profileGrade').value.trim();
    
    if (!name) {
        showNotification('يرجى تعبئة الاسم الكامل', 'error');
        return;
    }
    
    // Update user data
    user.username = name;
    user.gradeLevel = gradeLevel;
    user.lastActivity = new Date().toISOString();
    
    // Update in users array
    const users = getUsers();
    const userIndex = users.findIndex(u => u.username === user.username);
    if (userIndex !== -1) {
        users[userIndex] = user;
        saveUsers(users);
    }
    
    // Update current user
    setCurrentUser(user);
    
    // Update UI
    updateUserUI();
    
    // Close modal
    closeModal('profileModal');
    
    // Show success message
    showNotification('تم حفظ التغييرات بنجاح', 'success');
}

function deleteAccount() {
    if (confirm('هل أنت متأكد من حذف الحساب؟ لا يمكن التراجع عن هذا الإجراء.')) {
        // Remove user from users array
        const users = getUsers();
        const filteredUsers = users.filter(u => u.username !== getCurrentUser().username);
        saveUsers(filteredUsers);
        
        // Clear session
        setCurrentUser(null);
        
        // Close modal
        closeSettingsModal();
        
        // Update UI
        updateUserUI();
        
        // Show notification
        showNotification('تم حذف الحساب بنجاح', 'info');
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}

// Make functions globally available
window.previewProfilePicture = previewProfilePicture;
window.saveProfile = saveProfile;
window.deleteAccount = deleteAccount;
window.toggleDarkMode = toggleDarkMode;

// Save settings function
function saveSettings() {
    const theme = document.getElementById('themeSelect').value;
    const emailNotifications = document.getElementById('emailNotifications').checked;
    const pushNotifications = document.getElementById('pushNotifications').checked;
    
    // Handle theme change
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
    
    showNotification('تم حفظ الإعدادات بنجاح', 'success');
    closeModal('settingsModal');
}

// Make saveSettings globally available
window.saveSettings = saveSettings;

// Show notification function
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class=${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Get notification icon
function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'fas fa-check-circle';
        case 'error': return 'fas fa-exclamation-circle';
        case 'warning': return 'fas fa-exclamation-triangle';
        default: return 'fas fa-info-circle';
    }
}

// Make functions globally available
window.showNotification = showNotification;
window.getNotificationIcon = getNotificationIcon;

// Global modal functions
//function showProfileModal() {
    //const modal = document.getElementById('profileModal');
    //if (modal) {
      //  modal.classList.add('show');
    //}
//}

function showProgressModal() {
    const modal = document.getElementById('progressModal');
    if (modal) {
        modal.classList.add('show');
    }
}

function showSettingsModal() {
    const modal = document.getElementById('settingsModal');
    if (modal) {
        modal.classList.add('show');
    }
}

// Make modal functions globally available
window.showProfileModal = showProfileModal;
window.showProgressModal = showProgressModal;
window.showSettingsModal = showSettingsModal;
window.handleRegister = handleRegister;

// Bind all button events
function bindAllButtonEvents() {
    // Bind login/register buttons
    const loginBtn = document.querySelector('.auth-btn.login');
    if (loginBtn) loginBtn.onclick = showLoginModal;
    
    // Bind modal close buttons
    const closeButtons = document.querySelectorAll('.modal-close, .close-modal');
    closeButtons.forEach(btn => {
        btn.onclick = function() {
            const modal = this.closest('.modal');
            if (modal) modal.classList.remove('show');
        };
    });
    
    // Bind smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.onclick = function(e) {
            const href = this.getAttribute('href');
            if (href === '#progress') {
                e.preventDefault();
                scrollToSection('progress');
            } else if (href === '#courses') {
                e.preventDefault();
                scrollToSection('courses');
            } else if (href === '#about') {
                e.preventDefault();
                scrollToSection('about');
            }
        };
    });
    
    // Bind chatbot toggle
    const chatbotBtns = document.querySelectorAll('.chatbot-toggle, .chatbot-btn');
    chatbotBtns.forEach(btn => {
        btn.onclick = toggleChatbot;
    });
    
    console.log('✅ All button events bound successfully');
}

// Make functions globally available
window.showProfileModal = showProfileModal;
window.showProgressModal = showProgressModal;
window.showSettingsModal = showSettingsModal;
window.closeModal = closeModal;
window.saveProfile = saveProfile;
window.logout = logout;

// Create test user for demonstration
function createTestUser() {
    const testUser = {
        username: 'أحمد محمد علي',
        email: 'ahmed.mohamed@example.com',
        password: 'test123',
        gradeLevel: 'university',
        createdAt: new Date('2024-01-15').toISOString(),
        lastActivity: new Date().toISOString(),
        settings: {
            theme: 'light',
            emailNotifications: true,
            pushNotifications: true
        }
    };
    
    // Save to users array
    const users = getUsers();
    const existingUserIndex = users.findIndex(u => u.email === testUser.email);
    if (existingUserIndex === -1) {
        users.push(testUser);
        saveUsers(users);
        console.log('✅ Test user added to users array');
    }
    
    // Set as current user
    setCurrentUser(testUser);
    console.log('✅ Test user set as current user');
    
    // Update UI
    updateUserUI();
    
    return testUser;
}

// Make it available globally
window.createTestUser = createTestUser;

document.addEventListener("DOMContentLoaded", function () {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const createdAt = localStorage.getItem("createdAt");
  
    // تأكد من وجود العناصر باستخدام ال IDs أو أي شيء بميزهم
    const nameInput = document.querySelector("input[placeholder='الاسم الكامل']");
    const emailInput = document.querySelector("input[placeholder='البريد الإلكتروني']");
    const createdAtInput = document.querySelector("input[placeholder='تاريخ إنشاء الحساب']");
  
    if (nameInput) nameInput.value = name || "";
    if (emailInput) emailInput.value = email || "";
    if (createdAtInput) createdAtInput.value = createdAt || "";
  });

// ====== تأثير تمرير الهيدر ======
function initializeHeaderScroll() {
  // عند التمرير، أضف/أزل كلاس 'scrolled' على الهيدر
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', function() {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ====== تفعيل التنقل (تمييز الرابط النشط عند التمرير) ======
function initializeNavigation() {
  // تمييز الرابط النشط في الشريط العلوي عند التمرير
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = [];
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const section = document.querySelector(href);
      if (section) sections.push({link, section});
    }
  });
  window.addEventListener('scroll', function() {
    let found = false;
    for (let i = sections.length - 1; i >= 0; i--) {
      const {link, section} = sections[i];
      if (window.scrollY + 100 >= section.offsetTop) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        found = true;
        break;
      }
    }
    if (!found) navLinks.forEach(l => l.classList.remove('active'));
  });
}

// ====== تهيئة العدّادات المتحركة للأرقام ======
function initializeCounters() {
  // ابحث عن جميع العناصر التي تحمل كلاس stat-number
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-count') || +counter.textContent || 0;
    let current = 0;
    const increment = Math.ceil(target / 60) || 1;
    function updateCounter() {
      if (current < target) {
        current += increment;
        if (current > target) current = target;
        counter.textContent = current;
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    }
    updateCounter();
  });
}

// Replace the direct src assignment with this code:
const img = document.getElementById('about-teacher-img');
const url = "https://scontent.ffjr1-5.fna.fbcdn.net/v/t39.30808-6/494204830_10161737555554195_7933865690410823744_n.jpg?...";
fetch(url, { credentials: 'omit' })
  .then(res => res.blob())
  .then(blob => {
    img.src = URL.createObjectURL(blob);
  })
  .catch(() => {
    img.alt = "Image could not be loaded";
  });

function renderMessage(message) {
  // ...existing rendering...
  if (message.attachments && message.attachments.length) {
    message.attachments.forEach(att => {
      if (att.mimeType.startsWith('image/')) {
        const img = document.createElement('img');
        img.src = `data:${att.mimeType};base64,${att.data}`;
        img.alt = att.filename;
        img.style.maxWidth = '120px';
        img.style.maxHeight = '120px';
        messageDiv.appendChild(img);
      } else {
        const link = document.createElement('a');
        link.href = `data:${att.mimeType};base64,${att.data}`;
        link.download = att.filename;
        link.textContent = `📄 ${att.filename}`;
        messageDiv.appendChild(link);
      }
    });
  }
}

async function sendMessageToGemini(userMessage) {
  const payload = {
    prompt: { text: userMessage },
    attachments: window.selectedAttachments || []
  };
  // ...send payload as before...
  window.selectedAttachments = []; // clear after send
  document.getElementById('chatbotFilePreview').innerHTML = '';
}

function handleFileSelect(event) {
  const files = event.target.files;
  processFiles(files);
}

function handleChatDrop(event) {
  event.preventDefault();
  const files = event.dataTransfer.files;
  processFiles(files);
}

function processFiles(files) {
  const previewDiv = document.getElementById('chatbotFilePreview');
  previewDiv.innerHTML = '';
  window.selectedAttachments = []; // global for sending

  Array.from(files).forEach(file => {
    if (file.size > 10 * 1024 * 1024) {
      showNotification('File too large (max 10MB)', 'error');
      return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
      const base64 = e.target.result.split(',')[1];
      window.selectedAttachments.push({
        filename: file.name,
        mimeType: file.type,
        data: base64
      });
      // Preview
      if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.style.maxWidth = '80px';
        img.style.maxHeight = '80px';
        previewDiv.appendChild(img);
      } else {
        const icon = document.createElement('span');
        icon.textContent = '📄';
        previewDiv.appendChild(icon);
        previewDiv.appendChild(document.createTextNode(file.name));
      }
    };
    reader.readAsDataURL(file);
  });
}

function renderBasicProfile() {
  const raw = localStorage.getItem('currentUser');
  const user = raw ? JSON.parse(raw) : null;
  document.getElementById('profileFullName').value = user?.fullName || '';
  document.getElementById('profileEmail').value = user?.email || '';
  document.getElementById('profileGrade').value = user?.grade || '';
  document.getElementById('profileCreatedAt').value = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('ar-EG')
    : '';
}
document.addEventListener('DOMContentLoaded', renderBasicProfile);

window.showProfileModal = function () {
    const raw = localStorage.getItem('currentUser');
    const user = raw ? JSON.parse(raw) : null;
  
    if (!user) return;
  
    // استخدم الحقول input/select وليس span
    const nameEl = document.getElementById('profileNameField');
    const emailEl = document.getElementById('profileEmailField');
    const gradeEl = document.getElementById('profileGradeField');
    const createdAtEl = document.getElementById('profileDateField');
  
    if (nameEl) nameEl.value = user.fullName || user.name || '';
    if (emailEl) emailEl.value = user.email || '';
    if (gradeEl) gradeEl.value = user.grade || '';
    if (createdAtEl && user.createdAt) {
      createdAtEl.value = new Date(user.createdAt).toLocaleDateString('ar-EG');
    }
  
    document.getElementById('profileModal')?.classList.add('show');
};

// ربط دالة التسجيل بحدث submit على الفورم
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    if (form) {
        form.addEventListener('submit', handleRegister);
    }
});
  
  