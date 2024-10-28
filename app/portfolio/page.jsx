import React from 'react'
import styles from './styles.module.css'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
export default function portfolio() {
  return (
    <div className={styles.page_wrap}>
      <div className={styles.go_back_img}>
        <Link href={"/"}><ChevronLeft size={36} /></Link>
      </div>
      <div className={styles.projects_wrap}>
        <div className={styles.sidebar}>
          <h3>Projects</h3>
          <ul>
            <li><Link href={""}>All</Link></li>
            <li><Link href={"codeflux"}>CodeFlux</Link></li>
            <li><Link href={""}>mama yo quiero</Link></li>
            <li><Link href={""}>FocusG</Link></li>
            <li><Link href={""}>EndlessMining</Link></li>
            <li><Link href={""}>hackfreecanvas</Link></li>
            <li><Link href={""}>pizzeria</Link></li>
          </ul>
        </div>
        <div className={styles.projects}>
          <Link href={"/project/codeflux"} >

          {/* CodeFlux */}
            <div className={styles.project}>
              <Image  
                draggable="false"
                src={"/codeflux.png"}
                width={1366}
                height={768}
                alt="Pictures of cat and things i like" />

              <div className={styles.card_info}>
                <p>Codeflux</p>
                <p>2024</p>
              </div>
            </div>
          </Link>
          {/* mama yo quiero */}
          <Link href={"/project/mamayoquiero"} >
            <div className={styles.project}>
              
              <Image  
                draggable="false"
                src={"/mamayoquiero.png"}
                width={1366}
                height={768}
                alt="Pictures of cat and things i like" />

              <div className={styles.card_info}>
                <p>mama yo quiero</p>
                <p>2023</p>
              </div>
            </div>
          </Link>
          {/* focusg */}
          <Link href={"/project/focusg"} >
            <div className={styles.project}>
              
              <Image  
                draggable="false"
                src={"/focusg.png"}
                width={1366}
                height={768}
                alt="Pictures of cat and things i like" />

              <div className={styles.card_info}>
                <p>FocusG</p>
                <p>2023</p>
              </div>
            </div>
          </Link>
          {/* endlessmining */}
          <Link href={"/project/endlessmining"} >
            <div className={styles.project}>
              
              <Image  
                draggable="false"
                src={"/endlessmining.png"}
                width={1366}
                height={768}
                alt="Pictures of cat and things i like" />

              <div className={styles.card_info}>
                <p>EndlessMining</p>
                <p>2024</p>
              </div>
            </div>
          </Link>
          {/* hackfreecanvas */}
          <Link href={"/project/hackfreecanvas"} >
            <div className={styles.project}>
              
              <Image  
                draggable="false"
                src={"/hackfreecanvas.png"}
                width={1366}
                height={768}
                alt="Pictures of cat and things i like" />

              <div className={styles.card_info}>
                <p>hackfreecanvas</p>
                <p>2023</p>
              </div>
            </div>
          </Link>
          {/* pizzeria */}
          <Link href={"/project/pizzeria"} >
            <div className={styles.project}>
              
              <Image  
                draggable="false"
                src={"/pizzeria.png"}
                width={1366}
                height={768}
                alt="Pictures of cat and things i like" />

              <div className={styles.card_info}>
                <p>pizzeria</p>
                <p>2022</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
