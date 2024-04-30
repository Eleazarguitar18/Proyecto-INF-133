/*############## Ejer 1 #######################*/

function ej1(){
  let resCont = document.querySelector('#resultado')    
  resCont.innerHTML = `<h1>Serie fibonaci</h1> <br>`;
  //resCont.innerHTML += `<input > <br>`;
  let n = parseInt(prompt("Serie fibonaci\n ¿cuantos numero desea generar de la serie?"))
  if (n==undefined){
    resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
    resCont.innerHTML += `<br>`
    resCont.innerHTML += `<h4> Si quieres volver a generar una nueva serie presiona el boton "volver intentar"</h4>`
  
  }else if(isNaN(n)) {
      resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
      resCont.innerHTML += `<br>`
      resCont.innerHTML += `<h4> Si quieres volver a generar una nueva serie presiona el boton "volver intentar"</h4>`
    
  }else{
      if(n ==""){
          resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
          resCont.innerHTML += `<br>`
          resCont.innerHTML += `<h4> Si quieres volver a generar una nueva serie presiona el boton "volintentar"</h4>`
        

      }else{
          let a = 1;
          let b = 0;
          //let serie = 0;
          let contador = 0;
          while(contador != n){
              let serie = a + b;
              resCont.innerHTML += `<font size="6">${serie}</font>`+", ";
              console.log(serie);
              a = b;
              b = serie;
              contador = contador + 1;
          }
      }

  }
  resCont.innerHTML += `<br>`
  //resCont.innerHTML += `<h4> Si quieres volver a generar una nueva serie "volver a generar la serie"</h4>`

resCont.innerHTML +=`<button onclick="ej1()"> volver a intentar</button>` 

}
/*############## Ejer 2 #######################*/

/*#########*/
function conversor(n){
  var x = 2;
  var cociente = parseInt(n/x);
  var restoauxi =  n%x;
  var recive = "";
  while(cociente>=x){
      var restos = cociente%x;
      var res = restos.toString();
      recive = res + recive;
      cociente = parseInt(cociente/x)
  }
  var coci = cociente.toString();
  res = restoauxi.toString();
  var num = coci+recive+res;
  return num;
}

function ej2(){
  let resCont = document.querySelector('#resultado')    

resCont.innerHTML = `<h1>Serie de numeros binarios</h1> <br>`;

let n = prompt("Serie de numeros binarios\nIngrese cuantos terminos desea generar:")
if (n==undefined){
  resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
  resCont.innerHTML += `<br>`
  resCont.innerHTML += `<h4> Si quieres volver a generar una nueva serie de binarios pulsa el boton "volver a generar la serie"</h4>`

}else if(isNaN(n)) {
  resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
  resCont.innerHTML += `<br>`
  resCont.innerHTML += `<h4> Si quieres volver a generar una nueva serie de binarios pulsa el boton "volver a generar la serie"</h4>`

}else{
  if(n == ""){
  resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
  resCont.innerHTML += `<br>`
  resCont.innerHTML += `<h4> Si quieres volver a generar una nueva serie de binarios pulsa el boton "volver a generar la serie"</h4>`

  }else{
      for (let i = 0; i < n; i++) {
        
          resCont.innerHTML += conversor(i) + ",  ";
          //resCont.innerHTML += `<h3> serie normal</h3>`
          //resCont.innerHTML += i + ", ";
          }
          resCont.innerHTML += `<p> la serie con numeros naturales seria algo asi:</p>`
          resCont.innerHTML += `<p>1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 . . . N </p>`
        
          resCont.innerHTML += `<br>`
          resCont.innerHTML += `<h4> Si quieres volver a generar una nueva serie de binarios pulsa el boton "volver a generar la serie"</h4>`
          
  }
  
  }
  
  resCont.innerHTML +=`<button onclick="ej2()"> volver a generar la serie</button>` 
}
/*############## Ejer 3 #######################*/

