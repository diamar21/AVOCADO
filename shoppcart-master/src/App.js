
import './App.css';
import {Component} from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'
import Producto from './components/Producto';



class App extends Component {
  state = {
      productos: [
      {name:'God Of War',price:'250000', img:'/productos/god.jpg'},
      {name:'Mario Kart 8 Deluxe',price:'230000', img:'/productos/mariokart8deluxe.jpg'},
      {name:'Stray',price:'255000', img:'/productos/Stray.jpg'},
    ],

    carro : [
      //{name:'God Of War',price:'250000', img:'/productos/god.jpg',cantidad: 1}
    ],

    esCarroVisible:false
   
  }


  agregarAlCarro = (producto)=>{
      //console.log(producto)

      const {carro} =this.state
      if(carro.find(x=> x.name === producto.name)){
        const newCart = carro.map(
          x=> x.name ===producto.name?({...x,cantidad: x.cantidad + 1}):x
        )

        return this.setState({carro:newCart})
      }

      return this.setState(
        {
          carro: this.state.carro.concat(
            {
              ...producto,
              cantidad:1
            }
          )
        }
      )
  }

  mostrarCarro = ()=>{
    if (!this.state.carro.length){
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible} )
  }

  render(){
    //console.log(this.state.carro)
    const {esCarroVisible} = this.state
      return(
        <div>
          <Navbar carro = {this.state.carro} 
                  esCarroVisible={esCarroVisible} 
                  mostrarCarro={this.mostrarCarro}/>        
          <Layout>
            <Title />
            <Productos
              agregarAlCarro={this.agregarAlCarro}
              productos = {this.state.productos}
            />
          </Layout>
          
        </div>
      )
    }
  }


export default App;
