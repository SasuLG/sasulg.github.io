var infoNbProjects = document.querySelector('#NbProjets')

var listWork = document.querySelector('#listWork')


var images = ['odomo.png', 'biosphère.png', 'Installation de Poste.PNG', 'BD.PNG', 'site.png', 'PESTEL.png', 'GenMdp.PNG', 'Quizz.png', 'Memories.png', 'jpo.png', 'enConstru.png', 'graphe4.png', 'enConstru.png']

var tabTitre =  ['Odomo', 'Biosphère', 'Installation de poste', 'Création de base de données', "Conception d'un site web", 'Analyse PESTEL', 'Générateur de mot de passe', 'Quizz', 'Memories', 'Jeu Java', 'Jeu IHM', 'Exploraiton algo', 'Analyse de données']

var tabPres = ['Programmation d’une petite station météorologique, avec interface', 'Jeu de plateau avec un ajout des règles succéssives', "Installation d'un poste de travail sous une marchine virtuelle pour un programmeur GO"
,"Création d'une base de données ansi que le remplissage", "Conception d'un site web (d'une analyse Pestel d'un entreprise) comportant 3 pages", "Analyse PESTEL d'un entreprise (Delpeyrat)"
,"Générateur de mot de passe, avec plusieurs options(nb mdp, nb caractères, type caractères)", "Un quizz avec plusieurs niveau de difficulté ansi qu'un niveau bonus (avec quelques petits secrets)", "Un jeu de Memories en local (à 1 ou deux joueurs) avec plusieurs niveau de difficulté", 
"Jeu pour appprendre les bases de java qui consiste à déplacer une grenouille jusqu'au nénuphar", "En constru", "En constru", "En constru"]

var tabPresAnglais = ['Programming a small weather station, with interface', 'Board game with an addition of the rules', "Installation of a workstation under a virtual marchine for a GO programmer"
,"Creation of a database as well as the filling", "Design of a website (a Pestel analysis of a company) with 3 pages", "Pestel analysis of a company (Delpeyrat)"
,"Password generator, with several options (nb mdp, nb characters, type characters)", "A quiz with several difficulty levels as well as a bonus level (with some small secrets)", "A local Memories game (1 or two players) with several difficulty levels", 
"In construction", "In construction", "In construction", "In construction"]

var date = ['2022', '2022', '2022', '2022', '2022', '2022', '2023', '2023', '2023', '2023', '2023', '2023', '2023']
var nbLanguage = [1, 1, 1, 1, 1, 1, 2, 2, 2,1,1, 1, 4]
var nbLanguageTotal = 0
var Language = ['Java', 'Java', 'Shell', 'SQL', 'Html-Css', 'Managment', 'javascript', 'Html-Css', 'javascript', 'Html-Css', 'javascript', 'Html-Css', 'Java', 'CSharp', 'Shell', 'C#', "Python", "SQL", "Managment"]

var etude = [true, true, true, true, true, true, false, false, false, true, true, true, true]
var retExHtml = ["Odomo", "Biosphere", "InstallationPoste", "CreationBD", "SiteWebPeste", "PESTEL", "", "", "", ""]

var NbProjects = tabTitre.length

infoNbProjects.children[1].innerHTML = NbProjects

