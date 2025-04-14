// const products = [
//     {
//         name: 'Goku Wallpaper',
//         description: 'Master Ultra Instinct.',
//         price: '$10',
//         image: 'image/goku.jpg',
//     },
//     {
//         name: 'Tanjiro',
//         description: 'A wallpaper for DS fans.',
//         price: '$6',
//         image: 'image/Tanjiro.jpg',
//     },
//     {
//         name: 'Itachi Uchiha',
//         description: 'Clan Destroyer.',
//         price: '$11',
//         image: 'image/Itachi.jpg',
//     },
//     {
//         name: 'Prince Vegeta',
//         description: 'Ultra Ego.',
//         price: '$15',
//         image: 'image/vegeta_ultra_ego.jpg',
//     },
//     {
//         name: 'Levi Ackerman',
//         description: 'Strongest Soldier.',
//         price: '$9',
//         image: 'image/Levi.jpg',
//     }
// ];

// const popularItems = [
//     {
//         name: 'Ichigo',
//         description: 'Clavar La Espada',
//         price: '$12',
//         image: 'image/Ichigo.jpg',
//     },
//     {
//         name: 'Ship Wallpaper',
//         description: 'Elegant Poster',
//         price: '$7',
//         image: 'image/Ship.jpg',
//     }
// ];

// let cart = [];


// function showProducts() {
//     let clutter = "";
//     products.forEach((item, index) => {
//         clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
//                 <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl" style="background-image: url('${item.image}');"></div>
//                 <div class="data w-full px-2 py-5">
//                     <h1 class="font-semibold text-xl leading-none tracking-tight">${item.name}</h1>
//                     <div class="flex justify-between w-full items-center mt-2">
//                         <div class="w-1/2">
//                             <h3 class="font-semibold opacity-20">${item.description}</h3>
//                             <h4 class="font-semibold mt-2">${item.price}</h4>
//                         </div>
//                         <button class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400" data-index="${index}">
//                             <i class="add ri-add-line" data-index="${index}"></i>
//                         </button>
//                     </div>
//                 </div>
//             </div>`;
//     });
//     document.querySelector('#products').innerHTML = clutter;
// }

// // Show popular products function
// function showPopularProducts() {
//     let clutter = "";
//     popularItems.forEach((item) => {
//         clutter += `<div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
//                 <img class="w-full h-full object-cover" src="${item.image}" alt="${item.name}">
//             </div>
//             <div class="data py-2 w-full">
//                 <h1 class="leading-none font-semibold">${item.name}</h1>
//                 <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${item.description}</h4>
//                 <h4 class="mt-3 font-semibold text-zinc-500">${item.price}</h4>
//             </div>`;
//     });
//     document.querySelector('#populars').innerHTML = clutter;
// }

// function addToCart(){
//     document.querySelector('.products')
//     .addEventListener('click', function(details){
//         if(details.target.classList.contains('add')){
//             cart.push(products[details.target.dataset.index])
//         }
//     })
// }

// function showCart(){
//     document.querySelector('.carticon')
//     .addEventListener('click', ()=>{
//         const cartContainer = document.querySelector('.cartexpnd');
//         if (cartContainer.style.display === "block") {
//             cartContainer.style.display = "none";
//         } 
//         else {
//             cartContainer.style.display = "block";
//             if (cart.length === 0) {
//                 cartContainer.innerHTML = "<p>Your cart is empty.</p>";
//                 return;
//             }
//         }
        
//         let clutter = "";
//         cart.forEach((item) => { 
//             clutter += `<div class="w-16 h-16 bg-gray-300 rounded-lg" style="background-image: url('${item.image}'); background-size: cover;"></div>
//                 <div class="data py-2 w-full">
//                     <h1 class="font-semibold">${item.name}</h1>
//                     <h4 class="font-semibold text-sm text-zinc-500">${item.price}</h4>
//                 </div>`;
//         })
//         cartContainer.innerHTML = clutter;
//     })
// }

// showCart();
// addToCart();
// showProducts();
// showPopularProducts();



