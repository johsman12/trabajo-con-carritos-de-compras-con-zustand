import { useCarritoStore } from '../store/useCarritoStore'

export default function Encabezado() {
    const items = useCarritoStore((state) => state.items)
    const totalUnidades = items.reduce((suma, item) => suma + item.cantidad, 0)

    return (
        <header className="encabezado">
            <h1>Mi Tienda</h1>
            <span className="insignia">{totalUnidades}</span>
        </header>
    )
}