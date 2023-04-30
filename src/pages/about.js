import Footer from '@/components/Footer'
import Header from '@/components/header'
import Head from 'next/head'
import React from 'react'

const about = () => {
    return (
        <>
        <Head>
            <title>Hakkımızda</title>
        </Head>
            <Header />
            <div className='container m-auto'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-xl font-bold'>Hakkımızda</h1>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default about