function Calculadora() {
    alert("Bienvenido a la calculadora de Javascript!");
  
    while (true) {
      let opciones;
      while (true) {
        opciones = parseInt(prompt("Que Calculo desea hacer?\n 0 : Salir \n 1 : Suma \n 2: Resta \n 3: Multiplicación \n 4: División"));
        if (opciones >= 0 && opciones <= 4) {
          break;
        } else {
          alert("Opción inválida. Por favor, ingrese un número entre 0 y 4.");
        }
      }
  
      if (opciones === 0) {
        alert("Gracias por usar la calculadora. ¡Hasta luego!");
        return;
      }
  
      let num1;
      while (true) {
        num1 = parseInt(prompt("Ingrese su primer número"));
        if (!isNaN(num1)) {
          break;
        } else {
          alert("Ingrese un número válido.");
        }
      }
  
      let num2;
      while (true) {
        num2 = parseInt(prompt("Ingrese su segundo número"));
        if (!isNaN(num2)) {
          break;
        } else {
          alert("Ingrese un número válido.");
        }
      }
  
      switch (opciones) {
        case 1:
          alert("La suma de sus números es: " + (num1 + num2));
          break;
        case 2:
          alert("La resta de sus números es: " + (num1 - num2));
          break;
        case 3:
          alert("La multiplicación de sus números es: " + (num1 * num2));
          break;
        case 4:
          if (num2 !== 0) {
            alert("La División entre sus números es: " + (num1 / num2));
          } else {
            alert("No se puede dividir entre cero.");
          }
          break;
      }
    }
  }

Calculadora();