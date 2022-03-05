// les opérateurs

let nb1 = 0;
nb1 = 0 +10;
console.log(nb1);

// Les chaines
let nb = 999;
let str = `abc ${nb}`; 
console.log(str);

let chn =  `imad est capable`;
console.log(chn); 
let couleur;
switch (couleur){
    case 'bleu' :console.log(`vous aimez le  bleu`);break;
    case `carmin`:
    case `rouge`:console.log(`vous aimez le rouge`);break;
    case`vert` : console.log(`vous aimez le vert`);break;
    default:console.log(`vous n'aimez aucune de nos couleurs (bleu, rouge, ver)`);
}

if(couleur == 'bleu'){
    console.log=('vous aimez le bleu');
}
else if (couleur == 'rouge' || couleur== 'carmin'){
    console.log('vous aimez le rouge');
}
else if (couleur == 'vert'){
    console.log('vous aimez le vert');
}
else{
    console.log('vous n\'aimez aucune de nos couleurs (bleu, rouge, vert)');
}