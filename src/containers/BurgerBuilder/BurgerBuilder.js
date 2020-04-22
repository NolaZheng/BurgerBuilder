import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerCtrls from '../../components/Burger/BurgerCtrls/BurgerCtrls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const ING_PRICE = {
    salad: 10,
    cheese: 5,
    meat: 15,
    bacon: 10
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalprice: 80,
        purchasable: false,
        purchasing: false
    }

    updatePurchase(ingredients) {
        //把object轉換成array，然後reduce相加
        const sum = Object.keys(ingredients).map(itemKey => ingredients[itemKey]).reduce((sum, item) => sum +item, 0)

        this.setState({purchasable : sum > 0})

        // console.log(sum)
    }

    toPurchase = () => {
        this.setState({purchasing : true})
    }

    leavePurchase = () => {
        this.setState({purchasing : false})
    }

    continuePurchase = () => {
        alert('GO')
    }
    
    
    addIngredients = (type) => {
        //ING
        const oldCount = this.state.ingredients[type]
        const newCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount
        //PRICE
        const addPrice = ING_PRICE[type]
        const oldPrice = this.state.totalprice
        const newPrice = oldPrice + addPrice

        this.setState({
            ingredients: updatedIngredients,
            totalprice: newPrice
        })

        this.updatePurchase(updatedIngredients)
        
    }

    removeIngredients = (type) => {
        //ING
        const oldCount = this.state.ingredients[type]
        const newCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        if (oldCount > 0) {
            updatedIngredients[type] = newCount
        } else updatedIngredients[type] = 0
        
        //PRICE
        const typePrice = ING_PRICE[type]
        const oldPrice = this.state.totalprice
        const newPrice = oldPrice - typePrice

        this.setState({
            ingredients: updatedIngredients,
            totalprice: newPrice
        })

        this.updatePurchase(updatedIngredients)
    }


    render() {
        const disableInfo = {
            ...this.state.ingredients
        }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        // console.log(disableInfo)
        return (
            <Aux>
                <Modal 
                show={this.state.purchasing}
                backClose={this.leavePurchase}>
                    <OrderSummary 
                    price={this.state.totalprice}
                    ingredients={this.state.ingredients}
                    leavePurchase={this.leavePurchase}
                    continuePurchase={this.continuePurchase}></OrderSummary>
                </Modal>
                <Burger 
                ingredients={this.state.ingredients}></Burger>
                <BurgerCtrls 
                ingAdd={this.addIngredients}
                ingDel={this.removeIngredients}
                disabled={disableInfo}
                price={this.state.totalprice}
                purchasable={this.state.purchasable}
                toPurchase={this.toPurchase}></BurgerCtrls>
            </Aux>
        )
    }
    
}


export default BurgerBuilder;