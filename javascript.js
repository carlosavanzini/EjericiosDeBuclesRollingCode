/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

*/

// let edad= parseInt(prompt('Cual es tu edad?'))

// if (edad>18) {
//     document.write('Ya puede conducir')
// }else{
//     document.write('La edad no es la permitida.. espere a cumplir 18 años')
// }

/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

*/

//     let nota = parseInt(prompt('Ingrese un numero entre 0 y 10'))

//    if (nota>=0 && nota <=2) {
//     document.write('Muy deficiente')
//    }else if (nota>=3 && nota <= 4) {
//     document.write('Insuficiente')
//    }else if (nota>=5 && nota <=6) {
//     document.write('Suficiente')
//    }else if (nota=== 7) {
//     document.write('Bien')
//    }else if (nota>=8 && nota <=9) {
//     document.write('Notable')
//    }else if (nota===10) {
//     document.write('Sobresaliente')
//    }else if(isNaN(nota)){
//         document.write('El numero no es valido')
//    }else {
//      document.write('el rango de numero tiene que ser de 0  a 10')
//    }

/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

*/

// // let array=[]
// let guion='-'

// while (confirm('Desea ingresar textos')) {
//     let cadena= prompt('Ingrese cadena de textos')
//     array.push(cadena)

// }
//  let arrayText=document.write(array.join(guion))
//  //document.write(arrayText)

/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

*/
// let array=[]
// let suma=0
// while (confirm('Quiere ingresar un numero?')) {
//     let numero= parseInt(prompt('Ingrese un numero'))
//     if (isNaN(numero)) {
//         alert('No es un numero')
//     }else{
//         array.push(numero)
//     }
// }
// array.forEach(element => {
//     suma+=element
// });
// alert(`La suma es igual a ${suma}`)

/*
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

*/

// do {
//   let dni = parseInt(prompt("Ingrese su dni"));
//   if (isNaN(dni)) {
//     alert("No ingreso un numero");
//   }  else if (dni >= 0 && dni <= 99999999) {
//         resto = dni % 23;
//     switch (resto) {
//       case 0:
//         letra = "T";
//         break;
//       case 1:
//         letra = "R";
//         break;
//       case 2:
//         letra = "W";
//         break;
//       case 3:
//         letra = "A";
//         break;
//       case 4:
//         letra = "G";
//         break;
//       case 5:
//         letra = "M";
//         break;
//       case 6:
//         letra = "Y";
//         break;
//       case 7:
//         letra = "F";
//         break;
//       case 8:
//         letra = "P";
//         break;
//       case 9:
//         letra = "D";
//         break;
//       case 10:
//         letra = "X";
//         break;
//       case 11:
//         letra = "B";
//         break;
//       case 12:
//         letra = "N";
//         break;
//       case 13:
//         letra = "J";
//         break;
//       case 14:
//         letra = "Z";
//         break;
//       case 15:
//         letra = "S";
//         break;
//       case 16:
//         letra = "Q";
//         break;
//       case 17:
//         letra = "V";
//         break;
//       case 18:
//         letra = "H";
//         break;
//       case 19:
//         letra = "L";
//         break;
//       case 20:
//         letra = "C";
//         break;
//       case 21:
//         letra = "K";
//         break;
//       case 22:
//         letra = "E";
//         break;
//       default:
//         alert("Numero erroneo");
//     }
//     alert(`su dni es igual a ${dni} y la letra que le corresponde es ${letra}`);
//   }else{
//     alert("El numero esta fuera de rango, recuerde que es desde 0 a 99999999 ");}

//   } while (confirm("Desea cargar otro dni?"));

/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….

*/

// let i, repeticion;
// for (i = 1; i <= 30; i++) {
//   for (repeticion = 0; repeticion < i; repeticion++) {
//     document.write(i);
//   }

//   document.write("<br>");
// }

/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

*/ 

let numero = parseInt(prompt('Ingrese un numero'))
let i, repeticion;
for (i = numero; i >= 1; i--) {
  for (repeticion =i; repeticion >= 1; repeticion--) {
    document.write(i);
  }

  document.write("<br>");
}