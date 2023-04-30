import Footer from '@/components/Footer';
import Header from '@/components/header';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';

const checkout = () => {
    const { totalQuantity, cartItems, fillCartItems } = useCart()
    const { userId } = useAuth()
    const router = useRouter();
    const [cityDropdown, setCityDropdown] = useState(false);
    const [districtDropdown, setDistrictDropdown] = useState(false);
    const [selectedCity, setSelectedCity] = useState({ id: 0, name: "İl Seçiniz" });
    const [selectedDistrict, setSelectedDistrict] = useState({ id: 0, name: "İlçe Seçiniz" });
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [paying, setPaying] = useState(false);
    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const addressRef = useRef(null);
    const zipCodeRef = useRef(null);
    const phoneRef = useRef(null);

    useEffect(() => {
        fetch("/api/cities")
            .then(r => r.json())
            .then(setCities)
    }, [])

    const handleSelectCity = (city) => {
        setSelectedCity(city);
        setCityDropdown(false);
        fetch("/api/districts?cityId=" + city.id)
            .then(r => r.json())
            .then(setDistricts)
    };

    const handleSelectDistrict = (district) => {
        setSelectedDistrict(district);
        setDistrictDropdown(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const surname = surnameRef.current.value;
        const address = addressRef.current.value;
        const zipCode = zipCodeRef.current.value;
        const phone = phoneRef.current.value;
        const cityId = selectedCity.id;
        const districtId = selectedDistrict.id;
        if (!name || !surname || !address || !zipCode || !phone || !cityId || !districtId) {
            return Swal.fire({
                title: "Hata!",
                text: "Lütfen tüm alanları doldurunuz.",
                icon: "error",
                confirmButtonText: "Tamam"
            })
        };
        setPaying(true);
        fetch("/api/order", {
            body: JSON.stringify({
                address: `${address} ${selectedDistrict.name} ${selectedCity.name} | ${zipCode} - ${name} ${surname} - ${phone}`,
                userId: userId,
                amount: totalQuantity
            }),
            method: "POST",
        })
            .then(res => res.json())
            .then(item => {
                setPaying(false);
                fillCartItems();
                Swal.fire({
                    title: "Başarılı!",
                    text: "Siparişiniz başarıyla oluşturuldu.",
                    icon: "success",
                    confirmButtonText: "Tamam"
                }).finally(() => {
                    
                    router.push({
                        pathname: '/order',
                        query: { order: item.id, status: "success" }
                    })
                })
            })
    }

    return (
        <>
            <Header />
            <div className="overflow-y-hidden">
                <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
                    <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                        <form onSubmit={handleSubmit} className="flex w-full  flex-col justify-start items-start">
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
                                <input ref={nameRef} minLength={2} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Ad" />
                                <input ref={surnameRef} minLength={2} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Soyad" />
                                <input ref={addressRef} minLength={10} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Adres" />
                                <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                    <button type='button' onClick={() => setCityDropdown(!cityDropdown)} className="relative w-full">
                                        <p id="button1" className=" px-2 border-b border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full">
                                            {selectedCity.name}
                                        </p>
                                        <span className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0">
                                            <svg id="close" className={` transform ${cityDropdown ? "rotate-180" : ""}  `} width={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6L8 10L4 6" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <div className={`shadow absolute overflow-y-auto max-h-80 z-10 bg-white top-10  w-full mt-3 ${cityDropdown ? "" : "hidden"}`}>
                                            <div className="flex flex-col w-full">
                                                {cities.map((item, index) => (
                                                    <p tabIndex={0} onClick={() => handleSelectCity(item)} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                        {item.name}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </button>
                                    <button type='button' onClick={() => setDistrictDropdown(!districtDropdown)} className="relative w-full">
                                        <p id="button2" className=" px-2 border-b border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full">
                                            {selectedDistrict.name}
                                        </p>
                                        <span className="focus:outline-none  focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0">
                                            <svg id="close2" className={` transform ${districtDropdown ? "rotate-180" : ""}  `} width={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 6L8 10L4 6" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <div className={`shadow absolute z-10 bg-white top-10  w-full mt-3 ${districtDropdown ? "" : "hidden"}`}>
                                            <div className="flex flex-col  w-full">
                                                {districts.map((item, index) => (
                                                    <p tabIndex={0} key={index} onClick={() => handleSelectDistrict(item)} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                        {item.name}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                    <div className="w-full">
                                        <input ref={zipCodeRef} className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full" type="text" placeholder="Posta Kodu" />
                                    </div>
                                </div>
                                <input ref={phoneRef} className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full" type="text" placeholder="Telefon Numarası" />
                            </div>
                            <button type='submit' className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
                                <span className='flex items-center justify-center space-x-4'>
                                    {paying && <div className='w-4 h-4 rounded-full animate-spin border border-solid border-white-600 border-t-transparent'></div>}
                                    <span>{paying ? "Ödeme yapılıyor.." : "Ödeme Yap"}</span>
                                </span>
                            </button>
                            <div className="mt-4 flex justify-start items-center w-full">
                                <Link href="/cart" className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600">
                                    Sepete dön
                                </Link>
                            </div>
                        </form>
                        <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
                            <div>
                                <h1 className="text-2xl font-semibold leading-6 text-gray-800">Sipariş Özeti</h1>
                            </div>
                            <div className="flex mt-7 flex-col items-end w-full space-y-6">
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Toplam ürün</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">{cartItems.length}</p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Alt Tutar</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">{(totalQuantity * 0.82).toFixed(2)} TL</p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">KDV (%18)</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">{(totalQuantity * 0.18).toFixed(2)} TL</p>
                                </div>
                                {/* <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Toplam Tutar</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">2880 TL</p>
                                </div> */}
                            </div>
                            <div className="flex justify-between w-full items-center mt-32">
                                <p className="text-xl font-semibold leading-4 text-gray-800">Toplam Tutar </p>
                                <p className="text-lg font-semibold leading-4 text-gray-800">{totalQuantity.toFixed(2)} TL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default checkout