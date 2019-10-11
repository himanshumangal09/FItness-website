import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };
	onFormSubmit = event => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.term);
		//AIzaSyDoG7GZbx0kzhKMFhkxAwS90ODQEjBf0eI
	};
	render() {
		return (
			<div className='search-bar ui segment '>
				<form className='ui form' onSubmit={this.onFormSubmit}>
					<div className='field'>
						<label>Search bar</label>
						<input
							type='text'
							value={this.state.term}
							onChange={e => {
								console.log(e.target.value);
								this.setState({ term: e.target.value });
							}}
						/>
						<button className='ui button primary' type='submit'>
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}
export default SearchBar;
