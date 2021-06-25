import React from "react"
import Table from "./Table"
import "bootstrap/dist/css/bootstrap.min.css"
import contacts from "./contacts.json";
class Button extends React.Component{

   state = {
        count:0
    }

  handRandom=()=>{

this.setState({count:this.state.count+1})
let rand = Math.floor(Math.random()*contacts.length)

  }  

render(){

return(
<div>
<button type="button" onClick={this.handRandom} class="btn btn-light" value={this.state.count}>Add Random contact</button>
    <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Picture</th>
        <th scope="col">FirstName</th>
        <th scope="col">Popularity</th>
      </tr>
    </thead>
    <tbody>
      {contacts.slice(0, (5+this.state.count)).map((actor) => {
        return (
          <Table
            name={actor.name}
            pictureUrl={actor.pictureUrl}
            popularity={actor.popularity}
            id={actor.id}
          />
        );
      })}




    </tbody>
  </table>
  


</div>
)
}
}
export default Button