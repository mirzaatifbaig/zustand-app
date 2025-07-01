const createUserSlice = (set) => ({
    name: "",
    address: "",
    setAddress: (address) => set((state) => {
        state.address = address;
    }),
    resetUser: () => set(() => ({
        name: "", fullName: "", address: "",
    })),
    fetchUser: async () => {
        await new Promise((resolve) => setTimeout(resolve), 1000)
        set({

            name: "John",
            fullName: "John Doe",
            address: "",
        })
    },
});

export default createUserSlice;
