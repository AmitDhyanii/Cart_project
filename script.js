const products = [
    {
        name: 'Goku Wallpaper',
        description: 'Master Ultra Instinct.',
        price: '$10',
        image: 'image/goku.jpg',
    },
    {
        name: 'Tanjiro',
        description: 'A wallpaper for DS fans.',
        price: '$6',
        image: 'image/Tanjiro.jpg',
    },
    {
        name: 'Itachi Uchiha',
        description: 'Clan Destroyer.',
        price: '$11',
        image: 'image/Itachi.jpg',
    },
    {
        name: 'Prince Vegeta',
        description: 'Ultra Ego.',
        price: '$15',
        image: 'image/vegeta_ultra_ego.jpg',
    },
    {
        name: 'Levi Ackerman',
        description: 'Strongest Soldier.',
        price: '$9',
        image: 'image/Levi.jpg',
    }
];

const popularItems = [
    {
        name: 'Ichigo',
        description: 'Clavar La Espada',
        price: '$12',
        image: 'image/Ichigo.jpg',
    },
    {
        name: 'Ship Wallpaper',
        description: 'Elegant Poster',
        price: '$7',
        image: 'image/Ship.jpg',
    }
];



// Load the cart from localStorage if it exists, or initialize an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render products
function renderProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';  // Clear the container before adding new items
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product', 'w-fit', 'rounded-xl', 'p-2', 'bg-white');
        productElement.innerHTML = `
            <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl" style="background-image: url('${product.image}');"></div>
            <div class="data w-full px-2 py-5">
                <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                <div class="flex justify-between w-full items-center mt-2">
                    <div class="w-1/2">
                        <h3 class="font-semibold opacity-20">${product.description}</h3>
                        <h4 class="font-semibold mt-2">${product.price}</h4>
                    </div>
                    <button class="w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400" onclick="addToCart('${product.name}')">
                        <i class="ri-add-line"></i>
                    </button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Function to render popular items
function renderPopularItems() {
    const popularsContainer = document.getElementById('populars');
    popularsContainer.innerHTML = '';  // Clear the container before adding new items
    popularItems.forEach(item => {
        const popularElement = document.createElement('div');
        popularElement.classList.add('popular', 'bg-white', 'p-2', 'rounded-2xl', 'flex', 'items-start', 'gap-3', 'w-[60%]', 'flex-shrink-0');
        popularElement.innerHTML = `
            <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                <img class="w-full h-full object-cover" src="${item.image}" alt="${item.name}">
            </div>
            <div class="data py-2 w-full">
                <h1 class="leading-none font-semibold">${item.name}</h1>
                <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${item.description}</h4>
                <h4 class="mt-3 font-semibold text-zinc-500">${item.price}</h4>
            </div>
        `;
        popularsContainer.appendChild(popularElement);
    });
}

// Function to add item to the cart
function addToCart(itemName) {
    const item = products.find(product => product.name === itemName) || popularItems.find(item => item.name === itemName);
    if (item) {
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));  // Save the cart to localStorage
        showNotification(`${itemName} has been added to the cart.`);
        updateCartDisplay();
    }
}

// Function to show a custom notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification', 'fixed', 'top-5', 'left-1/2', 'transform', 'translate-x-[-50%]', 'bg-green-500', 'text-white', 'p-3', 'rounded-lg', 'shadow-md', 'transition-all', 'opacity-0');
    notification.innerHTML = message;

    document.body.appendChild(notification);

    // Show the notification with animation
    setTimeout(() => {
        notification.classList.remove('opacity-0');
        notification.classList.add('opacity-100');
    }, 100);

    // Hide the notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('opacity-100');
        notification.classList.add('opacity-0');
        // Remove notification from DOM after animation
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Function to toggle the cart visibility
function toggleCart() {
    const cartExpnd = document.getElementById('cartexpnd');
    cartExpnd.classList.toggle('hidden');
    updateCartDisplay();
}

// Function to remove item from the cart
function removeFromCart(itemName) {
    // Remove item from the cart array
    cart = cart.filter(item => item.name !== itemName);
    localStorage.setItem('cart', JSON.stringify(cart));  // Save updated cart to localStorage
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartExpnd = document.getElementById('cartexpnd');
    cartExpnd.innerHTML = ''; // Clear previous cart items

    if (cart.length > 0) {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item', 'p-2', 'bg-white', 'rounded-lg', 'flex', 'gap-3');
            cartItem.innerHTML = `
                <div class="w-16 h-16 bg-gray-300 rounded-lg" style="background-image: url('${item.image}'); background-size: cover;"></div>
                <div class="data py-2 w-full">
                    <h1 class="font-semibold">${item.name}</h1>
                    <h4 class="font-semibold text-sm text-zinc-500">${item.price}</h4>
                </div>
                <button class="remove-button bg-red-500 text-white rounded-full p-2" onclick="removeFromCart('${item.name}')">
                    <i class="ri-delete-bin-6-fill"></i> Remove
                </button>
            `;
            cartExpnd.appendChild(cartItem);
        });
    } else {
        cartExpnd.innerHTML = '<p class="text-center text-gray-500">Your cart is empty.</p>';
    }
}

// Initialize the page
renderProducts();
renderPopularItems();
updateCartDisplay();  // Update cart display on page load





