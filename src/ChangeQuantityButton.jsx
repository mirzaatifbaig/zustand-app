import useUserStore from "@/store/store.jsx";
import {useShallow} from "zustand/shallow";
import {Button} from "@/components/ui/button.jsx";
import {Minus, Plus} from "lucide-react";
import {useEffect} from "react";

export default function ChangeQuantityButton({productId}) {
    const {setTotal, getProduct, decrementQuantity, incrementQuantity} = useUserStore(
        useShallow((state) => ({
            products: state.products,
            getProduct: state.getProduct,
            decrementQuantity: state.decrementQuantity,
            incrementQuantity: state.incrementQuantity,
            setTotal: state.setTotal,
        }))
    );
    const product = getProduct(productId);

    useEffect(() => {
        return useUserStore.subscribe(
            (state) => state.products,
            (products) => {
                setTotal(
                    products.reduce((acc, item) => acc + item.price * item.quantity, 0
                    ))
            }, {fireImmediately: true}
        )
    }, [setTotal]);
    return (
        <div className="flex m-2 w-fit rounded-xl hover:bg-zinc-700  p-3 gap-2 items-center">
            <Button  className={"hover:rounded-full rounded-full bg-zinc-800  hover:bg-zinc-700 "} onClick={() => decrementQuantity(product.id)}>
                <Minus/>
            </Button>
            <p>{getProduct(productId).quantity}</p>
            <Button className={"hover:rounded-full bg-zinc-800  hover:bg-zinc-700 "} onClick={() => incrementQuantity(product.id)}>
                <Plus/>
            </Button>
        </div>
    );
}
