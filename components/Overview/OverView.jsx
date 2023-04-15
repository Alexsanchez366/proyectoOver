import { Component}  from 'react'

export default  class OverView extends Component {

  constructor(props){
    super(props);
    this.state={
        name:'',
        edad:'',
        estatura:''
        
    }
}

handleName = (event) => {
  let aux= event.target.value.toLowerCase();
 console.log(aux.toLowerCase);
 this.setState({
      name: aux
 })

}

handleEdad = (event) => {
  let aux= event.target.value.toLowerCase();
 console.log(aux.toLowerCase);
 this.setState({
      edad: aux
 })

}

handleEstatura = (event) => {
  let aux= event.target.value.toLowerCase();
 console.log(aux.toLowerCase);
 this.setState({
      estatura: aux
 })

}

handleSubmit = (event) => {
  let name = this.state.name;
  let edad = this.state.edad;
  let estatura = this.state.estatura;
  console.log(name,edad,estatura);
event.preventDefault();
}




  render(){

    return(
<div>

<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
  placeholder="nombre"
  onChange={this.handleName}>
</input>    
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Edad</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
  placeholder="edad"
  onChange={this.handleEdad}>
    </input>
</div>

<div class="input-group input-group-lg">
  <span class="input-group-text" id="inputGroup-sizing-lg">Estatura</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
  placeholder="Altura"
  onChange={this.handleEstatura}>
    </input>
</div>

<div>
<button class="btn btn-primary" type="button" onClick={this.handleSubmit}>Button</button>
</div>

</div>


    )
  }
}

