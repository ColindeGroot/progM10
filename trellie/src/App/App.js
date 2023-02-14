import React from "react";
import Trellie from "../Component/Trellie/Trellie";
import trelliesObject from "../Data/trellies"
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {trellies: []}
  }

  componentDidMount(){
    this.setState({trellies: trelliesObject})
  }

  onActivityAdded = (inputValue, id) => {
    let oldState = this.state.trellies;
    let newState = {
      label: "vandaag",
      description: inputValue,
      id: oldState[id -1].activities.lenght + 1
    }
    oldState[id -1].activities.push(newState);
    this.setState({trellies: oldState});
  }
  
  render(){
    let render = this.state.trellies.map(object => {
      return <Trellie id={object.id} onActivityAdded={this.onActivityAdded} key={object.id} trellie={object}/>
    });
    return( 
      <>
        {render}
      </>
    );
  }
}

export default App;
