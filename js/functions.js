function escolher(min,max){
    let escolha = document.getElementsByTagName('li')
    max = Math.ceil(7);
    min = Math.floor(1);
    random = Math.floor(Math.random() * (max - min)) + min;

    if(random == 1){    
        escolha[0].style = "background-color: red; color: white"
        setTimeout(() => {
            escolha[0].style = "background-color: white"
        },600);
    }if(random == 2){
        escolha[1].style = "background-color: red; color: white"
        setTimeout(() => {
            escolha[1].style = "background-color: white"
        },600);
    }if(random == 3){
        escolha[2].style = "background-color: red; color: white"
        setTimeout(() => {
            escolha[2].style = "background-color: white"
        },600);
    }if(random == 4){
        escolha[3].style = "background-color: red; color: white"
        setTimeout(() => {
            escolha[3].style = "background-color: white"
        },600);
    }if(random == 5){
        escolha[4].style = "background-color: red; color: white"
        setTimeout(() => {
            escolha[4].style = "background-color: white"
        },600);
    }if(random == 6){
        escolha[5].style = "background-color: red; color: white"
        setTimeout(() => {
            escolha[5].style = "background-color: white"
        },600);
    }      
    
 }  
