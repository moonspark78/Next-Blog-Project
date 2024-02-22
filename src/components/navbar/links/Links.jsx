import Link from 'next/link';
import React from 'react'
import styles from "./links.module.css"
import {NavLink} from "@/components/navbar/links/navLink/NavLink"

const Links = () => {
    const links = [
        {
            title: "HomePage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];
  return (
    <div className={styles.links}>
        {
            links.map((link =>(
               <NavLink item={link} key={link.title}/>
            )))
        }
    </div>
  )
}

export default Links