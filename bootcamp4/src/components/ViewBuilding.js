import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding } = this.props;

		const selection = data.filter(building => building.id === selectedBuilding)[0];

		let coords, address;

		if (selection.coordinates) {
			coords = <><tr><td>Coordinates:</td></tr>
							<tr><td>Latitude: {selection.coordinates.latitude}</td></tr>
							<tr><td>Longitude: {selection.coordinates.longitude}</td></tr></>;
		}

		if (selection.address) {
			address = <tr><td>Address: {selection.address}</td></tr>;
		}

		return (
					<div class="card">
					<h4 class="card-header">Building Info</h4>
					<div class="card-body">
						<table><tbody>
							<tr><td>Code: {selection.code}</td></tr>
							<tr><td>Name: {selection.name}</td></tr>
							{coords}
							{address}
						</tbody></table>
					</div></div>
		);
	}
}
export default ViewBuilding;
