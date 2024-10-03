import React from 'react'
import Image from 'next/image'
import styles from '@/app/styles/Home/Home.module.css'
const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo_container}>
                <Image
                    src={"/home/logo.png"}
                    width={78}
                    height={78}
                    priority={true}
                    loading={"eager"}
                    alt='circle_bl'
                />
                <h1>LOGO</h1>
            </div>
            <div className='bg-circle z-0'>
                <div className={styles.circle_bl}>
                    <Image
                        src={"/home/circle_bl.svg"}
                        fill={true}
                        alt='circle_bl'
                        priority={true}
                        loading={"eager"}
                    />
                </div>
                <div className={styles.circle_tr}>
                    <Image
                        src={"/home/circle_tr.svg"}
                        fill={true}
                        priority={true}
                        loading={"eager"}
                        alt='circle_bl'
                    />
                </div>
                <div className={styles.circle_br}>
                    <Image
                        src={"/home/circle_br.svg"}
                        fill={true}
                        priority={true}
                        loading={"eager"}
                        alt='circle_bl'
                    />
                </div>
            </div>
            <div className='content'>
                <div className={styles.swapBtn}>
                    <p>SWAP NOW</p>
                </div>
                <h1 className={styles.heading}>THE ONLY CRYPTO WEBSITE YOU WILL <span className='text-[#F202FF]'>EVER VISIT</span></h1>
                <p className={styles.description}>THE FIRST DESK ON CROMIA</p>
                <div className={styles.box}>
                    <div className={styles.boxBtn_1}>TRY NOW</div>
                    <div className={styles.boxBtn_1}>TRY NOW</div>
                    <div className={styles.boxBtn_2}><p>Check out The app</p></div>
                    <div className={styles.boxBtn_2}><p>Buy on Tradejoe</p></div>
                </div>
            </div>
        </div>
    )
}

export default Home
