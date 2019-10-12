import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
//import youtube from '../api/youtube' ;
class FitnessVideos extends React.Component {
	componentDidMount() {
		this.onTermSubmit("buildings");
	}
	state = { videos: [], selectedVideo: null };
	// onTermSubmit = async term => {
	// 	const response = await axios.get(
	// 		"https://www.googleapis.com/youtube/v3/search",
	// 		{
	// 			params: {
	// 				part: "snippet",
	// 				maxResults: 5,
	// 				key: "AIzaSyCXo2H_4a5FIdVlHiUsVID0zhwKuU0u06Q",
	// 				q: term
	// 			}
	// 		}
	// 	);
	// 	this.setState({
	// 		videos: response.data.items,
	// 		selectedVideo: response.data.items[0]
	// 	});
	// };
	// onVideoSelect = video => {
	// 	this.setState({ selectedVideo: video });
	// };
	onTermSubmit = async term => {
		const response = await axios.get(
			"https://www.googleapis.com/youtube/v3/search",
			{
				params: {
					part: "snippet",
					maxResults: 5,
					key: "AIzaSyAvy_kUcXCAnciFGDeNUp977UOju6gfWJo",
					q: term
				}
			}
		);
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};
	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className='ui container ' style={{ marginTop: "10px " }}>
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className='ui grid'>
					<div className=' ui row'>
						<div className='eleven wide column'>
							<VideoDetails video={this.state.selectedVideo} />
						</div>
						<div className='five wide column'>
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default FitnessVideos;
