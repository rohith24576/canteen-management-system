// Sample data
const dishes = [
    { id: 1, name: 'Fish Burger', price: 259, image: '🍔', mood: ['happy', 'excited'], healthScore: 6, category: 'main' },
    { id: 2, name: 'Pepperoni Pizza', price: 359, image: '🍕', mood: ['happy', 'excited'], healthScore: 4, category: 'main' },
    { id: 3, name: 'Vegan Pizza', price: 299, image: '🍕', mood: ['happy', 'excited'], healthScore: 8, category: 'main' },
    { id: 4, name: 'Chicken Wings', price: 199, image: '🍗', mood: ['happy', 'excited'], healthScore: 5, category: 'main' },
    { id: 5, name: 'Shrimp Pasta', price: 399, image: '🍝', mood: ['happy', 'excited'], healthScore: 7, category: 'main' },
    { id: 6, name: 'Croissant', price: 99, image: '🥐', mood: ['happy'], healthScore: 5, category: 'breakfast' },
    { id: 7, name: 'Ice Cream', price: 149, image: '🍦', mood: ['sad', 'stressed'], healthScore: 3, category: 'dessert' },
    { id: 8, name: 'Chocolate Cake', price: 249, image: '🍰', mood: ['sad', 'stressed'], healthScore: 2, category: 'dessert' },
    { id: 9, name: 'Green Salad', price: 199, image: '🥗', mood: ['tired'], healthScore: 9, category: 'main' },
    { id: 10, name: 'Fruit Smoothie', price: 179, image: '🥤', mood: ['tired'], healthScore: 8, category: 'drinks' },
];

const cakeOptions = [
    { id: 1, name: 'Chocolate Truffle Cake', price: 599, image: '🎂', size: ['1/2 kg', '1 kg', '2 kg'] },
    { id: 2, name: 'Red Velvet Cake', price: 699, image: '🍰', size: ['1/2 kg', '1 kg', '2 kg'] },
    { id: 3, name: 'Butterscotch Cake', price: 549, image: '🧁', size: ['1/2 kg', '1 kg', '2 kg'] },
    { id: 4, name: 'Black Forest Cake', price: 649, image: '🎂', size: ['1/2 kg', '1 kg', '2 kg'] },
    { id: 5, name: 'Pineapple Cake', price: 499, image: '🍰', size: ['1/2 kg', '1 kg', '2 kg'] },
    { id: 6, name: 'Fruit Cake', price: 599, image: '🧁', size: ['1/2 kg', '1 kg', '2 kg'] },
    { id: 7, name: 'Vanilla Cream Cake', price: 529, image: '🎂', size: ['1/2 kg', '1 kg', '2 kg'] },
    { id: 8, name: 'Strawberry Cake', price: 579, image: '🍓', size: ['1/2 kg', '1 kg', '2 kg'] },
    { id: 9, name: 'Mango Cake', price: 599, image: '🥭', size: ['1/2 kg', '1 kg', '2 kg'] },
    { id: 10, name: 'Coffee Cake', price: 629, image: '☕', size: ['1/2 kg', '1 kg', '2 kg'] },
    { id: 11, name: 'Oreo Cake', price: 649, image: '🍪', size: ['1/2 kg', '1 kg', '2 kg'] },
    { id: 12, name: 'Blueberry Cake', price: 679, image: '🫐', size: ['1/2 kg', '1 kg', '2 kg'] }
];

const notifications = [
    { id: 1, title: 'Order Delivered', message: 'Your order #1234 has been delivered', read: false },
    { id: 2, title: 'Special Offer', message: 'Get 20% off on your next order', read: false },
    { id: 3, title: 'New Menu Items', message: 'Check out our new seasonal menu items!', read: false },
    { id: 4, title: 'Order Confirmed', message: 'Your order #1235 has been confirmed', read: false },
];

const orderHistory = [
    { id: 1001, date: 'March 15, 2024', total: 1250, status: 'Delivered' },
    { id: 1000, date: 'March 10, 2024', total: 875.5, status: 'Delivered' },
    { id: 999, date: 'March 5, 2024', total: 1099, status: 'Delivered' },
];

const bills = [
    { id: 3001, date: 'June 30, 2023', amount: 875.5, status: 'Paid' },
    { id: 3000, date: 'June 15, 2023', amount: 1250, status: 'Paid' },
    { id: 2999, date: 'June 1, 2023', amount: 1099, status: 'Paid' },
];



