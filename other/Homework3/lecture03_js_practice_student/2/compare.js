//  weerawich wongchachalikun 6213166 
function comparenum(a,b){
    // alert(`${a},${b}`);
    let compare = '';
    
    if (parseInt(a) > parseInt(b)){
        compare = "A>B";
    }else 
    if( parseInt(a) < parseInt(b)){
        compare = "A<B";

    }else if (parseInt(a) === parseInt(b)){
        compare = "A=B";
    }else {
        compare = "Error";
    }

    document.getElementById("d").value = Math.abs(a - b);
    document.getElementById("c").value = compare;
}