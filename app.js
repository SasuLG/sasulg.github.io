/*
var cursor = document.querySelector('.cursor')
var body = document.querySelector('body')
console.log(cursor)
document.addEventListener('mousemove', e=>{
    body.style.cursor = 'none'
    cursor.setAttribute('style', 'top:'+(e.pageY)+"px; left:" +(e.pageX)+"px;")
})

document.addEventListener('scroll', e=>{
    cursor.setAttribute('style', 'top:'+(window.scrollY + cursor.offsetTop)+"px; left:" +(cursor.offsetLeft)+"px;")
    console.log(document.documentElement.scrollTop)
    console.log(window.scrollY)

})
*/

document.querySelectorAll('.skill-tooltip').forEach((tooltip) => {
    const isRight = Math.random() > 0.5;
    const tooltipRect = tooltip.getBoundingClientRect();
    // if (tooltipRect.left > window.innerWidth * 0.6) {
    //     isRight = true;
    // }
    if (isRight) tooltip.style.transform = 'translateX(25%) translateY(10px)';
    else tooltip.style.transform = 'translateX(-50%) translateY(10px)';

    let t = 0;

    function float() {
        
        t += 0.025;
        let y = Math.sin(t) * 5;
        
        tooltip.style.transform = `translateX(-20%) translateY(${y}px)`;

        tooltip._raf = requestAnimationFrame(float);
    }

    tooltip.parentElement.addEventListener('mouseenter', () => {
        t = 0;
        float();
    });

    tooltip.parentElement.addEventListener('mouseleave', () => {
        cancelAnimationFrame(tooltip._raf);
        // if (tooltipRect.left > window.innerWidth * 0.6) isRight = true;
        const isRight = Math.random() > 0.5;
        if (isRight) tooltip.style.transform = 'translateX(25%) translateY(10px)';
        else tooltip.style.transform = 'translateX(-50%) translateY(10px)';
    });
});

var typeWorks = document.querySelector('#TypeWork')
var listWork = document.querySelector('#listWork')

var divNbProjets = document.querySelector('#NbLanguage')
divNbProjets.children[2].innerHTML = typeWorks.childElementCount-1

for (var i = 0; i < typeWorks.childElementCount; i++){
    typeWorks.children[i].addEventListener('click', typeWorkClick)
}

function typeWorkClick(){
    for (var i = 0; i < typeWorks.childElementCount; i++){

       if(typeWorks.children[i].className != ""){
        typeWorks.children[i].classList.remove(typeWorks.children[i].className)
        typeWorks.children[i].style.marginRight = '0%'//
       }

    }
    switch(this.children[0].innerHTML.toLowerCase()){
        case 'all':
            this.classList.add('oui')
            break;
        case 'java':
            this.classList.add('red')
            break;
        case 'javascript':
            this.classList.add('yellowgreen')
            break;
        case 'html-css':
            this.classList.add('blue')
            break;
        case 'sql':
            this.classList.add('orange')
            break;
        case 'shell':
            this.classList.add('black')
            break;
        case 'managment':
            this.classList.add('gray')
            break;
        case 'c#':
            this.classList.add('purple')
            break;
        case 'python':
            this.classList.add('yellow')
            break;
        case 'php':
            this.classList.add('purpleBlue')
            break;
        default:
            console.log('erreur')
            break;
    }
    this.style.marginRight = '-35%'//
    WorkOfTypeWorks(this)
}
var langChoice
function WorkOfTypeWorks(e){
    langChoice = e.children[0].innerHTML
    var numWorks = 1;
    for (var i = 0; i < listWork.children.length; i++){
        listWork.children[i].style.display = 'none'
        var langs = listWork.children[i].className.split(' ')
        for(var j = 0; j < langs.length; j++){
            if ((langs[j] == e.children[0].innerHTML || e.children[0].innerHTML == "All" ) ||(langs[j] == 'CSharp' && e.children[0].innerHTML == 'C#')){
                listWork.children[i].style.display = 'block'
                
                if (e.children[0].innerHTML == "All"){
                    if (j==0 ){
                        listWork.children[i].children[0].id = 'Projet'+numWorks
                        
                        if (numWorks%2==0){
                            listWork.children[i].children[0].classList = 'ProjetsDroite'
                        }else{
                            listWork.children[i].children[0].classList = 'ProjetsGauche'
                        }

                        if (listWork.children[i].children[0].children[0].children[0].alt!=undefined){
                            if (numWorks%2!=0){
                                listWork.children[i].children[0].children[0].children[0].classList = 'etudeGauche'
                            }else{
                                listWork.children[i].children[0].children[0].children[0].classList = 'etudeDroite'
                            }
                        }

                        numWorks++
                        //Affiche tout, voir si juste afficher les n premiers
                        showAll.innerHTML = 'Cacher'
                    }
                }else{
                    listWork.children[i].children[0].id = 'Projet'+numWorks

                    if (numWorks%2==0){
                        listWork.children[i].children[0].classList = 'ProjetsDroite'
                    }else{
                        listWork.children[i].children[0].classList = 'ProjetsGauche'
                    }

                    if (listWork.children[i].children[0].children[0].children[0].alt!=undefined){
                        if (numWorks%2!=0){
                            listWork.children[i].children[0].children[0].children[0].classList = 'etudeGauche'
                        }else{
                            listWork.children[i].children[0].children[0].children[0].classList = 'etudeDroite'
                        }
                    }
                    
                    numWorks++
                }
            }
        }

    }
}

