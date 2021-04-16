// let red = document.getElementById("red","red1");



// change();

// function change(){
//     red.addEventListener("click", function(){
//         red.style.background = "black";
//     })
// }





//constante dans la on va stocker notre jeu
//on selection l'id resultat pour pouvoir le modifier 

// --------------------------------------------------------script game-----------------------------------------------------------

const result = document.querySelector("#resultat");


//tableau de cartes
let tabJeu = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]

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
            txt += "<button class= 'btn btn-primary m-2'>Jouer</button>"; 
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