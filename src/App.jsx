import Encabezado from './components/Encabezado'
import ListaProductos from './components/ListaProductos'
import Carrito from './components/Carrito'

export default function App() {
    return (
        <div className="app">
            <Encabezado />
            <main className="contenido">
                <ListaProductos />
                <Carrito />
            </main>
        </div>
    )
}