import React from "react";

import Cards from "./components/Cards/Cards.jsx";
import Country from "./components/Country/Country.jsx";
import Chart from "./components/Chart/Chart.jsx";

import { fetchData } from "./API/index";

import styles from "./App.modules.css";


class App extends React.Component {

  state = {
    data: { },
  }

  async componentDidMount() {
    const getTheData = await fetchData();
    console.log("App.js ---> ", getTheData);
    this.setState({data: getTheData});
  }

  render() {
    
    const { data } = this.state;
   // console.log("the data is: " + this.state.data);

    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <Country/>
        <Chart/>
      </div>
    );
  }
}

export default App;
