import React from 'react'
import styles from '@/app/styles/Home/RoadMap.module.css'
import Image from 'next/image'
import { Dirent } from 'fs'


const context = [{ question: 'What is cryptocurrency?', answer: 'Cryptocurrency is a digital currency secured by cryptography and operating on decentralized networks.' },
{ question: 'How do I start investing in cryptocurrency?', answer: 'Choose a reliable exchange, create an account, complete verification, deposit funds, and buy cryptocurrencies.' },
{ question: 'What is a blockchain?', answer: 'A blockchain is a distributed ledger that records transactions across a network of computers.' },
{ question: 'How do I keep my cryptocurrency secure?', answer: 'Use strong passwords, enable two-factor authentication, and store your crypto in reputable wallets.' },
{ question: 'What is a cryptocurrency wallet?', answer: 'A cryptocurrency wallet is a digital tool for storing, sending, and receiving cryptocurrencies.' },
{ question: 'What are the most popular cryptocurrencies?', answer: 'Popular cryptocurrencies include Bitcoin, Ethereum, Binance Coin, Cardano, and Solana.' }]

const RoadMap = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.heading}>
          <h1>RoadMap</h1>
          <div className={styles.gridBox}>
            {context.map((el, index) => (
              <div key={index} className={styles.box}>
                <Box data={el} />
              </div>
            ))}
          </div>
          <div className={styles.background_drop1}></div>
          <div className={styles.background_drop2}></div>
        </div>
      </div>
    </div>
  )
}
const Box = ({ data }) => (
  <div className='flex flex-col gap-2'>
    <div className={styles.question}>{data.question}</div>
    <div className={`${styles.answer} border-b-[#F202FF] border-b pb-6`}>{data.answer}</div>
  </div>
)

export default RoadMap
