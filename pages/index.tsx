import Head from 'next/head'
import { useEffect } from 'react';
import { useCart } from '../utils/useCart';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Home = ({ allProducts }: { allProducts: Product[]}) => {
  const { updateAllProducts } = useCart();

  useEffect(()=>{
    updateAllProducts(allProducts)
  },[allProducts])

  return (
    <div>
      <Head>
        <title>Kingston StoreFront</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        KINGSTON STOREFRONT
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const data = await res.json()

  return { props: { allProducts:data } }
}
export default Home;