/*#####################################*/
function factorial(n){
  var x = 1;
  var fac = 1;
  while(x<=n){
      fac=fac*x;
      x = x+1;

  }
  return fac
}
function ej3(){
  let resCont = document.querySelector('#resultado')    

resCont.innerHTML =`<h1>Suma de la serie de factorilales </h1><br>`;

var n = prompt("Sumatoria de la serie de fatoriales hasta N\n¿Cuantos numero desea generar de la serie?");
if (n==undefined){
  resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
}else if(isNaN(n)) {
  resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
}else if(n == ""){
  resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
}else{
  var a = parseInt(n);
  var auxi = a + 1;
  var sumas = 0;
  for (let i = 1; i < auxi; i++) {
      sumas += factorial(i);
      resCont.innerHTML += factorial(i) + ",  ";
  }
  resCont.innerHTML +=`<h2>Se genero la serie </h2><br>`;
  resCont.innerHTML +=`<h2>la suma es</h2>`+ sumas;
  }
  resCont.innerHTML += `<br>`

resCont.innerHTML +=`<button onclick="ej3()"> volver a intentar</button>` 
}
/*############## Ejer 4 #######################*/
/// Esta en main2

/*############## Ejer 5 #######################*/

/*#####################################*/
function calculadigfrec(cadena, di){
  //var cad = cadena.toUpper()
  var cad =cadena.toString();
  var dig = di.toString();
  var contador = 0;
  for (let i = 0; i < cad.length; i++) {
      var a = cad.charAt(i);
      if(a == dig){
          //console.log("igual",a)
          contador = contador+1;
      }
      //resCont.innerHTML += a+`<br>`;
      //console.log(a)
  }
  return contador;
}
function ej5() {
let resCont = document.querySelector('#resultado');   
resCont.innerHTML =`<h1>Econtrar los digitos repetidos de un numero </h1><br>`;

var n = prompt("Econtrar los digitos repetidos de un numero\nIngrese el numero:");
//var n = parseInt(num);
if (n==undefined){
  resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
}else if(isNaN(n)) {
  resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo <h4>(vuelve a intentarlo)</h4>)</h2> ";
}else{
  if(n ==""){
      resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo <h4>(vuelve a intentarlo)</h4></h2> ";

  }else{

  if (n>100){
      var cad = n.toString()
      for (let i = 0; i < cad.length; i++) {
         var f = cad.charAt(i);
         var aux = calculadigfrec(cad,f);
      
         if(aux>1){
             resCont.innerHTML += `<h3> el digito ${f} se repite ${aux} veces </h3>`;
         }
      
      }
  }else{
      resCont.innerHTML +=`<h3>El numero debe ser mayor a 100(x>100)</h3>` ;

    }
  }
}
resCont.innerHTML += `<br>`
resCont.innerHTML += `<br>`
resCont.innerHTML += `<br>`

resCont.innerHTML +=`<button onclick="ej5()"> volver a intentar</button>` 
}

/*############## Ejer 6 #######################*/
/*#####################################*/

function ej6(){
  let resCont = document.querySelector('#resultado')    
  resCont.innerHTML = `<h1>Verificar si el numero es capicua</h1> <br>`;
  var n = prompt("Verificar si el numero es capicua\nIngresa un numero:") ;
  if (n==undefined){
    resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
  }else if(isNaN(n)) {
      resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo <h4>(vuelve a intentar   )</h4>)</h2> ";
    }else{
      if(n ==""){
          resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo <h4>(vuelve a intentar   )</h4></h2> ";
      }else{
        if(n>9){
          var num = n.toString();
          var c = '';
          for (let i = 0; i < num.length; i++) {
            var char = num.charAt(i);
            c = char+c
          }
          if(c.toLowerCase() == num.toLowerCase()){
            console.log("es capicua");
            resCont.innerHTML += `<div>
            <h3>${n} Es capicua </h3>
            </div>
            `;
            
          }else{
            console.log("no es capicua");
            resCont.innerHTML += `<div>
              <h3>${n} No es capicua </h3>
            </div>`;
          
          }
        }else{
          resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo mayor a '9'<h4>(vuelve a intentar   )</h4></h2> ";

        }

    
      }
    }
    resCont.innerHTML += `<br>`
    resCont.innerHTML += `<br>`
    resCont.innerHTML += `<br>`
    
    resCont.innerHTML +=`<button onclick="ej6()"> volver a intentar</button>` 
    
}
/*############## Ejer 7 #######################*/

