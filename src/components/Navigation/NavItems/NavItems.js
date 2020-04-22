import React from 'react'

import styles from './NavItems.module.css'

const navItems = (props) => (
    <div>
		<ul className={styles.navitems}>
			<li className={styles.navitem}>
				<a href={props.link} 
				link="/"
				active
				className={props.active? styles.active : null}>
				Burger Builder</a>
			</li>
			<li className={styles.navitem}>
				<a href={props.link} 
				link="/"
				className={props.active? styles.active : null}>
				Checkout</a>
			</li>
		</ul>
	</div>
)

export default navItems