import Link from 'next/link'
import React from 'react'

const Product = ({ product }) => {
    return (
        <div className="w-full grow-0 xl:w-[30%] p-2 flex flex-col border m-2 hover:shadow-lg hover group">
            <Link href={"/product/" + product.id}>
                <img className="hover:grow w-full h-80" src={product.product_images[0]?.image} />
                <div className="flex items-center justify-between py-3">
                    <div>
                        <h3 className="font-hk text-base text-secondary">{product.name}</h3>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <i className="fa-solid fa-star text-red-500"></i>
                                <i className="fa-solid fa-star text-red-500"></i>
                                <i className="fa-solid fa-star text-red-500"></i>
                                <i className="fa-solid fa-star text-red-500"></i>
                                <i className="fa-solid fa-star text-red-500"></i>
                            </div>
                            <p className="ml-2 font-hk text-sm text-secondary">
                                ({product.name.length})
                            </p>
                        </div>
                    </div>
                </div>
                <span className="font-hk text-xl font-bold text-primary pt-5">{product.price} TL</span>
                <button className="opacity-0 group-hover:opacity-100 text-center w-full px-2 py-1 mb-3 text-sm text-white bg-red-500 rounded-md sm:mb-0 hover:bg-red-700">
                    Sepete Ekle
                </button>
            </Link>
        </div>
    )
}

export default Product