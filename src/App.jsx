import items from "@/mockData.jsx";
import useUserStore from "@/store/store.jsx";
import ChangeQuantityButton from "@/ChangeQuantityButton.jsx";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.jsx";
import {Button} from "@/components/ui/button.jsx";
import Cart from "@/Cart.jsx";
import User from "@/User.jsx";

const App = () => {
    const cartProducts = useUserStore(state => state.products);
    const addProduct = useUserStore(state => state.addProduct);
    return (
        <main className="p-5 rounded-xl space-y-0.5 dark h-full  bg-zinc-800 max-w-dvh text-white mx-auto mt-2">
            <div className="flex justify-between">
                <User/>
                <Cart/>
            </div>
            <h1 className="text-3xl p-4 w-fit mb-2 bg-zinc-">Products </h1>
            <div className="space-y-2 h-fit"    >
                {items.map((product) => (
                    <Card key={product.id}><CardHeader className="flex pb-4 mb-4 mt-4 text-3xl flex-col items-center justify-centerfont-medium">
                        {product.title}
                    </CardHeader>
                        <CardContent className="pl-4 text-2xl text-muted-foreground">{product.price} $</CardContent>
                        <CardFooter />
                        {cartProducts.find((item) => item.id === product.id) ? (
                            <ChangeQuantityButton productId={product.id} />
                        ) : (
                            <Button
                                className="w-fit m-2 p-6 py-8 text-lg rounded-xl bg-zinc-600  hover:bg-zinc-700"
                                onClick={() => addProduct(product)}
                            >
                                Add to Cart
                            </Button>
                        )}
                    </Card>
                ))}
            </div>
        </main>
    );
};

export default App;
