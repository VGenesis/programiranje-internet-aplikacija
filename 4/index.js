function izracunaj(operacija){
    var br1 = parseFloat(document.racunaljka.br1.value);
    var br2 = parseFloat(document.racunaljka.br2.value);
    var res = 0;
    
    if(!isNaN(br1) && !isNaN(br2)){
        switch(operacija){
            case 1:
                res = br1 + br2;
                break;
            case 2:
                res = br1 - br2;
                break;
            case 3:
                res = br1 * br2;
                break;
            case 4:
                res = br1 / br2;
                break;
            default:
                return;
        }
    
        document.racunaljka.rez.value = res;
    }else{
        alert("Digitron radi samo sa brojevima!");
    }

}