/*verificar si el numero es primo EJER 7 */
function ej7(){
  let resCont = document.querySelector('#resultado')    
resCont.innerHTML = `<h1>Verificar si un numero es primo</h1> <br>`;
//resCont.innerHTML += `<input > <br>`;
let n = prompt("Verificar si un numero es primo\nIngrese el numero");
if (n==undefined){
  resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
}else if(isNaN(n)) {
    resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
}else{
    if(n ==""){
        resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";

    }else{
      if(n>1){
        var contador = 0;
        for (let i = 2; i < n; i++) {
          if (n%i==0){
            contador +=1
          }
        }
        if (contador == 0){
        resCont.innerHTML += `<h3> ${n} Es primo </h3>`;

          console.log("es primo")
        }else{
        resCont.innerHTML += `<h3> ${n} NO es primo </h3>`;

          console.log("no es primo")
        }
      }else{
        resCont.innerHTML += `<h3> EL numero debe ser positivo mayor a 1  (uno) </h3>
        <p> Ya que el numero uno no se considera primo ni compuesto</p>
        `;

        console.log("debe ser un numero positivo mayor a 1 ")
      }

    }
  }
  resCont.innerHTML += `<br>`
  resCont.innerHTML += `<br>`
  resCont.innerHTML += `<br>`
  
  resCont.innerHTML +=`<button onclick="ej7()"> volver a intentar</button>` 

}

/*############## Ejer 8 #######################*/
function primo (n){
  if(n>1){
    var contador = 0;
    for (let i = 2; i < n; i++) {
      if (n%i==0){
        contador +=1
      }
    }
    if (contador == 0){
    //resCont.innerHTML += `<h3> ${n} Es primo </h3>`;
    return n
      console.log("es primo")
    }else{
    //resCont.innerHTML += `<h3> ${n} NO es primo </h3>`;
    return false
      console.log("no es primo")
    }
  }
}
/*#####################################*/
function ej8(){

  let resCont = document.querySelector('#resultado')    
  resCont.innerHTML = `<h1>Serie de numeros primos</h1> <br>`;
  let n = prompt("Generar las serie de numeros primos\n¿Cuantos terminos desea generar? ");
  if (n==undefined){
    resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
  }else if(isNaN(n)) {
      resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
  }else{
      if(n ==""){
          resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
  
      }else{
        var aux = parseInt(n);
        //var l = (aux*2);
        var lim = aux+2;//l+1;
        console.log("***"+lim)
        for (let i = 2; i < lim; i++) {
          var ser = primo(i);
          if (ser != false){
            console.log(ser)
            resCont.innerHTML += ser+", ";
          }else{
            lim = lim +1;
          }
        }
      }
    }
    resCont.innerHTML += `<br>`
    resCont.innerHTML += `<br>`
    resCont.innerHTML += `<br>`
    
    resCont.innerHTML +=`<button onclick="ej8()"> volver a intentar</button>` 
  
  }
