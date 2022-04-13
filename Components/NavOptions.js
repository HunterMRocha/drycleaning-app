import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data = [
	{
		id: "123", 
		title: "Order Dry Cleaning Pickup",
		image: "https://links.papreact.com/3pn",
		screen: "MapScreen",
	},

	{
		id: "456",
		title: "Pick up clothes",
		image: "https://links.papareact.com/28w",
		screen: "FoodScreen", // change in futre
	},
];


const navOptions = () => {
  return (
	<SafeAreaView>
	  <Text>Home Screen Options</Text>
	</SafeAreaView>
  )
}

export default navOptions

const styles = StyleSheet.create({})