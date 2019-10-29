import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding } = this.props;

		const selection = data[selectedBuilding-1];

		let coords, address;

		if (selection.coordinates) {
			coords = <><tr><td>coordinates:</td></tr>
							<tr><td>latitude: {selection.coordinates.latitude}</td></tr>
							<tr><td>longitude: {selection.coordinates.longitude}</td></tr></>;
		}

		if (selection.address) {
			address = <tr><td>address: {selection.address}</td></tr>;
		}

		return (<table><tbody>
					<tr><td>id: {selection.id}</td></tr>
					<tr><td>code: {selection.code}</td></tr>
					<tr><td>name: {selection.name}</td></tr>
					{coords}
					{address}
					</tbody></table>
		);
	}
}
export default ViewBuilding;
