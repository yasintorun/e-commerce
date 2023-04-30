import FullScreenLoading from '@/components/FullScreenLoading'
import Footer from '@/components/Footer'
import Header from '@/components/header'
import { useAuth } from '@/hooks/useAuth'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import Swal from 'sweetalert2'
import Head from 'next/head'

const checkout = () => {
    const { cartItems, totalQuantity, fillCartItems } = useCart()
    const [loading, setLoading] = useState(false)
    const { userId } = useAuth()

    const handleDeleteCartItem = (cartItem) => {
        Swal.fire({
            title: 'Uyarı',
            text: `${cartItem.product.name} ürününü silmek istediğinize emin misiniz?`,
            icon: 'warning',
            confirmButtonText: 'Evet Sil!',
            cancelButtonText: 'İptal',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                fetch("/api/cart?id=" + cartItem.id, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(_ => {
                        fillCartItems();
                        Swal.fire({
                            title: 'Silindi!',
                            text: cartItem.product.name + ' ürünü sepetinizden silindi.',
                            icon: 'success',
                            confirmButtonText: 'Tamam'
                        })
                    })
            }
        })
    }

    const handleUpdateCount = (cartItem, increase) => {
        setLoading(true)
        if(cartItem.count == 1 && increase < 0) return;
        fetch("/api/cart/", {
            body: JSON.stringify({
                userId: userId,
                productId: cartItem.productId,
                increase
            }),
            method: "PUT",
        })
            .then(res => res.json())
            .then(item => {
                fillCartItems().finally(() => {
                    setLoading(false)
                });
            })
    }

    return (
        <>
        <Head>
            <title>Sepetim</title>
        </Head>
            <FullScreenLoading loading={loading} />
            <Header />
            <main className='container m-auto border-t border-grey-dark pt-10 sm:pt-12'>
                <section className='flex flex-col-reverse justify-between pb-16 sm:pb-20 lg:flex-row lg:pb-24'>
                    <div className='lg:w-3/5'>
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr className='text-left'>
                                        <th class="px-4 py-2 text-center">Resim</th>
                                        <th class="px-4 py-2" colSpan={2}>Ad</th>
                                        <th class="px-4 py-2">Adet</th>
                                        <th class="px-4 py-2">Fiyat</th>
                                        <th class="px-4 py-2">İşlem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, i) => (
                                        <tr>
                                            <td class="px-4 py-2">
                                                <div className="flex h-20 overflow-hidden items-center justify-center rounded">
                                                    <div className="aspect-w-1 aspect-h-1 w-20">
                                                        <img src={item.product.product_images[0].image} alt="product image" className="object-contain" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-4 py-2" colSpan={2}>{item.product.name}</td>
                                            <td class="px-4 py-2">
                                                <div className='flex items-center justify-center space-x-2'>
                                                    <button onClick={() => handleUpdateCount(item, -1)} disabled={item.count == 1} className="bg-slate-700 hover:bg-slate-950 active:bg-slate-500 text-white rounded px-3 py-1">
                                                        <i className='fas fa-minus text-xs'></i>
                                                    </button>
                                                    <div className='border rounded px-5 py-2 text-lg'>{item.count}</div>
                                                    {/* <input type="number" className="form-input border w-12 text-center" min="1" defaultValue={item.count} /> */}
                                                    <button onClick={() => handleUpdateCount(item, 1)}  className='bg-slate-700 hover:bg-slate-950 active:bg-slate-500 text-white rounded px-3 py-1'>
                                                        <i className='fas fa-plus'></i>
                                                    </button>
                                                </div>
                                            </td>
                                            <td class="px-4 py-2">{item.quantity.toFixed(2)} TL</td>
                                            <td class="px-4 py-2">
                                                <button onClick={() => handleDeleteCartItem(item)} class="text-red-500 rounded">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="mx-auto mt-16 sm:w-2/3 md:w-full lg:mx-0 lg:mt-0 lg:w-1/3">
                        <div class="bg-grey-light py-8 px-8">
                            <h4 class="font-hkbold pb-3 text-center text-2xl text-secondary sm:text-left">
                                Sepet
                            </h4>
                            <div class="mb-12 pt-4">
                                <p class="font-hkbold pt-1 pb-2 text-secondary">Sepet toplamı</p>
                                <div class="flex justify-between border-b border-grey-darker pb-1">
                                    <span class="font-hk text-secondary">Alt toplam</span>
                                    <span class="font-hk text-secondary">{(totalQuantity * 0.82).toFixed(2)} TL</span>
                                </div>
                                <div class="flex justify-between border-b border-grey-darker pt-2 pb-1">
                                    <span class="font-hk text-secondary">KDV vergisi (%18)</span>
                                    <span class="font-hk text-secondary">{(totalQuantity * 0.18).toFixed(2)} TL</span>
                                </div>
                                <div class="flex justify-between pt-3 text-lg font-semibold">
                                    <span class="font-hkbold">Toplam</span>
                                    <span class="font-hkbold text-secondary">{totalQuantity.toFixed(2)} TL</span>
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <Link href='/checkout' className="text-center w-full px-6 py-3 mb-3 text-lg text-white bg-red-500 rounded-md sm:mb-0 hover:bg-red-700">
                                    Sepeti Onayla
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

// export async function getServerSideProps(context) {
//     const userId = context.req.cookies.userId
//     const items = await getCartItems()
//     const uniqueItems = items.filter((item, index, self) => self.findIndex(t => t.product.id === item.product.id) === index)

//     console.log(uniqueItems)
//     return {
//         props: {
//             cartItems: items
//         },
//     }
// }

export default checkout