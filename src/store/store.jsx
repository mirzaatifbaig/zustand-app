import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import createUserSlice from "@/store/userSlice.jsx";
import createCartSlice from "@/store/cartSlice.jsx";
import {persist, subscribeWithSelector} from "zustand/middleware";

const useUserStore = create(
    subscribeWithSelector(
        persist(immer((...args) => ({
            ...createUserSlice(...args),
            ...createCartSlice(...args),
        })), {
            name: 'local-storage'
        }))
);

export default useUserStore;
