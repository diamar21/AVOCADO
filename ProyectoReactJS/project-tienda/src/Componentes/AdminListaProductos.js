import { Component } from "react";
import '../Estilos/Tabla.css';

var heading = ['Id Producto', 'Nombre Producto','Descripcion Producto', 'Valor Unitario','Stock'];

//var body = conexion a un BD NOsq o sql o un arcgivo plano

var body =
[
    ['PI-0001', 'God of War', 'Xbox series S','250000','20'],
    ['PI-0002', 'Mario Maker 2', 'Nintendo Switch','235000','10'],
    ['PI-0003', 'BloodBorne','PlayStation 5 ', '245000','5'],
    ['PI-0004', 'Pokémon legendas Arceus','Nintendo Switch ', '245000','15'],
    ['PI-0005', 'Halo Master Chief Collection ','Xbox one ', '195000','1'],
    ];

export function ListaProductosAdmin() {

    return (
        <>
            <h3>LISTA DE PRODUCTOS</h3>
            <br></br>
            <div >
                <Table heading={heading} body={body} />
            </div>
        </>
    );

}

class Table extends Component {
    render() {

       //Vector y formatearlos para que react los conozca y los trate coomo un map
       //Map Coleecion no lineal

        var heading = this.props.heading;
        var body = this.props.body;
        
        return (
            <div id="datagrid">
                <table>
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body.map(row => <TableRow row={row} />)}
                </tbody>
            </table>


            </div>
        );
    }
}

class TableRow extends Component {
    render() {
        var row = this.props.row;
        return (
            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
    }
}