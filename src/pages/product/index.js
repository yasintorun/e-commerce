import HomeCategoryList from '@/components/HomeCategoryList'
import Product from '@/components/Product'
import Footer from '@/components/Footer'
import Header from '@/components/header'
import { getProducts } from '@/lib/queries/product'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products }) {
  const router = useRouter()

  const filteredProducts = useMemo(() =>
    products.filter(item => item.category.id == router.query?.category || !router.query?.category),
    [router.query?.category])

  return (
    <>
      <Header />
      {/* <HomeSlider /> */}
      <main>
        <section class="bg-white py-8">

          <div class="container mx-auto">
            <div className='md:flex'>
              <aside class="sticky top-0 min-w-[300px]">
                <HomeCategoryList />
              </aside>
              <div className='flex items-center flex-wrap pt-4 pb-12'>
                {filteredProducts.map((item, i) => (
                  <Product key={i} product={item} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const products = await getProducts()
  return {
    props: {
      products
    },
  }
}
