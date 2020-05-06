import React, { Component } from 'react'

import Aux from '../../hoc/Aux/Aux'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-orders'
import Burger from '../../components/Burger/Burger'
import BurgerCtrls from '../../components/Burger/BurgerCtrls/BurgerCtrls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'

const ING_PRICE = {
	salad: 10,
	cheese: 5,
	meat: 15,
	bacon: 10,
}

class BurgerBuilder extends Component {
	//如果要從後端拉初始data，render相關的標籤要加上條件
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 80,
		purchasable: false,
		purchasing: false,
		loading: false,
	}

	updatePurchase(ingredients) {
		//把object轉換成array，然後reduce相加
		const sum = Object.keys(ingredients)
			.map((itemKey) => ingredients[itemKey])
			.reduce((sum, item) => sum + item, 0)

		this.setState({ purchasable: sum > 0 })

		// console.log(sum)
	}

	toPurchase = () => {
		this.setState({ purchasing: true })
	}

	leavePurchase = () => {
		this.setState({ purchasing: false })
	}

	continuePurchase = () => {
		// this.setState({ loading: true })
		// const order = {
		//     ingredients : this.state.ingredients,
		//     price : this.state.totalPrice,
		//     customer : {
		//         name: 'Nola Zheng',
		//         phone: '0921234567',
		//         email: 'test@test.com',
		//         address: '123 street, taipei'
		//     },
		//     note: 'ASAP'
		// }
		// // alert('GO')
		// axios.post('/orders.json', order)
		//     .then(res => {this.setState({loading: false, purchasing : false})})
		//     .catch(err => {this.setState({loading: false, purchasing : false})})

		// Route
		// console.log(this.props)
		this.props.history.push('/checkout')
	}

	addIngredients = (type) => {
		//ING
		const oldCount = this.state.ingredients[type]
		const newCount = oldCount + 1
		const updatedIngredients = {
			...this.state.ingredients,
		}
		updatedIngredients[type] = newCount
		//PRICE
		const addPrice = ING_PRICE[type]
		const oldPrice = this.state.totalPrice
		const newPrice = oldPrice + addPrice

		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice,
		})

		this.updatePurchase(updatedIngredients)
	}

	removeIngredients = (type) => {
		//ING
		const oldCount = this.state.ingredients[type]
		const newCount = oldCount - 1
		const updatedIngredients = {
			...this.state.ingredients,
		}
		if (oldCount > 0) {
			updatedIngredients[type] = newCount
		} else updatedIngredients[type] = 0

		//PRICE
		const typePrice = ING_PRICE[type]
		const oldPrice = this.state.totalPrice
		const newPrice = oldPrice - typePrice

		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice,
		})

		this.updatePurchase(updatedIngredients)
	}

	render() {
		const disableInfo = {
			...this.state.ingredients,
		}
		for (let key in disableInfo) {
			disableInfo[key] = disableInfo[key] <= 0
		}
		// console.log(disableInfo)

		let orderSummary = (
			<OrderSummary
				price={this.state.totalPrice}
				ingredients={this.state.ingredients}
				leavePurchase={this.leavePurchase}
				continuePurchase={this.continuePurchase}></OrderSummary>
		)

		if (this.state.loading) {
			orderSummary = <Spinner></Spinner>
		}
		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
					backClose={this.leavePurchase}>
					{orderSummary}
				</Modal>
				<Burger ingredients={this.state.ingredients}></Burger>
				<BurgerCtrls
					ingAdd={this.addIngredients}
					ingDel={this.removeIngredients}
					disabled={disableInfo}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					toPurchase={this.toPurchase}></BurgerCtrls>
			</Aux>
		)
	}
}

export default withErrorHandler(BurgerBuilder, axios)
