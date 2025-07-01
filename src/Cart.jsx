import {Popover} from "@/components/ui/popover.jsx";
import {PopoverContent, PopoverTrigger} from "@radix-ui/react-popover";
import {Button} from "@/components/ui/button.jsx";
import {CircleX, ShoppingCartIcon, Trash2} from "lucide-react";
import useUserStore from "@/store/store.jsx";
import {useShallow} from "zustand/shallow";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import ChangeQuantityButton from "@/ChangeQuantityButton.jsx";

const Cart = () => {
    const {reset, products, removeProduct, total, address} = useUserStore(useShallow(state => ({
        reset: state.reset,
        products: state.products,
        removeProduct: state.removeProduct,
        total: state.total,
        address: state.address
    })))
    return (
        <div className="dark bg-zinc-800 hover:bg-zinc-600 p-4 rounded transition-all duration-200">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="secondary" size="icon">
                        <ShoppingCartIcon />
                    </Button>
                </PopoverTrigger>

                <PopoverContent className="dark bg-zinc-800 w-96 max-h-screen overflow-y-scroll scrollbar-none space-y-2 rounded p-4 shadow-md">
                    <div className="space-y-2 overflow-hidden scrollbar-none">
                        <div className="flex items-center gap-2 text-lg">
                            <h1 className="text-white">Cart:</h1>
                            <Button onClick={reset} variant="destructive" fill={"red"} size="icon">
                                <CircleX className={"text-red-500"}/>
                            </Button>
                        </div>

                        {products.map((product) => (
                            <Card key={product.id} className="flex flex-col">
                                <CardHeader className="flex flex-row items-center justify-between gap-2">
                                    <CardTitle className="flex items-center gap-2">
                                        {product.title}
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            className={"hover:text-red-500"}
                                            onClick={() => removeProduct(product.id)}
                                        >
                                            <Trash2  />
                                        </Button>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>{product.price}</CardContent>
                                <CardFooter>
                                    <ChangeQuantityButton productId={product.id} />
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <p className="text-white">Total: {total}</p>
                    <p className="text-white">Address: {address}</p>
                </PopoverContent>
            </Popover>
        </div>

    )
}
export default Cart