# Desafío Inmobiliaria

| Numero requerimiento   | Puntos |
|------------------------|--------|
| Req 1                  | 1      |
| Req 2                  | 2      |
| Req 3                  | 0.5    |
| Req 4                  | 0      |
| Req 5                  | 2      |
| Req 6                  | 2      |
| Req 7                  | 1      |
| Req 8                  | 0.5    |
| Total                  | 9      |

**Total Puntos: 9**

## Requerimientos

Lista de requerimiento y sus respectivos puntos asignados

### 1. Implementar todos los elementos necesarios para aplicar las funcionalidad del desafío (1 punto)
* **R: Cumple con el requerimiento**

### 2. Crea un arreglo de propiedades que cumplan la siguiente estructura (2 puntos)**
    ```json
        {
            nombre: "Departamento",
            descripcion: "Desde las alturas todo se ve mejor",
            src: "...",
            cuartos: 3,
            metros: 200
        },
    ```
* **Nota:** El objeto declarado en `assets/js/index.js` no tiene los mismos nombre de las llaves, sin embargo el requerimiento solicita estructura, distinto sería que debe ser declarado de la misma forma que el ejemplo.
* **Nota 2:** Pudo ser más descriptivo en algunas llaves como en metros o meters, no tan solamente "m" (entiendo que es la unidad).
* **R: Cumple con el requerimiento**
### 3. Agrega el evento click al botón del buscador (0.5 puntos)
* **Nota:** Se agrega el evento `onclick` declarandolo en el index.html
* **R: Cumple con el requerimiento**
### 4. Agrupar la lógica en funciones reutilizables que sean ejecutadas en cada búsqueda (1 punto)
* **Nota:** Se ve la intención de reutilizar un `template` con `cargaInicial` pero realmente no hay reutilización de funciones.
* **Nota 2:** Sugiero creaar una funcion `template` que reciba un objeto `departamento` y complete el teplate, luego devuelve un `html` (string) el cual sera cargado en su respectivo innerHTML. El template solo genera HTML, no debe escribir dentro de la función.
* **R: No Cumple con el requerimiento**

### 5. Utiliza ciclos para recorrer el arreglo de propiedades (2 puntos)
* **R: Cumple con el requerimiento**

### 6. Utiliza la interpolación y el innerHTML para crear templates y agregar los templates de las propiedades durante el recorrido del arreglo (2 Puntos)
* **R: Cumple con el requerimiento**

### 7. Utiliza condicionales para evaluar si falta algún campo por llenar en el buscador (1 Punto)
* **R: Cumple con el requerimiento**

### 8. Actualiza el total de resultados en cada búsqueda generada con éxito (0.5 Punto)
* **Nota:** Se debe tener cuidado con la declaración de la variable `let total`, en cada ejecución se inicializa como `undefined`, podría ser más explicito dejando la declaración como `let total = 0` de esta forma asegura que el ultimo IF no será ejecutado y de igual forma, agregaría una equivalencia estricta `===` en el ultimo IF.
        * `if (total === 0) {`
* **R: Cumple con el requerimiento**
