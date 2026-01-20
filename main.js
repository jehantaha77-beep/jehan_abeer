
// المتطلب 12: استخدام jQuery للتعامل مع الصفحة
$(document).ready(function() {
    
    // عند الضغط على زر الدخول (Submit)
    $('#loginForm').on('submit', function(e) {
        e.preventDefault(); // يمنع الصفحة من التحديث المفاجئ
        
        // سحب القيم من الحقول (استخدام jQuery)
        const email = $('#email').val();
        const pass = $('#password').val();
        
        // المتطلب 5: التحقق من صحة البيانات (Validation)
        if (email === "" || pass === "") {
            alert("Please fill in all fields!");
        } 
        else if (pass.length < 6) {
            alert("Security Alert: Password must be at least 6 characters.");
        } 
        else {
            // في حال كانت البيانات صحيحة
            alert("Welcome back, Madridista! Success.");

            // هنا يمكنك توجيه المستخدم لصفحة أخرى إذا أردتِ
            // window.location.href = "index.html";
        }
    });
});
