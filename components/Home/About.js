import React from 'react'
import styles from '@/app/styles/Home/About.module.css'
import Image from 'next/image'

const context = [
  { title: 'Zero Gas', image: '/home/about/zero_gas.svg', width: 88, height: 88, content: 'placeholder or dummy text used in typesetting and graphic design for previewing layouts' },
  { title: 'To be announced', image: '/home/about/recycle.svg', width: 96, height: 96, content: 'placeholder or dummy text used in typesetting and graphic design for previewing layouts' },
  { title: 'FT4 & ERC20 compatible', image: '/home/about/recycle.svg', width: 96, height: 96, content: 'placeholder or dummy text used in typesetting and graphic design for previewing layouts' },
  { title: 'To be announced', image: '/home/about/recycle-light.svg', width: 96, height: 96, content: 'placeholder or dummy text used in typesetting and graphic design for previewing layouts' },
  { title: 'To be announced', image: '/home/about/recycle-light.svg', width: 96, height: 96, content: 'placeholder or dummy text used in typesetting and graphic design for previewing layouts' },
  { title: 'Orderbook Trading', image: '/home/about/orderbook.svg', width: 94, height: 94, content: 'placeholder or dummy text used in typesetting and graphic design for previewing layouts' }
]
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridBox}>
        {context.map((el, index) => (
          <div key={index} className={styles.box}>
            <Box data={el} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default About


const Box = ({ data }) => (
  <>
    <div className='flex h-[88px] gap-2'>
      <Image
        src={data.image}
        width={data.width}
        height={data.height}
        loading={"lazy"}
        alt={data.title}
      />
      <div>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.content}>{data.content}</div>
      </div>
    </div>
  </>
)