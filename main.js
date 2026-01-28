

// 1. إعدادات الألوان الخاصة بـ Tailwind
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: "#8B4513",
                    secondary: "#D2691E",
                    dark: "#2C1810",
                    light: "#FAF3E0"
                }
            }
        }
    };
}

// 2. قاموس الترجمة الشامل (كل نصوصك كما هي)
const translations = {
    en: {
        lang_btn: "العربية",
        hero_title: " Discover our exclusبive collection ",
        shop_now: "Shop Now",
        view_coll: "View Collection",
        nav_home: "Home",
        nav_furniture: "Furniture",
        nav_wood: "Wood Accessories",
        nav_mobile: "Mobile Accessories",
        my_orders: "My Orders",
        order_num: "Order ID",
        order_status: "Status",
        order_date: "Date",
        order_total: "Total",
        order_in_progress: "In Progress",
        view_details: "Details",
        order_details_title: "Order Details",
        products_in_order: "Products in this order",
        quantity: "Qty",
        invoice: "Invoice",
        items_price: "Items Price",
        shipping: "Shipping",
        final_total: "Total Amount",
        print_invoice: "Print Invoice",
        cart_title: "Shopping Cart",
        cart_empty: "Your cart is currently empty",
        checkout: "Checkout",
        subtotal: "Subtotal",
        login: "Login",
        signup: "Sign Up",
        email_placeholder: "Email Address",
        password_placeholder: "Password",
        full_name: "Full Name",
        google_login: "Login with Google",
        forget_password: "Forgot Password?",
        back_home: "Back to Main Screen",
        cat_title: "Shop by Category",
        cat_subtitle: "Explore our range of premium products",
        explore: "Explore",
        search_placeholder: "Search...",
        footer_desc: "Crafting beautiful furniture since 2010.",
        footer_quick: "Quick Links",
        footer_all_products: "All Products",
        footer_new_arrivals: "New Arrivals",
        footer_best_sellers: "Best Sellers",
        footer_service: "Customer Service",
        footer_contact_us: "Contact Us",
        footer_shipping: "Shipping Policy",
        footer_returns: "Returns & Exchanges",
        footer_faq: "FAQ",
        confirm_order: "Confirm Order",
        back_to_cart: "Back to Cart",
        payment_methods: "Payment Methods",
        payment_summary: "Payment Summary",
        no_orders: "No orders found yet.",
        footer_contact_title: "Contact Us",
        footer_address: "123 Furniture Street, Design District, Cairo, Egypt",
        footer_work_hours: "Mon-Sat: 9AM - 8PM",
        footer_rights: "© 2024 WoodCraft. All rights reserved.",
        choose_payment: "Choose Payment Method",
        cash_on_delivery: "Cash on Delivery",
        credit_card: "Credit Card",
        back_to_orders: "Back to Orders",
        add_data_title: "add new Data",
        full_name_label: "Full Name",
        full_name_placeholder: "Enter full name",
        phone_label: "Phone Number",
        email_label: "Email Address",
        gender_label: "Gender",
        gender_placeholder: "Select Gender",
        address_label: "Address",
        save_btn: "Save Data",
        reset_btn: "Reset",
        nav_home: "Home",
        nav_view: "View Data",
       nav_add: "Add Data",
       male: "Male", 
       female: "Female"
    },
    ar: {
        lang_btn: "English",
        hero_title: "اكتشف مجموعتنا الحصرية",
        shop_now: "تسوق الآن",
        view_coll: "عرض المجموعة",
        nav_home: "الرئيسية",
        nav_furniture: "الأثاث",
        nav_wood: "إكسسوارات خشبية",
        nav_mobile: "إكسسوارات الموبايل",
        my_orders: "طلباتي",
        order_num: "رقم الطلب",
        order_status: "الحالة",
        order_date: "التاريخ",
        order_total: "المجموع",
        order_in_progress: "قيد التنفيذ",
        view_details: "تفاصيل",
        confirm_order: "تأكيد الطلب",
        back_to_cart: "العودة للعربة",
        payment_methods: "طرق الدفع",
        payment_summary: "ملخص الدفع",
        no_orders: "لا يوجد طلبات حالياً",
        order_details_title: "تفاصيل الطلب",
        products_in_order: "المنتجات في هذا الطلب",
        quantity: "الكمية",
        invoice: "الفاتورة",
        items_price: "سعر المنتجات",
        shipping: "الشحن",
        final_total: "المجموع النهائي",
        print_invoice: "طباعة الفاتورة",
        cart_title: "عربة التسوق",
        cart_empty: "العربة فارغة حالياً",
        checkout: "إتمام الشراء",
        subtotal: "المجموع الفرعي",
        login: "تسجيل الدخول",
        signup: "إنشاء حساب",
        email_placeholder: "البريد الإلكتروني",
        password_placeholder: "كلمة المرور",
        full_name: "الاسم الكامل",
        google_login: "الدخول عبر جوجل",
        forget_password: "نسيت كلمة المرور؟",
        back_home: "العودة للشاشه الرئيسية",
        cat_title: "تسوق حسب الفئة",
        cat_subtitle: "استكشف مجموعتنا من المنتجات الفاخرة",
        explore: "اكتشف المزيد",
        search_placeholder: "بحث...",
        footer_desc: "نصنع الأثاث الجميل منذ عام 2010.",
        footer_quick: "روابط سريعة",
        footer_all_products: "كل المنتجات",
        footer_new_arrivals: "وصل حديثاً",
        footer_best_sellers: "الأكثر مبيعاً",
        footer_service: "خدمة العملاء",
        footer_contact_us: "اتصل بنا",
        footer_shipping: "سياسة الشحن",
        footer_returns: "الاسترجاع والاستبدال",
        footer_faq: "الأسئلة الشائعة",
        footer_contact_title: "اتصل بنا",
        footer_address: "١٢٣ شارع الأثاث، حي التصميم، القاهرة، مصر",
        footer_work_hours: "الإثنين - السبت: ٩ صباحاً - ٨ مساءً",
        footer_rights: "جميع الحقوق محفوظة لوود كرافت ٢٠٢٤ ©",
        // المفاتيح التي تحتاجها في صفحة الدفع
        choose_payment: "اختر طريقة الدفع",
        cash_on_delivery: "الدفع عند الاستلام",
        credit_card: "بطاقة ائتمان",
        back_to_orders: "العودة للطلبات",
        add_data_title:"إضافة بيانات جديدة",
        full_name_label: "الاسم الكامل",
        full_name_placeholder: "أدخل اسمك الكامل",
        phone_label: "رقم الهاتف",
        email_label: "البريد الإلكتروني",
        gender_label: "الجنس",
        gender_placeholder: "اختر الجنس",
        address_label: "العنوان",
        save_btn: "حفظ البيانات",
        reset_btn: "إعادة تعيين",
        nav_home: "الرئيسية",
        nav_view: "عرض البيانات",
        nav_add: "إضافة بيانات",
        male: "ذكر", 
        female: "أنثى"
    }
};

