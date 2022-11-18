import React, { Component } from 'react'
import axios from 'axios'


export default class CreateProducto extends Component {
    state={
        productos:[],
        name:'',
        _precio:'',
        _descripcion:'',
        cantidad:''
    }
    async componentDidMount(){
        this.getProductos();
    }
    getProductos = async () => {
        const rest = await axios.get("http://localhost:3000/productos")
        this.setState({productos: rest.data});
    }
    onChangeName = (e) =>{
        this.setState({name:e.target.value});
    }
    onChangePrecio = (e) =>{
        this.setState({_precio:e.target.value});
    }
    onChangeDescripcion = (e) =>{
        this.setState({_descripcion:e.target.value});
    }
    onChangeCantidad = (e) =>{
        this.setState({cantidad:e.target.value});
    }
    onClean=()=>{
        this.setState(
            {name:'',
            _precio:'',
            _descripcion:'',
            cantidad:''
        

        }
        )
    }
    onSubmit=async (e) =>{
        e.preventDefault();
        await axios.post('http://localhost:3000/productos',{
            name:this.state.name,
            precio:this.state._precio,
            descripcion:this.state._descripcion,
            cantidadStock:this.state.cantidad
        });
        this.getProductos();
        this.onClean();
        
    }
    deleteProducto=async (id)=>{
        await axios.delete('http://localhost:3000/productos/'+id)
        this.getProductos();
    }
    render() {
        return (
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card card-body'>
                        <h3>Crear Nuevo Producto</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <h6>Nombre:</h6>
                                <input type="text" className="form control" value={this.state.name} onChange={this.onChangeName}></input>
                                <h6>Precio:</h6>
                                <input type="text" className="form control" value={this.state._precio} onChange={this.onChangePrecio}></input>
                                <h6>Descripcion:</h6>
                                <input type="text" className="form control" value={this.state._descripcion} onChange={this.onChangeDescripcion}></input>
                                <h6>Cantidad:</h6>
                                <input type="text" className="form control" value={this.state.cantidad} onChange={this.onChangeCantidad}></input>
                            </div>
                            <div className="container p-4">
                                <button type ="submit" className="btn btn-primary">Guardar</button>

                            </div>

                        </form>

                    </div>

                </div>

                <div className='col-md-7'>
                    <ul className='list-group'>
                        {
                           this.state.productos.map(producto=>(
                            <li 
                                className="list-group-item list.group-item-action"
                                key={producto.id}
                                onDoubleClick={()=>this.deleteProducto(producto.id)}
                                >
                                {producto.name}
                                <br></br>
                                {producto.descripcion}
                            </li>
                           )
                           ) 
                        }

                    </ul>
                </div>
            </div>
        )
    }
}
            