const recentActivity = [
    { type: 'order', date: 'April 5, 2024', description: 'Placed an order for Fish Burger' },
    { type: 'favorite', date: 'April 3, 2024', description: 'Added Chocolate Cake to favorites' },
    { type: 'review', date: 'April 1, 2024', description: 'Reviewed Pepperoni Pizza - 5 stars' },
];

// State variables
let cart = [];
let favorites = [];
let selectedCake = null;
let activePage = 'dashboard';
let activeSettingsTab = 'account';
let searchQuery = '';
let isDarkMode = false;
let selectedPaymentMethod = null;
let selectedFlavor = null;
let selectedColor = null;
let selectedToppings = [];
let currentMood = null;
let moodHistory = [
    { day: 'Mon', value: 40 },
    { day: 'Tue', value: 70 },
    { day: 'Wed', value: 50 },
    { day: 'Thu', value: 80 },
    { day: 'Fri', value: 60 },
    { day: 'Sat', value: 90 },
    { day: 'Sun', value: 75 }
];
let lastBillNumber = 5000;

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    const settingsTabs = document.querySelectorAll('.settings-tab');
    const settingsContents = document.querySelectorAll('.settings-content');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const notificationBtn = document.getElementById('notification-btn');
    const notificationDropdown = document.getElementById('notification-dropdown');
    const notificationBadge = document.getElementById('notification-badge');
    const notificationList = document.getElementById('notification-list');
    const markAllReadBtn = document.getElementById('mark-all-read');
    const profileBtn = document.getElementById('profile-btn');
    const profileDropdown = document.getElementById('profile-dropdown');
    const profileMenuItems = document.querySelectorAll('.profile-menu-item');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const cakeDialog = document.getElementById('cake-dialog');
    const cakePreview = document.getElementById('cake-preview');
    const cakeDialogDescription = document.getElementById('cake-dialog-description');
    const cakeSizeSelect = document.getElementById('cake-size');
    const cakeMessage = document.getElementById('cake-message');
    const cakeTotalPrice = document.getElementById('cake-total-price');
    const cancelCakeBtn = document.getElementById('cancel-cake');
    const addCakeToCartBtn = document.getElementById('add-cake-to-cart');
    const heartAnimation = document.getElementById('heart-animation');
    const moodOptions = document.querySelectorAll('.mood-option');
    const moodRecommendation = document.getElementById('mood-recommendation');
    const dashboardDishes = document.getElementById('dashboard-dishes');
    const foodOrderDishes = document.getElementById('food-order-dishes');
    const cakeDishes = document.getElementById('cake-dishes');
    const favoriteItems = document.getElementById('favorite-items');
    const orderHistoryItems = document.getElementById('order-history-items');
    const billsItems = document.getElementById('bills-items');
    const sendMessageBtn = document.getElementById('send-message');
    const messageContent = document.getElementById('message-content');
    const darkModeToggle = document.getElementById('dark-mode');
    const paymentDialog = document.getElementById('payment-dialog');
    const paymentMethods = document.querySelectorAll('.payment-method');
    const paymentSubtotal = document.getElementById('payment-subtotal');
    const paymentTotal = document.getElementById('payment-total');
    const cancelPaymentBtn = document.getElementById('cancel-payment');
    const confirmPaymentBtn = document.getElementById('confirm-payment');
    const cardDetails = document.getElementById('card-details');
    const upiDetails = document.getElementById('upi-details');
    const walletDetails = document.getElementById('wallet-details');
    const codDetails = document.getElementById('cod-details');
    const cakeOptionsElements = document.querySelectorAll('.cake-option');
    const cakeColors = document.querySelectorAll('.cake-color');
    const cakeToppings = document.querySelectorAll('.cake-topping');
    const cakeDeliveryDate = document.getElementById('cake-delivery-date');
    const welcomeMessage = document.getElementById('welcome-message');
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const billContainer = document.getElementById('bill-container');
    const billClose = document.getElementById('bill-close');
    const billPrint = document.getElementById('bill-print');
    const billNumber = document.getElementById('bill-number');
    const billDate = document.getElementById('bill-date');
    const billCustomer = document.getElementById('bill-customer');
    const billItemsList = document.getElementById('bill-items-list');
    const billSubtotal = document.getElementById('bill-subtotal');
    const billTotal = document.getElementById('bill-total');
    const billPaymentIcon = document.getElementById('bill-payment-icon');
    const billPaymentMethod = document.getElementById('bill-payment-method');
    const profileDisplayName = document.getElementById('profile-display-name');
    const profileDisplayEmail = document.getElementById('profile-display-email');
    const profileRecentActivity = document.getElementById('profile-recent-activity');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const moodBars = document.querySelectorAll('.mood-bar');
    const mainTitle = document.getElementById('main-title');

    // Initialize the app
    function init() {
        renderDashboardDishes();
        renderFoodOrderDishes();
        renderCakeDishes();
        renderFavorites();
        renderCart();
        renderNotifications();
        renderOrderHistory();
        renderBills();
        renderProfileActivity();
        updateMoodChart();
        
        // Set initial dark mode state based on localStorage
        const storedDarkMode = localStorage.getItem('darkMode');
        if (storedDarkMode === 'true') {
            isDarkMode = true;
            document.body.classList.add('dark');
            darkModeToggle.checked = true;
        }
        
        // Set welcome message and profile info
        welcomeMessage.textContent = `Welcome back, User!`;
        profileName.textContent = 'User Name';
        profileEmail.textContent = 'user@example.com';
        nameInput.value = 'User Name';
        emailInput.value = 'user@example.com';
        profileDisplayName.textContent = 'User Name';
        profileDisplayEmail.textContent = 'user@example.com';
        
        // Set today's date for bill
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        billDate.textContent = formattedDate;
        
        // Make main title clickable to redirect to home page
        mainTitle.style.cursor = 'pointer';
        mainTitle.addEventListener('click', function() {
            switchPage('dashboard');
        });
    }

    // Render functions
    function renderDashboardDishes() {
        let filteredDishes = dishes;
        if (currentMood) {
            filteredDishes = dishes.filter(dish => dish.mood.includes(currentMood));
        }
        dashboardDishes.innerHTML = filteredDishes.slice(0, 6).map(dish => createDishCard(dish)).join('');
    }

    function renderFoodOrderDishes() {
        foodOrderDishes.innerHTML = dishes.map(dish => createDishCard(dish)).join('');
    }

    function renderCakeDishes() {
        cakeDishes.innerHTML = cakeOptions.map(cake => createCakeCard(cake)).join('');
    }

    function renderFavorites() {
        if (favorites.length === 0) {
            favoriteItems.innerHTML = '<p style="color: var(--secondary-text);">You haven\'t added any favorites yet.</p>';
            return;
        }
        
        favoriteItems.innerHTML = favorites.map(item => {
            return `
                <div class="favorite-item">
                    <div class="favorite-item-details">
                        <div class="favorite-item-image">${item.image}</div>
                        <div class="favorite-item-info">
                            <h3>${item.name}</h3>
                            <p>₹${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                    <div class="favorite-item-actions">
                        <button class="add-to-cart" onclick="addToCart(${item.id}, 1, ${item.isCake || false})">Add to Cart</button>
                        <button class="add-to-favorite" onclick="removeFromFavorite(${item.id}, ${item.isCake || false})">
                            <span class="heart-icon filled">❤️</span>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderCart() {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: var(--secondary-text);">Your cart is empty</p>';
            cartTotal.textContent = '₹50.00';
            checkoutBtn.disabled = true;
            return;
        }
        
        cartItems.innerHTML = cart.map(item => {
            return `
                <div class="cart-item">
                    <div class="cart-item-details">
                        <div class="cart-quantity">
                            <button class="cart-quantity-btn" onclick="updateCartItemQuantity(${item.id}, ${item.quantity - 1}, ${item.isCake || false})">-</button>
                            <span class="cart-quantity-value">${item.quantity}</span>
                            <button class="cart-quantity-btn" onclick="updateCartItemQuantity(${item.id}, ${item.quantity + 1}, ${item.isCake || false})">+</button>
                        </div>
                        <span class="cart-item-name">${item.name}</span>
                    </div>
                    <span class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `;
        }).join('');
        
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + 50;
        cartTotal.textContent = `₹${total.toFixed(2)}`;
        checkoutBtn.disabled = false;
    }

    function renderNotifications() {
        const unreadCount = notifications.filter(n => !n.read).length;
        notificationBadge.textContent = unreadCount;
        notificationBadge.style.display = unreadCount > 0 ? 'flex' : 'none';
        
        notificationList.innerHTML = notifications.map(notification => {
            return `
                <div class="notification-item ${notification.read ? '' : 'unread'}">
                    <div class="notification-content">
                        <h4>${notification.title}</h4>
                        <p>${notification.message}</p>
                    </div>
                    <button class="delete-notification" onclick="deleteNotification(${notification.id})">×</button>
                </div>
            `;
        }).join('');
    }

    function renderOrderHistory() {
        orderHistoryItems.innerHTML = orderHistory.map(order => {
            return `
                <div class="history-item">
                    <div class="history-item-details">
                        <h3>Order #${order.id}</h3>
                        <p>${order.date}</p>
                    </div>
                    <div class="history-item-status">
                        <p>₹${order.total.toFixed(2)}</p>
                        <span class="status-badge">${order.status}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderBills() {
        billsItems.innerHTML = bills.map(bill => {
            return `
                <div class="history-item">
                    <div class="history-item-details">
                        <h3>Bill #${bill.id}</h3>
                        <p>${bill.date}</p>
                    </div>
                    <div class="history-item-status">
                        <p>₹${bill.amount.toFixed(2)}</p>
                        <span class="status-badge">${bill.status}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderProfileActivity() {
        profileRecentActivity.innerHTML = recentActivity.map(activity => {
            return `
                <div class="history-item">
                    <div class="history-item-details">
                        <h3>${activity.description}</h3>
                        <p>${activity.date}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderSearchResults() {
        if (searchQuery.trim() === '') {
            searchResults.style.display = 'none';
            return;
        }
        
        const results = [...dishes, ...cakeOptions].filter(
            item => item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p style="padding: 10px; text-align: center; color: var(--secondary-text);">No results found</p>';
            searchResults.style.display = 'block';
            return;
        }
        
        searchResults.innerHTML = results.map(item => {
            return `
                <div class="search-result-item" onclick="handleSearchResultClick(${item.id}, ${item.size ? true : false})">
                    <div class="item-image">${item.image}</div>
                    <div class="item-details">
                        <h4>${item.name}</h4>
                        <p>₹${item.price.toFixed(2)}</p>
                    </div>
                </div>
            `;
        }).join('');
        
        searchResults.style.display = 'block';
    }

    function renderPaymentDialog() {
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const total = subtotal + 50;
        
        paymentSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
        paymentTotal.textContent = `₹${total.toFixed(2)}`;
        
        paymentMethods.forEach(method => {
            method.classList.remove('selected');
            const radio = method.querySelector('.payment-method-radio');
            radio.checked = false;
        });
        
        // Hide all payment details sections
        cardDetails.style.display = 'none';
        upiDetails.style.display = 'none';
        walletDetails.style.display = 'none';
        codDetails.style.display = 'none';
        
        selectedPaymentMethod = null;
        confirmPaymentBtn.disabled = true;
    }
    
    function renderBill() {
        lastBillNumber++;
        billNumber.textContent = `#${lastBillNumber}`;
        billCustomer.textContent = nameInput.value || 'Guest User';
        
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const total = subtotal + 50;
        
        billSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
        billTotal.textContent = `₹${total.toFixed(2)}`;
        
        // Set payment method icon and text
        let paymentIcon = '💳';
        let paymentText = 'Credit Card';
        
        if (selectedPaymentMethod === 'upi') {
            paymentIcon = '📱';
            paymentText = 'UPI';
        } else if (selectedPaymentMethod === 'wallet') {
            paymentIcon = '👛';
            paymentText = 'Wallet';
        } else if (selectedPaymentMethod === 'cod') {
            paymentIcon = '💵';
            paymentText = 'Cash on Delivery';
        }
        
        billPaymentIcon.textContent = paymentIcon;
        billPaymentMethod.textContent = paymentText;
        
        // Render bill items
        billItemsList.innerHTML = cart.map(item => {
            return `
                <div class="bill-item">
                    <div class="bill-item-name">${item.name}</div>
                    <div class="bill-item-qty">${item.quantity}</div>
                    <div class="bill-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
                </div>
            `;
        }).join('');
        
        // Add to order history and bills
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        
        orderHistory.unshift({
            id: lastBillNumber,
            date: formattedDate,
            total: total,
            status: 'Processing'
        });
        
        bills.unshift({
            id: lastBillNumber,
            date: formattedDate,
            amount: total,
            status: 'Paid'
        });
        
        // Show bill with animation
        billContainer.classList.add('active');
        
        // Add notification
        notifications.unshift({
            id: Date.now(),
            title: 'Order Placed',
            message: `Your order #${lastBillNumber} has been placed successfully`,
            read: false
        });
        
        renderNotifications();
    }
    
    function updateMoodChart() {
        moodBars.forEach((bar, index) => {
            if (index < moodHistory.length) {
                bar.style.height = `${moodHistory[index].value}%`;
            }
        });
    }

    // Helper functions
    function createDishCard(dish) {
        const inCart = cart.find(item => item.id === dish.id && !item.isCake);
        const quantity = inCart ? inCart.quantity : 0;
        const isFavorite = favorites.some(item => item.id === dish.id && !item.isCake);
        
        return `
            <div class="dish-card">
                <div class="dish-image">${dish.image}</div>
                <div class="dish-details">
                    <div class="dish-info">
                        <h3 class="dish-name">${dish.name}</h3>
                        <span class="dish-price">₹${dish.price.toFixed(2)}</span>
                    </div>
                    <div class="quantity-control">
                        <span class="quantity-label">Quantity:</span>
                        <div class="quantity-buttons">
                            <button class="quantity-btn" onclick="updateCartItemQuantity(${dish.id}, ${quantity - 1})">-</button>
                            <span class="quantity-value">${quantity}</span>
                            <button class="quantity-btn" onclick="updateCartItemQuantity(${dish.id}, ${quantity + 1})">+</button>
                        </div>
                    </div>
                    <div class="dish-actions">
                        <button class="add-to-cart" onclick="addToCart(${dish.id})">Add to Cart</button>
                        <button class="add-to-favorite" onclick="toggleFavorite(${dish.id})">
                            <span class="heart-icon ${isFavorite ? 'filled' : ''}">❤️</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    function createCakeCard(cake) {
        const isFavorite = favorites.some(item => item.id === cake.id && item.isCake);
        
        return `
            <div class="dish-card">
                <div class="dish-image">${cake.image}</div>
                <div class="dish-details">
                    <div class="dish-info">
                        <h3 class="dish-name">${cake.name}</h3>
                        <span class="dish-price">₹${cake.price.toFixed(2)}</span>
                    </div>
                    <div class="dish-actions">
                        <button class="add-to-cart" onclick="customizeCake(${cake.id})">Customize</button>
                        <button class="add-to-favorite" onclick="toggleFavoriteCake(${cake.id})">
                            <span class="heart-icon ${isFavorite ? 'filled' : ''}">❤️</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Action functions
    window.addToCart = function(dishId, quantity = 1, isCake = false) {
        const itemsArray = isCake ? cakeOptions : dishes;
        const item = itemsArray.find(d => d.id === dishId);
        if (!item) return;
        
        const existingItem = cart.find(i => i.id === dishId && i.isCake === isCake);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ ...item, quantity, isCake });
        }
        
        renderCart();
        renderFoodOrderDishes();
        
        // Add notification
        notifications.unshift({
            id: Date.now(),
            title: 'Item Added',
            message: `${item.name} has been added to your cart`,
            read: false
        });
        renderNotifications();
    };

    window.updateCartItemQuantity = function(itemId, newQuantity, isCake = false) {
        if (newQuantity <= 0) {
            cart = cart.filter(item => !(item.id === itemId && item.isCake === isCake));
        } else {
            const item = cart.find(item => item.id === itemId && item.isCake === isCake);
            if (item) {
                item.quantity = newQuantity;
            } else {
                addToCart(itemId, 1, isCake);
                return;
            }
        }
        
        renderCart();
        renderFoodOrderDishes();
    };

    window.toggleFavorite = function(dishId) {
        const dish = dishes.find(d => d.id === dishId);
        if (!dish) return;
        
        const existingIndex = favorites.findIndex(f => f.id === dishId && !f.isCake);
        
        if (existingIndex !== -1) {
            favorites.splice(existingIndex, 1);
        } else {
            favorites.push({ ...dish, isCake: false });
            showHeartAnimation();
            
            // Add notification
            notifications.unshift({
                id: Date.now(),
                title: 'Added to Favorites',
                message: `${dish.name} has been added to your favorites`,
                read: false
            });
            renderNotifications();
        }
        
        renderFavorites();
        renderFoodOrderDishes();
    };

    window.toggleFavoriteCake = function(cakeId) {
        const cake = cakeOptions.find(c => c.id === cakeId);
        if (!cake) return;
        
        const existingIndex = favorites.findIndex(f => f.id === cakeId && f.isCake);
        
        if (existingIndex !== -1) {
            favorites.splice(existingIndex, 1);
        } else {
            favorites.push({ ...cake, isCake: true });
            showHeartAnimation();
            
            // Add notification
            notifications.unshift({
                id: Date.now(),
                title: 'Added to Favorites',
                message: `${cake.name} has been added to your favorites`,
                read: false
            });
            renderNotifications();
        }
        
        renderFavorites();
        renderCakeDishes();
    };

    window.removeFromFavorite = function(itemId, isCake = false) {
        favorites = favorites.filter(f => !(f.id === itemId && f.isCake === isCake));
        renderFavorites();
        renderFoodOrderDishes();
        renderCakeDishes();
    };

    window.customizeCake = function(cakeId) {
        selectedCake = cakeOptions.find(c => c.id === cakeId);
        if (!selectedCake) return;
        
        cakeDialogDescription.textContent = `Personalize your ${selectedCake.name} for your special occasion.`;
        
        cakePreview.innerHTML = `
            <div class="cake-preview-image">${selectedCake.image}</div>
            <div class="cake-preview-details">
                <h3>${selectedCake.name}</h3>
                <p>Starting from ₹${selectedCake.price.toFixed(2)}</p>
            </div>
        `;
        
        // Reset selections
        cakeSizeSelect.value = '1 kg';
        cakeMessage.value = '';
        cakeDeliveryDate.value = '';
        
        // Reset flavor selection
        selectedFlavor = null;
        document.querySelectorAll('.cake-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Reset color selection
        selectedColor = null;
        document.querySelectorAll('.cake-color').forEach(color => {
            color.classList.remove('selected');
        });
        
        // Reset toppings selection
        selectedToppings = [];
        document.querySelectorAll('.cake-topping').forEach(topping => {
            topping.classList.remove('selected');
        });
        
        updateCakePrice();
        
        cakeDialog.classList.add('active');
    };

    function updateCakePrice() {
        if (!selectedCake) return;
        
        // Base price based on size
        let totalPrice = selectedCake.price;
        const sizePrice = cakeSizeSelect.value === '2 kg' ? 300 : 
                         cakeSizeSelect.value === '3 kg' ? 600 : 
                         cakeSizeSelect.value === '1/2 kg' ? -100 : 0;
        totalPrice += sizePrice;
        
        // Add flavor price
        if (selectedFlavor === 'chocolate') totalPrice += 50;
        else if (selectedFlavor === 'strawberry') totalPrice += 75;
        else if (selectedFlavor === 'butterscotch') totalPrice += 60;
        
        // Add toppings price
        selectedToppings.forEach(topping => {
            if (topping === 'sprinkles') totalPrice += 25;
            else if (topping === 'chocolate-chips') totalPrice += 30;
            else if (topping === 'fruits') totalPrice += 50;
            else if (topping === 'nuts') totalPrice += 40;
            else if (topping === 'caramel') totalPrice += 35;
            else if (topping === 'oreo') totalPrice += 45;
        });
        
        cakeTotalPrice.textContent = `₹${totalPrice.toFixed(2)}`;
    }

    function addCustomCakeToCart() {
        if (!selectedCake) return;
        
        // Calculate price
        let totalPrice = selectedCake.price;
        const sizePrice = cakeSizeSelect.value === '2 kg' ? 300 : 
                         cakeSizeSelect.value === '3 kg' ? 600 : 
                         cakeSizeSelect.value === '1/2 kg' ? -100 : 0;
        totalPrice += sizePrice;
        
        // Add flavor price
        if (selectedFlavor === 'chocolate') totalPrice += 50;
        else if (selectedFlavor === 'strawberry') totalPrice += 75;
        else if (selectedFlavor === 'butterscotch') totalPrice += 60;
        
        // Add toppings price
        selectedToppings.forEach(topping => {
            if (topping === 'sprinkles') totalPrice += 25;
            else if (topping === 'chocolate-chips') totalPrice += 30;
            else if (topping === 'fruits') totalPrice += 50;
            else if (topping === 'nuts') totalPrice += 40;
            else if (topping === 'caramel') totalPrice += 35;
            else if (topping === 'oreo') totalPrice += 45;
        });
        
        // Build customization description
        let customizations = [];
        if (selectedFlavor) customizations.push(selectedFlavor.charAt(0).toUpperCase() + selectedFlavor.slice(1) + " flavor");
        if (selectedColor) customizations.push(selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1) + " frosting");
        if (selectedToppings.length > 0) {
            const toppingsText = selectedToppings.map(t => t.replace('-', ' ')).join(', ');
            customizations.push("Toppings: " + toppingsText);
        }
        if (cakeMessage.value) customizations.push(`Message: "${cakeMessage.value}"`);
        if (cakeDeliveryDate.value) {
            const date = new Date(cakeDeliveryDate.value);
            const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            customizations.push(`Delivery: ${formattedDate}`);
        }
        
        const customizationText = customizations.length > 0 ? ` (${customizations.join(', ')})` : '';
        
        const customCake = {
            ...selectedCake,
            name: `${selectedCake.name} ${cakeSizeSelect.value}${customizationText}`,
            price: totalPrice,
            message: cakeMessage.value,
            size: cakeSizeSelect.value,
            flavor: selectedFlavor,
            color: selectedColor,
            toppings: [...selectedToppings],
            deliveryDate: cakeDeliveryDate.value,
            isCake: true
        };
        
        cart.push({ ...customCake, quantity: 1 });
        renderCart();
        
        // Add notification
        notifications.unshift({
            id: Date.now(),
            title: 'Custom Cake Added',
            message: `Your custom ${selectedCake.name} has been added to cart`,
            read: false
        });
        renderNotifications();
        
        cakeDialog.classList.remove('active');
        selectedCake = null;
    }

    function showHeartAnimation() {
        heartAnimation.classList.add('active');
        
        setTimeout(() => {
            heartAnimation.classList.remove('active');
        }, 1000);
    }

    function markAllNotificationsAsRead() {
        notifications.forEach(notification => {
            notification.read = true;
        });
        
        renderNotifications();
    }

    window.deleteNotification = function(id) {
        const index = notifications.findIndex(n => n.id === id);
        if (index !== -1) {
            notifications.splice(index, 1);
            renderNotifications();
        }
    };

    window.handleSearchResultClick = function(id, isCake) {
        searchResults.style.display = 'none';
        searchInput.value = '';
        searchQuery = '';
        
        if (isCake) {
            customizeCake(id);
            switchPage('birthday-cake');
        } else {
            switchPage('food-order');
            // Scroll to the dish
            setTimeout(() => {
                const dishCard = document.querySelector(`#food-order-dishes .dish-card:nth-child(${id})`);
                if (dishCard) {
                    dishCard.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    function switchPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
        });
        
        document.getElementById(pageId).classList.add('active');
        document.querySelector(`.nav-item[data-page="${pageId}"]`).classList.add('active');
        
        activePage = pageId;
    }

    function switchSettingsTab(tabId) {
        settingsTabs.forEach(tab => {
            tab.classList.remove('active');
        });
        
        settingsContents.forEach(content => {
            content.classList.remove('active');
        });
        
        document.querySelector(`.settings-tab[data-tab="${tabId}"]`).classList.add('active');
        document.getElementById(`${tabId}-settings`).classList.add('active');
        
        activeSettingsTab = tabId;
    }

    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    }

    function showPaymentDialog() {
        renderPaymentDialog();
        paymentDialog.classList.add('active');
    }

    function updateMoodData(mood) {
        currentMood = mood;
        
        // Update today's mood in the chart
        const today = new Date().getDay();
        const dayIndex = today === 0 ? 6 : today - 1; // Convert to 0-6 (Mon-Sun)
        
        // Map mood to value
        let moodValue = 50; // Default neutral
        if (mood === 'happy' || mood === 'excited') moodValue = 90;
        else if (mood === 'sad' || mood === 'stressed') moodValue = 30;
        else if (mood === 'tired') moodValue = 50;
        
        moodHistory[dayIndex].value = moodValue;
        updateMoodChart();
        
        // Update recommendations based on mood
        let recommendation = '';
        if (mood === 'happy') {
            recommendation = 'You seem happy today! How about trying our delicious pizzas or burgers?';
        } else if (mood === 'sad') {
            recommendation = 'Feeling down? Our chocolate desserts might cheer you up!';
        } else if (mood === 'excited') {
            recommendation = 'Excited today? Celebrate with our special dishes!';
        } else if (mood === 'tired') {
            recommendation = 'Feeling tired? Our refreshing smoothies and healthy options can boost your energy.';
        } else if (mood === 'stressed') {
            recommendation = 'Stressed out? Treat yourself with some comfort food like ice cream or cake.';
        }
        
        moodRecommendation.textContent = recommendation;
        
        // Update dashboard dishes based on mood
        renderDashboardDishes();
    }

    init();

    // Event Listeners
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const pageId = this.dataset.page;
            switchPage(pageId);
        });
    });

    settingsTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            switchSettingsTab(tabId);
        });
    });

    searchInput.addEventListener('input', function() {
        searchQuery = this.value;
        renderSearchResults();
    });

    notificationBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        notificationDropdown.classList.toggle('active');
        profileDropdown.classList.remove('active');
    });

    markAllReadBtn.addEventListener('click', markAllNotificationsAsRead);

    profileBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        profileDropdown.classList.toggle('active');
        notificationDropdown.classList.remove('active');
    });

    profileMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            const pageId = this.dataset.page;
            if (pageId) {
                switchPage(pageId);
                profileDropdown.classList.remove('active');
            }
        });
    });

    cancelCakeBtn.addEventListener('click', function() {
        cakeDialog.classList.remove('active');
        selectedCake = null;
    });

    addCakeToCartBtn.addEventListener('click', addCustomCakeToCart);

    moodOptions.forEach(option => {
        option.addEventListener('click', function() {
            moodOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            const mood = this.dataset.mood;
            updateMoodData(mood);
        });
    });

    sendMessageBtn.addEventListener('click', function() {
        const message = messageContent.value;
        if (message.trim() !== '') {
            // Add notification
            notifications.unshift({
                id: Date.now(),
                title: 'Message Sent',
                message: 'Your message has been sent successfully',
                read: false
            });
            renderNotifications();
            
            messageContent.value = '';
            alert('Message sent successfully!');
        }
    });

    darkModeToggle.addEventListener('change', toggleDarkMode);

    checkoutBtn.addEventListener('click', showPaymentDialog);

    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            paymentMethods.forEach(m => {
                m.classList.remove('selected');
                const radio = m.querySelector('.payment-method-radio');
                radio.checked = false;
            });
            
            this.classList.add('selected');
            const radio = this.querySelector('.payment-method-radio');
            radio.checked = true;
            
            selectedPaymentMethod = this.dataset.method;
            
            // Hide all payment details sections
            cardDetails.style.display = 'none';
            upiDetails.style.display = 'none';
            walletDetails.style.display = 'none';
            codDetails.style.display = 'none';
            
            // Show the selected payment details section
            if (selectedPaymentMethod === 'card') {
                cardDetails.style.display = 'block';
            } else if (selectedPaymentMethod === 'upi') {
                upiDetails.style.display = 'block';
            } else if (selectedPaymentMethod === 'wallet') {
                walletDetails.style.display = 'block';
            } else if (selectedPaymentMethod === 'cod') {
                codDetails.style.display = 'block';
            }
            
            confirmPaymentBtn.disabled = false;
        });
    });

    cancelPaymentBtn.addEventListener('click', function() {
        paymentDialog.classList.remove('active');
        selectedPaymentMethod = null;
    });

    confirmPaymentBtn.addEventListener('click', function() {
        paymentDialog.classList.remove('active');
        renderBill();
        
        // Clear cart after payment
        cart = [];
        renderCart();
    });
    
    billClose.addEventListener('click', function() {
        billContainer.classList.remove('active');
    });
    
    billPrint.addEventListener('click', function() {
        window.print();
    });
    
    editProfileBtn.addEventListener('click', function() {
        switchPage('settings');
        switchSettingsTab('account');
    });
    
    document.getElementById('save-account').addEventListener('click', function() {
        const name = nameInput.value;
        const email = emailInput.value;
        
        // Update profile info
        profileName.textContent = name;
        profileEmail.textContent = email;
        profileDisplayName.textContent = name;
        profileDisplayEmail.textContent = email;
        welcomeMessage.textContent = `Welcome back, ${name.split(' ')[0]}!`;
        
        // Add notification
        notifications.unshift({
            id: Date.now(),
            title: 'Profile Updated',
            message: 'Your profile has been updated successfully',
            read: false
        });
        renderNotifications();
        
        alert('Profile updated successfully!');
    });
    
    document.getElementById('save-appearance').addEventListener('click', function() {
        alert('Appearance settings updated successfully!');
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!notificationBtn.contains(e.target) && !notificationDropdown.contains(e.target)) {
            notificationDropdown.classList.remove('active');
        }
        
        if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
            profileDropdown.classList.remove('active');
        }
    });
    
    // Set minimum date for cake delivery
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    cakeDeliveryDate.min = tomorrow.toISOString().split('T')[0];
    
    cakeSizeSelect.addEventListener('change', updateCakePrice);

    cakeOptionsElements.forEach(option => {
        option.addEventListener('click', function() {
            cakeOptionsElements.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedFlavor = this.dataset.flavor;
            updateCakePrice();
        });
    });

    cakeColors.forEach(color => {
        color.addEventListener('click', function() {
            cakeColors.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedColor = this.dataset.color;
        });
    });

    cakeToppings.forEach(topping => {
        topping.addEventListener('click', function() {
            // Limit to 3 toppings
            if (!this.classList.contains('selected') && selectedToppings.length >= 3) {
                alert('You can select up to 3 toppings only');
                return;
            }
            
            this.classList.toggle('selected');
            const toppingValue = this.dataset.topping;
            if (this.classList.contains('selected')) {
                selectedToppings.push(toppingValue);
            } else {
                selectedToppings = selectedToppings.filter(t => t !== toppingValue);
            }
            updateCakePrice();
        });
    });
});