function build(){
    for (var i = 0; i < NbProjects; i++){
        var divLanguage =document.createElement('div')
        if (i>7){
            divLanguage.style.display = 'none'
        }
        listWork.appendChild(divLanguage)
    
            var divProject =document.createElement('div')
            var numProject = i+1
            divProject.id = ('Projet'+ numProject)
            if (numProject%2==0){
                divProject.classList.add('ProjetsDroite')
            }else{
                divProject.classList.add('ProjetsGauche')
            }
            divLanguage.appendChild(divProject)
    
                var divImages =document.createElement('div')
                divImages.classList.add("images")
                divProject.appendChild(divImages)
                    
                    if (etude[i]){
                        var imgEtude = document.createElement('img')
                        imgEtude.src = "image/etude.png"
                        imgEtude.alt = "etude"
                        if (i%2==0){
                            imgEtude.classList.add('etudeGauche')
                        }else{
                            imgEtude.classList.add('etudeDroite')
                        }
                        imgEtude.id  = tabTitre[i]
                        divImages.appendChild(imgEtude)
                    }
                    
                    var a = document.createElement('a')
                    if (etude[i]){
                        a.href = "retEx/"+retExHtml[i]+".html"
                        a.target = "blank"
                    }
                    a.classList.add('linkProjects')
                    divImages.appendChild(a)
                    
    
                    var img = document.createElement('img')
                    img.src = "image/projets/"+images[i]
                    img.alt = tabTitre[i]
                    a.appendChild(img)
                    //divImages.appendChild(img)
    
                var texte = document.createElement('div')
                texte.classList.add('texte')
                divProject.appendChild(texte)
    
                    var titre = document.createElement('div')
                    titre.classList.add('titre')
                    texte.appendChild(titre)
                        
                        var h2 = document.createElement('h2')
                        h2.innerHTML = tabTitre[i]
                        titre.appendChild(h2)
    
                    var pres = document.createElement('div')
                    pres.classList.add('pres')
                    texte.appendChild(pres)
    
                        var p = document.createElement('p')
                        p.innerHTML = tabPres[i]
                        pres.appendChild(p)
    
    
                    var infosLang = document.createElement('div')
                    infosLang.classList.add('infosLang')
                    texte.appendChild(infosLang)
                    for (var k = 0; k < nbLanguage[i]; k++){
    
    
                            var border = document.createElement('div')
                            border.classList.add('border')
                            infosLang.appendChild(border)
    
                                var p2 = document.createElement('p')
                                if(Language[nbLanguageTotal] == 'Html-Css'){
                                    p2.innerHTML = 'Html/Css'
                                }else if (Language[nbLanguageTotal] == 'CSharp'){
                                    p2.innerHTML = 'C#'
                                }else{
                                    p2.innerHTML = Language[nbLanguageTotal]
                                }
                                border.appendChild(p2)
    
                        divLanguage.classList.add(Language[nbLanguageTotal])
                        nbLanguageTotal++
                    }
    
                    var infosDate = document.createElement('div')
                    infosDate.classList.add('infosDate')
                    texte.appendChild(infosDate)
                    
                        var border2 = document.createElement('div')
                        border2.classList.add('border')
                        infosDate.appendChild(border2)
    
                            var p3 = document.createElement('p')
                            p3.innerHTML = date[i]
                            border2.appendChild(p3)
    }
}
build()

//DEPLACER DANS APP
/*
if (NbProjects>7){
    var showAllDiv = document.createElement('div')
    showAllDiv.id = 'showAllDiv'
    var showAll = document.createElement('h1')
    showAllDiv.appendChild(showAll)
    showAll.addEventListener('click', voirTout)
    showAll.innerHTML = "Voir tout"
    showAll.id = 'showAll'
    showAll.classList.add('border')
    var work = document.querySelector('#work')
    work.appendChild(showAllDiv)
}

function voirTout(){
    for (var i  = 0; i < listWork.childElementCount; i++){
        if (showAll.innerHTML == 'Voir tout'){
            listWork.children[i].children[0].id = 'Projet'+(i+1)
                        
            if ((i+1)%2==0){
                listWork.children[i].children[0].classList = 'ProjetsDroite'
            }else{
                listWork.children[i].children[0].classList = 'ProjetsGauche'
            }
            listWork.children[i].style.display = 'block'
        }else{
            if (i>7 && i < listWork.childElementCount){
                listWork.children[i].style.display = 'none' 

            }
        }
    }
    if (showAll.innerHTML == 'Voir tout'){
        showAll.innerHTML = 'Cacher'
    }else{
        showAll.innerHTML = 'Voir tout'
    }
}
*/