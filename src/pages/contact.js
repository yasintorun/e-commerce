import Footer from '@/components/Footer'
import Header from '@/components/header'
import Head from 'next/head'
import React from 'react'

const contact = () => {
    return (
        <>
            <Head>
                <title>Hakkımızda</title>
            </Head>
            <Header />
            <div className='container m-auto'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-xl font-bold'>İletişim</h1>
                </div>
                <div className="overflow-x-auto flex justify-center">
                    <table className="table">
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>Telefon Numarası</th>
                                <td>+90 123 456 7890</td>
                            </tr>
                            <tr>
                                <th>E-Posta Adresi</th>
                                <td>barbarosmar@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default contact