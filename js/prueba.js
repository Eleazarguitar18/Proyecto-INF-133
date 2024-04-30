/*

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
//function ej5(){
    let resCont = document.querySelector('#resultado')    
    resCont.innerHTML = `<h1>prueba</h1> <br>`;
    var n = parseInt(prompt("ingresa un numero:")) ;
    //var c = prompt("caracter:");
    var cad = n.toString()
    for (let i = 0; i < cad.length; i++) {
       var f = cad.charAt(i);
       var aux = calculadigfrec(cad,f);
    
       if(aux>1){
           resCont.innerHTML += `<h4> el caracter ${f} se repite ${aux} </h4>`;
       }
    
    }
    let resCont = document.querySelector('#resultado')    
    resCont.innerHTML = `<h1>prueba</h1> <br>`;
    resCont.innerHTML =`
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
  `
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
        /*resCont.innerHTML += ``
            resCont.innerHTML += ``
                //resCont.innerHTML += `<h1> hola programdor :)</h1>`
            
            resCont.innerHTML += ``

        resCont.innerHTML += ``
    resCont.innerHTML +=``*/

//}

//resCont.innerHTML += calculadigfrec(cad,char);

//calculadigfrec(cad,char);
//resCont.innerHTML += res;

/**
def calculadigfrec(n,dig):
    contador=0
    for i in n:
        #print(i)
        #aux=str(i)
        if i==dig:
            #print("encontrado")
            contador=contador+1
        
    return contador
"""
n=int(input("ingresa el numero:  "))
if n>100:
    n=str(n)
    for i in n:
        x=calculadigfrec(n,i)
        if x>1:
            print("el digito",i,"se repite ",x,"veces")
else:
    print("el numero debe ser mayor a 100(x>100)")

#############################################
# verificar si el numero es primo EJER 7


num=int(input("ingrese un numero mayor que 2 :  "))
if(num>2):
    contador=0
    i=2
    while i<num and contador==0:
        resto=num%i
        #print(resto)
        if resto==0:
            print(i)
            contador+=1
        i+=1
    if contador==0:
        print("el numero ", num," es primo")
else:
    print("el numero ", num," no es primo")
"""

# ejer 9 solo metes la serie fibonaci en un vector y ya esta

# ejer 10 pendiente 



# ejer 11

def palindrome(a):
    c=''
    for i in n:
        c=i+c
        #print("********",c)
    if c.lower()==n.lower():
        print(n,"Es palindrome")
    else:
        print(n,"No es palindrome")
    print("#Eleazar Jhonny Cruz Mamani")
"""
n=str(input("ingrese la palabra:  "))
palindrome(n)
"""


# ejer 12 invertir una cadena de caracteres
n=str(input("ingrese la palabra:  "))
c=''
for i in n:
    c=i+c
print(c)

 */
/*############################################################
function ej6(){
  let resCont = document.querySelector('#resultado')    
  resCont.innerHTML = `<h1>prueba</h1> <br>`;
  var n = parseInt(prompt("ingresa un numero:")) ;
    if(isNaN(n)) {
      resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo <h4>(vuelve a pulsar en la pregunta para otro intento)</h4>)</h2> ";
    }else{
      if(n ==""){
          resCont.innerHTML += "<h2>Debes ingresar un numero entero positivo <h4>(vuelve a pulsar en la pregunta para otro intento)</h4></h2> ";
      }else{
        var num = n.toString();
        var c = '';
        for (let i = 0; i < num.length; i++) {
          var char = num.charAt(i);
          c = char+c
        }
        if(c.toLowerCase() == num.toLowerCase()){
          console.log("es capicua");
          resCont.innerHTML += `<h4>${n} Es capicua </h4>`;
          
        }else{
          console.log("no es capicua");
          resCont.innerHTML += `<h4>${n} No es capicua </h4>`;
        
        }
    
      }
    }
    resCont.innerHTML += `<br>`
    resCont.innerHTML += `<br>`
    resCont.innerHTML += `<br>`
    
    resCont.innerHTML +=`<button onclick="ej6()"> volver a intentar</button>` 
    
}


//var n = parseInt(prompt("ingresa un numero:")) ;


/*
#capicua ejer 6
n=str(input("\nIngrese el numero para determinar si es capicua:  "))
c=''
for i in n:
    c=i+c
    #print("********",c)
if c.lower()==n.lower():
    print(n,"Es capicua")
else:
    print(n,"No es capicua")
print("#Eleazar Jhonny Cruz Mamani")
*/
/*############################################################*/
/*verificar si el numero es primo EJER 7 

num=int(input("ingrese un numero mayor que 2 :  "))
if(num>2):
    contador=0
    i=2
    while i<num and contador==0:
        resto=num%i
        #print(resto)
        if resto==0:
            print(i)
            contador+=1
        i+=1
    if contador==0:
        print("el numero ", num," es primo")
else:
    print("el numero ", num," no es primo")
javascritp
let resCont = document.querySelector('#resultado')    
resCont.innerHTML = `<h1>Verificar si un numero es primo</h1> <br>`;
let n = prompt("ingrese el numero");
if(isNaN(n)) {
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
*/
/*############################################################
# ejer8 
def primo(num):
        contador=0
        i=2
        while i<num and contador==0:
            resto=num%i
            #print(resto)
            if resto==0:
                #print(i)
                contador+=1
            i+=1
        if contador==0:
            return num
                #print("el numero ", num," es primo")
        else:
            return False
"""
n=int(input("ingrese el numero de cuantos terminos desea:  "))
for i in range(1,n*2):
    x=primo(i)
    if x!=False:
        print(x)
"""*/
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
/*
let resCont = document.querySelector('#resultado')    
resCont.innerHTML = `<h1>Serie de numeros primos</h1> <br>`;
let n = prompt("Generar las serie de numeros primos\n¿Cuantos terminos desea generar? ");
if(isNaN(n)) {
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
  //function ej9(){
    let resCont = document.querySelector('#resultado')    
    resCont.innerHTML = `<h1>Vector con la serie Serie fibonaci</h1> <br>`;
    //resCont.innerHTML += `<input > <br>`;
    let n = parseInt(prompt("Vector con la Serie fibonaci\n Introdusca el tamaño del vector"))
    if(isNaN(n)) {
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

        }

    }
resCont.innerHTML += `<br>`
resCont.innerHTML += `<br>`
resCont.innerHTML += `<br>`

resCont.innerHTML +=`<button onclick="ej9()"> volver a intentar</button>` 

//}*//*
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
SANTIAGO 5:10
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

//romanize(18); // "XVIII"
console.log(romanize(900))
*/
/* PREDICA DE LA CLASE JOSUE
versiculos 
1 pedro 3:12
SANTIAGO 5:16
1 Timoteo
Mateo 5:44
lucas 18:
1 Tesalonicenses 5:17
####### ORAD SIEMPRE
 */
function factorial(n){
  var x = 1;
  var fac = 1;
  while(x<=n){
      fac=fac*x;
      x = x+1;

  }
  return fac
}
function expo(x,p){
  var num = Math.pow(x,p);
  return num
}
//console.log(factorial(0));

function ej10(){
  let resCont = document.querySelector('#resultado')    

resCont.innerHTML =`<h1>Serie exponencial o Serie de Taylor</h1><br>`;

var n = prompt("Serie exponencial o serie de Taylor\n¿Cuantos numero desea generar de la serie?");
var x = prompt("Ingresa X");

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


resCont.innerHTML +=`<button onclick="ej3()"> volver a intentar</button>` 
}

