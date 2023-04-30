import { addToCartAction, setCartItemsAction } from "@/store/cartStore";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "./useAuth";
import { toast } from "react-toastify";
import { useMemo } from "react";

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
                console.log(item)
                dispatch(addToCartAction(item));
            })
        toast.promise(fetchPromise, {
            pending: "Sepete Ekleniyor",
            success: "Ürün sepete eklendi",
        }, { autoClose: 1500 })
    }
    const fillCartItems = async () => {
        await fetch("/api/cart?userId=" + userId)
            .then(res => res.json())
            .then(cartItems => {
                dispatch(setCartItemsAction(cartItems));
            })
    }

    const totalQuantity = useMemo(() => {
        return cartItems.reduce((acc, item) => {
            return acc + item.quantity
        }, 0)
    }, [cartItems])

    return {
        cartItems,
        totalQuantity,
        addToCart,
        fillCartItems
    }
}