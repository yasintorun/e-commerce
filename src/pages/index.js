import Footer from '@/components/Footer'
import Header from '@/components/header'
import Link from 'next/link'
import React from 'react'

const home = () => {
    return (
        <>
            <Header />
            <section className="px-2 pt-32 bg-white md:px-0">
                <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
                        <span className="block">Gücümüz Suların Ötesinde <span className="block mt-1 text-red-500 lg:inline lg:mt-0">BarbarosMar</span></span>
                    </h1>
                    <p className="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
                        Aradığın ürünleri kolayca bulabilir, sepete ekleyebilir ve güvenle sipariş verebilirsiniz.
                    </p>
                    <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
                        <a href="/product" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-red-500 rounded-md md:mb-0 hover:bg-red-700 md:w-auto" data-primary="purple-500" data-rounded="rounded-md">
                            Ürünlere Git
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                        <Link href="/about" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600" data-rounded="rounded-md">
                            Hakkımızda
                        </Link>
                    </div>
                </div>
                <div className="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
                    <img src="/images/home.jpeg" className="" />
                </div>
            </section>
            <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                    <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                        <img src="/app-brand-1.jpeg" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20" />
                    </div>

                    <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            Deniz Kuvvetleri
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                            Deniz Kuvvetleri, sadece denizlerde değil, gücümüz suların ötesinde de yükselen bir destan yazmaktadır.
                        </p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span className="text-sm font-bold">✓</span></span> Kaliteli ürünler
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span className="text-sm font-bold">✓</span></span> Güvenli alışveriş
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span className="text-sm font-bold">✓</span></span> Hızlı teslimat
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

                    <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            BarbarosMar
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                            Gücümüz Suların Ötesinde
                        </p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span className="text-sm font-bold">✓</span></span> Askeri ürünler
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span className="text-sm font-bold">✓</span></span> İhtiyacınızın hepsi bir arada
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span className="text-sm font-bold">✓</span></span> Sizin için varız
                            </li>
                        </ul>
                    </div>

                    <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                        <img src="/app-brand-2.jpeg" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
                    </div>
                </div>
            </section>
            <section class="px-2 py-32 bg-white md:px-0">
                <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div class="flex flex-wrap items-center sm:-mx-3">
                        <div class="w-full md:w-1/2 md:px-3">
                            <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                    <span class="block xl:inline">Denizlerdeki</span>
                                    <span class="block text-indigo-600 xl:inline" data-primary="indigo-600"> Gücümüz</span>
                                </h1>
                                <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                                    Kararlılıkla İleriye Yelken Açan Bir Destan. Sizler için geliştirdiğimiz ürünlerimizi bulabilir ve hızlıca alabilirsiniz.
                                </p>
                                <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                                    <Link href="/product" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto" data-primary="indigo-600" data-rounded="rounded-md">
                                        Ürünlere Git
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2">
                            <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                                <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" class="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white pt-7 pb-14">
                <div class="container px-8 mx-auto sm:px-12 lg:px-20">
                    <h1 class="text-sm font-bold tracking-wide text-center text-gray-800 uppercase mb-7">Sponsorlarımız</h1>
                    <div class="flex grid items-center justify-center grid-cols-4 grid-cols-12 gap-y-8">
                        <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2 tooltip" data-tip="Deniz Kuvvetleri">
                            <img src="/sponsor-deniz.png" alt="Disney Plus" class="block object-contain h-12" />
                        </div>
                        <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2 tooltip" data-tip="İç İşleri Bakanlığı">
                            <img src="/sponsor-ic-isleri.svg" alt="Google" class="block object-contain h-9" />
                        </div>
                        <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2 tooltip" data-tip="Hava Kuvvetleri">
                            <img src="/hava-kuvvetleri.png" alt="Hubspot" class="block object-contain h-9" />
                        </div>
                        <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2 tooltip" data-tip="Kara Kuvvetleri">
                            <img src="/kara-kuvvetleri.png" alt="Youtube" class="block object-contain h-7 lg:h-8" />
                        </div>
                        <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2 tooltip" data-tip="MSÜ">
                            <img src="/msu.png" alt="Slack" class="block object-contain h-9" />
                        </div>
                        <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2 tooltip" data-tip="Genel Kurmay">
                            <img src="/genel-kurmay.png" alt="Shopify" class="block object-contain h-9" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default home