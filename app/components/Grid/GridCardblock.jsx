'use client'
import React, { useEffect, useState } from 'react'
import styles from './grid.module.css'
import Link from 'next/link'
import { icons } from 'lucide-react'

export default function GridCardblock({type, index, link, icon, textIcon, title}) {
  const [isLoaded, setIsLoaded] = useState(false);


  const Icon = ({ name, color, size }) => {
    const LucideIcon = icons[name];
    return <LucideIcon color={color} size={size} />;
  };

    useEffect(() => {
      
      setIsLoaded(true)
        setTimeout(() => {
          setIsLoaded(false)
        }, 200*index);

    }, [])


  return (
    <div  className={`${styles.gridCard} ${type == "small"? styles.grid_small:styles.grid_big} ${isLoaded ? styles.anim : styles.alwaysOn}`}>
      <Link href={link} draggable="false" className={`${styles.gridCardInner} ${styles.anim}`}>
        <div className={styles.icon}>
        { <Icon name={icon} />}
        </div>
        <div className={styles.resume}>
          <p>{title} </p>
          { <Icon name={textIcon} />}
        </div>
      </Link>
    </div> 
  )
}
