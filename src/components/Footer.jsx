import React from 'react'

const Footer = () => {
    return (
        <footer className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 tails-selected-element">
            <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                <div className="px-5 py-2">
                    <a href="/about" className="text-base leading-6 opacity-75 hover:opacity-100">Hakkımızda</a>
                </div>
                <div className="px-5 py-2">
                    <a href="/blog" className="text-base leading-6 opacity-75 hover:opacity-100">Blog</a>
                </div>
                <div className="px-5 py-2">
                    <a href="/contact" className="text-base leading-6 opacity-75 hover:opacity-100">İletişim</a>
                </div>
                <div className="px-5 py-2">
                    <a href="/terms" className="text-base leading-6 opacity-75 hover:opacity-100">Kullanım Koşulları</a>
                </div>
            </nav>
            <div className="flex justify-center mt-8 space-x-6">
            </div>
            <p className="mt-8 leading-6 text-center text-gray-400">© 2023 BarbarosMar. Tüm Hakları Saklıdır.</p>
            <span className="w-full m-o block text-center opacity-75">
            </span>
        </footer>
    )
}

export default Footer