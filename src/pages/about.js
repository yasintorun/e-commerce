import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'

const about = () => {
    return (
        <>
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