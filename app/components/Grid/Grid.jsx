import { ArrowUpRight, NotepadText } from 'lucide-react'
import React from 'react'
import styles from './grid.module.css'
import Image from 'next/image'
export default function Grid() {

  
  return (
    <div className={styles.grid}>
      <div className={styles.gridCard}>
        <Image 
          src="/welcoming_photo.png"
          width={170}
          height={170}
          alt="Picture of the author"
        />
      </div>
      <div className={styles.gridCard}>
        <div>
          <NotepadText />
        </div>
        <div className=''>
          <p>Resumé/CV <ArrowUpRight /></p>
          <p>/resume</p>
        </div>
      </div>
      <div className={styles.gridCard}><p>hola</p></div>
      <div className={styles.gridCard}><p>hola</p></div>
    </div>
  )
}
