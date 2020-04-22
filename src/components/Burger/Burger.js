import React from 'react'

import styles from './Burger.module.css'
import BurgerIng from './BurgerIng/BurgerIng'

const burger = (props) => {
    // 類似陣列的物件 Object.keys
    /* 
    var obj = { 0: 'a', 1: 'b', 2: 'c' };
    console.log(Object.keys(obj)); // console: ['0', '1', '2']
    */
   let transformedIngredients = [];
 
    for (let key in props.ingredients) {
        for (let i = 0; i < props.ingredients[key]; i++) {
            transformedIngredients.push(<BurgerIng key={key + i} type={key} />);
        }
    }

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Adding Ingredients to Build a Burger</p>
    }
    // console.log(transformedIngredients)
    // console.log(props.ingredients["salad"])

    return (
        <div className={styles.burger}>
            <BurgerIng type="bread-top"></BurgerIng>
            {transformedIngredients}
            <BurgerIng type="bread-bottom"></BurgerIng>
        </div>
    )
}

export default burger