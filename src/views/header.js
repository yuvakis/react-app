import React, {Component} from 'react'
import {Link} from "react-router-dom"
class Header extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/aboutus">About us</Link></li>
                    <li><Link to="/info">Info</Link></li>
                </ul>
            </div>
        )
    }
}
export default Header;