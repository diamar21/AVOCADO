import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles ={
    cart : {
        backgroundColor:'#359A2C',
        color:'#fff',
        border:'none',
        padding:'15px',
        borderRadius:'15px',
        cursor:'pointer'
    },

    buble:{
        position:'relative',
        left:'12px',
        top:"20px"
    }
}

class Carro extends Component{
    render(){
        const {carro,esCarroVisible,mostrarCarro} = this.props
        const cantidad = carro.reduce((acc,el)=>acc + el.cantidad,0)
        return(
            <div>
            
            <span style={styles.buble}>
                {
                    cantidad!=0
                    ?<BubbleAlert value ={cantidad}/>
                    :null
                }
            </span>
            <button style={styles.cart} onClick={mostrarCarro}>
                    This is my car
            </button>
            {esCarroVisible?  <DetallesCarro carro = {carro}/> : null}
           
            </div>
        )
        
    }
}

export default Carro