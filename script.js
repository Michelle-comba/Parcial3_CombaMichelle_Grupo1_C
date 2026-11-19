Ejemplo:
/* 
Michelle Dayanna Comba Jiménez
Grupo 1
Problema C: Pago de Impuesto al Instituto Colombiano Agropecuario (ICA)
*/

const TarifaKwh = 900
const ConsumoDeSubsistencia = 173 
const CargoFijoMensual = 6.000

const subsidio_Estrato1 = 50
const subsidio_Estrato2 = 40
const subsidio_Estrato3 = 15 

const contribución_Estrato4 = 50
const contribucion_Estrato5 = 60 

let Estrato = prompt("Ingrese su estrato (1-5):");
let Consumo = prompt("Ingrese su consumo de energía en kWh (>= 0):");

    switch (Estrato) {
        case "1":
            TarifaKwh = Estrato1;
            break;
        case "2":
            TarifaKwh = Estrato2;
            break;
        case "3":
            TarifaKwh = Estrato3;
            break;
        case "4":
            TarifaKwh = Estrato4;
            break;
        case "5":
            TarifaKwh = Estrato5;
            break;
        default:
            alert("Estrato no válido");
    }

if  (entradaEstrato === null)
    entradaEstrato.tring () === ""
    entradaConsumo === null
    entradaConsumo.tring () === ""
{
   alert ("Estrato no válido") 
   return; 
}

const consumo = Number (entradaConsumo);
const estrato = Number (entradaEstrato);




    
    
let ConsumoBasico = ConsumoDeSubsistencia * TarifaKwh;
let consumoExeso = Consumo - ConsumoDeSubsistencia;
let PagoTotal = (Consumo * TarifaKwh) + CargoFijoMensual;
let costoConsumo = ConsumoBasico + consumoExeso;








  

