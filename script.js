// الانتظار حتى يتم تحميل كامل محتوى الصفحة
document.addEventListener('DOMContentLoaded', function() {
    
    // الإمساك بزر المنيو (menu-toggle) وقائمة الروابط (nav-links)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // إضافة مستمع حدث "النقر" (click) على زر المنيو
    menuToggle.addEventListener('click', function() {
        // عند النقر، قم بـ "تبديل" (toggle) كلاس 'active' على قائمة الروابط
        // هذا الكلاس (active) هو الذي يقوم بإظهار أو إخفاء القائمة في ملف الـ CSS
        navLinks.classList.toggle('active');
    });

    // (اختياري) إغلاق القائمة عند النقر على أحد الروابط (لتحسين تجربة المستخدم في الموبايل)
    const allNavLinks = document.querySelectorAll('.nav-links a');
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

});