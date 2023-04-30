import { addToCartAction } from "@/store/cartStore";
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

    const uniqueCartItems = useMemo(() => {
        console.log(cartItems)
        return cartItems.reduce((acc, item) => {
            const existingItem = acc.find(_item => _item.product.id == item.product.id)
            if (existingItem) {
                existingItem.quantity += parseInt(item.product.price)
                return acc
            }
            const count = cartItems.filter(_item => _item.product.id == item.product.id).length
            const quantity = parseInt(item.product.price)
            return [...acc, { ...item, count, quantity }]
        }, [])
    }, [cartItems])

    const totalQuantity = useMemo(() => {
        return uniqueCartItems.reduce((acc, item) => {
            return acc + item.quantity
        }, 0)
    }, [uniqueCartItems])

    return {
        cartItems,
        uniqueCartItems,
        totalQuantity,
        addToCart
    }
}