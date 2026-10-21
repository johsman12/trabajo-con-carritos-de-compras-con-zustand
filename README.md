1. ¿Por que Encabezado se actualiza cuando agregas un producto, si no recibe ninguna prop?

Porque el componente Encabezado se suscribe directamente al estado global utilizando el hook de Zustand (useCarritoStore). Cada vez que el estado cambia, Zustand notifica automáticamente al componente para que se vuelva a renderizar con la nueva información sin necesidad de recibir props.

2. ¿Que tendrias que hacer para lograr lo mismo usando solo useState en App?

Tendria que declarar el estado del carrito en el componente principal App y pasarlo manualmente paso a paso mediante props (prop drilling) a traves de todos los componentes hijos, ademas de enviarles tambien las funciones para modificar dicho estado.

3. ¿Para que sirve el selector (state) => state.items al usar el hook?

Sirve para seleccionar y extraer unicamente la porcion de datos que mi componente necesita (en este caso, los items). Esto optimiza el rendimiento porque evita que el componente se renderice de forma innecesaria cuando cambian otras partes del store que no le interesan.

4. ¿Por que en el store se crean arreglos nuevos con map y filter en lugar de modificar items directamente?

Porque React y Zustand requieren inmutabilidad para detectar que el estado ha cambiado. Si modificara el arreglo original directamente (por ejemplo, con push), React no percibiría el cambio y la interfaz grafica no se actualizaria.

5. ¿Zustand es parte de React? Explica la diferencia entre una libreria propia de React y una del ecosistema.

No, Zustand no viene integrado en React, sino que es una libreria externa creada por la comunidad. Las herramientas propias de React vienen de base con la libreria (como useState), mientras que las del ecosistema son soluciones independientes que se deben instalar por separado para ampliar las capacidades del proyecto
