import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Menubar = () => {
    return (
        <div className='absolute top-[55px] left-1/2 -translate-x-1/2 poppins-regular z-[999] bg-[#202020] rounded-[100px]'>
            <ul className='flex text-[#CECECE] gap-9 py-2 px-12 text-[16px]' style={{ lineHeight: '24px' }}>
                <li className=' cursor-pointer'>
                    <Link href={'/stats'}>Stats</Link>
                </li>
                <li className=' cursor-pointer'>
                    <Link href={'/pools'}>Pools</Link>
                </li>
                <li className='flex justify-center items-center gap-2 cursor-pointer'>
                    <div>Resources</div>
                    <div>
                        <Image
                            src={'/home/swap/dropdown-small.svg'}
                            width={12}
                            height={12}
                            alt='dropdown'
                        /></div>
                </li>
            </ul>
        </div>
    )
}

export default Menubar
