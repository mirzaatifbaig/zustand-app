const createCartSlice = (set, get) => ({
    products: [],
    total: 0,

    addProduct: (product) =>
        set((state) => {
            const existingProduct = state.products.find((p) => p.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.products.push({...product, quantity: 1});
            }
            state.total = state.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
        }),

    incrementQuantity: (productId) =>
        set((state) => {
            const product = state.products.find((p) => p.id === productId);
            if (product) product.quantity += 1;
            state.total = state.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
        }),

    decrementQuantity: (productId) =>
        set((state) => {
            const product = state.products.find((p) => p.id === productId);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
                state.total = state.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
            }
        }),

    removeProduct: (productId) =>
        set((state) => {
            state.products = state.products.filter((p) => p.id !== productId);
            state.total = state.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
        }),

    reset: () =>
        set(() => ({
            products: [],
            total: 0,
        })),
    setTotal: (total) => set({total}),
    getProduct: (productId) => {
        return get().products.find(product => product.id === productId);
    },
});

export default createCartSlice;
