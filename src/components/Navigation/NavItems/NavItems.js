import React from 'react'

import styles from './NavItems.module.css'

const navItems = (props) => (
	<div>
		<ul className={styles.navitems}>
			<li className={styles.navitem}>
				<a href={props.link} link='/'>
					Burger Builder
				</a>
			</li>
			<li className={styles.navitem}>
				<a href={props.link} link='/'>
					Checkout
				</a>
			</li>
		</ul>
	</div>
)

export default navItems
