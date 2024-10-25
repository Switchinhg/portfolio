import React from 'react'
import styles from './styles.module.css'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
export default function portfolio() {
  return (
    <div className={styles.page_wrap}>
      <div className={styles.go_back_img}>
        <Link href={"/"}><ChevronLeft size={36} /></Link>
      </div>
      <div className={styles.projects_wrap}>
        helo
          <div>
            helo
          </div>
      </div>
    </div>
  )
}
