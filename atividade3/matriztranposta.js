function transpormatriz(A){
    let matrizstring = '';
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[i].length;j++){
            matrizstring += A[i][j]+' ';
        }
        matrizstring += '\n';
    }
    console.log(matrizstring);

    let matriztranspostastring ='';
    for(let j = 0;j < A[0].length;j++){
        for(let i = 0;i < A.length;i++){
            matriztranspostastring += A[i][j]+' ';
        }
        matriztranspostastring +='\n';
    }
    console.log(matriztranspostastring);

}

const A =[[1, 2], [3, 4], [5, 6]]

transpormatriz(A);
