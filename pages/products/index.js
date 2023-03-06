import Head from "next/head"
import Image from "next/image"

export async function getStaticProps(){
    const res = await fetch("https://dummyjson.com/products?limit=12")
    const data = await res.json()
    return{
        props:{products:data.products}
    }
}

export default function Index({products}){
    return(
        <>
        <Head>
            <title>สินค้าทั้งหมด | Mint Mintra</title>
            <meta name="keywords" content="Mint Mintra,ร้านค้า,ขายเสื้อผ้า" />
        </Head>
         <div>
            {products.map(item=>(
                <div key={item.id}>
                    <h2>{item.title}</h2>
                <Image src={item.thumbnail} width={300} height={300} alt={item.title} />
                </div>
            ))}
         </div>
        </>
    )
}