import React from 'react'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import styles from './CheckoutSummary.module.css'

const checkoutSummary = (props) => {
	return (
		<div className={styles.checkoutSummary}>
			<h1>
				<strong>We hope it tastes well !</strong>
			</h1>
			<div style={{ width: '100%', height: '300px', margin: 'auto' }}>
				<Burger ingredients={props.ingredients} />
			</div>
			<Button btnType='danger' clicked={props.checkoutCancelled}>
				CANCEL
			</Button>
			<Button btnType='success' clicked={props.checkoutContinued}>
				CONTINUE
			</Button>
		</div>
	)
}

export default checkoutSummary
