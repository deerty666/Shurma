/* ====== بيانات الفروع - يرجى تعديل أرقام الواتساب والأسماء حسب الرغبة ====== */
const BRANCH_CONFIG = {
    'branch1': { 
        whatsapp: '966502451644', // ⭐️ رقم واتساب فرع الرياض (كمثال)
        name: 'خلطة البرنس فرع الأحمدية  ', // اسم الفرع في الرسائل وعنوان الصفح
        deliveryFee: 3,
    
    },
    'branch3': {
        whatsapp: '966598120127', // ⚠️ يرجى تغيير رقم الواتساب لفرع مكة
        name: 'الروضه خالد بن الوليد ', 
        deliveryFee: 3,
    }
};

/* ====== متغير لتحديد الفرع الحالي من الرابط ====== */
const currentBranchId = 'branch1';
const currentBranch = BRANCH_CONFIG[currentBranchId] || BRANCH_CONFIG['branch1'];
document.title = `قائمة خلطة البرنس- فرع ${currentBranch.name}`;

/* ====== بيانات المنيو - تم تحديث جميع مسارات الصور إلى صيغة WEBP وباسم قصير (مثال: /Dirty55/sh01.webp) ====== */
const menuData = [
    // 1. القسم الجديد: الكل
    { 
        section:"الكل", 
        sectionImg: "logo-bg565.webp", // صورة عامة
        items:[] 
    },
    { 
        section:"الشاورما", 
        sectionImg: "sh001.webp", // صورة القسم
        items:[
            // الوجبة 1
            {id:"sh1", img:"a19.jpg", name:"صاروخ شاورماصاج", basePrice:12, availableIn: ['branch1','branch2', 'branch3'], options:[ 
                {name:"هلابينو", price:1},
                {name:"بالجبن", price:1},
                {name:"جبن اكستر", price:1}
            ]},
            // الوجبة 2: تم تغيير اسمها
            {id:"sh2", img:"a25.jpg", name:"شاورما صامولي بسكوت", basePrice:8, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:" هلابينو", price:1},
                {name:"بالجبن", price:1},
                {name:" جبن اكستر", price:1}
            ]},
            // الوجبة 3: نص شواية سادة
            {id:"sh3", img:"a20.jpg", name:"تورتيلا حار",
             basePrice:8,
             isBestSeller: false,
             availableIn: ['branch1', 'branch2', 'branch3'], options:[
               {name:"هلابينو", price:1},
               {name:"بالجبن", price:1},
               {name:"جبن اكستر", price:1}  
            ]},
            {id:"sh4", img:"a21.jpg", name:"شاورما كلاسك صغير",
             basePrice:7,
             isBestSeller: false,
             availableIn: ['branch1', 'branch2', 'branch3'], options:[
               {name:"هلابينو", price:1},
               {name:"بالجبن", price:1}, 
               {name:"جبن اكستر", price:1}  
            ]},
             {id:"sh4", img:"a20.jpg", name:"توريتلا صغير",
             basePrice:7,
             isBestSeller: false,
             availableIn: ['branch1', 'branch2', 'branch3'], options:[
               {name:"هلابينو", price:1},
               {name:"بالجبن", price:1}, 
               {name:"جبن اكستر", price:1}  
            ]},
              {id:"sh5", img:"a22.jpg", name:"صحن عرببي عادي6قطع",
             basePrice:18,
             isBestSeller: true,
             availableIn: ['branch1', 'branch2', 'branch3'], options:[
               {name:"هلبينو", price:1},
               {name:"بالجين", price:1}, 
               {name:"جبن كستر", price:1}  
            ]},
            {id:"sh7", img:"a17.jpg", name:"سنقتشر",
             basePrice:15,
             isBestSeller: false,
             availableIn: ['branch1', 'branch2', 'branch3'], options:[  
            ]},
            {id:"sh70", img:"a18.jpg", name:"تشيز فرايز",
             basePrice:12,
             isBestSeller: true,
             availableIn: ['branch1', 'branch2', 'branch3'], options:[  
            ]},
           {id:"sh8", img:"as33.jpg", name:"شاورما بايتز10حبات وببسي",
             basePrice:22,
             isBestSeller: false,
             availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
            {id:"sh9", img:"a28.jpg", name:"برجر بطاطس شاورما سلايد4قطع ببسي",
             basePrice:23,
             isBestSeller: false,
             availableIn: ['branch1', 'branch2', 'branch3'], options:[  
            ]},
            {id:"sh10", img:"a24.jpg", name:"كلوب شاورما",
             basePrice:20,
             isBestSeller: false,
             availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
            {id:"sh11", img:"a13.jpg", name:"كلوب زنجر",
             basePrice:20,
             isBestSeller: true,
             availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
            {id:"sh12", img:"a29.jpg", name:"صحن شاورما شرائح",
             basePrice:25,
             isBestSeller: false,
             availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
            // الوجبة 4: العرض الاقتصادي الجديد
            {
                id:"sh6", 
                img:"a23.jpg", 
                name:"شاورما عربي 24قطعة", 
                basePrice:60, 
                isBestSeller: true, 
                availableIn: ['branch1', 'branch2', 'branch3'], 
                options:[
                    {name:"هلابينو", price:3},
                    {name:"بالجبن", price:3},
                    {name:"جبن اكستر", price:3}
                ]
            }
        ]
    },
    { 
        section:"برجر والزنجر", 
        sectionImg: "md040.webp",
        items:[
            // الوجبة 1
            {id:"md1", img:"a8.jpg", name:"برجر سنجل دجاج مشوي", basePrice:11, availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
            // الوجبة 1
            {id:"md2", img:"a111.jpg", name:"برجر دجاج مشوي دبل", basePrice:18, availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
                        // الوجبة 1
            {id:"md3", img:"a9.jpg", name:"برجر لحم سنجل مشوي", basePrice:13, availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
                        // الوجبة 1
            {id:"md4", img:"a7.jpg", name:"برجر لحم دبل مشوي", basePrice:20, availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
                        // الوجبة 1
            {id:"md5", img:"a10.jpg", name:"زنجر خبز برجر عادي", basePrice:11, availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
                        // الوجبة 1
            {id:"md6", img:"a11.jpg", name:"زنجر خبز برجر دبل", basePrice:16, availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
                        // الوجبة 1
            {id:"md7", img:"a11.jpg", name:"زنجر خبز برجر حار", basePrice:11, availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
                        // الوجبة 1
            {id:"md8", img:"a11.jpg", name:"زنجر خبز برجر حار دبل", basePrice:16, availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
                        // الوجبة 1
            {id:"md9", img:"a14.jpg", name:"زنجر خبز تورتيلا عادي", basePrice:12, availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
                        // الوجبة 1
            {id:"md10", img:"a14.jpg", name:"زنجر خبز تورتيلا حار", basePrice:12, availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
                        // الوجبة 1
            {id:"md11", img:"a5.jpg", name:"وجبة برجر سنجل لحم", basePrice:20, availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
                        // الوجبة 1
            {id:"md12", img:"a4.jpg", name:"وجبة برجر لحم دبل", basePrice:26, availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
            // الوجبة 1
            {id:"md13", img:"a66.jpg", name:"وجبة برجر دجاج سنجل", basePrice:18, availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]},
            // الوجبة 2
            {id:"md14", img:"a222.jpg", name:"وجبة برجر دجاج دبل", basePrice:24, availableIn: ['branch1', 'branch2', 'branch3'], options:[
            ]}
        ]
    },
    { 
        section:"اصناف جانبية", 
        sectionImg: "md0440.webp",
        items:[
            // الوجبة 1
            {id:"mn1", img:"a27.jpg", name:"بطيطو رجرج صغير", basePrice:7, availableIn: ['branch1','branch2', 'branch3'], options:[ 
            ]},
            // الوجبة 1
            {id:"mn2", img:"a26.jpg", name:"بطيطو رجرج كبير", basePrice:13, availableIn: ['branch1','branch2', 'branch3'], options:[ 
            ]},
            // الوجبة 1
            {id:"mn3", img:"h1.jpg", name:"بطاطس صغير", basePrice:5, availableIn: ['branch1','branch2', 'branch3'], options:[ 
            ]},
            // الوجبة 1
            {id:"mn4", img:"a15.jpg", name:"بطاطس كبير", basePrice:8, availableIn: ['branch1','branch2', 'branch3'], options:[ 
            ]},
            // الوجبة 1
            {id:"mn5", img:"a16.jpg", name:"بطاطس كبير مبهرة", basePrice:10, availableIn: ['branch1','branch2', 'branch3'], options:[ 
            ]},
            // الوجبة 1
            {id:"mn6", img:"a30.jpg", name:"صوص المتوم", basePrice:2, availableIn: ['branch1','branch2', 'branch3'], options:[ 
            ]},
            // الوجبة 1
            {id:"mn7", img:"a33.jpg", name:"صوص خاص", basePrice:2, availableIn: ['branch1','branch2', 'branch3'], options:[ 
            ]},
            
            {id:"mn9", img:"a33.jpg", name:"صوص التومنار", basePrice:2, availableIn: ['branch1','branch2', 'branch3'], options:[ 
            ]},
            
            {id:"mn10", img:"a34.jpg", name:"مخلل خيار", basePrice:2, availableIn: ['branch1','branch2', 'branch3'], options:[ 
            ]},
            
            {id:"mn12", img:"a32.jpg", name:"هلابينو", basePrice:2, availableIn: ['branch1','branch2', 'branch3'], options:[ 
            ]},
            // الوجبة 2
            {id:"mn11", img:"a31.jpg", name:"صوص جبن", basePrice:3, availableIn: ['branch1', 'branch2', 'branch3'], options:[ 
            ]}
        ]
    },
  
    { 
   
        section:"المشروبات ", 
        sectionImg: "kn660.webp",
        sectionAvailableIn: ['branch1', 'branch2', 'branch3'], 
        items:[
            // الوجبة 1
            {id:"kna1", img:"a35.jpg", name:"ببسي", basePrice:3, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"", price:0}]},
            // الوجبة 2
            {id:"kna2", img:"a351.png", name:"سفن", basePrice:3, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"", price:0}]},
            // الوجبة 3
            {id:"kna2", img:"a352.jpg", name:"حمضيات", basePrice:3, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"", price:0}]},
            // الوجبة 3
            {id:"kna2", img:"a353.jpg", name:"عصير ربيع", basePrice:2, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"", price:0}]},
            // الوجبة 3
            {id:"kna3", img:"kn0.webp", name:"ماء", basePrice:1, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"", price:0}]}
        ]
    }
];

/* ====== دالة معالجة البيانات لتقديم "الأكثر مبيعاً" في بداية القائمة ====== */
function processMenuData(data) {
    let bestSellers = []; 
    let processedMenuData = []; 

    // 1. المرور على جميع الأقسام والوجبات واستخراج الأكثر مبيعاً
    data.forEach(section => {
        // نتخطى قسم "الكل" لأننا سنقوم بتجميعه لاحقاً
        if (section.section === "الكل") {
            processedMenuData.push(section); 
            return;
        }

        let regularItems = []; 
        
        section.items.forEach(item => {
            // نضيف خاصية actualSection لتذكر القسم الأصلي
            const itemWithSection = {...item, actualSection: item.actualSection || section.section}; 

            if (item.isBestSeller === true) {
                bestSellers.push(itemWithSection);
            } else {
                regularItems.push(itemWithSection);
            }
        });

        // 2. إنشاء نسخة من القسم الأصلي تحتوي فقط على الوجبات المتبقية
        // شرط: إذا كان القسم يحتوي على أي وجبات متبقية، أو كانت لديه خاصية توافر محددة
        if (regularItems.length > 0 || section.sectionAvailableIn) {
            let newSection = {...section, items: regularItems}; 
            processedMenuData.push(newSection);
        }
    });

    // 3. إنشاء قسم جديد خاص بالأكثر مبيعاً وإضافته في البداية
    if (bestSellers.length > 0) {
        let bestSellerSection = {
            section: "الأكثر مبيعاً 🏆", 
            sectionImg: "best4_seller_icon.webp", 
            items: bestSellers,
            sectionAvailableIn: ['branch1', 'branch2', 'branch3'] 
        };
        // إضافة قسم الأكثر مبيعاً بعد قسم "الكل" مباشرة
        processedMenuData.splice(1, 0, bestSellerSection);
    }
    
    // 4. إرجاع مصفوفة البيانات الجديدة والمعالجة
    return processedMenuData;
}

// نستخدم الدالة الجديدة لمعالجة القائمة مرة واحدة
const processedMenuData = processMenuData(menuData); 


/* ====== متغيرات PWA و SearchBar ====== */
let deferredPrompt = null;
let currentSection = processedMenuData[0].section; // استخدام البيانات المعالجة لتحديد القسم الحالي
const installAppBtn = document.getElementById('installAppBtn');
const searchBar = document.getElementById('searchBar');


/* ====== سلة الطلبات والعناصر ====== */
const dynamicSuggestionRules = {
    "شواية": ["المقبلات","الايدامات"],
    "مظبي": ["المقبلات","الايدامات"],
    "مندي": ["المقبلات","الايدامات"],
    "مدفون": ["المقبلات","الايدامات"],
    "مقلوبه": ["المقبلات","الايدامات"],
    "مضغوط": ["المقبلات","المقبلات"],
    "زربيان": ["المقبلات","الايدامات"],
    "رز": ["المقبلات","الايدامات"],
    "مشويات": ["المقبلات"],
    "كنافه": ["المشروبات"],
};

let cart = JSON.parse(localStorage.getItem('deerty_cart') || '[]');
const sectionsEl = document.getElementById('sections');
const menuList = document.getElementById('menuList');
const cartBtn = document.getElementById('cartBtn');


const cartCount = document.getElementById('cartCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsEl = document.getElementById('cartItems');
const totalBreakdownEl = document.getElementById('totalBreakdown'); 
const sendWhatsapp = document.getElementById('sendWhatsapp');
const clearCart = document.getElementById('clearCart');

// 📍 عناصر تحديد الموقع (جديد)
const getLocationBtn = document.getElementById('getLocationBtn');
const locationStatus = document.getElementById('locationStatus');
let userLocation = null; // لتخزين إحداثيات الموقع (Lat, Lng)

/* Option modal */
const optionModal = document.getElementById('optionModal');
const modalTitle = document.getElementById('modalTitle');
const modalOptions = document.getElementById('modalOptions');
const modalConfirm = document.getElementById('modalConfirm');
const itemNoteInput = document.getElementById('itemNote'); 

let selectedItem = null;
let selectedOption = null;
let selectedItemImage = null; // 🚀 NEW: لتخزين مرجع صورة المنتج المختار (للتأثير)

/* ====== Render sections ====== */
function renderSections(){
    sectionsEl.innerHTML = '';
    processedMenuData.forEach((sec,idx)=>{
        // منطق إخفاء القسم بالكامل 
        if (sec.section !== "الكل" && sec.sectionAvailableIn && !sec.sectionAvailableIn.includes(currentBranchId)) {
            return; // يتم تخطي هذا القسم إذا لم يكن متوفراً في الفرع الحالي
        }

        // تحديد اسم العرض: "فرع الرياض" لقسم "الكل" فقط، واسم القسم للأقسام الأخرى
        const sectionDisplayName = sec.section === "الكل" ? `فرع ${currentBranch.name}` : sec.section;

        const card = document.createElement('div');
        card.className = 'sec-card';
        card.innerHTML = `
            <img src="${sec.sectionImg}" alt="${sec.section}" onerror="this.style.opacity=.35">
            <div class="sec-name">${sectionDisplayName}</div>
        `;

        if(sec.section === currentSection) card.classList.add('active'); 

        card.onclick=()=>{
            document.querySelectorAll('.sec-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            currentSection = sec.section;
            renderMenu(currentSection);
            searchBar.value = ''; 
        };
        sectionsEl.appendChild(card);
    });
    renderMenu(currentSection);
}


/* ====== Render menu - تطبيق الخصم الخاص بالفرع (واستخدام processedMenuData) ====== */
function renderMenu(sectionName, searchTerm = ''){
    menuList.innerHTML='';
    let itemsToRender = [];
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if(sectionName === "الكل") {
        itemsToRender = processedMenuData.flatMap(sec => 
            sec.section !== "الكل" ? 
            sec.items.map(item => ({...item, actualSection: item.actualSection || sec.section})) : 
            []
        );
    } else {
        // استخدام processedMenuData للعثور على القسم
        const sec = processedMenuData.find(s=>s.section===sectionName); 
        if(!sec) return;
        itemsToRender = sec.items;
    }

    // تصفية الوجبات حسب توافرها في الفرع الحالي
    const branchFilteredItems = itemsToRender.filter(item => {
        // تحقق مما إذا كانت الوجبة متوفرة في الفرع المحدد حالياً
        return item.availableIn && Array.isArray(item.availableIn) && item.availableIn.includes(currentBranchId);
    });

    const filteredItems = branchFilteredItems.filter(item => {
        return item.name.toLowerCase().includes(normalizedSearch);
    });

    if(filteredItems.length === 0 && normalizedSearch.length > 0) {
        menuList.innerHTML = `<p style="text-align:center; padding: 20px; color: var(--light-text);">لا توجد نتائج بحث في قسم "${sectionName}" في فرع ${currentBranch.name}</p>`;
        return;
    }

    if (filteredItems.length === 0 && normalizedSearch.length === 0 && sectionName !== "الكل") {
        menuList.innerHTML = `<p style="text-align:center; padding: 20px; color: var(--light-text);">لا تتوفر وجبات في قسم "${sectionName}" حالياً في فرع ${currentBranch.name}.</p>`;
        return;
    }

    filteredItems.forEach(item=>{
        const isAvailable = item.isAvailable !== false; 
        // تحديد السعر المخفض الخاص بالفرع الحالي
        const discountedPriceForBranch = item.branchDiscounts ? item.branchDiscounts[currentBranchId] : null;
        // تحديد ما إذا كان هناك خصم يطبق على هذا الفرع
        const hasDiscount = discountedPriceForBranch && discountedPriceForBranch < item.basePrice;
        const isBestSeller = item.isBestSeller === true; 

        let buttonText = "أضف للسلة";
        let buttonAttributes = ""; 
        let cardClassAddition = ""; 
        let bestSellerBadge = ''; 

        if (!isAvailable) {
            buttonText = "غير متوفر مؤقتاً ⛔";
            buttonAttributes = "disabled"; 
            cardClassAddition = " unavailable-card"; 
        } else if (hasDiscount) {
            cardClassAddition = " discount-card"; 
        }

        if (isBestSeller) {
            bestSellerBadge = '<span class="best-seller-badge">الأكثر مبيعاً 🏆</span>';
        }

        let priceDisplay;
        if (hasDiscount) {
            priceDisplay = `
                <span class="old-price">${item.basePrice} ريال</span> 
                <span class="discount-price">${discountedPriceForBranch} ريال</span>
            `;
        } else {
            priceDisplay = item.basePrice > 0 ? `${item.basePrice} ريال` : 
                (item.options.length > 0 && item.options[0].price > 0 ? `ابتداءً من ${item.options[0].price} ريال` : `${item.options[0].price} ريال`);
        }

        // نستخدم actualSection إذا كانت الوجبة في قسم "الأكثر مبيعاً" أو "الكل"، وإلا نستخدم اسم القسم الحالي
        const displayedSection = item.actualSection || sectionName; 

        const card=document.createElement('div');
        card.className='card' + cardClassAddition; 
        card.innerHTML=`
            <img src="${item.img}" alt="${item.name}" onerror="this.style.opacity=.35">
            ${bestSellerBadge} 
            <h3>${item.name}</h3>
            <p>${displayedSection}</p>
            <div class="price">${priceDisplay}</div>
            <button class="add-btn" ${buttonAttributes}>${buttonText}</button> 
        `;

        if (isAvailable) {
            card.querySelector('button').onclick = function() {
                const itemForCart = {...item};
                
                // 🚀 NEW: الحصول على مرجع الصورة لبطاقة المنتج الحالية
                const itemImage = card.querySelector('img'); 
                
                // تعيين السعر الأساسي للخصم إذا كان موجوداً لهذا الفرع
                if(hasDiscount){
                    itemForCart.basePrice = discountedPriceForBranch;
                }

                delete itemForCart.actualSection;
                const needsOptions = item.options.length > 1 || (item.options.length === 1 && item.options[0].name !== "");

                if(needsOptions){
                    showOptions(itemForCart, false, itemImage); // 🚀 MODIFIED: تمرير itemImage
                } else {
                    itemNoteInput.value = ''; 
                    showOptions(itemForCart, true, itemImage); // 🚀 MODIFIED: تمرير itemImage
                }
            };
        }
        menuList.appendChild(card);
    });
}


/* ====== Show options modal - لدعم الملاحظات ====== */
// 🚀 MODIFIED: إضافة itemImage للمُعاملات
function showOptions(item, skipOptions = false, itemImage = null){ 
    selectedItem = item;
    selectedOption = item.options.length > 0 ? item.options[0] : null; 
    selectedItemImage = itemImage; // 🚀 NEW LINE: قم بتخزين الصورة هنا

    modalTitle.innerText = item.name;
    itemNoteInput.value = ''; 

    if(skipOptions || item.options.length <= 1 && item.options[0].name === ""){
        modalOptions.style.display = 'none';
    } else {
        modalOptions.style.display = 'block';
        modalOptions.innerHTML='';
        item.options.forEach(opt=>{
            const b=document.createElement('button');
            b.className='opt-btn';
            if(opt === selectedOption) b.style.backgroundColor = '#a07c4c'; 
            b.innerText = opt.name + (opt.price>0?` +${opt.price} ريال`:'');
            b.onclick = ()=>{
                selectedOption=opt;
                document.querySelectorAll('#modalOptions .opt-btn').forEach(btn => btn.style.backgroundColor = 'var(--gold)');
                b.style.backgroundColor = '#a07c4c';
            };
            modalOptions.appendChild(b);
        });
    }
    optionModal.style.display='flex';
}


/* ====== Confirm modal ====== */
optionModal.addEventListener('click', (e) => {
    if (e.target.id === 'optionModal') {
        optionModal.style.display = 'none';
    }
});


modalConfirm.onclick = ()=>{
    if(selectedItem){
        const note = itemNoteInput.value.trim();
        const optionToSend = selectedOption || (selectedItem.options.length > 0 ? selectedItem.options[0] : null);

        addToCart({...selectedItem, qty:1, selectedOption:optionToSend, note: note || null}); 
        
        // 🚀 NEW: استدعاء تأثير الطيران بعد الإضافة
        if (selectedItemImage) {
            flyToCart(selectedItemImage);
        }

        const originalText = modalConfirm.innerText;
        modalConfirm.innerText = "تمت الإضافة! ✅";
        modalConfirm.style.backgroundColor = '#4CAF50';
        modalConfirm.disabled = true;

        setTimeout(() => {
            modalConfirm.innerText = originalText;
            modalConfirm.style.backgroundColor = 'var(--gold)'; 
            modalConfirm.disabled = false;
            optionModal.style.display='none';
        }, 1200);

    } else {
        optionModal.style.display='none';
    }
};


/* ====== Cart functions - تم تحديثها لحذف خصائص الفروع عند الإضافة للسلة ====== */
function saveCart(){ 
    localStorage.setItem('deerty_cart',JSON.stringify(cart)); 
    renderCart(); 
}


function flashCartButton() {
    cartBtn.classList.add('flash-cart-btn');
    setTimeout(() => {
        cartBtn.classList.remove('flash-cart-btn');
    }, 400); 
}


function addToCart(item){
    const obj={...item};
    // حذف كل الخصائص المتعلقة بالمنطق
    delete obj.branchDiscounts; 
    delete obj.isBestSeller; 
    delete obj.availableIn; 

    const key = obj.id + (obj.selectedOption?`-${obj.selectedOption.name}`:'') + (obj.note ? `-${obj.note}` : '');
    const found = cart.find(i=>i.key===key);
    if(found) found.qty+=1;
    else cart.push({...obj,key});

    saveCart();
flashCartButton();

}
// 🚀 ———————————————


/* ====== renderCart - عرض الإجمالي التفصيلي باستخدام رسوم الفرع الحالي ====== */
function renderCart(){
    cartItemsEl.innerHTML='';
    let subtotal = 0;
    let count = 0;
    const branchDeliveryFee = currentBranch.deliveryFee || 0; // رسوم التوصيل من بيانات الفرع

    cart.forEach((it,idx)=>{
        const price = (it.basePrice || 0) + (it.selectedOption?it.selectedOption.price:0);
        const row=document.createElement('div');
        row.className='cart-row';

        const noteHtml = it.note ? `<div class="item-note-display">📝 ملاحظة: ${it.note}</div>` : '';

        row.innerHTML=`
            <div style="flex-grow:1; min-width: 60%">
                <div style="font-weight:800">${it.name}${it.selectedOption && it.selectedOption.name !== 'نفر' && it.selectedOption.name !== 'طبق' && it.selectedOption.name !== 'عبوة'?' — '+it.selectedOption.name:''}</div>
                <div style="font-size:0.9rem;color:rgba(255,255,255,0.7)">${it.qty} × ${price} ريال</div>
                ${noteHtml}
            </div>
            <div class="controls">
                <button onclick="updateQty(${idx},-1)">-</button>
                <div style="min-width:26px;text-align:center">${it.qty}</div>
                <button onclick="updateQty(${idx},1)">+</button>
                <button onclick="removeItem(${idx})" style="margin-left:6px;background:var(--red);color:#fff;padding:6px;border-radius:6px;border:none;cursor:pointer">حذف</button>
            </div>
        `;
        cartItemsEl.appendChild(row);
        subtotal += price*it.qty;
        count += it.qty;
    });

    const deliveryType = document.querySelector('input[name="deliveryType"]:checked')?.value;
    const currentDeliveryFee = deliveryType === 'delivery' ? branchDeliveryFee : 0;
    let finalTotal = subtotal + currentDeliveryFee;

    // عرض الإجمالي التفصيلي
    totalBreakdownEl.innerHTML = `
        <div class="total-line">
            <span>إجمالي المنتجات:</span>
            <span>${subtotal} ريال</span>
        </div>
        <div class="total-line">
            <span>رسوم التوصيل:</span>
            <span>${currentDeliveryFee} ريال</span>
        </div>
        <div class="total-line final-total-line">
            <span>الإجمالي النهائي:</span>
            <span id="cartTotalBottom">${finalTotal} ريال</span>
        </div>
    `;

    cartCount.innerText=count;
    cartCount.style.display=count===0?'none':'inline-block';
    localStorage.setItem('deerty_cart',JSON.stringify(cart));
    renderCartSuggestions(); // 👈 هذا السطر يشغل الرف الجديد
}


function updateQty(idx,change){ 
    if(!cart[idx]) return; 
    cart[idx].qty+=change; 
    if(cart[idx].qty<1) cart.splice(idx,1); 
    saveCart(); 
}


function removeItem(idx){ 
    cart.splice(idx,1); 
    saveCart(); 
}


clearCart.onclick = ()=>{
    cart = [];
    saveCart();
}


document.querySelectorAll('input[name="deliveryType"]').forEach(radio => {
    radio.addEventListener('change', renderCart); 
});



/* ====== Cart UI and WhatsApp - يستخدم رقم الواتساب الخاص بالفرع ====== */
const closeCart = () => {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('show');
    cartDrawer.setAttribute('aria-hidden','true');
    cartBtn.style.display = 'block'; 
};


cartBtn.addEventListener('click',()=>{
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('show');
    cartDrawer.setAttribute('aria-hidden','false');
    renderCart();
    cartBtn.style.display = 'none'; 
});


cartOverlay.addEventListener('click', closeCart);
closeCartBtn.addEventListener('click', closeCart);


sendWhatsapp.addEventListener('click', () => {
    if(cart.length===0){ alert('السلة فارغة'); return; }
    
    // 💡 التعديل الأول: قراءة العنوان اليدوي من حقل "manualAddress"
    const manualAddressNote = document.getElementById('manualAddress').value.trim(); 
    
    const branchDeliveryFee = currentBranch.deliveryFee || 0;
    const whatsappNumber = currentBranch.whatsapp;

    const deliveryType = document.querySelector('input[name="deliveryType"]:checked')?.value;
    // 📍 متغيرات رسائل الواتساب
    const lines=['طلب جديد:'];
    let subtotal = 0;

    cart.forEach(it=>{
        const price=(it.basePrice || 0)+(it.selectedOption?it.selectedOption.price:0);
        const optionText = it.selectedOption && it.selectedOption.name !== 'نفر' && it.selectedOption.name !== 'طبق' && it.selectedOption.name !== 'عبوة' ? ` — ${it.selectedOption.name}` : '';
        const noteText = it.note ? ` (ملاحظة: ${it.note})` : '';

        lines.push(`${it.qty} × ${it.name}${optionText} ${noteText} — ${price*it.qty} ريال`);
        subtotal+=price*it.qty;
    });

    lines.push('---');
    lines.push(`1. إجمالي المنتجات: ${subtotal} ريال`);

    if(deliveryType==='delivery'){ 
        lines.push(`2. نوع الطلب: توصيل (فرع ${currentBranch.name})`); 
        lines.push(`3. رسوم التوصيل: ${branchDeliveryFee} ريال`); 
        subtotal += branchDeliveryFee; // إضافة رسوم التوصيل للإجمالي
        
        // 📍 إضافة إحداثيات الموقع إذا كانت متوفرة (تم التعديل)
        if (userLocation) {
            lines.push(`4. إحداثيات موقع التوصيل:`);
            lines.push(`   * خط العرض (Lat): ${userLocation.lat}`);
            lines.push(`   * خط الطول (Lng): ${userLocation.lng}`);
            // (تم تصحيح رابط الخريطة إلى الصيغة الصحيحة)
            lines.push(`   * رابط الخريطة: https://maps.google.com/?q=${userLocation.lat},${userLocation.lng}`); 
            lines.push(`⚠️ الموقع المحدد هو إحداثيات GPS ويجب على العميل تأكيد العنوان التفصيلي مع الموظف.`);
        } else {
             lines.push(`4. الموقع: لم يتم تحديد الموقع عبر الزر. يرجى تزويد الموظف بالعنوان كاملاً.`);
        }
        
    } else {
        lines.push(`2. نوع الطلب: استلام من الفرع (فرع ${currentBranch.name})`); 
    }
    
    // 💡 التعديل الثاني: إضافة العنوان اليدوي / ملاحظات التوصيل (التي تم قراءتها في البداية)
    if (manualAddressNote) {
        lines.push(`---`); 
        lines.push(`5. ملاحظات التوصيل / العنوان اليدوي: ${manualAddressNote}`);
    }

    lines.push('---');
    lines.push(`الإجمالي النهائي: ${subtotal} ريال`);
    // استخدام رقم الواتساب الخاص بالفرع
    const url=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url,'_blank');

    cart = [];
    saveCart(); 
    closeCart();
});


/* ====== منطق الإشعارات المنبثقة (Soft Prompt Notification) - جديد ومحسن ====== */
const notificationPrompt = document.getElementById('notificationPrompt');
const allowNotificationsBtn = document.getElementById('allowNotifications');
const denyNotificationsBtn = document.getElementById('denyNotifications');

function requestNotificationPermission() {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log("Notification permission granted.");
            // إشعار ترحيبي
            new Notification('أهلاً بك في شورما خلطه البرنس!', {
                body: 'تم تفعيل الإشعارات بنجاح. سنعلمك بأحدث العروض!',
                icon: '/Dirty55/Icon-192.png' 
            });
        } else {
            console.log("Notification permission denied or ignored.");
        }
    });
}

function showNotificationPrompt() {
    // التحقق أولاً: هل المتصفح يدعم الإشعارات؟
    if (!('Notification' in window)) {
        return;
    }
    
    // التحقق ثانياً: هل تم سؤال المستخدم من قبل؟
    if (localStorage.getItem('notifications_asked')) {
        return;
    }

    // التحقق ثالثاً: هل الإذن ممنوح بالفعل؟
    if (Notification.permission === 'granted') {
        localStorage.setItem('notifications_asked', 'true'); // للتأكد
        return;
    }

    // إظهار النافذة المنبثقة المخصصة
    notificationPrompt.style.display = 'flex';
}

// 1. عند النقر على "نعم، أريد ذلك"
allowNotificationsBtn.addEventListener('click', () => {
    // 🚨 إخفاء النافذة المخصصة فورا قبل طلب إذن المتصفح لحل مشكلة زر الرجوع
    notificationPrompt.style.display = 'none'; 
    
    // وضع علامة في التخزين المحلي لمنع الظهور مرة أخرى
    localStorage.setItem('notifications_asked', 'true');
    
    // طلب الإذن الفعلي من النظام
    requestNotificationPermission();
});

// 2. عند النقر على "لا شكراً"
denyNotificationsBtn.addEventListener('click', () => {
    // إخفاء ووضع علامة في التخزين المحلي
    notificationPrompt.style.display = 'none';
    localStorage.setItem('notifications_asked', 'true');
});


// ====== منطق التشغيل الجديد: PWA فقط + تأخير 10 ثوانٍ ======
function initNotificationPrompt() {
    // تحديد ما إذا كان التطبيق يعمل في وضع PWA المثبت (Standalone)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

    if (isStandalone) {
        // إذا كان التطبيق مثبتاً: تأخير الظهور لمدة 10 ثوانٍ
        console.log("App is installed (Standalone mode). Delaying notification prompt for 10 seconds.");
        setTimeout(showNotificationPrompt, 10000); // 10000ms = 10 ثوانٍ
    }
    // إذا لم يكن مثبتاً (في المتصفح)، لن تظهر الرسالة.
}

// استدعاء دالة التهيئة عند تحميل الصفحة
window.addEventListener('load', initNotificationPrompt); 
/* ====== نهاية منطق الإشعارات المنبثقة ====== */


// 🚀 ------------------------------------------
// ✨ دالة تحديد الموقع (Geolocation) (جديد)
// ------------------------------------------
function onSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    userLocation = { lat: latitude, lng: longitude }; // تخزين الإحداثيات

    // إنشاء رابط لموقع جوجل ماب
    const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

    // تحديث حالة الموقع
    locationStatus.innerHTML = `
        ✅ تم تحديد الموقع بنجاح! 
        <br>
        <a href="${mapLink}" target="_blank" style="color: var(--gold); text-decoration: underline; font-weight: bold;">عرض على الخريطة</a>
    `;
    locationStatus.style.color = '#4CAF50';
    getLocationBtn.disabled = false;
    getLocationBtn.innerText = '📍 تحديث الموقع';
}

