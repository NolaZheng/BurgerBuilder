import React from 'react'

import styles from './Toolbar.module.css'
import NavItems from '../NavItems/NavItems'

const toolbar = (props) => (
  <header className={styles.bar}>
    <div className={styles.menu}>My Burger</div>
    <nav><NavItems></NavItems></nav>
  </header>
)

export default toolbar