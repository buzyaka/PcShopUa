// Получаем ссылки на модальные окна
var aboutModal = document.getElementById("about-modal");
var productsModal = document.getElementById("products-modal");
var contactModal = document.getElementById("contact-modal");
var basketModal = document.querySelector('#basket-modal');

// Получаем ссылки на элементы списка
var aboutLink = document.querySelector('a[data-modal="about-modal"]');
var productsLink = document.querySelector('a[data-modal="products-modal"]');
var contactLink = document.querySelector('a[data-modal="contact-modal"]');
var basketLink = document.querySelector('.basket-link');

// Функция для открытия модального окна
function showModal(modal) {
  modal.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal(modal) {
  modal.style.display = "none";
}

// Обработчики событий для открытия модальных окон
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

// Обработчики событий для закрытия модальных окон
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

// Обработчик события для закрытия модальных окон при клике вне окна
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

// Обработчик события для закрытия модальных окон при нажатии кливиши esc
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      closeModal(aboutModal);
      closeModal(productsModal);
      closeModal(contactModal);
      closeModal(basketModal);
    }
  });

  // Search
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchQuery = form.elements.search.value;
  // тут буде запрос до виконання в базі даних або API для отримання результатів пошука та відображення на стронці 
});
