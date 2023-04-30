import { addToCart, deleteCartItem, getCartItems } from "@/lib/queries/cart";

export default function handler(req, res) {
    if (req.method == 'POST') {
        const data = JSON.parse(req.body);
        addToCart(data).then((cartItem) => {
            res.status(200).json(cartItem);
        })
    }
    else if (req.method == 'GET') {
        getCartItems(req.query.userId).then((items) => {
            res.status(200).json(items);
        })
            .catch(console.error);
    }
    else if (req.method == 'DELETE') {
        deleteCartItem(req.query.id).then(result => {
            res.status(200).json({ success: result });
        })
        .catch(console.error);
    } else if (req.method == 'PUT') {
        const data = JSON.parse(req.body);
        addToCart(data).then((cartItem) => {
            res.status(200).json(cartItem);
        })
    }
}
