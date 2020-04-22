import React from 'react'

import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'
import styles from './OrderSummary.module.css'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A burger with the following ingredients:</p>
            <ul className={styles.li}>
                {ingredientSummary}
            </ul>
            <strong><p>Total Price : ${props.price}</p></strong>
            <p>Continue to Checkout?</p>
            <Button btnType='danger' clicked={props.leavePurchase}>CANCEL</Button>
            <Button btnType='success' clicked={props.continuePurchase}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary
