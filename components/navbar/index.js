// components/navbar.js
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './navbar.module.scss'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Close the menu when clicking outside of it
    const handleOutsideClick = (event) => {
      if (!event.target.closest(`.${styles.navbar}`)) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('click', handleOutsideClick)
    return () => window.removeEventListener('click', handleOutsideClick)
  }, [])

  // Toggle the menu state when clicking on the hamburger icon
  const handleMenuClick = () => {
    console.log(isMenuOpen)
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          My Website
        </Link>
      </div>
      <div className={styles.hamburger} onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
        <li className={styles.item}>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/about">
            About
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/services">
            Services
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}