function onError(error) {
    let message = 'حدث خطأ أثناء تحديد الموقع.';
    switch(error.code) {
        case error.PERMISSION_DENIED:
            message = '🚫 رفض المستخدم طلب تحديد الموقع.';
            break;
        case error.POSITION_UNAVAILABLE:
            message = '❌ معلومات الموقع غير متوفرة حالياً.';
            break;
        case error.TIMEOUT:
            message = '⏳ انتهت مهلة طلب تحديد الموقع.';
            break;
        case error.UNKNOWN_ERROR:
            message = '🚨 خطأ غير معروف.';
            break;
    }
    
    locationStatus.innerText = message;
    locationStatus.style.color = 'var(--red)';
    getLocationBtn.disabled = false;
    getLocationBtn.innerText = '📍 تحديد موقع التوصيل الحالي (حاول مجدداً)';
    userLocation = null; // مسح الموقع السابق في حالة الخطأ
}

function getMyLocation() {
    locationStatus.innerText = 'جاري البحث عن موقعك... 📡';
    locationStatus.style.color = '#aaa';
    getLocationBtn.disabled = true;

    if (!navigator.geolocation) {
        locationStatus.innerText = '❌ المتصفح لا يدعم تحديد الموقع الجغرافي.';
        locationStatus.style.color = 'var(--red)';
        getLocationBtn.disabled = false;
        return;
    }

    navigator.geolocation.getCurrentPosition(
        onSuccess, 
        onError,
        { 
            enableHighAccuracy: true, // طلب دقة أعلى
            timeout: 10000,          // مهلة 10 ثواني 
            maximumAge: 0            // لا تستخدم بيانات مخزنة مؤقتاً
        } 
    );
}

