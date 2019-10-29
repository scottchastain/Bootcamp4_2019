import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		//his.props.filterUpdate(
		this.props.filterUpdate(this.refs.filterText.value);

	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value

		return (
			<form>
				<input type="text" ref="filterText" placeholder="Type to Filter" onChange={this.filterUpdate.bind(this)} />
			</form>
		);
	}
}
export default Search;
