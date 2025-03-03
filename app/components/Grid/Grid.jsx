'use client'
import { icons } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import styles from './grid.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Skeleton, Button } from '@mantine/core';
import GridCardImg from './GridCardImg'
import GridCardblock from './GridCardblock'

export default function Grid() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 500);
    }, []);

  return (
    <div className={styles.grid}>

      <div className={styles.rowWrap}>
        {loading?
        <>
          <Skeleton visible={loading} height={170} width={170} radius="xl"></Skeleton>
          <Skeleton visible={loading} height={170} width={170} radius="xl"></Skeleton>
        </>
        :
        
        <>
        <GridCardImg type={"small"} img={"/welcoming_photo.png"} time={200}/>
        <GridCardblock type={"small"} link={"/portfolio"} icon={"BriefcaseBusiness"} textIcon={"ArrowUpRight"} title={"Projects"} time={400} />
        <GridCardblock type={"small"} link={"/contact"} icon={"Send"} textIcon={"ArrowUpRight"} title={"Contact"} time={600} />
        <GridCardblock type={"large"} link={"/about-me"} icon={"UserRound"} textIcon={"ArrowUpRight"} title={"About Me"} time={800} />
       {/* 
         rows.map((card, index) => (<BriefcaseBusiness /><CornerRightUp /><ArrowUpRight /><UserRound /><Send />
          <GridCardImg key={index} type={card.type} img={card.image_link} index={index} />
          :
          <GridCardblock key={index} type={card.type} index={index} link={card.link} icon={card.icon} textIcon={card.textIcon} title={card.title} />
        ))
           */}
        </>
      }


      </div>

    </div>
  )
}
