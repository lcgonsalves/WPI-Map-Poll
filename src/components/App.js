import React, {Component} from 'react';
import {json} from "d3-fetch";
import '../css/App.css';
import Questionnaire from "../views/Questionnaire";
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "../views/Home";
import Visualization from "../views/Visualization";

class App extends Component {

  constructor(props) {
    super(props);

    // separate maps -- fetch streets and buildings separately
      // figure out how to render streets properly
      // add some other layers just cause

    this.state = {
      "rawBuildingsJSON": null,
      "streetsJSON": null,
      "buildings": []
    }
  }

  componentDidMount() {

      // buildings
    json("https://raw.githubusercontent.com/lcgonsalves/WPI-Map-Poll/master/map.geojson")
        .then(fetchedJSON => this.setState({
          "rawBuildingsJSON": fetchedJSON,
          "buildings": App.parseBuildingInformation(fetchedJSON)
        }));

    // streets
    json("https://raw.githubusercontent.com/lcgonsalves/WPI-Map-Poll/master/map/roads.geojson")
        .then(fetchedJSON => this.setState({
          "streetsJSON": fetchedJSON
        }));

  }

  /**
   * Parses GeoJSON to get cleaner building information
   * @param {Object} geoJSON
   * @returns {[Object]} object containing properties of each json feature
   */
  static parseBuildingInformation(geoJSON) {

    let buildings = [];
    const names = {};

    // todo: get rid of off campus buildings

    // filter by non-street/campus lane features
    geoJSON.features.forEach(
        ({properties}) => {
          if (properties.category) {
                if (!names[properties.name]) {
                    buildings.push(properties);
                    names[properties.name] = true;
                }
          }

    });

    return buildings;

  }


  render() {

      const loaded = this.state.rawBuildingsJSON && this.state.streetsJSON;

      return (
          <HashRouter>
              <Switch>
                  <Route path="/survey">
                      {this.state.rawBuildingsJSON && <Questionnaire buildings={this.state.buildings} />}
                  </Route>
                  <Route path="/vis">
                      {loaded && <Visualization
                          rawBuildingsJSON={this.state.rawBuildingsJSON}
                          streetsJSON={this.state.streetsJSON}
                      />}
                  </Route>
                  <Route path="/">
                      <Home/>
                  </Route>
              </Switch>
          </HashRouter>
      );

    // return (
    //     <div className="App">
    //         {this.state.geoJSON && <Questionnaire buildings={this.state.buildings} />}
    //     </div>
    // );

  }
}

export default App;
