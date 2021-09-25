import { Component } from "react";
import './styles.css'
export class Button extends Component{
    render(){
        const text = this.props.text;
        const clicar = this.props.clicar;
        const desabilitado = this.props.desabilitado;
        return(
            <button 
            disabled = {desabilitado}
            onClick = {clicar} 
            className='button'>
                {text}
            </button>
        )
    }
}