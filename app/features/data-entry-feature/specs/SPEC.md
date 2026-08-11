# Data Entry Feature

## Intent
Permitir que la persona usuaria capture datos en un input y vea una lista editable de los valores agregados.

## In scope
- Mostrar un titulo principal.
- Mostrar un campo con label e input.
- Agregar un dato a una lista visible.
- Eliminar datos individuales ya agregados.

## Out of scope
- Persistencia remota o local.
- Edicion de elementos existentes.
- Validaciones complejas mas alla de evitar valores vacios.

## Requirements
- La feature debe renderizar un titulo visible.
- Debe existir un label asociado al input.
- Al presionar agregar, el valor actual se incorpora a la lista.
- Despues de agregar un valor, el input se limpia.
- La lista debe reflejar todos los datos agregados.
- Cada item debe ofrecer una accion para eliminarlo.

## Edge cases & errors
- No agregar elementos vacios o con solo espacios.
- Cuando no existan elementos, mostrar un estado vacio.

## Constraints
- Reutilizar componentes base existentes para boton, tipografia, campo y lista.
- Separar logica en un ViewModel.
- Centralizar los textos en app/constants.

## Acceptance criteria
- [ ] Se muestra un titulo, un label y un input.
- [ ] Se pueden agregar multiples datos a una lista.
- [ ] Se puede eliminar cualquier dato agregado.
- [ ] El input no agrega valores vacios.