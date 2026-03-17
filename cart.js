const STORAGE_KEY = 'cart_979';

export class Cart {
    constructor() {
        this.items = this.loadFromStorage();
    }

    loadFromStorage() {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    }

    saveToStorage() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
    }

    addItem(product) {
        const existing = this.items.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            this.items.push({
                ...product,
                quantity: 1
            });
        }
        this.saveToStorage();
        return existing ? existing : this.items[this.items.length - 1];
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveToStorage();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveToStorage();
            }
        }
    }

    getItemCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    clear() {
        this.items = [];
        this.saveToStorage();
    }
}
