// Массив товаров
const products = [
    { id: 1, name: "Крем для лица", category: "skincare", price: 500 },
    { id: 2, name: "Тональный крем", category: "makeup", price: 800 },
    { id: 3, name: "Маска для лица", category: "skincare", price: 450 },
    { id: 4, name: "Помада", category: "makeup", price: 600 }
];

// Корзина
let cart = [];

// Вывод товаров
function displayProducts(filteredProducts = products) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";
    
    filteredProducts.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Цена: ${product.price} ₽</p>
            <button onclick="addToCart(${product.id})">Добавить в корзину</button>
        `;
        container.appendChild(div);
    });
}

// Фильтр товаров
function applyFilters() {
    const category = document.getElementById("category-filter").value;
    const filtered = category === "all" ? products : products.filter(p => p.category === category);
    displayProducts(filtered);
}

// Добавление в корзину
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

// Обновление корзины
function updateCart() {
    document.getElementById("cart-count").textContent = cart.length;
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = '${item.name} - ${item.price} ₽';
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.onclick = () => removeFromCart(index);
        li.appendChild(removeBtn);
        cartList.appendChild(li);
    });
}

// Удаление из корзины
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Оформление заказа
function checkout() {
    if (cart.length === 0) {
        alert("Корзина пуста!");
        return;
    }
    
    alert("Заказ оформлен!");
    cart = [];
    updateCart();
    toggleCart();
}

// Открытие/закрытие корзины
function toggleCart() {
    document.getElementById("cart").classList.toggle("hidden");
}

// Инициализация
displayProducts();
