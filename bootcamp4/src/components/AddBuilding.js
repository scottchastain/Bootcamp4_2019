import React from 'react';

class AddBuilding extends React.Component {
	addBuilding() {
		const highestIndex = this.props.data[this.props.data.length-1].id;
		const building = {id: highestIndex+1,
											code: this.refs.codeText.value,
											name: this.refs.nameText.value,
											address: this.refs.addressText.value};
		this.props.addBuilding(building);

	}
	render() {

		return (
			<div class="card">
			<h4 class="card-header">Add Building</h4>
			<div class="card-body">
				<div class="form-group">
					<label>Code</label>
					<input class="form-control" ref="codeText" placeholder="ABC" />
						<label>Name</label>
					<input class="form-control" ref="nameText" placeholder="Alpha Beta Epsilon" />
						<label>Address</label>
					<input class="form-control" ref="addressText" placeholder="1234 Frat Row" />
				</div>
				<button type="button" class="btn btn-primary" onClick={this.addBuilding.bind(this)}>Submit</button>
			</div></div>
		);
	}
}
export default AddBuilding;
