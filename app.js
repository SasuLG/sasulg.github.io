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
var typeWorks = document.querySelector('#TypeWork')
var listWork = document.querySelector('#listWork')

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
            this.classList.add('yellow')
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
        default:
            console.log('erreur')
            break;
    }
    this.style.marginRight = '-35%'//
    WorkOfTypeWorks(this)
}

function WorkOfTypeWorks(e){
    var numWorks = 1;
    for (var i = 0; i < listWork.children.length; i++){
        listWork.children[i].style.display = 'none'
        var langs = listWork.children[i].className.split(' ')
        for(var j = 0; j < langs.length; j++){
            if (langs[j] == e.children[0].innerHTML || e.children[0].innerHTML == "All"){
                listWork.children[i].style.display = 'block'
                
                if (e.children[0].innerHTML == "All"){
                    if (j==0 ){
                        listWork.children[i].children[0].id = 'Projet'+numWorks
                        numWorks++
                    }
                }else{
                    listWork.children[i].children[0].id = 'Projet'+numWorks
                    numWorks++
                }
            }
        }

    }
}
listWork.style.gridTemplateRows+='1fr'
var images = document.querySelectorAll('#listWork img')
images.forEach(e=>{
    console.log(e.alt)
    if (e.alt == 'GenMdp'){
        e.addEventListener('click', mdp)
    }else if (e.alt == 'Quizz'){
        e.addEventListener('click', quizz)
    }else{
        e.addEventListener('click', oui)
    }
})
function oui(){
    window.open("Odomo.html", "popup");
}
function mdp(){
    window.open("https://sasulg.github.io/GenerateurMdp", "popup");
}
function quizz(){
    window.open("https://sasulg.github.io/Quizz", "popup");
}


var github = document.querySelector('#logo3')
github.addEventListener('click', git)
function git(){
    window.open("https://github.com/SasuLG", "popup");
}