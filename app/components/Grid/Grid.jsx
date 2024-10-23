'use client'
import { icons } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import styles from './grid.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(process.env.NEXT_PUBLIC_PROJECT_URL, process.env.NEXT_PUBLIC_ANON_KEY);

export default function Grid() {
  const [rows, setRows] = useState([]);

    useEffect(() => {
      getCountries();
    }, []);

    async function getCountries() {
      const { data } = await supabase.from("rows").select();
      setRows(data);
    }


    const Icon = ({ name, color, size }) => {
      const LucideIcon = icons[name];

      return <LucideIcon color={color} size={size} />;
    };
 
  return (
    <div className={styles.grid}>

      <div className={styles.rowWrap}>
        {rows.map((card, index) => (
              <div key={index} className={`${styles.gridCard} ${card.type == "small"?styles.grid_small:styles.grid_big} ${styles.anim}`}>
                {card.has_image?
                  <Image 
                    src={card.image_link}
                    width={170}
                    height={170}
                    alt="Picture of the author"
                  /> 
                  :
                  null
                }
                {card.has_link?
                  <Link href={card.link} className={`${styles.gridCardInner} ${styles.anim}`}>
                    <div className={styles.icon}>
                    { <Icon name={card.icon} />}
                    </div>
                    <div className={styles.resume}>
                      <p>{card.title} </p>
                      { <Icon name={card.textIcon} />}
                    </div>
                  </Link>
                  :
                  null
                }

                {/* {
                  card.has_link && !card.has_image?
                  <div  className={`${styles.gridCardInner} ${styles.anim}`}>
                    <div className={styles.icon}>
                    { <Icon name={card.icon} />}
                    </div>
                    <div className={styles.resume}>
                      <p>{card.title} </p>
                      { <Icon name={card.textIcon} />}
                    </div>
                  </div>:
                  null
                } */}
                </div> 
        ))}

      </div>


{/*     
    <Link href={"/resume"} className={`${styles.gridCard} ${styles.anim}`}>
      <div className={styles.icon}>
        <NotepadText />
      </div>
      <div className={styles.resume}>
        <p>Resumé/CV </p>
        <ArrowUpRight />
      </div>
    </Link>

    <Link href={"/portfolio"} className={`${styles.gridCard} ${styles.anim}`}>
    <div className={styles.icon}>
        <NotepadText />
      </div>
      <div className={styles.resume}>
        <p>Portfolio</p>
        <ArrowUpRight />
      </div>
    </Link>

    <div className={`${styles.gridCard} ${styles.anim}`}><p>hola</p></div> */}




    </div>
  )
}
