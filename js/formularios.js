
function ml(){
  n=document.facto.l1.value;
  if (n=="") {
    alert('No ingresaste ningun numero para convertir')
    return
  }else{
    x = parseFloat(n);
    res =x * 25.4;
    document.facto.resul1.value=res;
  }

}
function cm(){
  n=document.facto.l2.value;
  if (n=="") {
    alert('No ingresaste ningun numero para convertir')
    return
  }else{
    
    x = parseFloat(n);
    res =x * 30.48;
    document.facto.resul2.value=res;
  }

}
function cm_cua(){
  n=document.facto.s1.value;
  if (n=="") {
    alert('No ingresaste ningun numero para convertir')
    return
  }else{
    
    x = parseFloat(n);
    res =x * 6.452;
    document.facto.resul3.value=res;
  }

}
function met(){
  n=document.facto.s2.value;
  if (n=="") {
    alert('No ingresaste ningun numero para convertir')
    return
  }else{
    
    x = parseFloat(n);
    res =x * 0.093;
    document.facto.resul4.value=res;
  }

}