/*############## Ejer 9 #######################*/
/*#####################################*/
function ej9(){
  let resCont = document.querySelector('#resultado')    
  resCont.innerHTML = `<h1>Vector con la serie Serie fibonaci</h1> <br>`;
  //resCont.innerHTML += `<input > <br>`;
  let n = parseInt(prompt("Vector con la Serie fibonaci\n Introduzca el tamaño del vector"))
  if (n==undefined){
    resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
  }else if (n==undefined){
    resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
  }else if(isNaN(n)) {
      resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
  }else{
      if(n ==""){
          resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";

      }else{
        var fibonaci = [];
          let a = 1;
          let b = 0;
          //let serie = 0;
          let contador = 0;
          while(contador != n){
              let serie = a + b;
              fibonaci.push(serie);
              //resCont.innerHTML += `<font size="6">${fibonaci}</font>`+", ";
              //console.log(fibonaci);
              a = b;
              b = serie;
              contador = contador + 1;
          }
          resCont.innerHTML += `<font size="6">[${fibonaci}]</font>`;
          console.log(fibonaci);
          resCont.innerHTML += `<br>`
          resCont.innerHTML += `<br>`
          resCont.innerHTML +=`<h3> se genero el Vector </h3>` 
        }

  }
  
resCont.innerHTML += `<br>`

resCont.innerHTML +=`<button onclick="ej9()"> volver a intentar</button>` 
}
/*############## Ejer 10 #######################*/
function expo(x,p){
  var num = Math.pow(x,p);
  return num
}
/*#####################################*/
function ej10(){
  let resCont = document.querySelector('#resultado')    

resCont.innerHTML =`<h1>Serie exponencial o Serie de Taylor</h1><br>`;

var n = prompt("Serie exponencial o serie de Taylor\n¿Cuantos numero desea generar de la serie?");
var x = prompt("Ingresa X\nPuede ser cualquier numero\n(mejor si es un numero entero)");

if (n==undefined || x==undefined){
  resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
}else if(isNaN(n) || isNaN(x)) {
  resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
}else{
  var a = parseInt(n);
  var b = parseInt(x);
  //var serie_trun = 0;
  var serie = 0;
  for (let i = 0; i < a; i++) {
    var arriba = expo(b,i);
    var abajo = factorial(i);
    var div = arriba/abajo;
    console.log("***",i);
    console.log(div);
    var division = parseInt(division);
    serie = serie + div;
  
    var trunc = serie.toFixed(5);
    //var trunc_int = parseInt(trunc_str);
    //serie_trun +=div;

    //resCont.innerHTML += serie+", ";
    resCont.innerHTML += `<h4>${div}</h4>` ;

  }

  //resCont.innerHTML += serie+", ";
  //resCont.innerHTML += trunc+", ";

  resCont.innerHTML +=`<h2>Se genero la serie </h2><br>`;
  resCont.innerHTML +=`<h2>la suma es</h2> <h4>${serie}</h4>`;
  //resCont.innerHTML += `` ;
  
  //resCont.innerHTML +=`<h2>la serie es es</h2>`+ sumas;
  }
  resCont.innerHTML += `<br>`


resCont.innerHTML +=`<button onclick="ej10()"> volver a intentar</button>` 
}
/*############## Ejer 11 #######################*/
/*#####################################*/
function ej11(){
  let resCont = document.querySelector('#resultado')    
  resCont.innerHTML = `<h1>Verificar si una palabra es palindorme</h1> <br>`;
  var n = prompt("Verificar si una palabra es palindorme\nIngresa una palabra:") ;
  if (n==undefined){
    resCont.innerHTML += "<h2>Debes ingresar una palabra </h2> ";
  }else if(isNaN(n)) {
      //resCont.innerHTML += "<h2>hola  <h4>(vuelve a intentar   )</h4>)</h2> ";
      var longitud = n.length;
       if(longitud>2){
          var num = n.toString();
          var c = '';
          for (let i = 0; i < num.length; i++) {
            var char = num.charAt(i);
            c = char+c
          }
          if(c.toLowerCase() == num.toLowerCase()){
            console.log("Es Palindrome");
            var resultado = invertir_cadena(n)
            resCont.innerHTML += `<h2> Se invertio lo que introduciste:</h2> <h3>${resultado}</h3> `;
        
            resCont.innerHTML += `<div>
            <h3> " ${n} " Es una palabra palindrome </h3>
            </div>
            `;
            
          }else{
            var resultado = invertir_cadena(n)
            resCont.innerHTML += `<h2> Se invertio lo que introduciste:</h2> <h3>${resultado}</h3> `;
        
            console.log("No es palindrome");
            resCont.innerHTML += `<div>
              <h3> " ${n} " No es una palabra palindrome </h3>
            </div>`;
          
          }
     }else{
      resCont.innerHTML += "<h2> Debes ingresar una palabra con mas de dos letra <h4>(vuelve a intentar)</h4></h2> ";

     }

    }else{
      if(n ==""){
          resCont.innerHTML += "<h2> Debes ingresar una palabra  <h4>(vuelve a intentar)</h4></h2> ";
      }else{
        //if(n>9){

        //}else{
          resCont.innerHTML += "<h2>Debes ingresar una palabra  <h4>(vuelve a intentar)</h4></h2> ";

        }

    
      }
      resCont.innerHTML += `<br>`      
      resCont.innerHTML +=`<button onclick="ej11()"> volver a intentar</button>` 
   
    }
    
