var listParticules = [];

class Particules{
    constructor(){
        this.particules = document.createElement('div');
        this.particules.classList.add('particules');

        //this.particules.style.top = Math.random() * window.innerHeight-100 + 'px';
        this.particules.style.top = window.innerHeight-100 + 'px';//
        this.particules.style.left = Math.random() * window.innerWidth -100 + 'px';

        this.opacity = 1;
        this.Changeopacity = -1;
        this.brigthness = 100;
        this.particules.style.transition = 'transform 0.5s';

        var taille = Math.random() * (10-5)+5;
        this.particules.style.width = taille + 'px';
        this.particules.style.height =taille + 'px';
        this.particules.style.opacity = Math.random();

        /*
        this.direcitonTop = Math.floor(Math.random() * (3-(-3))-3);
        while(this.direciton == 0){
            this.direcitonTop = Math.floor(Math.random() * (3-(-3))-3);
        }
        */
        this.direcitonTop = -3;//
        this.direcitonLeft = Math.floor(Math.random() * (3-(-3))-3);
        while(this.direcitonLeft == 0){
            this.direcitonLeft = Math.floor(Math.random() * (3-(-3))-3);
        }

        document.body.appendChild(this.particules);
        listParticules.push(this);

        //
        var color1 = Math.floor(Math.random()*16777215).toString(16);
        var color2 = Math.floor(Math.random()*16777215).toString(16);
        var color3 = Math.floor(Math.random()*16777215).toString(16);
        this.particules.style.backgroundImage = `radial-gradient(#${color1}, #${color2} 10%, #${color3} 56%)`;
        this.particules.style.borderRadius = '50%';
        
    }
    animate() {
        var computedStyle = getComputedStyle(this.particules);
        var theTop = parseInt(computedStyle.top);
        var theLeft = parseInt(computedStyle.left);


        this.particules.style.top = (theTop + this.direcitonTop) + 'px';
        this.particules.style.left = (theLeft + this.direcitonLeft) + 'px';

        if (this.opacity < 0.5) {
            this.particules.style.transform = 'scale3d(1, 1, 1)';
        }
        if (this.opacity < 0.1) {
            this.Changeopacity = 1;
            this.particules.style.transform = 'scale3d(0.4, 0.4, 1)';
        }
        if (this.opacity > 0.5) {
            this.particules.style.transform = 'scale3d(2, 2, 1)';
        }
        if (this.opacity > 1) {
            this.Changeopacity = -1;
        }
        this.opacity += 0.01 * this.Changeopacity;
        this.particules.style.opacity = this.opacity;
        this.brigthness += 0.1 * this.Changeopacity;
        this.particules.style.filter = 'brightness(' + this.brigthness + '%)';

        if (theTop > window.innerHeight - 30 || theLeft > window.innerWidth - 30 || theTop < 0 || theLeft < 0) {
            listParticules.splice(listParticules.indexOf(this), 1);
            this.particules.remove();
        }
    }
}
var i = 0
function animate() {
    listParticules.forEach(particules => {
        particules.animate();
    });
    if (i %4 == 0){
        new Particules();
    }
    i++;
    requestAnimationFrame(animate);
}
animate();
//window.addEventListener('load', animate());

