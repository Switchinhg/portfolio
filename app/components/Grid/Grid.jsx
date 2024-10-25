'use client'
import { icons } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import styles from './grid.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from "@supabase/supabase-js";
import { Skeleton, Button } from '@mantine/core';
import GridCardImg from './GridCardImg'
import GridCardblock from './GridCardblock'
const supabase = createClient(process.env.NEXT_PUBLIC_PROJECT_URL, process.env.NEXT_PUBLIC_ANON_KEY);

export default function Grid() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      getCountries();
    }, []);

    async function getCountries() {
      const { data } = await supabase.from("rows").select();
      setLoading(false)
      setRows(data);
    }
 
  return (
    <div className={styles.grid}>

      <div className={styles.rowWrap}>
        {rows.length>0?
        rows.map((card, index) => (
                card.has_image?
                  <GridCardImg key={index} type={card.type} img={card.image_link} index={index} />
                :
                  <GridCardblock key={index} type={card.type} index={index} link={card.link} icon={card.icon} textIcon={card.textIcon} title={card.title} />
        ))
        :
        <>
          <Skeleton visible={loading} height={170} width={170} radius="xl"></Skeleton>
          <Skeleton visible={loading} height={170} width={170} radius="xl"></Skeleton>
        </>
      }


      </div>

    </div>
  )
}
