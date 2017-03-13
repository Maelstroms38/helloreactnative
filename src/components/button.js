import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native'; 

const Button = ({onPress}) => {
	const {buttonStyle, textStyle} = styles;
	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
		<Text style={textStyle}>Order</Text>
		</TouchableOpacity>
	);
};
const styles = {
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: "#fff",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#007aff",
		marginLeft: 5,
		marginRight: 5
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007AFF',
		fontSize: 16,
		fontWeight: "600",
		paddingTop: 10,
		paddingBottom: 10,

	}
}
export default Button;