const products = [
    { name: 'Goku Wallpaper', description: 'Master Ultra Instinct.', price: '$10', image: 'image/goku.jpg' },
    { name: 'Tanjiro', description: 'A wallpaper for DS fans.', price: '$6', image: 'image/Tanjiro.jpg' },
    { name: 'Itachi Uchiha', description: 'Clan Destroyer.', price: '$11', image: 'image/Itachi.jpg' },
    { name: 'Prince Vegeta', description: 'Ultra Ego.', price: '$15', image: 'image/vegeta_ultra_ego.jpg' },
    { name: 'Levi Ackerman', description: 'Strongest Soldier.', price: '$9', image: 'image/Levi.jpg' }
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

let cart = [];

function showProducts() {
    let clutter = "";
    products.forEach((item, index) => {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl" style="background-image: url('${item.image}');"></div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${item.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${item.description}</h3>
                            <h4 class="font-semibold mt-2">${item.price}</h4>
                        </div>
                        <button class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400" data-index="${index}">
                            <i class="ri-add-line" data-index="${index}"></i>
                        </button>
                    </div>
                </div>
            </div>`;
    });
    document.querySelector('#products').innerHTML = clutter;
}

function showPopularProducts() {
    let clutter = "";
    popularItems.forEach((item) => {
        clutter += `<div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                <img class="w-full h-full object-cover" src="${item.image}" alt="${item.name}">
            </div>
            <div class="data py-2 w-full">
                <h1 class="leading-none font-semibold">${item.name}</h1>
                <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${item.description}</h4>
                <h4 class="mt-3 font-semibold text-zinc-500">${item.price}</h4>
            </div>`;
    });
    document.querySelector('#populars').innerHTML = clutter;
}

function addToCart() {
    document.querySelector('#products').addEventListener('click', function (event) {
        if (event.target.closest('.add')) {
            const index = event.target.closest('.add').dataset.index;
            const existingItem = cart.find(item => item.name === products[index].name);

            if (existingItem) {
                existingItem.quantity += 1; // Increase quantity if already in cart
            } else {
                cart.push({ ...products[index], id: Date.now(), quantity: 1 }); // Add new item with quantity 1
            }
            showCart();

            showToast("Item Added!", "success");
        }
    });
}

function increaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
        showToast("Quantity Updated");
        showCart();
    }
}

function decreaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity -= 1;

        if (item.quantity === 0) {
            cart = cart.filter(i => i.id !== id); // Remove item from cart
            showToast("Item Removed!", "error");
        } else {
            showToast("Quantity Updated");
        }

        showCart();
    }
}


function showCart() {
    const cartContainer = document.querySelector('.cartexpnd');
    
    // Ensure cart is visible when clicked
    cartContainer.classList.remove("hidden");

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p class='text-gray-500 text-sm p-2'>Your cart is empty.</p>";
        return;
    }

    let clutter = "";
    cart.forEach((item) => {
        clutter += `
            <div class="flex items-center gap-2 p-2 border-b border-gray-200">
                <div class="w-16 h-16 bg-gray-300 rounded-lg" style="background-image: url('${item.image}'); background-size: cover;"></div>
                <div class="data w-full">
                    <h1 class="font-semibold">${item.name}</h1>
                    <h4 class="font-semibold text-sm text-zinc-500">${item.price}</h4>
                </div>
                <div class="quantity-controls flex items-center">
                    <button class="decrease text-red-500 px-2" data-id="${item.id}">−</button>
                    <span class="px-2">${item.quantity}</span>
                    <button class="increase text-green-500 px-2" data-id="${item.id}">+</button>
                </div>
            </div>`;
    });

    // Add total and checkout button
    clutter += `
        <div class="cart-total p-2 text-right font-bold border-t border-gray-200">
            Total: <span id="cartTotal" class="text-green-600">$0</span>
        </div>
        <div class="p-2 text-right">
            <button id="checkoutBtn" class="bg-[#4A4563] text-white px-4 py-2 rounded hover:bg-[#3a344e] transition-all">Checkout</button>
        </div>
    `;

    cartContainer.innerHTML = clutter;

    // Attach event listeners
    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', function () {
            increaseQuantity(parseInt(this.dataset.id));
        });
    });

    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', function () {
            decreaseQuantity(parseInt(this.dataset.id));
        });
    });

    updateTotal();

    // Checkout button logic
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert("Your cart is empty!");
                return;
            }
    
            // Disable button + show spinner + text
            checkoutBtn.classList.add("glow-aura");
            checkoutBtn.disabled = true;
            checkoutBtn.innerHTML = `
                <div class="flex items-center justify-center">
                <div class="spinner mr-2"></div>
                    processing...
                </div>`;
    
            // Simulate loading / charge-up effect
            setTimeout(() => {
                // Re-enable button + reset text
                checkoutBtn.disabled = false;
                checkoutBtn.classList.remove("glow-aura");
                checkoutBtn.innerHTML = `Checkout`;
    
                // Show modal
                const modal = document.getElementById('successModal');
                modal.classList.remove('hidden');
                modal.classList.add('flex');
    
                // Fire confetti 🎉
                confetti({
                    particleCount: 100,
                    spread: 80,
                    origin: { y: 0.6 }
                });
    
                // Clear cart
                cart = [];
                showCart();
    
                // Close modal on button
                document.getElementById('closeModal').addEventListener('click', () => {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                });
            }, 2000); // 2-second "charging" delay
        });
    }    
}

// toast function
function showToast(message, type = "info") {
    const toast = document.getElementById("toast");
    toast.textContent = message;

    // Style based on type
    if (type === "success") {
        toast.classList.remove("bg-red-600");
        toast.classList.add("bg-green-600");
    } else if (type === "error") {
        toast.classList.remove("bg-green-600");
        toast.classList.add("bg-red-600");
    } else {
        toast.classList.remove("bg-green-600", "bg-red-600");
        toast.classList.add("bg-black");
    }

    // Show toast
    toast.classList.remove("opacity-0", "pointer-events-none");
    toast.classList.add("opacity-100");

    // Hide toast after 2s
    setTimeout(() => {
        toast.classList.remove("opacity-100");
        toast.classList.add("opacity-0");
    }, 2000);
}



function updateTotal() {
    const total = cart.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return sum + price * item.quantity;
    }, 0);

    const totalElement = document.getElementById('cartTotal');
    if (totalElement) {
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
}

// Toggle Cart Visibility
document.querySelector('.carticon').addEventListener('click', () => {
    const cartContainer = document.querySelector('.cartexpnd');
    cartContainer.classList.toggle("hidden"); // Toggle visibility
});

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('checkoutModal').classList.add('hidden');
});

showProducts();
showPopularProducts();
addToCart();
