import { Cart } from './cart.js';
import { products, categories } from './products.js';

const cart = new Cart();

function getCurrentPage() {
    return window.location.pathname.split('/').pop() || 'index.html';
}

function updateCartUI() {
    const count = cart.getItemCount();
    const cartCountEl = document.getElementById('cartCount');
    if (count > 0) {
        cartCountEl.textContent = count;
        cartCountEl.classList.remove('hidden');
    } else {
        cartCountEl.classList.add('hidden');
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

function renderHomepage() {
    const app = document.getElementById('app');
    if (!app) return;

    const cards = app.querySelectorAll('.category-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            window.location.href = `category.html?cat=${category}`;
        });
    });
}

function renderCategoryPage() {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get('cat');

    if (!categoryId || !categories[categoryId]) {
        window.location.href = 'index.html';
        return;
    }

    const category = categories[categoryId];
    const categoryProducts = products[categoryId] || [];

    document.getElementById('categoryTitle').textContent = category.title;
    document.getElementById('categoryDesc').textContent = category.desc;

    const productsList = document.getElementById('productsList');
    productsList.innerHTML = categoryProducts.map(product => `
        <div class="product-card">
            <div class="product-image">${product.emoji}</div>
            <div class="product-content">
                <div class="product-name">${product.name}</div>
                <div class="product-desc">${product.description}</div>
                <div class="product-footer">
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');

    productsList.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = e.target.dataset.productId;
            const product = categoryProducts.find(p => p.id === productId);
            if (product) {
                cart.addItem(product);
                updateCartUI();
                showToast(`${product.name} added to cart`);
                e.target.textContent = '✓ Added';
                e.target.style.opacity = '0.7';
                setTimeout(() => {
                    e.target.textContent = 'Add to Cart';
                    e.target.style.opacity = '1';
                }, 1500);
            }
        }
    });
}

function renderCartPage() {
    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.getElementById('cartContent');

    if (cart.items.length === 0) {
        emptyCart.classList.remove('hidden');
        cartContent.classList.add('hidden');
    } else {
        emptyCart.classList.add('hidden');
        cartContent.classList.remove('hidden');

        const cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = cart.items.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-control">
                        <button class="quantity-btn qty-minus" data-product-id="${item.id}">−</button>
                        <div class="quantity-display">${item.quantity}</div>
                        <button class="quantity-btn qty-plus" data-product-id="${item.id}">+</button>
                    </div>
                    <button class="remove-btn" data-product-id="${item.id}">Remove</button>
                </div>
            </div>
        `).join('');

        document.getElementById('subtotal').textContent = `$${cart.getTotal().toFixed(2)}`;
        document.getElementById('total').textContent = `$${cart.getTotal().toFixed(2)}`;

        cartItems.addEventListener('click', (e) => {
            const productId = e.target.dataset.productId;
            if (!productId) return;

            if (e.target.classList.contains('qty-plus')) {
                const item = cart.items.find(i => i.id === productId);
                if (item) cart.updateQuantity(productId, item.quantity + 1);
            } else if (e.target.classList.contains('qty-minus')) {
                const item = cart.items.find(i => i.id === productId);
                if (item) cart.updateQuantity(productId, item.quantity - 1);
            } else if (e.target.classList.contains('remove-btn')) {
                cart.removeItem(productId);
            }

            renderCartPage();
            updateCartUI();
        });
    }
}

function setupNavigation() {
    const cartBtn = document.getElementById('cartBtn');
    const backBtn = document.getElementById('backBtn');

    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            window.location.href = 'cart.html';
        });
    }

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.history.back();
        });
    }
}

function setupCheckout() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            showToast('Demo Order Completed');
            setTimeout(() => {
                cart.clear();
                updateCartUI();
                window.location.href = 'index.html';
            }, 1500);
        });
    }
}

function init() {
    updateCartUI();
    setupNavigation();

    const page = getCurrentPage();

    if (page === 'index.html' || page === '') {
        renderHomepage();
    } else if (page === 'category.html') {
        renderCategoryPage();
    } else if (page === 'cart.html') {
        renderCartPage();
        setupCheckout();
    }
}

document.addEventListener('DOMContentLoaded', init);
