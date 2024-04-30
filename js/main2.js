function detalles(){
  let resCont = document.querySelector('#resultado1');  
  resCont.innerHTML =`
  <div id="detalles">
  <img src="./images/detalles.jpg" alt="">

</div>
  `;
}



//menu izquierdo               MENU 1

function ejer1(){
  let resCont = document.querySelector('#resultado1');  
  resCont.innerHTML =`
  <div>
  <h1>1. Serie fibonacci</h1>
  <hr>
  <h2>¿Qué es la sucesión de Fibonacci?</h2>
  <div style="text-align: center;">
      <img src="./images/paisaje de una galaxia.jpg" alt="" width="50%" height="50%" >
  </div>
  <p>
      ¿Alguna vez escuchaste hablar acerca de la sucesión de Fibonacci? ¿Imaginas una ecuación capaz de explicar matemáticamente todo en el universo? ¿Crees que semejante cosa realmente sería posible?
  </p>
  <!--<p>Bueno, de las tantas sucesiones matemáticas que existen, ninguna es tan famosa, tan interesante y tan asombrosa como la que inventó Fibonacci. A lo largo de los años, hombres de ciencia, artistas de todo tipo y arquitectos, la han utilizado para trabajar, a veces a propósito y otras de forma inconsciente, pero siempre con resultados majestuosos. Te invito a conocer la historia detrás de todo este asunto y a que hoy aprendamos qué es la sucesión de Fibonacci.</p>-->
  <p>
      La sucesión de Fibonacci, en ocasiones también conocida como secuencia de Fibonacci o incorrectamente como serie de Fibonacci, es en sí una sucesión matemática infinita. Consta de una serie de números naturales que se suman de a 2, a partir de 0 y 1. Básicamente, la sucesión de Fibonacci se realiza sumando siempre los últimos 2 números (Todos los números presentes en la sucesión se llaman números de Fibonacci) de la siguiente manera:
  </p>
  <h4>0,1,1,2,3,5,8,13,21,34...</h4>
  <p>Fácil, ¿no? (0+1=1 / 1+1=2 / 1+2=3 / 2+3=5 / 3+5=8 / 5+8=13 / 8+13=21 / 13+21=34...) Así sucesivamente, hasta el infinito. Por regla, la sucesión de Fibonacci se escribe así: xn = xn-1 + xn-2.</p>
  <h2>¿Quieres generar la serie fibonaci?</h2>
  <button onclick="ej1()"> Pulsa aqui para generar la serie</button>
  </div>
  <div id="resultado">
       
  </div>
  `;
  //let resCont = document.querySelector('#resultado');
  //resCont.innerHTML += `<br>`;    

}
//function ejerci1(){
/* ejercicio 2*/ 

function ejer2(){
  let resCont = document.querySelector('#resultado1'); 
  resCont.innerHTML =`
  <div>
  <h1>2. Serie de numeros binarios </h1>
  <hr>
  <h2>¿Qué son los numeros binarios?</h2>
  <div style="text-align: center;">
      <img src="./images/binarios.jpg" alt="" width="50%" height="50%" >
  </div>
  <h2>Sistema de numeración binario.</h2>
  <p>
      El sistema de numeración binario utiliza sólo dos dígitos, el cero (0) y el uno (1).
      En una cifra binaria, cada dígito tiene distinto valor dependiendo de la posición que ocupe. El valor de cada posición es el de una potencia de base 2, elevada a un exponente igual a la posición del dígito menos uno. Se puede observar que, tal y como ocurría con el sistema decimal, la base de la potencia coincide con la cantidad de dígitos utilizados (2) para representar los números.</p>
  <p>
      De acuerdo con estas reglas, el número binario 1011 tiene un valor que se calcula así:</p>
  <h4 >1*2 <sup>3</sup>  + 0*2 <sup>2</sup> + 1*2 <sup>2</sup> + 1*2 <sup>0</sup> , es decir:</h4>
  <h4 >8 + 0 + 2 + 1 = 11</h4>
  <p>Lo que quiere decir que el numero 11 equivale a 1011 en binario </p>
  <h2>¿Quieres generar la serie de bianarios?</h2>
  <button onclick="ej2()"> Pulsa aqui para generar la serie de binarios </button>
  </div>
  <div id="resultado">
       
  </div>
  `;
  //let resCont = document.querySelector('#resultado');
  //resCont.innerHTML += ``;    

}

