function toggleMode() {
    const body = document.body;
    const btn = document.querySelector('.btn-secondary');
    const elementsToToggle = document.querySelectorAll('.toggle');
    const cards = document.querySelectorAll('.card');
    const cardBodies = document.querySelectorAll('.card-body');
    const cardTitles = document.querySelectorAll('.card-title');
    const cardTexts = document.querySelectorAll('.card-text');

    body.classList.toggle('bg-dark');
    body.classList.toggle('text-light');
    body.classList.toggle('bg-light');
    body.classList.toggle('text-dark');

    if (body.classList.contains('bg-dark')) {
        btn.innerHTML = 'Light Mode';
        btn.classList.remove('bg-dark', 'border-dark');
        btn.classList.add('bg-light', 'border-light', 'text-dark');

        for (let i = 0; i < elementsToToggle.length; i++) {
            elementsToToggle[i].classList.remove('border-dark');
            elementsToToggle[i].classList.add('border-light');
        }

        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add('bg-secondary', 'text-light');
            cards[i].classList.remove('bg-white');
        }

        for (let i = 0; i < cardBodies.length; i++) {
            cardBodies[i].classList.add('text-light');
        }

        for (let i = 0; i < cardTitles.length; i++) {
            cardTitles[i].classList.add('text-light');
        }

        for (let i = 0; i < cardTexts.length; i++) {
            cardTexts[i].classList.add('text-light');
        }

    } else {
        btn.innerHTML = 'Dark Mode';
        btn.classList.remove('bg-light', 'border-light', 'text-dark');
        btn.classList.add('bg-dark', 'border-dark', 'text-light');

        for (let i = 0; i < elementsToToggle.length; i++) {
            elementsToToggle[i].classList.remove('border-light');
            elementsToToggle[i].classList.add('border-dark');
        }

        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('bg-secondary', 'text-light');
            cards[i].classList.add('bg-white');
        }

        for (let i = 0; i < cardBodies.length; i++) {
            cardBodies[i].classList.remove('text-light');
        }

        for (let i = 0; i < cardTitles.length; i++) {
            cardTitles[i].classList.remove('text-light');
        }

        for (let i = 0; i < cardTexts.length; i++) {
            cardTexts[i].classList.remove('text-light');
        }
    }
}
