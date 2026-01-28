document.addEventListener('DOMContentLoaded', function() {
    
    // 1. تحديث عداد العربة العلوي (كودك الأصلي)
  window.updateCartCount = function() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (cartItems.length > 0) {
            cartCount.textContent = cartItems.length;
            cartCount.classList.remove('hidden');
        } else {
            cartCount.classList.add('hidden');
        }
    }
};

// 2. استدعاء الدالة هنا (بره القوس) عشان تشتغل أول ما الصفحة تفتح
window.updateCartCount();
  if (typeof window.updateTotals === 'function') {
        window.updateTotals(); // سيقوم بتغيير SAR 0 إلى الأسعار الحقيقية فوراً
    }

    // 2. تبديل التبويبات (تسجيل دخول / إنشاء حساب)
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginTab && signupTab && loginForm && signupForm) {
        signupTab.addEventListener('click', () => {
            signupTab.className = "flex-1 py-4 text-center font-bold text-[#8B4513] border-b-2 border-[#8B4513] transition-all";
            loginTab.className = "flex-1 py-4 text-center font-bold text-gray-400 hover:text-[#8B4513] transition-all";
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        });

        loginTab.addEventListener('click', () => {
            loginTab.className = "flex-1 py-4 text-center font-bold text-[#8B4513] border-b-2 border-[#8B4513] transition-all";
            signupTab.className = "flex-1 py-4 text-center font-bold text-gray-400 hover:text-[#8B4513] transition-all";
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
        });
    }

    // 3. معالجة النماذج العامة
    const forms = document.querySelectorAll('form:not(#payment-form):not(#dataForm):not(#adminProductForm)');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('تمت العملية بنجاح!');
        });
    });

    // 4. خيارات الدفع وتنسيق البطاقة
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    const cardDetails = document.getElementById('card-details');
   const confirmBtn = document.getElementById('confirm-payment-btn');
if (confirmBtn) {
    confirmBtn.onclick = function(e) {
        e.preventDefault();
        
        // 1. جلب المنتجات الحالية من السلة قبل أي شيء
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (cartItems.length === 0) {
            alert("سلتك فارغة!");
            return;
        }

        // 2. حساب المجموع وتوليد رقم فريد
        const subtotal = cartItems.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
        const orderId = 'WC-' + Date.now().toString().slice(-6);

        // 3. تجهيز بيانات الطلب الشاملة (حفظ المنتجات هنا هو السر)
        const newOrder = {
            id: orderId,
            date: new Date().toLocaleDateString('ar-EG'),
            time: new Date().toLocaleTimeString('ar-EG'),
            items: cartItems, // حفظ مصفوفة المنتجات كاملة
            total: subtotal + 50,
            status: 'قيد التنفيذ'
        };

        // 4. الحفظ في "قاعدة البيانات"
        let ordersDatabase = JSON.parse(localStorage.getItem('myOrdersDatabase')) || [];
        ordersDatabase.push(newOrder);
        localStorage.setItem('myOrdersDatabase', JSON.stringify(ordersDatabase));
        localStorage.setItem('lastOrderId', orderId);

        // 5. تحديث شكل الزر والتحويل
        const isAr = document.documentElement.lang === 'ar';
        confirmBtn.innerText = isAr ? "جاري التحويل..." : "Redirecting...";
        confirmBtn.disabled = true;

        setTimeout(() => {
            window.location.href = "AddINformation.html"; 
        }, 500);
    };
}

    // 6. منطق نموذج إضافة بيانات التوصيل
    const dataForm = document.getElementById('dataForm');
    if (dataForm) {
        dataForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            localStorage.setItem('customerInfo', JSON.stringify(data));
            localStorage.removeItem('cartItems'); // تفريغ السلة عند الانتهاء
            window.location.href = "order.html";
        });
    }

    // 7. عرض المنتجات داخل صفحة العربة (لحل مشكلة الصورة الفارغة)
    // 7. عرض المنتجات داخل صفحة العربة
const cartContainer = document.getElementById('cart-items-container');
const itemsInCart = JSON.parse(localStorage.getItem('cartItems')) || [];

