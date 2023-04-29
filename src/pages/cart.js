import Header from '@/components/header'
import Link from 'next/link'
import React from 'react'

const checkout = () => {
    return (
        <>
            <Header />
            <main className='container m-auto border-t border-grey-dark pt-10 sm:pt-12'>

                <section className='flex flex-col-reverse justify-between pb-16 sm:pb-20 lg:flex-row lg:pb-24'>
                    <div className='lg:w-3/5'>

                        <div className="pt-8">
                            <div className="hidden sm:block">
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
                                </div>
                            </div>

                            <div className="mb-0 hidden flex-row items-center justify-between border-b border-grey-dark py-3 md:flex">
                                <i className="bx bx-x mr-6 cursor-pointer text-2xl text-grey-darkest sm:text-3xl"></i>
                                <div className="flex w-1/2 flex-row items-center border-b-0 border-grey-dark pt-0 pb-0 text-left lg:w-3/5 xl:w-1/2">
                                    <div className="relative mx-0 w-20 pr-0">
                                        <div className="flex h-20 items-center justify-center rounded">
                                            <div className="aspect-w-1 aspect-h-1 w-full">
                                                <img src="/assets/img/unlicensed/shoes-3.png" alt="product image" className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <span className="mt-2 ml-4 font-hk text-base text-secondary">classNameic Beige</span>
                                </div>
                                <div className="w-full border-grey-dark pb-0 text-center sm:w-1/5 xl:w-1/4">
                                    <div className="mx-auto mr-8 xl:mr-4">
                                        <div className="flex justify-center" x-data="{ productQuantity: 1 }">
                                            <input type="number" id="quantity-form-desktop" className="form-input border w-16 py-2 px-2 text-center" min="1" value={1} />
                                            {/* <div className="flex flex-col">
                                                <span className="flex-1 cursor-pointer rounded-tr border border-l-0 border-grey-darker bg-white px-1"><i className="bx bxs-up-arrow pointer-events-none text-xs text-primary"></i></span>
                                                <span className="flex-1 cursor-pointer rounded-br border border-t-0 border-l-0 border-grey-darker bg-white px-1">1<i className="bx bxs-down-arrow pointer-events-none text-xs text-primary"></i></span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/4 pr-10 pb-4 text-right lg:w-1/5 xl:w-1/4 xl:pr-10">
                                    <span className="font-hk text-secondary">1045 TL</span>
                                </div>
                            </div>

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
                                    <span class="font-hk text-secondary">264 TL</span>
                                </div>
                                <div class="flex justify-between border-b border-grey-darker pt-2 pb-1">
                                    <span class="font-hk text-secondary">KDV vergisi (%18)</span>
                                    <span class="font-hk text-secondary">36 TL</span>
                                </div>
                                <div class="flex justify-between pt-3">
                                    <span class="font-hkbold text-secondary">Toplam</span>
                                    <span class="font-hkbold text-secondary">300 TL</span>
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <Link href='/checkout' className="text-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700">
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

export default checkout