function ejer3(){
    let resCont = document.querySelector('#resultado1');  
  resCont.innerHTML =`
  <div>
  <h1>3. Factoriales.</h1>
  <hr>
  <h2>¿Qué es la función factorial?</h2>
      <div>
          <img src="./images/factorial.jpg" alt="" width="20%" height="20%" >
      </div>
  <h2>¿Qué es la función factorial?</h2>
      <p>La función factorial se representa con un signo de 
          exclamación “!” detrás de un número. Esta exclamación
          quiere decir que hay que multiplicar todos los números
          enteros positivos que hay entre ese número y el 1.</p>
      <h3>Por ejemplo:</h3>

  <div>
      <img src="./images/factoriales-1.webp" alt="ejemplo" width="40%" height="40%">
  </div>
      <p>A este número, 6! le llamamos generalmente “6 factorial”, aunque también es correcto decir “factorial de 6”.
      </p>
      <p>A continuacion pudes generar una sucesion de los numeros factoriales.</p>
  <button onclick="ej3()"> Pulsa aqui para generar la serie</button>
</div>

<div id="resultado">

</div>
  `;
}

//############################ 
function ejer4(){
    let resCont = document.querySelector('#resultado1');  
    resCont.innerHTML = `
    <div>
    <h1>4. Rortar digitos</h1>
    <hr>
    <h2>Diseñar un algoritmo para rotar a la derecha los dígitos pares de un número cualquiera
        que tenga una cantidad mayor o igual a 6 dígitos.</h2>
        <div>
            <img src="./images/4(pendiente).png" alt="" width="100%" height="100%" >
        </div>
        <h4>Pendiente... </h4>
        <h4>Lo siento en su lugar realize otro ejercicio</h4>
        <h1>4.2 Factor de conversion</h1>
        <br>
        <div id="detalles">
        <form action="" name="facto" method="post">
        <div class="table-res">
            <table border="1" cellspacing="0">
                <tr>
                    <td colspan="3" style="text-align: center;"><h2>Longitud</h2></td>
                    
                </tr>
                <tr>
                    <td>valor a introducir</td>
                    <td>Convertir</td>
                    <td>Resultado</td>
                </tr>
                <tr>
                    
                    <td><input type="number" name="l1">  pulgadas</td>
                    <td><input type="button" name="calculo" value="convertir" onclick="ml()" class="conver"></td>
                    <td><input type="text" name="resul1">milimetros</td>
                </tr>
                <tr>
                    <td><input type="number" name="l2" id="">  pies</td>
                    <td><input type="button" name="calculo" value="convertir" onclick="cm()" class="conver"></td>
                    <td><input type="text" name="resul2">centimetros</td>
                </tr>
                <tr>
                    <td colspan="3"  style="text-align: center;"><h2>Superficie</h2></td>
                </tr>
                <tr>
                    <td><input type="number" name="s1" id="">  pulgadas</td>
                    <td><input type="button" name="calculo" value="convertir" onclick="cm_cua()" class="conver"></td>
                    <td><input type="text" name="resul3">cm<sup>2</sup></td>
                </tr>
                <tr>
                    <td><input type="number" name="s2" id="">  pies</td>
                    <td><input type="button" name="calculo" value="convertir" onclick="met()" class="conver"></td>
                    <td><input type="text" name="resul4">m<sup>2</sup></td>
                </tr>
            </table>
        </div>
        
    </form>
      </div>
    </div>
    <div id="resultado">
        
    </div>
      <h3>Para limpiar la tabla de conversion solo presiona el boton "Limpiar tabla de conversión"</h3>
      `;
      //resCont.innerHTML += `<br>`

resCont.innerHTML +=`<button onclick="ejer4()"> Limpiar tabla de conversion</button>`
}

