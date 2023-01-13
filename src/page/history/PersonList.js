import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/history_summery/`)
      .then(res => {
        const persons = res.data;
        console.log(res.data) 
        this.setState({ persons });
      })
   
  }
  

  render() {
    return (
        this.state.persons
    )
  }
}