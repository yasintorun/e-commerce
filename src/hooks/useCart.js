import { addToCartAction } from "@/store/cartStore";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "./useAuth";
import { toast } from "react-toastify";

export const useCart = () => {
    const { cartItems } = useSelector(state => state.cart)
    const { userId } = useAuth();
    const dispatch = useDispatch();

    const addToCart = async (productId) => {
        const fetchPromise = fetch("/api/cart/", {
            body: JSON.stringify({
                userId,
                productId,
            }),
            method: "POST",
        })
            .then(res => res.json())
            .then(item => {
                dispatch(addToCartAction(item));
            })
        toast.promise(fetchPromise, {
            pending: "Sepete Ekleniyor",
            success: "Ürün sepete eklendi",
        }, {autoClose: 1500})
    }

    return {
        cartItems,
        addToCart
    }
}