if (cartContainer) {
    if (itemsInCart.length > 0) {
        cartContainer.innerHTML = ''; 
        itemsInCart.forEach((item, index) => {
            // نستخدم Font Awesome لإظهار أيقونة السلة (الحذف)
            cartContainer.innerHTML += `
    <div class="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
        <div class="flex items-center gap-4 text-left">
            <img src="${item.image}" class="w-20 h-20 object-cover rounded-lg">
            <div>
                <h4 class="font-bold text-[#2C1810]">${item.name}</h4>
                <p class="text-[#8B4513] font-bold">${item.price} SAR</p>
            </div>
        </div>
        <button onclick="removeFromCart(${index})" class="text-red-400 hover:text-red-600 p-2 transition-all">
            <i class="fas fa-trash-alt text-xl"></i>
        </button>
    </div>`;
        });
        window.updateTotals(); // تحديث المبالغ SAR
    } else {
        // إذا كانت السلة فارغة فعلاً
        cartContainer.innerHTML = '<div class="py-10 text-center text-gray-400">العربة فارغة حالياً</div>';
    }
}
});

// --- دوال عامة (Global) خارج DOMContentLoaded لضمان عملها ---

// دالة تحديث الفاتورة (لحل مشكلة SAR 0)
window.updateTotals = function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const subtotal = cartItems.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
    const shipping = subtotal > 0 ? 50 : 0; 
    const total = subtotal + shipping;

    // --- تحديث عناصر صفحة العربة (cart.html) ---
    const subtotalElem = document.getElementById('subtotal-amount');
    const shippingElem = document.getElementById('shipping-amount');
    const finalTotalElem = document.getElementById('final-total-amount');
    const itemsTitle = document.querySelector('.cart-title-count');

    if (subtotalElem) subtotalElem.textContent = `${subtotal} SAR`;
    if (shippingElem) shippingElem.textContent = `${shipping} SAR`;
    if (finalTotalElem) finalTotalElem.textContent = `${total} SAR`;
    if (itemsTitle) itemsTitle.textContent = `Items (${cartItems.length})`;

    // --- تحديث عناصر صفحة الدفع (payment.html) ---
    const paySub = document.getElementById('summary-subtotal');
    const payShip = document.getElementById('summary-shipping');
    const payTotal = document.getElementById('summary-total');

    if (paySub) paySub.textContent = `${subtotal} SAR`;
    if (payShip) payShip.textContent = `${shipping} SAR`;
    if (payTotal) payTotal.textContent = `${total} SAR`;
};

// الحذف من السلة
window.removeFromCart = function(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    location.reload(); 
};

// إضافة منتج للسلة
window.addToCart = function(productId) {
    if (typeof products === 'undefined') return;
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    if (typeof updateCartCount === 'function') window.updateCartCount();
    alert(`تم إضافة ${product.name} إلى السلة!`);
};

// وظيفة الأدمن لإضافة المنتجات (تأكدت من وجودها)
window.addNewProduct = function(name, price, category, imageUrl) {
    const newProduct = {
        id: Date.now(),
        name: name,
        price: parseFloat(price),
        category: category,
        image: imageUrl || "https://via.placeholder.com/200"
    };
    if (typeof products !== 'undefined') {
        products.push(newProduct);
        alert('تم إضافة المنتج بنجاح!');
        window.location.href = "Shop.html";
    }
};

// إعدادات Tailwind للهوية - كودك الأصلي
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: "#8B4513",
                    secondary: "#FDF5E6",
                    accent: "#2C1810"
                }
            }
        }
    };
}

// دالة عرض المنتجات في صفحة المتجر
window.displayProducts = function(category) {
    const shopGrid = document.getElementById('shop-grid');
    if (!shopGrid) return;

    // تصفية المنتجات بناءً على الفئة
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);

    shopGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        shopGrid.innerHTML += `
            <div class="bg-white p-6 rounded-2xl shadow-md border border-[#8B4513]/10 hover:shadow-xl transition-all group">
                <div class="relative overflow-hidden rounded-xl mb-4">
                    <img src="${product.image}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <h3 class="text-xl font-bold text-[#2C1810] mb-2">${product.name}</h3>
                <p class="text-[#8B4513] font-bold text-lg mb-4">${product.price} SAR</p>
                <button onclick="addToCart(${product.id})" class="w-full bg-[#8B4513] text-white py-3 rounded-lg font-bold hover:bg-[#2C1810] transition-all flex items-center justify-center gap-2">
                    <i class="fas fa-shopping-cart"></i>
                    إضافة للعربة
                </button>
            </div>`;
    });
};