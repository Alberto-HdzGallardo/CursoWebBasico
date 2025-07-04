let variableBloque;
var variableGlobal;

variableBloque =45.4;
console.log(variableBloque);

variableBloque=[2,15,30];
console.log(variableBloque);

if(0 ==='0'){
    console.log("Los valores son iguales");
}else{
    console.log("Los valores NO son iguales")
}

for(i=0;i<3;i++){
    console.log(variableBloque[i]);
}

variableBloque.forEach(
    elemento=>console.log(elemento)
);