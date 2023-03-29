// Отримуємо силки на модальні вікна
var aboutModal = document.getElementById("about-modal");
var productsModal = document.getElementById("products-modal");
var contactModal = document.getElementById("contact-modal");
var basketModal = document.querySelector('#basket-modal');

// Отримуємо силки на елементи списку
var aboutLink = document.querySelector('a[data-modal="about-modal"]');
var productsLink = document.querySelector('a[data-modal="products-modal"]');
var contactLink = document.querySelector('a[data-modal="contact-modal"]');
var basketLink = document.querySelector('.basket-link');

// Ф-ція для відкриття модального вікна
function showModal(modal) {
  modal.style.display = "block";
}

// Ф-ція для закриття модального вікна
function closeModal(modal) {
  modal.style.display = "none";
}

// Обробник подій для відкриття модальних вікон
aboutLink.addEventListener('click', function() {
  showModal(aboutModal);
});

productsLink.addEventListener('click', function() {
  showModal(productsModal);
});

contactLink.addEventListener('click', function() {
  showModal(contactModal);
});

basketLink.addEventListener('click', function(e) {
  e.preventDefault(); // запобігаємо переходу за посиланням
  
  basketModal.style.display = 'block'; // відображаємо модальне вікно
});

// Обробник подій для закриття модальних вікон
aboutModal.querySelector('.close-modal').addEventListener('click', function() {
  closeModal(aboutModal);
});

productsModal.querySelector('.close-modal').addEventListener('click', function() {
  closeModal(productsModal);
});

contactModal.querySelector('.close-modal').addEventListener('click', function() {
  closeModal(contactModal);
});

basketModal.querySelector('.close-modal').addEventListener('click', function() {
  closeModal(basketModal);
})

// Обробник подій для закриття модальних вікон під час натискання зовні вікна
window.addEventListener('click', function(event) {
  if (event.target == aboutModal) {
    closeModal(aboutModal);
  } else if (event.target == productsModal) {
    closeModal(productsModal);
  } else if (event.target == contactModal) {
    closeModal(contactModal);
  } else if (event.target == basketModal) {
    closeModal(basketModal);
  }});

// Обробник подій для закриття модальних вікон під час натискання клавіши Esc
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      closeModal(aboutModal);
      closeModal(productsModal);
      closeModal(contactModal);
      closeModal(basketModal);
    }
  });

  // Пошук
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchQuery = form.elements.search.value;
  // тут буде запрос до виконання в базі даних або API для отримання результатів пошука та відображення на стронці 
});
