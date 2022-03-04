
// 1 premiere couleur
let couleur1;
do{
    couleur1=window.prompt("Saisir une premire couleur parmi : bleu, jaune ou rouge");
} 
while(couleur1 !='bleu' & couleur1!='jaune' && couleur1 !='rouge');

// 2 deuxieme couleur
let coulour2;
do{
coulour2 = window.prompt("Saisir une deuxieme couleur parmi : bleu, jaune ou rouge");
}
while((couleur2!='bleu' && couleur2!='jaune' && couleur2 !='rouge') || couleur1==couleur2)

// 3 Mélange
let melange;
if ((couleur1 == 'jaune' && couleur2=='bleu' ) || (couleur1=='bleu' && couleur2=='jaune')){
    melange = 'vert'
}
else if ((couleur1=='rouge' && couleur2 =='jaune') || (couleur1=='jaune' && couleur2=='rouge')){
    melange = 'orenge'
}
else{
    melange = 'violet';
}

document.write(`${couleur1} et ${couleur2} donnent du ${malange}`);



// 
//exercice

//var couleur1=window.prompt('choisissez une couleur parmis les trois');
//if (couleur1 != 'bleu' || 'rouge' || 'jaune'){
//    window.prompt('choisissez une couleur parmis les trois')
//}

//var couleur2=window.prompt('veuillez faire un autre choix différent du premier');
//if((couleur2 + couleur1) == ('bleu' +'rouge')){
//    document.write(` le mélange des deux couleurs est le violet`);
//}
//else if((couleur2+couleur1) == ('bleu' +'jaune')){
 //   document.write(` le mélange des deux couleurs est le vert`);jaune
//}
//else{
//    document.write(` le mélange des deux couleurs est le Orange`);
//}
