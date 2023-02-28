import styles from "../styles/About.module.css"
import Image from "next/image"
import Head from "next/head"
export default function About(){
    return(
        <>
            <Head>
                <title>เกี่ยวกับเรา | Mint Mintra</title>
                <meta name="keywords" content="Mint Mintra,ร้านค้า,ขายเสื้อผ้า" />
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>เกี่ยวกับเรา</h1>
                <Image src="/about.svg" width={500} height={500} alt="loabout" />
            </div>
        </>
    )
}