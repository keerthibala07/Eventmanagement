let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slide-content');
    const cards = document.querySelectorAll('.card-wrapper');
    const cardWidth = cards[0].offsetWidth;
    currentIndex = index;

    slides.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function changeSlide(direction) {
    currentIndex += direction;
    const totalCards = document.querySelectorAll('.card-wrapper').length;

    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    } else if (currentIndex >= totalCards) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    prevBtn.addEventListener('click', () => changeSlide(-1));
    nextBtn.addEventListener('click', () => changeSlide(1));

    // Additional code for fetching data and creating cards dynamically
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const cardContainer = document.getElementById('cardContainer');

            data.forEach(item => {
                const cardWrapper = document.createElement('div');
                cardWrapper.className = 'card-wrapper';

                const cardNow = document.createElement('div');
                cardNow.className = 'card-now';

                const imageContent = document.createElement('div');
                imageContent.className = 'image-content';

                const cardImage = document.createElement('div');
                cardImage.className = 'card-image';

                const img = document.createElement('img');
                img.src = item.imageName;
                img.alt = '';
                img.className = 'card-img';

                cardImage.appendChild(img);
                imageContent.appendChild(cardImage);

                const cardContent = document.createElement('div');
                cardContent.className = 'card-content';

                const h2 = document.createElement('h2');
                h2.className = 'name';
                h2.textContent = item.eventName;

                const p = document.createElement('p');
                p.className = 'description';
                p.textContent = item.department;

                const button = document.createElement('button');
                button.className = 'view';
                button.textContent = 'View';

                cardContent.appendChild(h2);
                cardContent.appendChild(p);
                cardContent.appendChild(button);

                cardNow.appendChild(imageContent);
                cardNow.appendChild(cardContent);
                cardWrapper.appendChild(cardNow);
                cardContainer.appendChild(cardWrapper);
            });
            showSlide(0); // Show the initial slide
        })
        .catch(error => console.error('Error fetching data:', error));
});