// 📍 ربط زر تحديد الموقع بالدالة (جديد)
getLocationBtn.addEventListener('click', getMyLocation);
// ------------------------------------------


/* ====== PWA Install Logic / Search Logic / Init ====== */
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installAppBtn.style.display = 'block';
});


installAppBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        installAppBtn.style.display = 'none';
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        deferredPrompt = null;
    }
});


searchBar.addEventListener('input', (e) => {
    renderMenu(currentSection, e.target.value);
});


// ====== إضافة منطق الـ Sticky Header (التثبيت مع الظل) باستخدام منطقك المفضل ======
const stickyHeaderHeight = 80; 
window.addEventListener('scroll', () => {
    const sectionsTop = sectionsEl.getBoundingClientRect().top; // نستخدم sectionsEl
    
    // إذا كان العنصر في موضع التثبيت (أو تجاوزه)
    if (sectionsTop <= stickyHeaderHeight) {
        sectionsEl.classList.add('sections-sticky');
    } else {
        sectionsEl.classList.remove('sections-sticky');
    }
});


renderSections(); 
renderCart();


// تسجيل العامل الخدمي (Service Worker) الخفيف لضمان التحديث الفوري
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // تم التأكد من المسار إلى /Dirty55/
        navigator.serviceWorker.register('/Dirty55/service-worker.js') .then(reg => {
            console.log('Service Worker Registered!', reg.scope);
        })
        .catch(err => {
            console.error('Service Worker Registration failed:', err);
        });
    });
}


