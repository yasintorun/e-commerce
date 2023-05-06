import { getProviders, getSession, signIn } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

const Signup = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleRegister = (e) => {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setError("Şifreler uyuşmuyor");
            return;
        }
        setLoading(true);
        fetch("/api/auth/signup", {
            body: JSON.stringify({
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        }).then((res) => res.json()).then(async (data) => {
            if (data.error) {
                setError(data.error);
                setLoading(false);
            } else {
                return await signIn("credentials", {
                    ...data,
                    callbackUrl: "/"
                });
            }
        }).finally(() => {
            setLoading(false)
        });
    }

    return (
        <>
            <div className='w-full overflow-auto'>
                <div className='min-h-screen w-full flex items-center p-5 justify-center flex-col space-y-2'>
                    <div className=" w-full p-2 sm:p-5 sm:max-w-md lg:max-w-lg md:4/5 bg-base-100 shadow-2xl">
                        <h1 className='text-center text-3xl mb-10'>
                            Üye Ol
                        </h1>
                        <form onSubmit={handleRegister}>
                            <div>
                                <div class="text-sm font-bold text-gray-700 tracking-wide">Ad Soyad</div>
                                <input
                                    ref={nameRef}
                                    class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type="text"
                                    name='name'
                                    placeholder="Adınızı ve soyadınızı giriniz"
                                    min={5}
                                    required
                                />
                            </div>
                            <div className='mt-8'>
                                <div class="text-sm font-bold text-gray-700 tracking-wide">Eposta</div>
                                <input
                                    ref={emailRef}
                                    class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type="email"
                                    name='email'
                                    placeholder="Eposta adresinizi giriniz"
                                    required
                                />
                            </div>
                            <div class="mt-8">
                                <div class="text-sm font-bold text-gray-700 tracking-wide">
                                    Şifre
                                </div>
                                <input
                                    ref={passwordRef} class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type="password"
                                    name='password'
                                    placeholder="Şifrenizi giriniz"
                                    min={6}
                                    required
                                />
                            </div>
                            <div class="mt-8">
                                <div class="text-sm font-bold text-gray-700 tracking-wide">
                                    Şifre Tekrar
                                </div>
                                <input
                                    ref={passwordConfirmRef}
                                    class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type="password"
                                    placeholder="Şifrenizi tekrar giriniz"
                                    min={6}
                                    required
                                    onChange={(e) => {
                                        if (e.target.value !== passwordRef.current.value) {
                                            e.target.setCustomValidity("Şifreler uyuşmuyor");
                                        } else {
                                            e.target.setCustomValidity("");
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <p className='text-red-500 text-sm'>{error}</p>
                            </div>

                            <div class="mt-10">
                                <button type='submit' class="text-center w-full px-6 py-3 mb-3 text-lg text-white bg-red-500 rounded-md sm:mb-0 hover:bg-red-700">
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