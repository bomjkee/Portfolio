document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Вы успешно зарегистрированы');
        const modal = bootstrap.Modal.getInstance(document.getElementById('registrationModal'));
        modal.hide();
        form.reset();
    });

    document.getElementById('page-switcher').addEventListener('change', function() {
        const selectedPage = this.value;
        window.location.href = selectedPage;
    });
});



