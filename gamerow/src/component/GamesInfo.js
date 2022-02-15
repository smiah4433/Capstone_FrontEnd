import React, { Component } from 'react'
//import axios from "axios"
import Search from './Search'

class GamesInfo extends Component {
  state={
    games: [
      {name: "name 1", ratings: 3, released: "12/10/2020", platforms: "Playstation"},
      {name: "name 2", ratings: 3, released: "12/10/2020", platforms: "Playstation"},
      {name: "name 3", ratings: 3, released: "12/10/2020", platforms: "Nintendo"},
      {name: "name 4", ratings: 3, released: "12/10/2020", platforms: "X-Box"}
    ]
  }

  // componentDidMount(){
  //     axios.get('http://localhost:8000')
  //     .then(response=>{
  //       console.log(response)
  //     })
  // }


  render() {
    const gamesList = this.state.games.map(game=>{
      return (
        <div>
          <h3>{game.name}</h3>
          <p>Ratings - {game.ratings}</p>
          <p>Released - {game.released}</p>
          <p>{game.platforms}</p>
  
        </div>
      )
    })
    return (
      <div>
        <Search/>
        
      <section>
        {gamesList}
      </section>

      </div>
    )
  }
}

export default  GamesInfo
