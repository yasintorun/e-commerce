import { getProviders, getSession, signIn } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'

const Signin = ({
    providers
}) => {
    const [loading, setLoading] = React.useState(false)
    const email = useRef("");
    const password = useRef("");
    const router = useRouter()
    const handleSignin = async () => {
        if (loading || !email.current || !password.current) return;
        setLoading(true)
        signIn("credentials", {
            email: email.current,
            password: password.current,
            callbackUrl: router.query.callbackUrl ?? "/"
        }).finally(() => setLoading(false))
    }
    return (
        <>
            <Head>
                <title>KodChallenge Topluluğuna Katıl</title>
                <meta name="description" content="KodChallenge, Türkçe programlama topluluğudur. Topluluğumuzda sizide aramızda görmekten gurur duyarız." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='w-full overflow-auto'>
                <div className='min-h-screen w-full flex items-center p-5 justify-center flex-col space-y-2'>
                    <div className=" w-full p-2 sm:p-5 sm:max-w-md lg:max-w-lg md:4/5 bg-base-100 shadow-2xl">
                        <h1 className='text-center text-3xl mb-10'>Giriş Yap</h1>
                        <form>
                            <div>
                                <div class="text-sm font-bold text-gray-700 tracking-wide">Eposta</div>
                                <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Eposta adresinizi giriniz" />
                            </div>
                            <div class="mt-8">
                                <div class="flex justify-between items-center">
                                    <div class="text-sm font-bold text-gray-700 tracking-wide">
                                        Şifre
                                    </div>
                                    <div>
                                        <a class="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer">
                                            Şifremi Unuttum
                                        </a>
                                    </div>
                                </div>
                                <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Şifrenizi giriniz" />
                            </div>
                            <div class="mt-10">
                                <button class="text-center w-full px-6 py-3 mb-3 text-lg text-white bg-red-500 rounded-md sm:mb-0 hover:bg-red-700">
                                    Giriş Yap
                                </button>
                            </div>
                        </form>
                        <div className='text-center'>
                            <p className='m-5'>
                                Hesabınız yok mu? {"  "}
                                <Link href={"/auth/signup"} className="text-center underline text-sm hover:text-red-300">Üye Ol</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin

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