//#######################
function ejer5(){
    let resCont = document.querySelector('#resultado1');  
    resCont.innerHTML = `
    <div>
      <h1>5. Digitos repetidos</h1>
      <hr>
      <br>
          <div>
              <img src="./images/exsoplaneta.png" alt="" width="50%" height="50%" >
          </div>
      <h2>Dado un número x>100 mostrar los dígitos repetidos.</h2>
      <p>En en esta seccion se creo un algoritmo que muestra los digitos repetidos de un numero que introduscas</p>
      <p>El funcionamiento es simple, solo debes presionar en el boton que dice"calcular digitos rep." y aconticuacion te pedira que ingreses un nuemero... </p>
      <p>Si introduces un valor que no es un numero te mostrara un mensaje donde te pedira que ingreses un valor numerico entero y positivo etc. (lo notaras al probarlo)</p>
      <h4> Para iniciar el programa pulsa el boton </h4>
      <button onclick="ej5()">Calcular digitos rep.</button>
    </div>
    <div id="resultado">
        
    </div>
      
      `;
}
//#################
function ejer6(){
    let resCont = document.querySelector('#resultado1');  
    resCont.innerHTML = `
    <div>
      <h1>6. Numero capicua</h1>
      <hr>
      <h2>¿Qué es un número capicúa?</h2>
          <div>
              <img src="./images/Capicuas-01.jpg" alt="" width="32%" height="32%" >
          </div>
      <p>La palabra capicúa se origina del catalán: cap i cua que significa cabeza y cola, y se aplica exclusivamente a las cifras numéricas que se leen igual en ambos sentidos.</p>
      <p>A estas cifras se les llama también números palíndromos, aunque “palíndromo” se usa mayormente en referencia a palabras o frases que se leen igual al derecho y al revés.</p>
      <h4> Para Verificar si un numero es capicua solo debes precionar el  boton</h4>
      <h2>Dado un número entero positivo x, se desea saber si es capicúa.</h2>
      
      <button onclick="ej6()">Verificar si es capicua</button>
    </div>
    <div id="resultado">
        
    </div>  
      
      `;
}

