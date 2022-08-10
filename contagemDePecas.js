var listaP = ["Peça1","P2","Peça3","P4","P5","Peça6","Peça7","Peça8"]
qtd = listaP.length

if (qtd < 10){
    console.log("Item não pode ser cadastrado!")
}else{
    console.log("Item m pode ser cadastrado!")
}

for(var i = 0; i < qtd; i++){
    var peca = listaP[i]
    if(peca.length < 3){
        console.log("O nome da peça tem menos de 3 letras")
    }else{
        console.log("O nome da peça tem mais de 3 letras")
    }
}