// 🚀 ------------------------------------------
// ✨ دالة تأثير سقوط الصورة إلى السلة (Fly-to-Cart)
// ------------------------------------------
function flyToCart(imgElement) {
    // 1. استنساخ الصورة
    const flyingImg = imgElement.cloneNode(true);
    flyingImg.className = "flying-img"; // تطبيق الأنماط
    document.body.appendChild(flyingImg);

    // 2. تحديد موقع الصورة الأصلية
    const rect = imgElement.getBoundingClientRect();
    flyingImg.style.top = rect.top + "px";
    flyingImg.style.left = rect.left + "px";

    // 3. تحديد موقع زر السلة
    const cartRect = document.getElementById("cartBtn").getBoundingClientRect();

    // 4. بدء الحركة
    setTimeout(() => {
        // تحريك الصورة إلى زر السلة وتصغيرها
        flyingImg.style.transform = `translate(${cartRect.left - rect.left}px, ${cartRect.top - rect.top}px) scale(0.2)`;
        flyingImg.style.opacity = "0";
    }, 10);

    // 5. إزالة الصورة بعد انتهاء الحركة
    setTimeout(() => {
        flyingImg.remove();
    }, 800);
}
// ✅ ألصق هذا الكود في نهاية ملف Script.js بدلاً من الكود القديم

