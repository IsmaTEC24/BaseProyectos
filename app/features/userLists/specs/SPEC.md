# userLists

## Intent
Permitir agregar y administrar una lista local de usuarios desde la UI.

## In scope
- Renderizar un titulo de la tarea `userLists`.
- Renderizar un label y un input para capturar nombre de usuario.
- Agregar nombres a la lista al presionar el boton de agregar.
- Renderizar la lista de usuarios agregados.
- Permitir eliminar cada usuario de forma individual.

## Out of scope
- Persistencia en backend o localStorage.
- Validaciones de negocio avanzadas.
- Integracion con Redux.

## Requirements
- El input no debe agregar valores vacios o solo espacios.
- El input debe limpiarse despues de agregar un usuario valido.
- El boton de agregar debe estar deshabilitado cuando el input este vacio.
- Cada item de la lista debe tener su boton de eliminar.

## Edge cases & errors
- Si la lista esta vacia, mostrar un mensaje de estado vacio.
- Si el usuario intenta agregar solo espacios, no crear item.

## Constraints
- Reusar componentes compartidos de `app/components`.
- Mantener logica en un ViewModel (`useUserListsViewModel`).
- Evitar strings hardcoded, usando constantes compartidas.

## Acceptance criteria
- [ ] Se muestra titulo, label e input de captura.
- [ ] Al agregar un nombre valido, aparece en la lista.
- [ ] Cada fila permite eliminar su usuario.
- [ ] Cuando no hay usuarios, se muestra estado vacio.