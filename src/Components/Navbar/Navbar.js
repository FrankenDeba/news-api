import React from "react";
function Navbar(props){
    return (<div>
        <form onSubmit = {props.countryName}>
        Enter city name: <input type = "text"/>
    <button>Search</button>
    </form></div>)
}
export default Navbar;