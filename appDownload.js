var download = document.querySelector('#download')
console.log(download)
download.addEventListener('click', non)

function non(){
    window.open("Odomo.pdf", "popup");
}