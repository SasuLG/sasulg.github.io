var infoNbProjects = document.querySelector('#NbProjets')

var listWork = document.querySelector('#listWork')
var NbProjects = 9

infoNbProjects.children[1].innerHTML = NbProjects

var images = ['odomo.png', 'biosphère.png', 'Installation de Poste.PNG', 'BD.PNG', 'site.png', 'PESTEL.png', 'GenMdp.PNG', 'Quizz.png', 'Memories.png']

var tabTitre =  ['Odomo', 'Biosphère', 'Installation de poste', 'Création de base de données', "Conception d'un site web", 'Analyse PESTEL', 'Générateur de mot de passe', 'Quizz', 'Memories']

var tabPres = ['Programmation d’une petite station météorologique, avec interface', 'Jeu de plateau avec un ajout des règles succéssives', "Installation d'un poste de travail sous une marchine virtuelle pour un programmeur GO"
,"Création d'une base de données ansi que le remplissage", "Conception d'un site web (d'une analyse Pestel d'un entreprise) comportant 3 pages", "Analyse PESTEL d'un entreprise (Delpeyrat)"
,"Générateur de mot de passe, avec plusieurs options(nb mdp, nb caractères, type caractères)", "Un quizz avec plusieurs niveau de difficulté ansi qu'un niveau bonus (avec quelques petits secrets)", "Un jeu de Memories en local (à 1 ou deux joueurs) avec plusieurs niveau de difficulté"]

var date = ['2022', '2022', '2022', '2022', '2022', '2022', '2023', '2023', '2023']
var nbLanguage = [1, 1, 1, 1, 1, 1, 2, 2, 2]
var nbLanguageTotal = 0
var Language = ['Java', 'Java', 'Shell', 'SQL', 'Html-Css', 'Managment', 'javascript', 'Html-Css', 'javascript', 'Html-Css', 'javascript', 'Html-Css']

var etude = [true, true, true, true, true, true, false, false]
var retExHtml = ["Odomo", "Biosphere", "InstallationPoste", "CreationBD", "SiteWebPeste", "PESTEL"]

for (var i = 0; i < NbProjects; i++){
    var divLanguage =document.createElement('div')
    listWork.appendChild(divLanguage)

        var divProject =document.createElement('div')
        var non = i+1
        divProject.id = ('Projet'+ non)
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

