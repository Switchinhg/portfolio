'use client'
import React, { useEffect, useState } from 'react'
import styles from "./PersonCard.module.css"
import { BackgroundImage, Skeleton } from '@mantine/core';
import Image from 'next/image';


export default function PersonCard(language="EN") { 
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 500);
    }, []);


  return (
    <section className={styles.personCard}>
      {loading?
        <>
        <div className={styles.personIMG}>
        <Skeleton visible={loading}  height={170} circle mb="xl" />
        </div>
        <div className={styles.infoWrap}>
          <div className={styles.infoWrap_title_skeleton}>
            <Skeleton visible={loading}  height={30} mt={6} width="40%" radius="xl" /> 
            <Skeleton visible={loading}  height={30} mt={6} width="5%" radius="xl" /> 
            <Skeleton visible={loading}  height={30} mt={6} width="5%" radius="xl" /> 
            <Skeleton visible={loading}  height={30} mt={6} width="5%" radius="xl" /> 
            <Skeleton visible={loading}  height={30} mt={6} width="5%" radius="xl" /> 
          </div>
          <div className={styles.currently_work_wrap}>
            <Skeleton visible={loading}  height={30} mt={6} width="20%" radius="xl" />   <Skeleton visible={loading}  height={30} mt={6} width="36%" radius="xl" />
          </div>
          <Skeleton visible={loading}  height={30} mt={6} width="36%" radius="xl" />
          <div className={styles.location_wrap}>
            <Skeleton visible={loading}  height={30} mt={6} width="8%" radius="xl" /> 
             
            <Skeleton visible={loading}  height={30} mt={6} width="8%" radius="xl" />
          </div>
        </div>
        </>
      :
      <>
            <div className={`${styles.personCardWrapper} ${styles.animUp}`}>
        <div className={styles.personIMG}>
          <Image 
            draggable="false"
            src={"/santiago.jpg"}
            width={170}
            height={170}
            alt="Santiago Font image"
          /> 
        </div>
        <div className={styles.infoWrap}>
          <h1>Santiago Font <span>😎😎😎😎</span></h1>
          <p>Software developer</p>
          <p>Currently → EndlessMining</p>
          <p>santifonlop@hotmail.com</p>
          <p>Montevideo Uruguay</p>
        </div>
      </div>
      </>
      }
      
    </section>
  )
}
