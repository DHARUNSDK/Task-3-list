import React, {Component} from 'react';

class Dkapp extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {"name":"DHARUN","nic":"SDK"},
        {"name":"DHIVYA","nic":"KD"},
        {"name":"MEBORN","nic":"MEB"}
      ]
    };
  }
  render() {
    return (
      <div>
        <Fruits />
        <Head />
        <ul>
          {this.state.data.map((item)=> <List data={item} />)}
        </ul>
      </div>
    )
  }
}
class Fruits extends Component {
  render() {
    return (
      <div>
        <h1>BUDDY NAMES</h1>
      </div>
    )
  }
}
class Head extends Component {
  render() {
    return (
      <div>
        <h3>LIST OF FRIENDS</h3>
      </div>
    )
  }
}
class List extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><p>{this.props.data.name} : {this.props.data.nic}</p> </li>
        </ul>
      </div>
    )
  }
}
export default Dkapp;