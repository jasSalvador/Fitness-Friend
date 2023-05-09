/* obtener una rutina de ejercicios segun el número de semanas y cantidad de días en que el usuario está disponible 
para entrenar. Se debe usar un generador para iterar los entrenamientos de cada día. Esta información se
visualizará a través de la consola. */

//evento click boton
document.getElementById("btnSubmit").addEventListener("click", (event) => {
    event.preventDefault();

    let semanasEjercicio = document.getElementById("semanasEjercicio").value;
    let diasSemanal = document.getElementById("diasSemanal").value;

    //console.log(semanasEjercicio, diasSemanal)
    let cliente = constructora(semanasEjercicio, diasSemanal);

    calculosIniciales(cliente.totalDias(), semanasEjercicio, diasSemanal).next();
});


class Cliente {
    constructor(semanas, dias) {
        this.semanas = semanas;
        this.dias = dias;
    }
    totalDias() {
        return (this.semanas * this.dias)
    }
}


//funcion constructora
function constructora(semanas, dias) {
    let cliente = new Cliente(semanas, dias)
    return cliente
}


//funcion generadora
function* calculosIniciales(totalDias, semanas, dias) {
    let arr = ['Correr', 'Sentadilla', 'Banco', 'Peso muerto', 'Prensa'];
    let eArr = arr[Symbol.iterator]();

    console.log(`Semanas: ${semanas}\nDias: ${dias}\n`)

    for (let index = 1; index <= totalDias; index++) {

        let iteracion = eArr.next();

        if (iteracion.done) {

            eArr = arr[Symbol.iterator]();
            iteracion = eArr.next();

            console.log(`Dia ${index}: ${iteracion.value}`);

        } else {

            console.log(`Dia ${index}: ${iteracion.value}`);
        }
    }
}



