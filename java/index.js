const idade = 16; 

if (idade >=18){
    console.log("maior de idade");
} else if (idade <= 17 && idade >0) {
    console.log("menor de idade");
} else {
    console.log("idade inválida");
}

console.log("Escolhe uma matéria: \n1 - Educação Física; \n2 - Portugês; \n3 - Química; \n4 - Química")

const materia = "edFisisca"

switch(materia){
    case 1:
        console.log("Top");
        break
    case 2:
        console.log("incrivel");
        break
    case 3:
        console.log("bom");
        break
    case 4:
        console.log("chato");
        break
    default:
    console.log("matéria indisponível");

}

const idade = 40;

if(idade >=60){
    console.log("idoso");
    }else if ("idade <= 59 && idade >18"){
        console.log("adulto")
    }
