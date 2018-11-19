function calculCumulMaximal(array, n) {
    let cumul_max = 0.0;

    if (array.length == 0){
        return 'tableau vide';
    }

    if (array.length < n){
        return 'nombre de jours > tableau';
    }


    for(let i in array){
        if(typeof array[i] != 'number'){
            return 'erreur type valeur tableau';
        }
    }

    for (let i = 0; i < array.length - n; i++) {
        let cumul = 0;

        for(let j = 0; j < n; j++){
                cumul += array[i+j];
        }

        if(cumul > cumul_max || cumul_max == 0){
            cumul_max = cumul;
        }
    }
    //console.log(cumul_max);
    return cumul_max;

}
