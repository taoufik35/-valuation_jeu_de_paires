


// --------------------------------------------------------game script-----------------------------------------------------------





//-------------------------button start--------------------------------------------

//fonction pour afficher le tableau de carte apres appuie sur le bouton play
let btn = document.getElementById("myBtn");
let container = document.getElementById("container");

btn.onclick = (() => {
  container.style.display = "block";
  btn.style.display = "none";
})




//constante dans la on va stocker notre jeu
const result = document.querySelector("#resultat");


//tableau de cartes
let tabJeu = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

//je creer un tableau de resultat qui contient le melange de toutes nos images on fera ensuite de generer ce tableau de maniere aléatoire 
 let tabResultat = genereTabAleatoire();


//je creer cette variable pour la conparaison des boutons cliquez et notamment le clique precedent. j'initialise la vairiable a vide. 
let oldSelection = [];
// ensuite jai besoin de savoir ou esque j'en suis dans mes affichage esque jai deja une  image afficher ou non esque je suis sur le 1er clique ou le 2 em donc je creer une variable qui va concerver cela 
let nbAffiche = 0;
//dnc une fois que l'on aura cliquer sur une image on aura nbAffiche +1 et quand on cliquera sur la deuxieme image on aura +1  aussi donc nbAffiche a +2

// je creer un booolean afin de savoir si je peut cliquer sur un deuxieme bouton ou pas 

let ready = true;






afficherTableau();
//fonction qui realise l'affichage sur notre site web
function afficherTableau(){
    let txt ="";

    for(let i= 0; i < tabJeu.length; i++){
        txt += "<div>";
           for(let j = 0; j < tabJeu[i].length; j++){
            if(tabJeu[i][j] === 0){
                // afin de verifier au click la valeur de l'index choisi je place la fonction verif en lui passant en parametre la position de l'index dans le tableau
            txt += "<button class= 'btn btn-primary m-2' onclick = 'verif(\""+i+"-"+j+"\")'>Jouer</button>"; 
            }else{
                //je concacatene avec la fonction getImage en lui passant en parametre la valeur de tabJeu[i][j]
                txt += "<img src='"+getImage(tabJeu[i][j])+"'  class='m-2'> "
                
            }
        }
        txt += "</div>";
    }
    //je rajoute dans mon id resultat le contenue de la variable txt
    result.innerHTML = txt;
} 

// ---------------------fonction switch case qui va parcourir les index et selon la valeur va retourner une image-------------------

function getImage(valeur){
    let imgTxt = "img/";
    switch(valeur){
        case 1 : imgTxt += "mario.png";
        break;
        case 2 : imgTxt += "champignon_marron.png";
        break;
        case 3 : imgTxt += "croco_mechant.png";
        break;
        case 4 : imgTxt += "champignon_vert.png";
        break;
        case 5 : imgTxt += "champignon_rouge.png";
        break;
        case 6: imgTxt += "canon.png";
        break;
        case 7 : imgTxt += "fantome.png";
        break;
        case 8 : imgTxt += "carapace.png";
        break;
        default : console.log("cas non pris en compte");
    }
    return imgTxt;
}

// --------------------------je creer la fonction verif qui va recuperer le bouton cliquer----------------------------------------- 

function verif(bouton){
    if(ready){
            nbAffiche++;

            let ligne = bouton.substr(0,1);
            let colonne = bouton.substr(2,1);   
            tabJeu[ligne][colonne] = tabResultat[ligne][colonne];

            afficherTableau();

        // ------------------------------------ comparaison------------------------------------------------------ 

        if(nbAffiche>1){
            ready = false;
          setTimeout(() => {
              if(tabJeu[ligne][colonne] !== tabResultat[oldSelection[0]][oldSelection[1]]){
                tabJeu[ligne][colonne] = 0;
                tabJeu[oldSelection[0]][oldSelection[1]] = 0;
            }
            afficherTableau();
            ready = true;
            nbAffiche = 0;
          },1000)  
        } else{
        oldSelection = [ligne,colonne];
        }
     
    }
   
}
//--------------------------------function tableau aleatoirement--------------------------------------- 

function genereTabAleatoire(){
    let tab = [];
// cette variable contiendra le nombre d'image qu'il ya dans le tableau
    let nbImagePosition = [0,0,0,0,0,0,0,0];

    for(let i = 0; i < 4 ; i++){
        let ligne = [];
        for(let j = 0; j < 4 ; j++){
           let fin = false;
           while(!fin){
            let randomImage = Math.floor (Math.random() * 8);
            if(nbImagePosition[randomImage] < 2){
                ligne.push(randomImage +1);
                nbImagePosition[randomImage]++;
                fin = true;
            }
            
           }
        }
        tab.push(ligne);
    }
    return tab;
}


