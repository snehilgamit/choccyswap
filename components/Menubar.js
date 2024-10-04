import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Menubar = () => {
    return (
        <div className='absolute top-[55px] max-sm:top-[35px] left-1/2 -translate-x-1/2 poppins-regular z-[999] bg-[#202020] rounded-[100px]'>
            <ul className='flex text-[#CECECE] gap-9 py-2 px-12 text-[16px] max-sm:text-[13px]' style={{ lineHeight: '24px' }}>
                <li className=' cursor-pointer'>
                    <Link href={'/stats'}>Stats</Link>
                </li>
                <li className=' cursor-pointer'>
                    <Link href={'/pools'}>Pools</Link>
                </li>
                <li className='flex justify-center items-center gap-2 cursor-pointer Navigation_resources'>
                    <div>Resources</div>
                    <div className='w-[12px] h-[12px] flex justify-center items-center'>
                        <Image
                            src={'/home/swap/dropdown-small.svg'}
                            width={14}
                            height={14}
                            alt='dropdown'
                        /></div>
                    <ul className="Navigation_dropdown"><li><a href="https://docs.choccyswap.com/">Docs</a></li><li><a href="https://x.com/ChoccySwap">X</a></li><li><a href="https://t.me/ChoccySwapCommunity">Telgram</a></li><li><a href="https://vote.choccyswap.com/">Governance</a></li><li><a href="https://github.com/ChoccySwap/">Git</a></li></ul>
                </li>
            </ul>
        </div>
    )
}

export default Menubar
