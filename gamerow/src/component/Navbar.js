import React, {Component} from "react"
import {NavLink} from "react-router-dom"

class Navbar extends Component{

    render(){
        return(
            <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/games">Games</NavLink>
            </>
        )
    }

}

export default Navbar