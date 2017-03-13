import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';

class AlbumList extends Component {

	state = { albums: [] }; //Initial State

	componentWillMount() {
		console.log('Make AJAX Request')
		try {
	      let response = axios.get('https://rallycoding.herokuapp.com/api/music_albums.json')
	      .then(response => this.setState({ albums: response.data }));
	      console.log(response.data);
	    } catch(error) {
	      console.error(error);
	    }
	}
	
	renderAlbumsArray() {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album} />
		);
	}
	render() {
		console.log(this.state);
		return (
			<ScrollView>
				{this.renderAlbumsArray()}
			</ScrollView>
		);
	  }
	}
export default AlbumList;