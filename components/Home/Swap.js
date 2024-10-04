'use client'
import React, { useState } from 'react'
import styles from '@/app/styles/Home/Swap.module.css'
import Image from 'next/image'

const Swap = () => {
  const [value, setValue] = useState('');
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.heading}>
          <h1>Swap</h1>
        </div>
        <div className={styles.swap_box}>
          <div className={styles.logo_container}>
            <Image
              src={"/home/logo.svg"}
              width={78}
              height={78}
              loading={"lazy"}
              alt='logo'
            />
            <h1>ChoccySwap</h1>
          </div>
          <div className={styles.swap_details}>
            <div className={styles.swap_from}>From</div>
            <div className='flex relative'>
              <input
                type="text"
                name="from"
                id="from"
                className={styles.from_input}
                placeholder='0'
                value={value}
                onChange={(e) => {
                  if (!isNaN(e.target.value)) {
                    setValue(e.target.value);
                  }
                }}
              />

              <div className='flex absolute top-1/2 -translate-y-1/2 right-7 gap-2'>
                <p className={styles.tokenName}>ETH</p>
                <Image
                  src={"/home/swap/dropdown-small.svg"}
                  width={12}
                  height={6}
                  loading={"lazy"}
                  alt='logo'
                />
              </div>
            </div>
            <div className='w-full flex justify-center mt-5 mb-3'>
              <div className='-mr-2'>
                <Image
                  src={"/home/swap/dropdown.svg"}
                  width={34}
                  height={34}
                  loading={"lazy"}
                  alt='logo'
                />
              </div>
              <div className='-ml-2'>
                <Image
                  src={"/home/swap/dropup.svg"}
                  width={34}
                  height={34}
                  loading={"lazy"}
                  alt='logo'
                />
              </div>
            </div>
            <div className={styles.swap_from}>To (Estimated)</div>
            <div className='flex relative'>
              <input
                type="text"
                name="to"
                id="to"
                placeholder='0'
                className={styles.from_input}
                value={(value * 0.6588).toFixed(4)}
                readOnly
              />
              <div className='flex absolute -top-1/2 right-7 gap-2'>
                <p className={styles.tokenName}>USDC</p>
                <Image
                  src={"/home/swap/dropdown.svg"}
                  width={12}
                  height={6}
                  loading={"lazy"}
                  alt='logo'
                />
              </div>
            </div>

            <div className={styles.connectWalletBtn}>
              <p>Connect wallet</p>
            </div>
          </div>
          {/* <div className={styles.background_drop}></div>
          <div className={styles.background_drop2}></div> */}
        </div>
      </div>
    </div>
  )
}

export default Swap
