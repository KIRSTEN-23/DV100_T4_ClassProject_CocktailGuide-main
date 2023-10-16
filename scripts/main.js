$(document).ready(function() {
    $('#signupForm').submit(function(event) {
        event.preventDefault();
        
        // Reset validation state
        $('#password, #confirmPassword').removeClass('is-valid is-invalid');
        
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (!passwordPattern.test(password)) {
            $('#password').addClass('is-invalid');
            $('#password').next('.invalid-feedback').text('Password must be at least 8 characters long and include at least 1 number, 1 uppercase letter, and 1 lowercase letter.');
        } else if (password !== confirmPassword) {
            $('#password, #confirmPassword').addClass('is-invalid');
            $('#confirmPassword').next('.invalid-feedback').text('Passwords do not match.');
        } else {
            $('#password, #confirmPassword').addClass('is-valid');
        }

        if (this.checkValidity() === false) {
            event.stopPropagation();
        } else {
            window.location.href = 'pages/library.html';
        }
        $(this).addClass('was-validated');
    });
});
