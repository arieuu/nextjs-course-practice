import Image from 'next/image'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route';
import vogue from "@/public/images/vogue.png";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1> Hello World </h1>
    </main> 
  )
}
