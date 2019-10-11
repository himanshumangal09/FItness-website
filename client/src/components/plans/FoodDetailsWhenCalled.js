import React from "react";

import SearchBar from "./SearchBar";
const axios = require("axios");
class FoodDetails extends React.Component {
	state = {
		calcium: 0,
		carbohydrt: 0,
		cholestrl: 0,
		energ_kcal: 0,
		iron: 0,
		magnesium: 0,
		manganese: 0,
		phosphorus: 0,
		potassium: 0,
		protein: 0,
		sodium: 0,
		vit_b6: 0,
		vit_b12: 0,
		vit_c: 0,
		vit_d: 0,
		vit_e: 0,
		vit_k: 0,
		vit_a_iu: 0,
		water: 0
	};
	renderErrors() {
		console.log("Null value or click again");
	}
	onTermSubmit = async term => {
		await axios({
			method: "GET",
			url: "https://food-calorie-data-search.p.rapidapi.com/api/search",
			headers: {
				"content-type": "application/octet-stream",
				"x-rapidapi-host": "food-calorie-data-search.p.rapidapi.com",
				"x-rapidapi-key": "4fce675d58msh4c5b8d7782ff444p1f819fjsn503f83c9b052"
			},
			params: {
				keyword: `${term}`
			}
		})
			.then(response => {
				console.log(this.props.data);
				console.log(response.data[0]);
				if (
					response.data == [] ||
					response.data == undefined ||
					response.data == null
				) {
					return alert("NO DATA LOADED YET!!");
				}
				{
					this.setState({
						calcium: response.data[0].calcium,
						carbohydrt: response.data[0].carbohydrt,
						cholestrl: response.data[0].cholestrl,
						energ_kcal: response.data[0].energ_kcal,
						iron: response.data[0].iron,
						magnesium: response.data[0].magnesium,
						manganese: response.data[0].manganese,
						phosphorus: response.data[0].phosphorus,
						potassium: response.data[0].potassium,
						protein: response.data[0].protein,
						sodium: response.data[0].sodium,
						vit_b6: response.data[0].vit_b6,
						vit_b12: response.data[0].vit_b12,
						vit_c: response.data[0].vit_c,
						vit_d: response.data[0].vit_d,
						vit_e: response.data[0].vit_e,
						vit_k: response.data[0].vit_k,
						vit_a_iu: response.data[0].vit_a_iu,
						water: response.data[0].water
					});
				}
			})
			.catch(error => {
				console.log(error);
				console.log("error occuried try again by clicking the button again ");
				console.log("unable to get data");
			});
	};
	renderFoodDetails() {
		if (this.state.calcium === 0 || this.state.calcium === undefined) {
			//this.getFoodDetails()
			return (
				<div className='ui blue segment'>
					Searched Result Will Appear here !!
				</div>
			);
		}
		{
			return (
				<div className='ui segments'>
					<div className='ui segment'>
						<p>calcium:{this.state.calcium}</p>
					</div>
					<div className='ui red segment'>
						<p>carbohydrt:{this.state.carbohydrt}</p>
					</div>
					<div className='ui blue segment'>
						<p>cholestrl:{this.state.cholestrl}</p>
					</div>
					<div className='ui green segment'>
						<p>energy kcal:{this.state.energ_kcal}</p>
					</div>
					<div className='ui yellow segment'>
						<p> iron:{this.state.iron}</p>
					</div>
					<div className='ui yellow segment'>
						<p> magnesium: {this.state.magnesium}</p>
					</div>
					<div className='ui yellow segment'>
						<p>manganese:{this.state.manganese}</p>
					</div>
					<div className='ui yellow segment'>
						<p>phosphorus: {this.state.phosphorus}</p>
					</div>
					<div className='ui red segment'>
						<p>potassium:{this.state.potassium}</p>
					</div>
					<div className='ui blue segment'>
						<p>protein:{this.state.protein}</p>
					</div>
					<div className='ui green segment'>
						<p>sodium:{this.state.sodium}</p>
					</div>
					<div className='ui yellow segment'>
						<p> vit_a_iu:{this.state.vit_a_iu}</p>
					</div>
					<div className='ui yellow segment'>
						<p> vit_b6: {this.state.vit_b6}</p>
					</div>
					<div className='ui yellow segment'>
						<p>vit_b12:{this.state.vit_b12}</p>
					</div>
					<div className='ui yellow segment'>
						<p>vit_c: {this.state.vit_c}</p>
					</div>
					<div className='ui red segment'>
						<p>vit_d:{this.state.vit_d}</p>
					</div>
					<div className='ui blue segment'>
						<p>vit_e:{this.state.vit_e}</p>
					</div>
					<div className='ui green segment'>
						<p>vit_k:{this.state.vit_k}</p>
					</div>
					<div className='ui yellow segment'>
						<p> water:{this.state.water}</p>
					</div>
				</div>
			);
		}
	}

	render() {
		return (
			<div className='ui container ' style={{ marginTop: "10px " }}>
				<SearchBar onFormSubmit={this.onTermSubmit} />
				{this.renderFoodDetails()}
			</div>
		);
	}
}
export default FoodDetails;
