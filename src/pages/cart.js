import Header from '@/components/header'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link'
import React, { useMemo } from 'react'

const checkout = () => {
    const { cartItems } = useCart()

    const uniqueCartItems = useMemo(() => {
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

    return (
        <>
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
                                    {uniqueCartItems.map((item, i) => (
                                        <tr>
                                            <td class="px-4 py-2">
                                                <div className="flex h-20 overflow-hidden items-center justify-center rounded">
                                                    <div className="aspect-w-1 aspect-h-1 w-20">
                                                        <img src={item.product.product_images[0].image} alt="product image" className="object-contain" />
                                                    </div>
                                                </div>
                                                {/* <img src={item.product.product_images[0].image} alt="" /> */}
                                            </td>
                                            <td class="px-4 py-2" colSpan={2}>{item.product.name}</td>
                                            <td class="px-4 py-2">
                                                <input type="number" className="form-input border w-16 p-2 text-center" disabled min="1" value={item.count} />
                                            </td>
                                            <td class="px-4 py-2">{item.quantity.toFixed(2)} TL</td>
                                            <td class="px-4 py-2">
                                                <button class="text-red-500 rounded">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* <div className="pt-8">
                            <div className="sm:block">
                                <div className="flex justify-between border-b border-grey-darker">
                                    <div className="w-1/2 pl-8 pb-2 sm:pl-12 lg:w-3/5 xl:w-1/2">
                                        <span className="font-hkbold text-sm uppercase text-secondary">Ürün Adı</span>
                                    </div>
                                    <div className="w-1/4 pb-2 text-center sm:mr-2 sm:w-1/6 md:mr-18 lg:mr-12 lg:w-1/5 xl:mr-18 xl:w-1/4">
                                        <span className="font-hkbold text-sm uppercase text-secondary">Ürün Adetİ</span>
                                    </div>
                                    <div className="w-1/4 pb-2 text-right md:pr-10 lg:w-1/5 xl:w-1/4">
                                        <span className="font-hkbold text-sm uppercase text-secondary">Fİyat</span>
                                    </div>
                                    <div className="w-1/4 pb-2 text-right md:pr-10 lg:w-1/5 xl:w-1/4">
                                        <span className="font-hkbold text-sm uppercase text-secondary">İşlem</span>
                                    </div>
                                </div>
                            </div>
                            {uniqueCartItems.map((item, i) => (
                                <div className="mb-0 flex-row items-center justify-between border-b border-grey-dark py-3 md:flex">
                                    <i className="bx bx-x mr-6 cursor-pointer text-2xl text-grey-darkest sm:text-3xl"></i>
                                    <div className="flex w-1/2 flex-row items-center border-b-0 border-grey-dark pt-0 pb-0 text-left lg:w-3/5 xl:w-1/2">
                                        <div className="relative mx-0 w-20 pr-0">
                                            <div className="flex h-20 overflow-hidden items-center justify-center rounded">
                                                <div className="aspect-w-1 aspect-h-1 w-full">
                                                    <img src={item.product.product_images[0].image} alt="product image" className="object-contain" />
                                                </div>
                                            </div>
                                        </div>
                                        <span className="mt-2 ml-4 font-hk text-base text-secondary">{item.product.name}</span>
                                    </div>
                                    <div className="w-full border-grey-dark pb-0 text-center sm:w-1/5 xl:w-1/4">
                                        <div className="mx-auto mr-8 xl:mr-4">
                                            <div className="flex justify-center" x-data="{ productQuantity: 1 }">
                                                <input type="number" id="quantity-form-desktop" className="form-input border w-16 py-2 px-2 text-center" disabled min="1" value={item.count} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/4 pr-10 pb-4 text-right lg:w-1/5 xl:w-1/4 xl:pr-10">
                                        <span className="font-hk text-secondary">{item.quantity} TL</span>
                                    </div>
                                    <div className="w-1/4 pr-10 pb-4 text-right lg:w-1/5 xl:w-1/4 xl:pr-10">
                                        <i className='fa-solid fa-close'></i>
                                    </div>
                                </div>
                            ))}
                        </div> */}
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