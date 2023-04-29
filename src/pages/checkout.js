import Header from '@/components/header';
import Link from 'next/link';
import React, { useState } from 'react'

const checkout = () => {

    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [changeText1, setChangeText1] = useState("İl");

    const HandleText1 = (e) => {
        setChangeText1(e);
        setDropdown1(false);
    };

    return (
        <>
            <Header />
            <div className="overflow-y-hidden">
                <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
                    <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                        <div className="flex w-full  flex-col justify-start items-start">
                            <div className>
                                <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Ödeme</p>
                            </div>
                            <div className="mt-2">
                                <Link href="/cart" className="text-base leading-4 underline  hover:text-gray-800 text-gray-600">
                                    Sepete dön
                                </Link>
                            </div>
                            <div className="mt-12">
                                <p className="text-xl font-semibold leading-5 text-gray-800">Ödeme Detayları</p>
                            </div>
                            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                                <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Ad" />
                                <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Soyad" />
                                <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Adres" />
                                <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                    <div className="relative w-full">
                                        <p id="button1" className=" px-2 border-b border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full">
                                            {changeText1}
                                        </p>
                                        <button onClick={() => setDropdown1(!dropdown1)} className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0">
                                            <svg id="close" className={` transform ${dropdown1 ? "rotate-180" : ""}  `} width={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6L8 10L4 6" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <div className={`shadow absolute z-10 bg-white top-10  w-full mt-3 ${dropdown1 ? "" : "hidden"}`}>
                                            <div className="flex flex-col  w-full">
                                                {["İstanbul", "Ankara", "İzmir"].map((item, index) => (
                                                    <p tabIndex={0} onClick={() => HandleText1(item)} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                        {item}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative w-full">
                                        <p id="button2" className=" px-2 border-b border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full">
                                            İlçe
                                            <span className="text-gray-400"> (optional)</span>
                                        </p>
                                        <button onClick={() => setDropdown2(!dropdown2)} className="focus:outline-none  focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0">
                                            <svg id="close2" className={` transform ${dropdown2 ? "rotate-180" : ""}  `} width={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6L8 10L4 6" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <div className={`shadow absolute z-10 bg-white top-10  w-full mt-3 ${dropdown2 ? "" : "hidden"}`}>
                                            <div className="flex flex-col  w-full">
                                                {/* {["İstanbul", "Ankara", "İzmir"].map((item, index) => (
                                                    <p tabIndex={0} onclick="changeButton2('London')" className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                        London
                                                    </p>
                                                ))} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                    <div className="w-full">
                                        <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full" type="text" placeholder="Posta Kodu" />
                                    </div>
                                </div>
                                <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full" type="text" placeholder="Telefon Numarası" />
                            </div>
                            <button className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">Ödeme Yap</button>
                            <div className="mt-4 flex justify-start items-center w-full">
                                <Link href="/cart" className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600">
                                    Sepete dön
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
                            <div>
                                <h1 className="text-2xl font-semibold leading-6 text-gray-800">Sipariş Özeti</h1>
                            </div>
                            <div className="flex mt-7 flex-col items-end w-full space-y-6">
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Toplam ürün</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">2</p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Alt Tutar</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">2790 TL</p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">KDV (%18)</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">90 TL</p>
                                </div>
                                {/* <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Toplam Tutar</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">2880 TL</p>
                                </div> */}
                            </div>
                            <div className="flex justify-between w-full items-center mt-32">
                                <p className="text-xl font-semibold leading-4 text-gray-800">Toplam Tutar </p>
                                <p className="text-lg font-semibold leading-4 text-gray-800">2900 TL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default checkout