//#########################
function ejer7(){
    let resCont = document.querySelector('#resultado1');  
    resCont.innerHTML = `
    <div>
        <h1>7. Numero primo</h1>
        <hr>
        <h2>¿Qué es un número primo?</h2>
            <div style="text-align: center;">
                <img src="./images/primo.png" alt="" width="32%" height="32%" >
            </div>
            
                <p>En matemáticas, un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1.​​ Por el contrario, los números compuestos son los números naturales que tienen algún divisor natural aparte de sí mismos y del 1, y, por lo tanto, pueden factorizarse.</p>
                <p>El número 1 no es un primo, ya que solo tiene un divisor.</p>
                <p>Así los números primos más pequeños son:</p>
                <p>2, 3, 5, 7, ...</p>

        <div style="border-style: groove;">
            <h3>Ejemplo:</h3>
            <p>43 es primo, ya que sus únicos divisores son 1 y 43. </p>
            <p>44 es compuesto, ya que tiene al 1, 2, 4, 11, 22, y 44 como divisores.</p>
        </div>
        
        <h4> Para Verificar si un numero es primo solo debes precionar el  boton</h4>
        <h2>Verificar si un número introducido por teclado es primo</h2>
        
        <button onclick="ej7()">Verificar si es primo</button>
    </div>
    <div id="resultado">
        
    </div>
      
      `;
}
//#####################
function ejer8(){
    let resCont = document.querySelector('#resultado1');  
    resCont.innerHTML = `
    <div>
        <h1>8. Serie de numeros primos</h1>
        <hr>
        <h2>¿Qué es un número primo?</h2>
            <div style="text-align: center;">
                <img src="./images/serie primos.jpg" alt="" width="32%" height="32%" >
            </div>
            
                <p>En matemáticas, un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1.​​ Por el contrario, los números compuestos son los números naturales que tienen algún divisor natural aparte de sí mismos y del 1, y, por lo tanto, pueden factorizarse.</p>
                <p>El número 1 no es un primo, ya que solo tiene un divisor.</p>
                <p>Así los números primos más pequeños son:</p>
                <p>2, 3, 5, 7, ...</p>

        <div style="border-style: groove;">
            <h3>Ejemplo:</h3>
            <p>43 es primo, ya que sus únicos divisores son 1 y 43. </p>
            <p>44 es compuesto, ya que tiene al 1, 2, 4, 11, 22, y 44 como divisores.</p>
        </div>
        
        <h4> Para generar los numeros primos solo debes precionar el  boton</h4>
        <h2>Generar los números primos para n</h2>
        
        <button onclick="ej8()">Generar primos</button>
    </div>
    <div id="resultado">
        
    </div>
      
      `;
}
//MENU DERECHO                MENU 2
function ejer9(){
    let resCont = document.querySelector('#resultado1');  
    resCont.innerHTML = `
    <div>
    <h1>9. Vector Fibonacci</h1>
    <hr>
    <br>
        <div style="text-align: center;">
                <img src="./images/fibonaci_array.jpg" alt="" width="40%" height="40%" >
            </div>
            
            <p>
                ¿Alguna vez escuchaste hablar acerca de la sucesión de Fibonacci? ¿Imaginas una ecuación capaz de explicar matemáticamente todo en el universo? ¿Crees que semejante cosa realmente sería posible?
            </p>
            <!--<p>Bueno, de las tantas sucesiones matemáticas que existen, ninguna es tan famosa, tan interesante y tan asombrosa como la que inventó Fibonacci. A lo largo de los años, hombres de ciencia, artistas de todo tipo y arquitectos, la han utilizado para trabajar, a veces a propósito y otras de forma inconsciente, pero siempre con resultados majestuosos. Te invito a conocer la historia detrás de todo este asunto y a que hoy aprendamos qué es la sucesión de Fibonacci.</p>-->
            <p>
                La sucesión de Fibonacci, en ocasiones también conocida como secuencia de Fibonacci o incorrectamente como serie de Fibonacci, es en sí una sucesión matemática infinita. Consta de una serie de números naturales que se suman de a 2, a partir de 0 y 1. Básicamente, la sucesión de Fibonacci se realiza sumando siempre los últimos 2 números (Todos los números presentes en la sucesión se llaman números de Fibonacci) de la siguiente manera:
            </p>
            <h4>0,1,1,2,3,5,8,13,21,34...</h4>
            <p>Fácil, ¿no? (0+1=1 / 1+1=2 / 1+2=3 / 2+3=5 / 3+5=8 / 5+8=13 / 8+13=21 / 13+21=34...) Así sucesivamente, hasta el infinito. Por regla, la sucesión de Fibonacci se escribe así: xn = xn-1 + xn-2.</p>
            
        <h4> Para generar el vector fibonacci solo debes precionar el  boton</h4>
        <h2>Vector Fibonacci, generar la serie de fibonacci hasta un N introducido por teclado</h2>
        
        <button onclick="ej9()">Generar vector fibonacci</button>
    </div>
    <div id="resultado">
        
    </div>
      
      `;
}
//############################
function ejer10(){
    let resCont = document.querySelector('#resultado1');  
    resCont.innerHTML = `
    <div>
        <h1>10. Serie exponencial o Serie de Taylor</h1>
        <hr>
        <br>
        <div style="text-align: center;">
                <img src="./images/Taylor.png" alt="" width="40%" height="40%" >
            </div>
            
            <p>
                En matemáticas, una serie de Taylor es una aproximación
                de funciones mediante una serie de potencias o suma de potencias enteras de polinomios como (x-a)<sup>n</sup> 
                llamados términos de la serie, dicha suma se calcula a partir de 
                las derivadas de la función para un determinado valor o punto 
                cero <strong>a</strong> suficientemente derivable sobre la 
                función y un entorno sobre el cual converja la serie. 
                A la serie centrada sobre el punto cero,<strong>a = 0</strong> , 
                se le denomina también serie de Maclaurin. 
            </p>
            <p>
                PERO PARA QUE ENTIENDAS, AQUI TE MUESTRO UNA IMAGEN QUE TE DARA UNA IDEA DE COMO FUNCIONA ESTA SERIE :)
            </p>
            <p>DONDE <strong>x</strong> PUEDE SER EL NUMERO QUE TU QUIERAS</p>
            <div style="text-align: center;"><img src="./images/serie_exponencial.png" alt="" width="80%" height="80%"></div>
        <h4> Para generar la serie exponencial solo debes precionar el  boton</h4>
        <h2>Generar la serie exponencial</h2>
        
        <button onclick="ej10()">Generar serie Exponencial</button>
    </div>
    <div id="resultado">
        
    </div>
      
      `;
}
//##########################
function ejer11(){
    let resCont = document.querySelector('#resultado1');  
    resCont.innerHTML = `
    <div>
    <h1>11. Palabra Palindrome</h1>
    <div style="text-align: center;">
        <img src="./images/palindromo.jpg" alt="">
    </div>
    <p>
        Un palíndromo, también llamado palíndromo, palíndroma o palindroma, 
        es una palabra o frase que se lee igual en un sentido que en otro.
         Si se trata de números en lugar de letras, se llama capicúa. 
         Habitualmente, las frases palindrómicas se resienten en su significado 
         cuanto más largas son.
    </p>
    <h4>Para verificar si una palabra es Palindrome solo pulsa el botón "Ver si una plabra es Palindrome"</h4>
    <div style="text-align: center;">
        <button onclick="ej11()">Ver si una plabra es Palindrome</button>
    </div>
    </div>
    <div id="resultado">
        
    </div>
      
      `;
}
//#################
function ejer12(){
    let resCont = document.querySelector('#resultado1');  
    resCont.innerHTML = `
    <div>
        <h1>12. Invertir una cadena de Caracteres</h1>
        <hr>
        <br>
        <div><img src="./images/fondo del un planeta.png" alt="" width="50%" height="50%"></div>
            <p>
                En esta secicion se creo un algorirtmo que
                invertira la palabra o lo que sea que ingreses 
                lo terminara invertiendo.
            </p>
            <h3>Ejemplo:</h3>
            <p>
                hola = aloh <br>
                casa = asac <br>
                123 = 321 <br>
                etc.
            </p>
        <h4> Para invertir lo que deseas solo debes precionar el  boton</h4>
        <h2>Invertir una cadena de caracteres</h2>
        
        <button onclick="ej12()">Invertir cadena</button>
    </div>
    <div id="resultado">
        
    </div>
      
      `;
}
//#####################################
/*function ejer13(){
    let resCont = document.querySelector('#resultado1');  
    resCont.innerHTML = `
    <div>
        
    </div>
    <div id="resultado">
        
    </div>
      
      `;
}*/
//##########################################
function ejer14(){
    let resCont = document.querySelector('#resultado1');  
    resCont.innerHTML = `
    <div>
        <h1>14. Convertir un número entero a números romanos</h1>
        <hr>
        <br>
        <div><img src="./images/fondo.jpg" alt="" width="50%" height="50%"></div>
            <p>
                En esta secicion se creo un algorirtmo que
                que convertira un numero entero a numeros romanos 
            </p>
            <div style="padding-left: 10px;">
                <h3>Ejemplo:</h3>
                <p>
                    10 = X <br>
                    100 = C <br>
                    15 = XV <br>
                    etc.
                </p>
            </div>

        <h4> Para convertir el numero que  deseas solo debes precionar el  boton</h4>
        <h2>Convertir un número entero a números romanos</h2>
        
        <button onclick="ej14()">Convertir a romanos</button>
    </div>
    <div id="resultado">
        
    </div>
      
      `;
}
//########################3
function ejer15(){
    let resCont = document.querySelector('#resultado1');  
    resCont.innerHTML = `
    <div>
        <h1>15. Matriz de Pascal</h1>
        <hr>
        <br>
        <div style="text-align: center;"><img src="./images/pascal_matrix.png" alt="" width="50%" height="50%"></div>
            <p>
                En matemáticas, particularmente la teoría de matrices 
                y la combinatoria, la matriz de Pascal es una matriz 
                infinita que contiene 
                los coeficientes binomiales como sus elementos. 
            </p>
        <div style="text-align: center;"><img src="./images/pascal_triangulo.jpg" alt="" width="50%" height="50%"></div>

        <h4> Para generar la matriz solo debes precionar el boton</h4>
        <h2>Generar la Mitriz de pascal</h2>
        
        <button onclick="ej15()">Generar la matríz de pascal</button>
    </div>
    <div id="resultado">
        
    </div>
      
      `;
}
//#############################
//menu horizontal
