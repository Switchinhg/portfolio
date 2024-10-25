import React from 'react'
import styles from './grid.module.css'
import Image from 'next/image'


export default function GridCardImg({img, type, index}) {
  
  return (
    <div  className={`${styles.gridCard} ${type == "small"? styles.grid_small:styles.grid_big} ${styles.anim}`}>
        <Image
          draggable="false"
          src={img}
          width={170}
          height={170}
          alt="Pictures of cat and things i like"
        /> 
    </div> 
  )
}
