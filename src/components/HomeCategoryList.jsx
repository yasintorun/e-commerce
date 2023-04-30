import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const HomeCategoryList = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        fetch('/api/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .finally(() => setLoading(false))
    }, [])

    const handleCategoryPress = (category) => {
        if (category.id == router.query.category || category.id == 0) {
            delete router.query.category
            router.push(router)
            return
        }
        // set query category
        router.query.category = category.id
        router.push(router)
    }

    return (
        <>
            <h2 className='text-lg font-semibold'>Kategoriler</h2 >
            {
                loading ?
                    (
                        <div class="animate-pulse space-y-4">
                            {Array.from({ length: 10 }).map((_, i) => (
                                <div class="h-2 p-2 bg-slate-200 rounded"></div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <ul>
                                {[{id: 0, name: "Tüm Ürünler"}, ...categories].map((item, i) => (
                                    <li key={item.id} className='border-b border-gray-200'>
                                        <a
                                            onClick={() => handleCategoryPress(item)}
                                            className={`flex items-center justify-between p-2 text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${item.id == router.query.category ? "bg-gray-200" : ""}`}
                                        >
                                            {item.name}
                                            <span className='text-right'>
                                                <i className='fa-solid fa-chevron-right'></i>
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )
            }
        </>
    )
}

export default HomeCategoryList