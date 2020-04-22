import React from 'react'

import styles from './BurgerCtrls.module.css'
import Controller from './Controller/Controller';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const burgerCtrls = (props) => (
    <div className={styles.burgerctrls}>
        <p>Current Price: <strong>${props.price}</strong></p>
        {controls.map(ctrl =>(
            <Controller 
            key={ctrl.label} 
            label={ctrl.label}
            ingAdd={() => props.ingAdd(ctrl.type)}
            ingDel={() => props.ingDel(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            >
            </Controller>
        ))}
        <button 
            className={styles.orderButton}
            disabled={!props.purchasable}
            onClick={props.toPurchase}>
            Order Now
        </button>
    </div>
)

export default burgerCtrls
