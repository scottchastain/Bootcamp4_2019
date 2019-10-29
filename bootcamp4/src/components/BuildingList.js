import React from 'react';

class BuildingList extends React.Component {
	render() {
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data.filter(directory => directory.name.toLowerCase().includes(filterText.toLowerCase())).map(directory => {
			return (
				<tr key={directory.id}>
					<td onClick={() => selectedUpdate(directory.id)}>{directory.code} </td>
					<td onClick={() => selectedUpdate(directory.id)}> {directory.name} </td>
				</tr>
			);
		});

		return buildingList;
	}
}
export default BuildingList;
