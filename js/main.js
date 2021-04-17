// let red = document.getElementById("red","red1");



// change();

// function change(){
//     red.addEventListener("click", function(){
//         red.style.background = "black";
//     })
// }







// --------------------------------------------------------script game-----------------------------------------------------------







//fonction pour afficher le tableau de carte apres a    ppuie sur le bouton play
let btn = document.getElementById("myBtn");
let container = document.getElementById("container");


btn.onclick = function() {
  container.style.display = "block";
  btn.style.display = "none";
}




//constante dans la on va stocker notre jeu
//on selection l'id resultat pour pouvoir le modifier 


const result = document.querySelector("#resultat");


//tableau de cartes
let tabJeu = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

//je creer un tableau de resultat qui contient le melange de toutes nos images on fera ensuite de generer ce tableau de maniere aléatoire 
// je vais utiliser ce tableau pour afficher les elements de ma grille 
// let tabResultat = [
//     [0,,5,7],
//     [0,0,5,8],
//     [0,0,6,7],
//     [0,0,6,8]
// ]
 let tabResultat = genereTabAleatoire();


//je creer cette variable pour la conparaison des boutons cliquez et notamment le clique precedent. j'initialise la vairiable a vide. 
let oldSelection = [];
// ensuite jai besoin de savoir ou esque j'en suis dans mes affichage esque jai deja un image afficher ou non esque je suis sur le 1er clique ou le 2 em donc je creer une variable qui va concerver cela 
let nbAffiche = 0;
//dnc une fois que l'on aura cliquer sur une image on aura nbAffiche +1 et quand on cliquera sur la deuxieme image on aura +1  aussi donc nbAffiche a +2

// je creer un booolean afin de savoir si je peut cliquer sur un deuxieme bouton ou pas 

let ready = true;






afficherTableau();
//fonction qui realise l'affichage sur notre site web
function afficherTableau(){
    let txt ="";
    // tableau bi-dimentionnel

    //boucle qui va parcourir chaque index (ligne dans un premier temps)dans  le tableau tabJeu
    for(let i= 0; i < tabJeu.length; i++){
        txt += "<div>";
   
     //boucle qui va parcourir chaque index (dans chaque ligne ) dans le tableau tabJeu
        for(let j = 0; j < tabJeu[i].length; j++){
            if(tabJeu[i][j] === 0){
                // afin de verifier au click la valeur de l'index choisi je place la fonction verif en lui passant en parametre la position de l'index dans le tableau
                //je rejoute un backslash(\)entre les indice pour desactiver le guillemet que nous utilisont pour realiser notre chaine de caractere dans txt
            txt += "<button class= 'btn btn-primary m-2' onclick = 'verif(\""+i+"-"+j+"\")'>Jouer</button>"; 
            }else{
                //je concacatene avec la fonction getImage en lui passant en parametre la valeur de tabJeu[i][j]
                txt += "<img src='"+getImage(tabJeu[i][j])+"'  class='m-2'> "
                
            }
        }
        txt += "</div>";
    }
    //je rajoute a mon id resultat le contenue de la variable txt(les carte ou images)
    result.innerHTML = txt;
} 

// fonction switch case qui va parcourir les index et selon la valeur va retourner une image

function getImage(valeur){
    //selon la valeur on va retourner(switcher) l'image correspondante
    //varable qui va stocker le chemin de l'image correspondante à la valeur de [i][j]. 
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
        // dans un switchcase on a generalement un default
        default : console.log("cas non pris en compte");
    }
    // vu que notre fonction doit retourner un element (getImage[i][j]) je rajoute a la fin un return  
    return imgTxt;
    //maintenant il va falloir definir ce que l'on veut retrourner (return) , et ce que l' on veut retourner c'est simplement le chemin de l'image correspondante à la valeur de [i][j].  
}

// je creer la fonction verif quoi va recuperer l'element cliquer 
// nous allons donc decouper le bouton afin de recuperer la ligne et la colonne.

function verif(bouton){
    //if correspndant au boulean ready
    if(ready){
        //on increment nbAffiche
            nbAffiche++;

            // je creer ma variable qui va recuperer l'element qui se trouve dans bonton.substr en lui placant sont emplacement en parametre (1-2)
            let ligne = bouton.substr(0,1);
            //je recupere aussi le contenue la colonne que jai vu dans la console (1-2)
            let colonne = bouton.substr(2,1);   
            //j'associe les ligne et colonne de mon tableau tabjeu a mon tableau tabResultat afin que si dans mon tabJeu je clique sur un bouton que celui-ci corresponde a l'index situer dans tabResultat
            tabJeu[ligne][colonne] = tabResultat[ligne][colonne];

            // et je reaffiche mon tableau avec 
            afficherTableau();

        // on creer notre comparaison 

        if(nbAffiche>1){
            ready = false;
          setTimeout(() => {
              //verification
              if(tabJeu[ligne][colonne] !== tabResultat[oldSelection[0]][oldSelection[1]]){
                tabJeu[ligne][colonne] = 0;
            // je reinitialise le dernier clique si les image ne correspond pas 
                tabJeu[oldSelection[0]][oldSelection[1]] = 0;
            }
            afficherTableau();
            ready = true;
            nbAffiche = 0;
          },1000)  
        } else{
               // maintenant ce quil faut faire c'est que l'orsque l'on clique sur 2 bouton que l'on face une verification pour voir si les images correspondent si elle corresponde alors on laissera les image afficher sinon on le retournera(c'est a dire remmetre la valeur 0 a l'interieur de notre tabjeu )
        // nous  allons faire en sorte de concerver le clique precedent a chaque fois pour cela je vais utiliser  (Oldselection) que je declare plus haut 
        oldSelection = [ligne,colonne];
        }
     
    }
   
}

//maintenant ce que l'on aimerez c'est afficher l'image du bouton sur lequelle on aura cliquer pour se faire il va falloir generer un tableau de resultat comme celui creer au debut qui va contenir le melange de toutes nos images
//function qui va genere le tableau aleatoirement 

function genereTabAleatoire(){
    let tab = [];
// cette variable contiendra le nombre d'image qu'il ya dans le tableau
    let nbImagePosition = [0,0,0,0,0,0,0,0];

    for(let i = 0; i < 4 ; i++){
        let ligne = [];
        for(let j = 0; j < 4 ; j++){
           let fin = false;
           while(!fin){
                //genere un numeros entre 0-7
            let randomImage =Math.floor (Math.random() * 8);
            if(nbImagePosition[randomImage] < 2){

                //+1 car nos images correspondant au valeur de 1 a 8 et non de 0 a 7
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


