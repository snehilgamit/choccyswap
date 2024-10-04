import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className='w-full h-[78px] bg-[#B4178E] flex justify-center items-center gap-3'>
      <Link href={'https://x.com'}><Image
        src={"/home/footer/x.svg"}
        width={24}
        height={24}
        loading={"lazy"}
        alt='x'
      /></Link>
      <Link href={'https://t.me'}><Image
        src={"/home/footer/telegram.svg"}
        width={24}
        height={24}
        loading={"lazy"}
        alt='telegram'
      /></Link>
      <Link href={'https://github.com'}><Image
        src={"/home/footer/github.svg"}
        width={24}
        height={24}
        loading={"lazy"}
        alt='github'
      /></Link>
      <Link href={'https://coingecko.com'}><Image
        src={"/home/footer/coingecko.svg"}
        width={24}
        height={24}
        loading={"lazy"}
        alt='coingecko'
      /></Link>
    </div>
  );
}

export default Footer;