//}
/*############## Ejer 12 #######################*/
function invertir_cadena(n){
  var num = n.toString();
  var c = '';
  for (let i = 0; i < num.length; i++) {
    var char = num.charAt(i);
    c = char+c
  }
  return c
}
/*#####################################*/
function ej12(){
  let resCont = document.querySelector('#resultado')    
  resCont.innerHTML = `<h1>Invertir una cadena de caracteres</h1> <br>`;
  var n = prompt("Invertir una cadena de caracteres\nIngresa lo que deseas invertir:") ;
  if (n==undefined){
    resCont.innerHTML += "<h2>Debes ingresar algo como numeros o palabras</h2> ";
  }else if(n ==""){
          resCont.innerHTML += "<h2>Debes ingresar algo como numeros o palabras</h2>";
      }else{
        var resultado = invertir_cadena(n)
        resCont.innerHTML += `<h2> Se invertio lo que introduciste:</h2> <h3>${resultado}</h3> `;
        resCont.innerHTML += `<h2> Lo que introduciste originalmente era :</h2> <h3>${n}</h3> `;

      }
      resCont.innerHTML += `<br>`
      resCont.innerHTML += `<br>`
      resCont.innerHTML += `<br>`
      
      resCont.innerHTML +=`<button onclick="ej12()"> volver a intentar</button>` 
   
}
/*############## Ejer 1s3 #######################*/
function ej13(){
  let resCont = document.querySelector('#resultado1')    
  resCont.innerHTML = `<h1>13. Caluladora en html</h1>
  <p> Puedes usar la calculadora y precionar en "calcular" para que se muestre el resultado <br>
      !! Mucho cuidado de introducir valores que no son numeros... :) !!
  </p>`;
  resCont.innerHTML +=`
    <div>
    <input type="text" id="n1" class="number1" />
    <select id="op">
      <option value="suma">+</option>
      <option value="resta">-</option>
      <option value="multi">*</option>
      <option value="div">/</option>
      <option value="pow">^</option>
    </select>
    <input type="text" id="n2" />
  </div>
  <button id="btn">Calcular</button>
  <p>
    El resultado es: 
    <span id="res">0</span>
  </p>

<br>

<button onclick="ej13()"> volver a intentar</button>`
  const btnEl = document.getElementById('btn')

  // guarda las operaciones permitidas
  const ops = {
    sum: 'suma',
    res: 'resta',
    mul: 'multi',
    div: 'div',
    pow: 'pow'
  }
  // Recibe 2 numeros y realiza la operacion
  function makeOp(n1, n2, op) {
    let res = 0
    switch (op) {
      case ops.sum:
        res = n1 + n2
        break;
      case ops.res:
        res = n1 - n2
        break;
      case ops.mul:
        res = n1 * n2
        break;
      case ops.div:
        res = n1 / n2
        break;
      case ops.pow:
        res = Math.pow(n1, n2)
      default:
        break;
    }
    return res
  }
  
  function isValidNumber(n1) {
    if (isNaN(n1)) {
      return false
    }
    return true
  }
  
  btnEl.addEventListener('click', function() {
    const resEl = document.getElementById('res')
    const opEl = document.getElementById('op')
    const n1El = document.getElementById('n1')
    const n2El = document.getElementById('n2')
    const n1 = parseInt(n1El.value)
    const n2 = parseInt(n2El.value)
    if (!isValidNumber(n1)) {
      alert('El primer nro no es valido')
      return
    }
    if (!isValidNumber(n2)) {
      alert('El segundo nro no es valido')
      return
    }
    resEl.innerText = makeOp(n1, n2, opEl.value)

  })
}
/*############## Ejer 14 #######################*/
function romanize(n) {
	var
		values = [1, 5, 10, 50, 100, 500, 1000],
		letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
		res = [],
		num, letra, val, pos, insert

	for(var i = 6; num = values[i], letra = letras[i]; i--) {
		// Suficientemente grande
		if(n >= num) {
			// Número de letras repetidas
			var r = Math.floor(n / num); 

			// Restamos el actual
			n -= r * num; 

			if(r < 4){
				// Metemos las letras
				while(r--){
					res.push(letra);
				}
			} else {
				// No se pueden repetir 4+ veces
				val = res.pop(); // Última letra

				// Si es el string vacío o letra == "M" (no hay anterior)
				// usamos la letra anterior a esta
				pos = (val ? letras.indexOf(val) : i) + 1; 

				// Y si letra == "M" -> letras[pos] no existirá y usamos M
				insert = letra + (letras[pos] || 'M'); 

				// Insertamos el string
				res.push(insert);
			}
		} else {
			// Si no vamos a poner letra usamos un ""
			// para que no afecte pop
			res.push('');
		}
	}

	return res.join('');
}
function ej14(){
  let resCont = document.querySelector('#resultado')    
  resCont.innerHTML = `<h1>Convertir un numero a numero romano </h1> <br>`;
  //resCont.innerHTML += `<input > <br>`;
  let n = parseInt(prompt("Convertir un numero a numero romano\n Introduzca el numero"))
  if (n==undefined){
    resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
  }else if (n==undefined){
    resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
  }else if(isNaN(n)) {
      resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
  }else{
      if(n ==""){
          resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";

      }else if (n>0){
        var entra = parseInt(n)
        var rom = romanize(entra)
        resCont.innerHTML += `<h3>el resultado es: ${rom}</h3> ` ;

      }else{
        resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";

      }
  }
  resCont.innerHTML += `<br>`
      resCont.innerHTML += `<br>`
      resCont.innerHTML += `<br>`
      
      resCont.innerHTML +=`<button onclick="ej14()"> volver a intentar</button>` 
   
}
//####################
/*############## Ejer 15 #######################*/
function ej15() {
  let resCont = document.querySelector('#resultado')    

    resCont.innerHTML = `<h1>Matriz de Pascal</h1> <br>`;
    let a = prompt('Ingrese el tamaño de la matriz')
    var n = a;
    if (n==undefined){
      resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
    }else if (n==undefined){
      resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
    }else if(isNaN(n)) {
        resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
    }else{
        if(n ==""){
            resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo</h2> ";
  
        }else{
    let pascalMatrix = createPascalMatrix(a)
    let tableString = createTableString(pascalMatrix)
    //console.log(pascalMatrix, tableString)
    resCont.innerHTML += tableString
  }

  function createPascalMatrix(size) {
    let matrix = []
    for (let i = 0; i < size; i++) {
      let row = []
      for (let j = 0; j < size; j++) {
        if (j <= i) {
          if (j == 0) {
            row.push(1)
          } else {
            row.push(matrix[i - 1][j] + matrix[i - 1][j - 1])
          }
        } else {
          row.push(0)
        }
      }
      matrix.push(row)
    }
    return matrix
  }
  function createTableString(matrix) {
    let tableStr = "<table border='1' style='align-content: center;'>"
    for (let i = 0; i < matrix.length; i++) {
      tableStr += "<tr>"
      for (let j = 0; j < matrix.length; j++) {
        tableStr += "<td><p clas='table'>" + matrix[i][j] + "</p></td>"
      }
      tableStr += "</tr>"
    }
    tableStr += "</table>"
    return tableStr
  }
 } }