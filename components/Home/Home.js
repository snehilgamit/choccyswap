import React from 'react'
import Image from 'next/image'
import styles from '@/app/styles/Home/Home.module.css'
import LogoPage from '@/components/Logo/Logo'
const Home = ({scrollToSwap}) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo_container}>
                <Image
                    src={"/home/logo.svg"}
                    width={78}
                    height={78}
                    priority={true}
                    loading={"eager"}
                    alt='logo'
                />
                <h1>ChoccySwap</h1>
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
            <div className='content flex justify-center flex-col items-center'>
                <div className={styles.swapBtn} onClick={scrollToSwap}>
                    <p>SWAP NOW</p>
                </div>
                <div className=' absolute top-[154px]'>
                <LogoPage/>

                </div>
                <p className={`${styles.description} subtitle mt-[300px] max-sm:mt-[200px]`}>THE FIRST DESK ON CROMIA</p>
                <div className={`${styles.box} mt-20`}>
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
