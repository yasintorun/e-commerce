import Link from 'next/link'
import React from 'react'

const Product = () => {
    return (
        <div className="w-full grow-0 xl:w-[30%] p-6 flex flex-col border m-2 hover:shadow-lg hover group">
            <Link href={"/product/" + "id"}>
                <img className="hover:grow" src="/kazak.jpeg" />
                <div className="flex items-center justify-between pt-6">
                    <div>
                        <h3 className="font-hk text-base text-secondary">Cat eye</h3>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <i className="fa-solid fa-star text-red-500"></i>
                                <i className="fa-solid fa-star text-red-500"></i>
                                <i className="fa-solid fa-star text-red-500"></i>
                                <i className="fa-solid fa-star text-red-500"></i>
                                <i className="fa-solid fa-star text-red-500"></i>
                            </div>
                            <p className="ml-2 font-hk text-sm text-secondary">
                                (45)
                            </p>
                        </div>
                    </div>
                    <span className="font-hk text-xl font-bold text-primary">$75.0</span>
                </div>
                <button className="opacity-0 group-hover:opacity-100 text-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700">
                    Sepete Ekle
                </button>
                {/* <div className="pt-3 flex items-center justify-between">
                    <p className="">Siyah Kazak</p>
                    <svg className="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                    </svg>
                </div>
                <p className="pt-1 text-gray-900">120 TL</p> */}
            </Link>
        </div>
    )
}

export default Product