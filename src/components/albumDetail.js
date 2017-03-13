import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button';

const AlbumDetail = ({album}) => {
	const { title, artist, thumbnail_image, image, url} = album;
	const {
		headerStyle,
		thumbnailStyle,
		containerStyle,
		headerTextStyle,
		imageStyle
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style={containerStyle}>
					<Image style={thumbnailStyle} source={{ uri: thumbnail_image}} />
				</View>
				<View style={headerStyle}>
				<Text style={headerTextStyle}>{title}</Text>
				<Text>{artist}</Text>
				</View>
			</CardSection>
			
			<CardSection>
			<Image style={imageStyle} source={{uri: image}} />
			</CardSection>
			
			<CardSection>
				<Button onPress={() => Linking.openURL(url)} />
			</CardSection>
		</Card>

	);
};

const styles = {
	headerStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	thumbnailStyle: {
		height: 50,
		width: 50,
	},
	containerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	headerTextStyle: {
		fontSize: 20
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;