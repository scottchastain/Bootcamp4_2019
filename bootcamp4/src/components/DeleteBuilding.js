import React from 'react';

class DeleteBuilding extends React.Component {
	deleteBuilding() {
		//Here you will need to update the value of the filter with the value from the textbox
		//his.props.filterUpdate(
		this.props.deleteBuilding(this.refs.codeText.value);

	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value

		return (
			<div class="card">
			<h4 class="card-header"> Delete Building</h4>
			<div class="card-body">
				<div class="form-group">
					<label>Code</label>
					<input class="form-control" ref="codeText" placeholder="ABC" />
				</div>
				<button type="button" class="btn btn-primary" onClick={this.deleteBuilding.bind(this)}>Submit</button>
			</div></div>
		);
	}
}
export default DeleteBuilding;
