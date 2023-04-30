import { useAuth } from '@/hooks/useAuth';
import { wrapper } from '@/store';
import { setCartItemsAction } from '@/store/cartStore';
import 'react-toastify/dist/ReactToastify.css';
// import 'sweetalert2/src/sweetalert2.scss'
import '@/styles/globals.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useCart } from '@/hooks/useCart';
import Footer from '@/components/footer';

function App({ Component, pageProps }) {
  const { userId } = useAuth();
  const { fillCartItems } = useCart();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userId) return;
    fillCartItems();
  }, [userId]);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  )
}
export default wrapper.withRedux(App);