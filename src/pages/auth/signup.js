import { getProviders, getSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'

const Signup = () => {
    return (
        <>
            <div className='w-full overflow-auto'>
                <div className='min-h-screen w-full flex items-center p-5 justify-center flex-col space-y-2'>
                    <div className=" w-full p-2 sm:p-5 sm:max-w-md lg:max-w-lg md:4/5 bg-base-100 shadow-2xl">
                        <h1 className='text-center text-3xl mb-10'>Giriş Yap</h1>
                        <form>
                            <div>
                                <div class="text-sm font-bold text-gray-700 tracking-wide">Ad Soyad</div>
                                <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Adınızı ve soyadınızı giriniz" />
                            </div>
                            <div className='mt-8'>
                                <div class="text-sm font-bold text-gray-700 tracking-wide">Eposta</div>
                                <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Eposta adresinizi giriniz" />
                            </div>
                            <div class="mt-8">
                                <div class="text-sm font-bold text-gray-700 tracking-wide">
                                    Şifre
                                </div>
                                <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Şifrenizi giriniz" />
                            </div>
                            <div class="mt-8">
                                <div class="text-sm font-bold text-gray-700 tracking-wide">
                                    Şifre Tekrar
                                </div>
                                <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Şifrenizi tekrar giriniz" />
                            </div>

                            <div class="mt-10">
                                <button class="text-center w-full px-6 py-3 mb-3 text-lg text-white bg-red-500 rounded-md sm:mb-0 hover:bg-red-700">
                                    Üye Ol
                                </button>
                            </div>
                        </form>
                        <div className='text-center'>
                            <p className='m-5'>
                                Hesabınız var mı? {"  "}
                                <Link href={"/auth/signin"} className="text-center underline text-sm hover:text-red-300">Giriş Yap</Link>
                            </p>
                            <p className='m-5'>
                                <Link href={"/"} className="text-center underline text-sm hover:text-red-300">Anasayfaya Geri Dön</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup

export async function getServerSideProps(context) {
    const { req } = context;
    const session = await getSession({ req });
    const providers = await getProviders()
    if (session) {
        return {
            redirect: { destination: "/" },
        };
    }
    return {
        props: {
            providers,
        },
    }
}