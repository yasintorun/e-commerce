import Footer from '@/components/Footer'
import Header from '@/components/header'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const profile = () => {
    const { data: session, status } = useSession()
    const [showDetail, setShowDetail] = React.useState(0)
    const router = useRouter()
    useEffect(() => {
        if (!session && status !== "loading") {
            router.push("/auth/signin")
        }
    }, [session])

    return (
        <>
            <Head>
                <title>Sipariş Detayı</title>
            </Head>
            <Header />
            <main className='w-full container mx-auto mt-0 px-6 py-3'>
                <div className='w-full'>
                    <div className='text-center'>
                        <h1 className='text-2xl text-center text-orange-500'>Hoşgeldin {session?.user?.name}</h1>
                    </div>
                    <div className=''>
                        <div className="flex justify-center text-center my-5 stats shadow">
                            <div className="stat">
                                <div className="stat-figure">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </div>
                                <div className="stat-title">Toplam Sipariş</div>
                                <div className="stat-value">25</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <div className="stat-title">Toplam Harcanan Tutar</div>
                                <div className="stat-value">2654 TL</div>
                            </div>
                        </div>
                    </div>
                    <div className='orders'>
                        <h2 className='text-xl font-bold mb-4'>Siparişlerim</h2>
                        <div className='flex flex-col'>
                            <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                                <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                                    <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                                        <table className='min-w-full divide-y divide-gray-200'>
                                            <thead className='bg-gray-50'>
                                                <tr>
                                                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                                        SİPARİŞ NUMARASI
                                                    </th>
                                                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                                        SİPARİŞ TARİHİ
                                                    </th>
                                                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                                        TOPLAM TUTAR
                                                    </th>
                                                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                                        İŞLEM
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className='bg-white divide-y divide-gray-200'>
                                                <>
                                                    <tr>
                                                        <td className='px-6 py-4 whitespace-nowrap'>
                                                            <div className='text-sm text-gray-900'>1</div>
                                                        </td>
                                                        <td className='px-6 py-4 whitespace-nowrap'>
                                                            <div className='text-sm text-gray-900'>2</div>
                                                        </td>
                                                        <td className='px-6 py-4 whitespace-nowrap'>
                                                            <div className='text-sm text-gray-900'>3</div>
                                                        </td>
                                                        <td className='px-6 py-4 whitespace-nowrap'>
                                                            <button className='btn btn-success btn-xs' onClick={() => setShowDetail(showDetail == 1 ? 0 : 1)}>
                                                                {showDetail == 1 ? "ÜRÜNLERİ GİZLE" : "ÜRÜNLERİ GÖSTER"}
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {!!showDetail && (
                        <div className='my-10'>
                            <h2 className='text-xl font-bold mb-4 flex items-end justify-between'>
                                Sipariş Detayı - 1
                                <button className='btn btn-sm btn-ghost' onClick={() => setShowDetail(0)}>
                                    GİZLE
                                </button>
                            </h2>
                            <div className='flex flex-col'>
                                <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                                    <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                                        <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                                            <table className='min-w-full divide-y divide-gray-200'>
                                                <thead className='bg-gray-50'>
                                                    <tr>
                                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                                            ÜRÜN RESMİ
                                                        </th>
                                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                                            ÜRÜN ADI
                                                        </th>
                                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                                            ÜRÜN ADETİ
                                                        </th>
                                                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                                            ÜRÜN FİYATI
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className='bg-white divide-y divide-gray-200'>
                                                    <tr>
                                                        <td className='px-6 py-4 whitespace-nowrap'>
                                                            <div className="flex h-20 overflow-hidden items-center justify-start rounded">
                                                                <div className="aspect-w-1 aspect-h-1 w-20">
                                                                    <img src={"/kazak.jpeg"} alt="product image" className="object-contain" />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className='px-6 py-4 whitespace-nowrap'>
                                                            <div className='text-sm text-gray-900'>Ürün adı gelecek</div>
                                                        </td>
                                                        <td className='px-6 py-4 whitespace-nowrap'>
                                                            <div className='border inline-block rounded px-5 py-2 text-lg'>3</div>
                                                        </td>
                                                        <td className='px-6 py-4 whitespace-nowrap'>
                                                            <div className='text-sm text-gray-900'>2540 TL</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default profile

