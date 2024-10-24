'use client'
import React, { useState } from 'react'
import styles from "./PersonCard.module.css"
import { Skeleton } from '@mantine/core';

export default function PersonCard() {
  const [data, setData] = useState(null)

  return (
    <section className={styles.personCard}>
      <div className={styles.personIMG}>
        {data?<img  src="" alt="" />: <Skeleton height={200} circle mb="xl" />}
        
        
      </div>
      <div className={styles.infoWrap}>
        <h1>Santiago is a Software Engineer / Fullstack Developer <span>🛠️ 👨‍💻 📈 😺</span></h1>
        <p>Currently → EndlessMining.com</p>
        <p>santifonlop@hotmail.com</p>
        <p>UY • MVD</p>
      </div>
    </section>
  )
}
