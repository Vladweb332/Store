const products = {
    Одежда: [
      { name: "Футболка", price: "1200,0 ₽", image: "./dali.jpg" },
      { name: "Джинсы", price: "3500,0 ₽", image: "./dali.jpg" },
    ],
    Продукты: [
      { name: "Яблоко", price: "150,0 ₽", image: "./dali.jpg" },
      { name: "Апельсин", price: "200,0 ₽", image: "./dali.jpg" },
    ],
    Красота: [
      { name: "Крем", price: "700,0 ₽", image: "./dali.jpg" },
    ],
  };
  
  // Тоггл сайдбара
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
  }
  
  // Загрузка товаров категории
  function loadCategory(category) {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = ""; // Очистка содержимого
    const items = products[category] || [];
    items.forEach((product) => {
      mainContent.innerHTML += `
        <div class="bg-gray-700 rounded-lg overflow-hidden shadow-md">
          <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h2 class="text-lg font-semibold">${product.name}</h2>
            <p class="text-sm text-gray-300">${product.price}</p>
            <button onclick="addToCart('${product.name}')" class="mt-4 bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">
              Добавить в корзину
            </button>
          </div>
        </div>
      `;
    });
    toggleSidebar();
  }
  
  // Добавление в корзину
  function addToCart(productName) {
    alert(`${productName} добавлен в корзину`);
  }
  