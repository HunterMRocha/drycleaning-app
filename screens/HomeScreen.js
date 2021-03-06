import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import React from 'react';
import NavOptions from '../Components/NavOptions';


const HomeScreen = () => {
  return (
	<SafeAreaView style={tw`bg-red h-full`}>
		<View style={tw`p-5`}>
			<Image 
				style= {{
					width:100, 
					height:100, 
					resizeMode: 'contain'
				}}
				source={{
					uri: "https://links.papareact.com/gzs",
				}}
			/>
			<NavOptions />
			
		</View>
	  {/* <Text style={tw`text-md tracking-wide`}>Home Screen</Text> */}
	</SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
	
});