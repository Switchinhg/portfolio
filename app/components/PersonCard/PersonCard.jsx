'use client'
import React, { useEffect, useState } from 'react'
import styles from "./PersonCard.module.css"
import { Skeleton } from '@mantine/core';
import { createClient } from "@supabase/supabase-js";
import Image from 'next/image';
const supabase = createClient(process.env.NEXT_PUBLIC_PROJECT_URL, process.env.NEXT_PUBLIC_ANON_KEY);

export default function PersonCard(language="EN") { 
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      getUserData();
    }, []);

    async function getUserData() {
      const { data } = await supabase.from("user_data").select();
      setLoading(false)
      setRows(data);
      console.log(data)
    }

  return (
    <section className={styles.personCard}>
      {rows.length>0?
      <div className={`${styles.personCardWrapper} ${styles.animUp}`}>
        <div className={styles.personIMG}>
          <Image 
            draggable="false"
            src={rows[0].image_link}
            width={170}
            height={170}
            alt="Pictures of cat and things i like"
          /> 
        </div>
        <div className={styles.infoWrap}>
          <h1>{rows[0].title} <span>{rows[0].emojis}</span></h1>
          <p>{rows[0].currently_before_arrow} → {rows[0].currently_after_arrow}</p>
          <p>{rows[0].email}</p>
          <p>{rows[0].country} • {rows[0].city}</p>
        </div>
      </div>
      :
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
            <Skeleton visible={loading}  height={30} mt={6} width="20%" radius="xl" />  → <Skeleton visible={loading}  height={30} mt={6} width="36%" radius="xl" />
          </div>
          <Skeleton visible={loading}  height={30} mt={6} width="36%" radius="xl" />
          <div className={styles.location_wrap}>
            <Skeleton visible={loading}  height={30} mt={6} width="8%" radius="xl" /> 
            • 
            <Skeleton visible={loading}  height={30} mt={6} width="8%" radius="xl" />
          </div>
        </div>
      </>
      }
      
    </section>
  )
}
