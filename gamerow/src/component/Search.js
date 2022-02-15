import React, {Component } from 'react'
import axios from 'axios';

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      baseUrl: 'http://localhost:8000',
      searchTerm: '',
      results: []
    }
  }

  handleChange = (event) => {
    console.log(event.target.id)
    console.log(event.target.value)

    // this.setState({
    //   [event.target.id] : event
    // })

    this.setState({
      searchTerm : event.target.value
    })
  }

  loadData = () => {
    // axios.get(this.state.baseUrl + '/search/' + this.state.searchTerm)
    axios.get(this.state.baseUrl + '/games/search/' + this.state.searchTerm)
    .then(res => {
      if(res) {
        let results = res.data.data;
        console.log(results);
        // let state1 = {... this.state};
        // state1.results 
        this.setState( {
          results: [...results]
        }
        )
      }
      // console.eslintConfig
      // this.setState({
      //   'result': ...res
      // });
      // console.log(res);
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
      // this.setState({
      //   searchTerm
      // }, () => {
      //     fetch(this.state.baseUrl + '/search/' + this.state.searchTerm)
      //     .then(response => {
      //       return response.json()
      //   }).then(json => console.log(json), (error) => console.log(error))
      // })

      this.loadData();
  }

  render() {
    return (
      <div>

      <form onSubmit={this.handleSubmit}>
        <label> Games </label>
        <input id="game"
          type="text"
          placeholder= "Search Game"
          // value={this.state.searchTerm}
          onChange={this.handleChange}
          />
          <input
            type="Submit"
            value="Search Games"
          />
      </form>
      <p>Results</p>
      {
        this.state.results.map((item, key) => {
          return (
          <div key={key}>
            {item.name}
            <img src={item.background_image} width="100" height="100"/>
          </div>)})
      }
      </div>
    )
  }
}

export default Search;
