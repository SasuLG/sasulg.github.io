var infoNbProjects = document.querySelector('#NbProjets')

var listWork = document.querySelector('#listWork')


var images = ['odomo.png', 'biosphère.png', 'Installation de Poste.PNG', 'BD.PNG', 'site.png', 'PESTEL.png', 'GenMdp.PNG', 'Quizz.png', 'Memories.png', 'jpo.png', 'graphe4.png', "game.png", "series.png", "myanylist.png"]

var tabTitre =  ['Odomo', 'Biosphère', 'Installation de poste', 'Création de base de données', "Conception d'un site web", 'Analyse PESTEL', 'Générateur de mot de passe', 'Quizz', 'Memories', 'Jeu Java', 'Exploraiton algo', "Game" , "Développement d'appli", "MyAnyList"]

var tabPres = ['Programmation d’une petite station météorologique, avec interface', 'Jeu de plateau avec un ajout des règles succéssives', "Installation d'un poste de travail sous une marchine virtuelle pour un programmeur GO"
,"Création d'une base de données ansi que le remplissage", "Conception d'un site web (d'une analyse Pestel d'un entreprise) comportant 3 pages", "Analyse PESTEL d'un entreprise (Delpeyrat)"
,"Générateur de mot de passe, avec plusieurs options(nb mdp, nb caractères, type caractères)", "Un quizz avec plusieurs niveau de difficulté ansi qu'un niveau bonus (avec quelques petits secrets)", "Un jeu de Memories en local (à 1 ou deux joueurs) avec plusieurs niveau de difficulté", 
"Jeu pour appprendre les bases de java qui consiste à déplacer une grenouille jusqu'au nénuphar", "En construction", "En construction", "Site de catalogue et de suivies de séries ", "Site de catalogue de séries/animés/films"]

var tabPresAnglais = ['Programming a small weather station, with interface', 'Board game with an addition of the rules', "Installation of a workstation under a virtual marchine for a GO programmer"
,"Creation of a database as well as the filling", "Design of a website (a Pestel analysis of a company) with 3 pages", "Pestel analysis of a company (Delpeyrat)"
,"Password generator, with several options (nb mdp, nb characters, type characters)", "A quiz with several difficulty levels as well as a bonus level (with some small secrets)", "A local Memories game (1 or two players) with several difficulty levels", 
"In construction", "In construction", "In construction", "In construction", "In construction"]

var date = ['2022', '2022', '2022', '2022', '2022', '2022', '2023', '2023', '2023', '2023', '2023', "2023", "2024", "2024"]
var nbLanguage = [1, 1, 1, 1, 1, 1, 2, 2, 2,1,1, 2, 4, 3]
var nbLanguageTotal = nbLanguage.map(x => x).reduce((a, b) => a + b, 0) - 1
var Language = ['Java', 'Java', 'Shell', 'SQL', 'Html-Css', 'Managment', 'javascript', 'Html-Css', 'javascript', 'Html-Css', 'javascript', 'Html-Css', 'Java', "Java", "Html-Css", "javascript", "PHP", "Html-Css","javascript", "Managment", "javascript", "Html-Css", "SQL"]

var etude = [true, true, true, true, true, true, false, false, false, true, true, false, true, false]
var retExHtml = ["Odomo", "Biosphere", "InstallationPoste", "CreationBD", "SiteWebPeste", "PESTEL", "","","","JPO",  "ExploAlgo","", "Catalogue", ""]

var NbProjects = tabTitre.length

infoNbProjects.children[1].innerHTML = NbProjects +2

function build(){
    for (var i = NbProjects-1; i >=0 ; i--){
        var divLanguage =document.createElement('div')
        if (i<NbProjects - 8){
            divLanguage.style.display = 'none'
        }
        listWork.appendChild(divLanguage)
    
            var divProject =document.createElement('div')
            var numProject = i+1
            divProject.id = ('Projet'+ numProject)
            if (numProject%2==0){
                divProject.classList.add('ProjetsGauche')
            }else{
                divProject.classList.add('ProjetsDroite')
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
                            imgEtude.classList.add('etudeDroite')
                        }else{
                            imgEtude.classList.add('etudeGauche')
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
                    for (var k = nbLanguage[i] - 1; k >= 0; k--){
    
    
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
                        nbLanguageTotal--
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