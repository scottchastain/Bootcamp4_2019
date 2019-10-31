import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import DeleteBuilding from './components/DeleteBuilding';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 1,
			data: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
		this.setState({
			filterText: value
		})
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
		this.setState({
			selectedBuilding: id
		})
  }

	addBuilding(building) {
		const newData = this.state.data.concat(building);

		this.setState({
			data: newData
		})
	}

	deleteBuilding(code) {
		const newData = this.state.data.filter(building => building.code !== code);

		this.setState({
			data: newData
		})
	}


  render() {

    return (


      <div className="bg">
			<div class="jumbotron">
<h1 class="display-4">UF Directory App</h1>
        </div>

        <Search filterUpdate={this.filterUpdate.bind(this)}/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tbody>
									<tr>
                    <td>
                      <b>Code</b>
                    </td>
										<td>
                      <b>Name</b>
                    </td>
                  </tr>
                  <BuildingList
										filterText = {this.state.filterText}
                    data = {this.state.data}
										selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
									</tbody>
                </table>
              </div>
            </div>

            <div className="column2">
              <table>
								<tbody>
									<tr><td>
										<ViewBuilding
											data={this.state.data}
											selectedBuilding={this.state.selectedBuilding}/>
									</td></tr>
									<br />
									<tr><td>
										<AddBuilding
										data={this.state.data}
										addBuilding={this.addBuilding.bind(this)}/>
									</td></tr>
									<br />
									<tr><td>
										<DeleteBuilding
										deleteBuilding={this.deleteBuilding.bind(this)}/>
									</td></tr>
								</tbody>
							</table>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
