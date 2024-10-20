
let formData = {
    email: "",
    message: ""
  };
  
  // Отримуємо посилання на форму та її елементи
  const form = document.querySelector('.feedback-form');
  const emailInput = form.elements.email;
  const messageInput = form.elements.message;
  
  // Ключ для локального сховища
  const STORAGE_KEY = 'feedback-form-state';
  
  // Функція для збереження даних у локальне сховище
  function saveFormData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
  
  // Відстеження події input для оновлення formData і збереження у локальне сховище
  form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value;
    saveFormData();
  });
  
  // Функція для заповнення форми з даних з локального сховища
  function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      formData = JSON.parse(savedData);
      emailInput.value = formData.email;
      messageInput.value = formData.message;
    }
  }
  
  // Перевірка, чи є дані у локальному сховищі, і заповнення форми
  populateForm();
  
  // Відправка форми
  form.addEventListener('submit', event => {
    event.preventDefault(); // Запобігаємо стандартній поведінці
  
    // Перевіряємо, чи всі поля заповнені
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
  
    // Виводимо formData у консоль
    console.log('Form data:', formData);
  
    // Очищуємо форму, локальне сховище та об'єкт formData
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
    form.reset();
  });