// 1. تعريف اللغة الحالية من الذاكرة لضمان المزامنة بين كل الصفحات
let currentLang = localStorage.getItem('language') || 'ar';

// 2. دالة التحديث الشاملة (تدعم data-key و data-i18n معاً لضمان عمل الصفحات القديمة)
function updateContent(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll('[data-key], [data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-key') || elem.getAttribute('data-i18n');
        const translation = translations[lang][key];
        
        if (translation) {
            if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
                elem.placeholder = translation;
            } else {
                elem.innerText = translation;
            }
        }
    });

    // تحديث اتجاه ولغة الـ HTML لكل الصفحات
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // حفظ اللغة في الذاكرة لتستخدمها باقي الصفحات عند الفتح
    localStorage.setItem('language', lang);
}

// 3. مستمع الأحداث الموحد (يمنع تعارض الأزرار بين الصفحات)
document.addEventListener('DOMContentLoaded', () => {
    // تطبيق اللغة فوراً عند فتح أي صفحة
    updateContent(currentLang);

    // تعريف العناصر مع فحص وجودها لتجنب الأخطاء التي توقف السكريبت
    const elements = {
        langBtn: document.getElementById('langSwitcher'),
        mobileBtn: document.getElementById('mobileMenuBtn'),
        closeBtn: document.getElementById('closeMenu'),
        menu: document.getElementById('mobileMenu'),
        searchBtn: document.getElementById('openSearchBtn'),
        searchInput: document.getElementById('headerSearchInput'),
        cartCount: document.getElementById('cart-count')
    };

    // تفعيل زر اللغة (إذا وجد في الصفحة)
    if (elements.langBtn) {
        elements.langBtn.onclick = (e) => {
            e.preventDefault();
            currentLang = (currentLang === 'en') ? 'ar' : 'en';
            updateContent(currentLang);
        };
    }

    // تفعيل القائمة والبحث (تعمل فقط في الصفحات التي تحتوي على هذه العناصر)
    if (elements.mobileBtn && elements.menu) {
        elements.mobileBtn.onclick = (e) => {
            e.stopPropagation();
            elements.menu.classList.remove('translate-x-full');
        };
    }

    if (elements.closeBtn && elements.menu) {
        elements.closeBtn.onclick = () => {
            elements.menu.classList.add('translate-x-full');
        };
    }

    if (elements.searchBtn && elements.searchInput) {
        elements.searchBtn.onclick = (e) => {
            e.stopPropagation();
            elements.searchInput.classList.toggle('w-0');
            elements.searchInput.classList.toggle('opacity-0');
            elements.searchInput.classList.toggle('w-48');
            if (!elements.searchInput.classList.contains('w-0')) elements.searchInput.focus();
        };
    }

    // تحديث عداد السلة
    if (elements.cartCount) {
        const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
        elements.cartCount.textContent = cart.length;
    }
});

const products = [
    { id: 1, name: "مقبض باب كلاسيك", price: 150, category: "wood", image: "https://via.placeholder.com/200" },
    { id: 2, name: "طقم كراسي سفرة", price: 5000, category: "furniture", image: "https://via.placeholder.com/200" },
    { id: 3, name: "شاحن خشبي مودرن", price: 300, category: "accessories", image: "https://via.placeholder.com/200" },
    { id: 4, name: "مفصلات إيطالي ثقيلة", price: 80, category: "wood", image: "https://via.placeholder.com/200" }
];