document.addEventListener("DOMContentLoaded", () => {
    // التحقق هل المتصفح هو سفاري على آيفون/آيباد
    const ua = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

    // إذا كان آيفون ولم يتم تثبيته بعد
    if (isIOS && !isStandalone) {
        const iosBtn = document.getElementById('iosHelpBtn');
        if (iosBtn) {
            iosBtn.style.display = 'inline-flex'; // إظهار الزر العلوي
            
            // عند الضغط، تظهر القائمة السفلية
            iosBtn.addEventListener('click', () => {
                const banner = document.getElementById('iosInstallBanner');
                if (banner) banner.style.display = 'block';
            });
        }
    }
});

function closeIosBanner() {
    const banner = document.getElementById('iosInstallBanner');
    if (banner) banner.style.display = 'none';
}

/* ================================================= */
/* 🛒 منطق "رف الاقتراحات" الذكي (استراتيجية الكاشير) */
/* ================================================= */
function renderCartSuggestions() {
    const suggestionsContainer = document.getElementById('cartSuggestions');
    suggestionsContainer.innerHTML = ''; 
    suggestionsContainer.style.display = 'none'; 

    if (cart.length === 0) return; 

    let suggestedCategories = new Set();
    
    // 1. تحديد الأقسام المقترحة
    cart.forEach(cartItem => {
        Object.keys(dynamicSuggestionRules).forEach(ruleKey => {
            if (cartItem.name.includes(ruleKey)) {
                dynamicSuggestionRules[ruleKey].forEach(cat => suggestedCategories.add(cat));
            }
        });
    });

    if (suggestedCategories.size === 0) return;

    // 2. تجميع كل المرشحين (بدلاً من الاختيار الفوري)
    let allCandidates = [];
    processedMenuData.forEach(section => {
        if (suggestedCategories.has(section.section)) {
            section.items.forEach(item => {
                const alreadyInCart = cart.some(cItem => cItem.id === item.id);
                if (!alreadyInCart) {
                    allCandidates.push(item);
                }
            });
        }
    });

    if (allCandidates.length === 0) return;

    // 3. خلط المرشحين عشوائياً لضمان التنوع
    allCandidates.sort(() => Math.random() - 0.5);

    // 4. أخذ أول 5 عناصر فقط
    const suggestionsToShow = allCandidates.slice(0, 5);

    // 5. رسم المنتجات
    suggestionsContainer.style.display = 'block'; 
    suggestionsContainer.innerHTML = '<div style="font-size:0.9rem; margin-bottom:5px; color:#ccc;">أكمل وجبتك بـ... 👇</div>'; 

    suggestionsToShow.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-suggestion-item';
        itemDiv.innerHTML = `
            <img src="${item.img}" onerror="this.src='/Dirty55/logo-bg.png'">
            <h4>${item.name}</h4>
            <span class="price">${item.basePrice} ريال</span>
            <button>أضف +</button>
        `;
        
        itemDiv.querySelector('button').onclick = () => {
            const defaultOption = item.options.length > 0 ? item.options[0] : null;
            addToCart({...item, qty: 1, selectedOption: defaultOption});
            const img = itemDiv.querySelector('img');
            if(typeof flyToCart === 'function') flyToCart(img);
        };

        suggestionsContainer.appendChild(itemDiv);
    });
}
/* ====== رسالة ترحيبية تظهر كل مرة عند فتح التطبيق ====== */
document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {

        const welcomeBox = document.createElement("div");
        welcomeBox.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.65);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
            ">
                <div style="
                    background: #111;
                    padding: 25px;
                    border-radius: 18px;
                    text-align: center;
                    max-width: 330px;
                    color: white;
                    box-shadow: 0 0 25px rgba(0,0,0,0.5);
                    animation: fadeInScale 0.4s ease;
                ">
                    <h2 style="margin-bottom:10px;">👋 أهلاً بك في خلطة البرنس</h2>
                    <p style="margin-bottom:20px; font-size:14px;">
                        اطلب الآن واستمتع بألذ الشاورما 🔥<br>
                        والتوصيل سريع لحد باب بيتك 🚀
                    </p>
                    <button onclick="this.closest('div').parentElement.remove()" 
                        style="
                            background: var(--gold);
                            border:none;
                            padding:10px 20px;
                            border-radius:10px;
                            cursor:pointer;
                            font-weight:bold;
                        ">
                        دخول القائمة
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(welcomeBox);

    }, 600); // تظهر بعد 0.6 ثانية
});
// ------------------------------------------
