import Footer from '@/components/Footer'
import Header from '@/components/header'
import { getOrderById } from '@/lib/queries/order'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'

const order = ({ order }) => {
    console.log(order)
    return order && (
        <>
        <Head>
            <title>Sipariş Detayı</title>
        </Head>
            <Header />
            <div class="max-w-md mx-auto mt-10">
                <div class="bg-white shadow-md rounded-md px-6 py-8">
                    <div className='flex justify-center'>
                        <img src="/checkmark.png" className='w-80 h-80 bg-contain' />
                    </div>
                    <h2 class="text-xl font-bold mb-4">Siparişiniz Alındı</h2>
                    <p class="mb-6">Siparişiniz başarıyla alındı. Teşekkür ederiz.</p>
                    <div class="flex items-center justify-between">
                        <p class="text-gray-500">Sipariş Numarası:</p>
                        <p class="font-medium">{order.id}</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-gray-500">Sipariş Tarihi:</p>
                        <p class="font-medium">{order?.date}</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-gray-500">Toplam Tutar:</p>
                        <p class="font-medium">{order?.amount?.toFixed(2)} TL</p>
                    </div>
                    <Link href="/" class="mt-6 block text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md">Anasayfa'ya Dön</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const order = await getOrderById(context.query.order)
    console.log("ORDEr => ", order)
    if (!order) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            order: { ...order, date: order.date.toLocaleString() }
        },
    }
}

export default order