function resetForm(){
 document.getElementById('app').reset();
}
document.getElementById('app').addEventListener('submit',(e)=>{
    var txt1 = document.getElementById('txt1').value;
    var txt2 = document.getElementById('txt2').value;
    
    if(txt1 =='' || txt2 == ''){ 
        e.preventDefault();
       return showMessage("Error","warning",'<h5 class=".warning">Cajas vacias</h5>',2000)
        
    }
    e.preventDefault();
    var result1 = mcm(txt1,txt2);
    var result2 = mcd(txt1,txt2);
    showMessage("Result",'info',`<h5 class=".warning">Minimo común multiplo es: ${result1} y Maximo común divisor es: ${result2}</h5> `,10000,true)
   resetForm();
 
})
window.addEventListener('load',()=>{
  document.getElementById('txt1').addEventListener('keypress',validar);
  document.getElementById('txt2').addEventListener('keypress',validar);
})
//FUNCIONES
const showMessage=(title,icon,message,timer,btn)=>{
    return Swal.fire({
        title: title,
        icon:icon,
        html:message,
        timer:timer,
        toast:true,
        showConfirmButton:btn
    })
}
//VALIDAR LAS CAJAS DE TEXTO
const validar=(e)=>{
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }
}
//ALGORITMO MINIMO COMÚN MULTIPLO
let mcm = (n1,n2)=>{
  let mini = 1;
  
  for (let index = 2; index<= n1; index++) {
      if(n1 % index === 0 && n2 % index === 0){
          n1 =n1 / index;
          n2 = n2 / index;
          mini *= index;
          index = 1;
      }
  }
  return mini *= n1*n2;
}
//LAGORITMO MAXIMO COMÚN DIVISOR 
let mcd = (n1,n2)=>{
  let mini = 1;
  
  for (let index = 2; index<= n1; index++) {
      if(n1 % index === 0 && n2 % index === 0){
          n1 =n1 / index;
          n2 = n2 / index;
          mini *= index;
          index = 1;
      }
  }
  return mini ;
}