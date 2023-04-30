import { addToCart, getCartItems } from "@/lib/queries/cart";

export default function handler(req, res) {
    if(req.method == 'POST'){
        const data = JSON.parse(req.body);
        addToCart(data).then((cartItem) => {
            res.status(200).json(cartItem);
        })
    }
    else if(req.method == 'GET'){
        getCartItems(req.query.userId).then((items) => {
            res.status(200).json(items);
        })
        .catch(console.error);
    }
}
