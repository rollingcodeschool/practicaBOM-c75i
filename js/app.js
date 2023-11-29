//setTimeout

function saludar(){
    document.write('<p>Hola mundo 🗺️</p>');
    if(contador === 5){
        clearInterval(idSetInterval)
    }
    contador++;
}

// window.setTimeout( saludar, 5000);

// setTimeout(()=>{
//     document.write('<p>Hola mundo nuevo 🗺️</p>');
// }, 3000);

//setInterval
let contador = 1;
const idSetInterval = setInterval(saludar, 2000);
console.log(idSetInterval)

const fecha = new Date();
console.log(fecha)
console.log(fecha.getMonth())