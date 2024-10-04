import React, { useState } from 'react'
import styles from '@/app/styles/Home/RoadMap.module.css'
import Image from 'next/image'


// const context = [{ question: 'What is cryptocurrency?', answer: 'Cryptocurrency is a digital currency secured by cryptography and operating on decentralized networks.' },
// { question: 'How do I start investing in cryptocurrency?', answer: 'Choose a reliable exchange, create an account, complete verification, deposit funds, and buy cryptocurrencies.' },
// { question: 'What is a blockchain?', answer: 'A blockchain is a distributed ledger that records transactions across a network of computers.' },
// { question: 'How do I keep my cryptocurrency secure?', answer: 'Use strong passwords, enable two-factor authentication, and store your crypto in reputable wallets.' },
// { question: 'What is a cryptocurrency wallet?', answer: 'A cryptocurrency wallet is a digital tool for storing, sending, and receiving cryptocurrencies.' },
// { question: 'What are the most popular cryptocurrencies?', answer: 'Popular cryptocurrencies include Bitcoin, Ethereum, Binance Coin, Cardano, and Solana.' }]

const RoadMap = () => {

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.heading}>
          <h1>RoadMap</h1>
        </div>
        <div className="Roadmap_accordion flex flex-col gap-4  my-2 mx-auto justify-center w-[692px] max-sm:w-[95%] mb-10"><div className="border-2 border-[#F202FF] p-6 rounded-xl">
          <input type="checkbox" id="first" name="accordion" />
          <label htmlFor="first" className="text-[#F202FF] Roadmap_label">Completed</label><div className="Roadmap_content">
            <div className="Roadmap_accordion flex flex-col gap-4 m-auto justify-center"><div className="border border-[#F202FF] p-3 rounded">
              <input type="checkbox" id="first1" name="accordion" /><label htmlFor="first1" className="text-[#F202FF] Roadmap_label">First version release</label>
              <div className="Roadmap_content"><p className="text-white">Introduce the application publicly and invite early adopters to explore and test its features on a private server.</p></div></div><div className="border border-[#F202FF] p-3 rounded">
                <input type="checkbox" id="second1" name="accordion" />
                <label htmlFor="second1" className="text-[#F202FF] Roadmap_label">FT4 update</label><div className="Roadmap_content"><p className="text-white">Improve the dapp experience by integrating it with the newest version of the FT protocol, ensuring performance and compatibility with Chromia's latest advancements.</p></div></div><div className="border border-[#F202FF] p-3 rounded">
                <input type="checkbox" id="third1" name="accordion" /><label htmlFor="third1" className="text-[#F202FF] Roadmap_label">Website and branding update</label>
                <div className="Roadmap_content">
                  <p className="text-white">Refreshed website with our new branding, setting the stage for the debut of our project on mainnet.</p></div>
              </div><div className="border border-[#F202FF] p-3 rounded">
                <input type="checkbox" id="fourth1" name="accordion" /><label htmlFor="fourth1" className="text-[#F202FF] Roadmap_label">Liquidity deals</label><div className="Roadmap_content"><p className="text-white">Strategic partnerships and collaborations with important players in the space to boost liquidity for the swap platform at launch, clearing the path for seamless trading.</p></div></div></div></div></div><div className="border-2 border-[#91A2FA] p-6 rounded-xl"><input type="checkbox" id="second" name="accordion" /><label htmlFor="second" className="text-[#91A2FA] Roadmap_label">In progress</label><div className="Roadmap_content"><div className="Roadmap_accordion flex flex-col gap-4  m-auto justify-center"><div className="border border-[#91A2FA] p-3 rounded"><input type="checkbox" id="first2" name="accordion" /><label htmlFor="first2" className="text-[#91A2FA] Roadmap_label">Order book implementation</label><div className="Roadmap_content"><p className="text-white">Add an order book to the AMM swap platform to expand its functionality, letting users make precise trades within asset pairs.</p></div></div><div className="border border-[#91A2FA] p-3 rounded"><input type="checkbox" id="second2" name="accordion" /><label htmlFor="second2" className="text-[#91A2FA] Roadmap_label">Performance test</label><div className="Roadmap_content"><p className="text-white">Thoroughly test the order book feature to confirm the feasibility of a hybrid exchange model, combining the best of automated pools and orderbook trading.</p></div></div><div className="border border-[#91A2FA] p-3 rounded"><input type="checkbox" id="third2" name="accordion" /><label htmlFor="third2" className="text-[#91A2FA] Roadmap_label">user onboarding</label><div className="Roadmap_content"><p className="text-white">Engaging promotional push across our social accounts to capture audiences attention and foster community growth.</p></div></div><div className="border border-[#91A2FA] p-3 rounded"><input type="checkbox" id="fourth2" name="accordion" /><label htmlFor="fourth2" className="text-[#91A2FA] Roadmap_label">Launchpad implementation</label><div className="Roadmap_content"><p className="text-white">Build a launchpad on Choccy's platform, allowing developers to launch tokens and initial offerings with simplicity and ease.</p></div></div></div></div></div><div className="border-2 border-[#ED8FDD] p-6 rounded-xl">
            <input type="checkbox" id="third" name="accordion" /><label htmlFor="third" className="text-[#ED8FDD] Roadmap_label">Scheduled</label><div className="Roadmap_content"><div className="Roadmap_accordion flex flex-col gap-4  m-auto justify-center"><div className="border border-[#ED8FDD] p-3 rounded">
              <input type="checkbox" id="first3" name="accordion" /><label htmlFor="first3" className="text-[#ED8FDD] Roadmap_label">Liquidity provision</label><div className="Roadmap_content"><p className="text-white">Establishing liquidity pools linked to tokens from key ecosystem players to strengthen the platform's foundation and create a diverse trading environment that reflects the collective strength of the Chromia ecosystem.</p></div></div><div className="border border-[#ED8FDD] p-3 rounded">
                <input type="checkbox" id="second3" name="accordion" /><label htmlFor="second3" className="text-[#ED8FDD] Roadmap_label">Subscription model</label><div className="Roadmap_content"><p className="text-white">Allowing token holders more flexibility with access to lower trading fees on our platform. By offering lower trading fees to token holders, we aim to incentivize participation and demonstrate the practical utility of the token both for transactions as well as participation in the growing services across our ecosystem. Our aspiration is for CCY to emerge as a valuable digital asset that customers will see long-term value in holding.</p></div></div></div></div></div><div className="border-2 border-[#42E8E0] p-6 rounded-xl">
            <input type="checkbox" id="fourth" name="accordion" /><label htmlFor="fourth" className="text-[#42E8E0] Roadmap_label">Planned</label><div className="Roadmap_content"><div className="Roadmap_accordion flex flex-col gap-4 m-auto justify-center"><div className="border border-[#42E8E0] p-3 rounded">
              <input type="checkbox" id="first4" name="accordion" /><label htmlFor="first4" className="text-[#42E8E0] Roadmap_label">Metamask integration</label><div className="Roadmap_content"><p className="text-white">Utilizing Metamask Snaps to simplify the user experience and seamlessly integrate with the Chromia network. This will make it easier for users to navigate and engage with the platform, creating a more intuitive and frictionless experience overall.</p></div></div><div className="border border-[#42E8E0] p-3 rounded">
                <input type="checkbox" id="second4" name="accordion" /><label htmlFor="second4" className="text-[#42E8E0] Roadmap_label">Oracles</label><div className="Roadmap_content"><p className="text-white">Integrating oracle solutions and price feeds to provide accurate and reliable data for other chains within the Chromia network and beyond. This will enhance interoperability and facilitate the exchange of information, creating a more interconnected ecosystem for all participants.</p></div></div><div className="border border-[#42E8E0] p-3 rounded">
                <input type="checkbox" id="third4" name="accordion" /><label htmlFor="third4" className="text-[#42E8E0] Roadmap_label">Sharding</label><div className="Roadmap_content"><p className="text-white">Build a dedicated environment for lower liquidity pairs, allowing high-volatility trades involving “meme” tokens and similar assets without disrupting the functionality of blue-chip tokens. This distinction ensures optimal performance and stability for all types of assets, adhering to diverse investment strategies and preferences.</p></div></div></div></div></div>
        </div>
      </div>

    </div>
  )
}

export default RoadMap
