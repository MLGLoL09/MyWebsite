function toggleMode() {
    const body = document.body;
    const btn = document.querySelector('.btn-secondary');
    const elementsToToggle = document.querySelectorAll('.toggle');

    body.classList.toggle('bg-dark');
    body.classList.toggle('text-light');
    body.classList.toggle('bg-light');
    body.classList.toggle('text-dark');

    if (body.classList.contains('bg-dark')) {
        btn.innerHTML = 'Light Mode';
        btn.classList.remove('bg-dark', 'border-dark');
        btn.classList.add('bg-light', 'border-light', 'text-dark');
        elementsToToggle.forEach(function(element) {
            element.classList.remove('border-dark');
            element.classList.add('border-light');
        });
    } else {
        btn.innerHTML = 'Dark Mode';
        btn.classList.remove('bg-light', 'border-light', 'text-dark');
        btn.classList.add('bg-dark', 'border-dark', 'text-light');
        elementsToToggle.forEach(function(element) {
            element.classList.remove('border-light');
            element.classList.add('border-dark');
        });
    }
}