var projects = document.querySelectorAll('#listWork img')
projects.forEach(e=>{
    if (e.alt != "etude"){
        e.addEventListener('mouseover', hover)
        e.addEventListener('mouseout', unhover)
    }
})
function hover(){
    //this.previousSibling.id = 'etudeHover'
    if (this.parentNode.previousSibling !=null){
        this.parentNode.previousSibling.id = 'etudeHover'
    }
}
       
function unhover(){
    //this.previousSibling.id = this.alt
    if (this.parentNode.previousSibling !=null){
        this.parentNode.previousSibling.id = this.alt
    }
}

listWork.style.gridTemplateRows+='1fr'
var images = document.querySelectorAll('#listWork img')
images.forEach(e=>{
    if (e.alt == 'Générateur de mot de passe'){
        e.style.cursor = 'pointer' 
        e.addEventListener('click', mdp)
    }else if (e.alt == 'Quizz'){
        e.addEventListener('click', quizz)
        e.style.cursor = 'pointer' 
    }else if(e.alt == 'Memories'){
        e.style.cursor = 'pointer' 
        e.addEventListener('click', memories)
    }else if (e.alt == 'MyAnyList'){
        e.style.cursor = 'pointer' 
        e.addEventListener('click', myAnyList)
    }else if (e.alt == 'Anges MDM'){
        e.style.cursor = 'pointer' 
        e.addEventListener('click', anges)
    }else{
        
    }
})

function mdp(){
    window.open("https://sasulg.github.io/GenerateurMdp", "popup");
}
function quizz(){
    window.open("https://sasulg.github.io/Quizz", "popup");
}
function memories(){
    window.open("https://sasulg.github.io/Memories", "popup");
}
function myAnyList(){
    window.open("https://myanylist.vercel.app", "popup");
}
function anges(){
    window.open("https://anges-mdm.vercel.app", "popup");
}


var github = document.querySelector('#logo3')
github.addEventListener('click', git)
function git(){
    window.open("https://github.com/SasuLG", "popup");
}
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
    var numProjetsLang = 0
    for (var i  = 0; i < listWork.childElementCount; i++){
        var langs = listWork.children[i].className.split(' ')
        var isadd = false
        for (var j = 0; j < langs.length; j++){
            if (showAll.innerHTML == 'Voir tout' && ((langs[j] == langChoice || langChoice == "All" ) ||(langs[j] == 'CSharp' && langChoice == 'C#' || langChoice == undefined)) ){//&& i>7
                if (!isadd){
                    numProjetsLang++
                    isadd = true
                }
                listWork.children[i].children[0].id = 'Projet'+(numProjetsLang)
                if (numProjetsLang%2==0){
                    listWork.children[i].children[0].classList = 'ProjetsDroite'
                }else{
                    listWork.children[i].children[0].classList = 'ProjetsGauche'
                }
                listWork.children[i].style.display = 'block'
            }else{
                if (listWork.children[i].children[0].id.split('t')[1]>8 && i < listWork.childElementCount && !isadd){
                    listWork.children[i].style.display = 'none' 
                }
            }
        }
    }
    if (showAll.innerHTML == 'Voir tout'){
        showAll.innerHTML = 'Cacher'
    }else{
        showAll.innerHTML = 'Voir tout'
    }
}


/*
var pixelsParcourus = 0;
document.onmousemove = function(e){
    pixelsParcourus++;
    if (pixelsParcourus >= 2){
        var index = listParticules2.length
        particule = new Particules(e.x, e.y+scrolled, true)
        //particule.particules.style.backgroundColor = "red"
        setTimeout(()=> deleteParticule(index),1500)
        pixelsParcourus = 0
    }
}


document.onmousedown = function(e){
    for (var i = 0; i < 8; i++){
        setTimeout(()=>{
            var index = listParticules2.length
            particule = new Particules(e.x, e.y+scrolled, true)
            particule.particules.style.backgroundColor = "red"
            setTimeout(()=> deleteParticule(index),1500)
        },100)
    }
}
function deleteParticule(index){
    var test = document.querySelectorAll(".particules")
    test.forEach(e=>{
        if (e.id == "particule"+(index+1)){
            e.style.opacity = 0
            document.body.removeChild(e)
            listParticules2.splice(index%listParticules2.length, 1)
        }
    })
}
*/
//possibilite de ne pas les anime
//possibilite de ne pas les activer
//faire gaffe avec les images