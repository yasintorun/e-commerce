import { useAuth } from '@/hooks/useAuth';
import { wrapper } from '@/store';
import { setCartItemsAction } from '@/store/cartStore';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

function App({ Component, pageProps }) {
  const { userId } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userId) return;
    fetch("/api/cart?userId=" + userId)
      .then(res => res.json())
      .then(cartItems => {
        console.log(cartItems)
        dispatch(setCartItemsAction(cartItems));
      })
  }, [userId]);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  )
}
export default wrapper.withRedux(App);