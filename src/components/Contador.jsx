import React from 'react';

class Contador extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0,
            saludo: "Hola, estamos haciendo un contador"
        }
    }

    handleClick =() => {
        this.setState({counter: this.state.counter + 1})
    }

    componentDidMount(){
        console.log("El componente de clase se montó")
    }

    componentDidUpdate(){
        console.log("El componente de clase se actualizó")
    }

    componentWillUnmount(){
        console.log("El componente de clase se desmontó")
    }

    render(){
        return(
            <div>
                <h1>Contador con componente de clase</h1>
                <p>{this.state.saludo}</p>
                <h2>{this.state.counter}</h2>
                <button onClick={this.handleClick}>Aumentar</button>
            </div>
        )
    }
}

export default Contador;
