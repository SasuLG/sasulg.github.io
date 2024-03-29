var scrolled = 0
document.addEventListener('scroll', e=>{
    scrolled = window.scrollY
})

var listParticules = [];
var listParticules2 = [];
class Particules{
    constructor(x, y, mooved){
        this.particules = document.createElement('div');
        this.particules.classList.add('particules');
        this.mooved = mooved

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

        //
        if (!mooved){
            var color1 = Math.floor(Math.random()*16777215).toString(16);
            var color2 = Math.floor(Math.random()*16777215).toString(16);
            var color3 = Math.floor(Math.random()*16777215).toString(16);
            this.particules.style.backgroundImage = `radial-gradient(#${color1}, #${color2} 10%, #${color3} 56%)`;
        }

        this.particules.style.borderRadius = '50%';
        
        if (x != null && y!= null){
            this.particules.style.top = y + 'px';
            this.particules.style.left = x + 'px';
            //this.direcitonTop = 10
        }
        document.body.appendChild(this.particules);
        if (mooved){
            listParticules2.push(this);
            this.particules.id = 'particule'+listParticules2.length;
        }else{
            listParticules.push(this);
            this.particules.id = 'particule'+listParticules.length;
        }
        this.computedStyle = getComputedStyle(this.particules);

    }
    animate() {
        var theTop = parseInt(this.computedStyle.top);
        var theLeft = parseInt(this.computedStyle.left);

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

        if ((theLeft > window.innerWidth - 30 || theTop < 0 || theLeft < 0) && !this.mooved) {
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
    listParticules2.forEach(particules => {
        particules.animate();
    });
    if (i %4 == 0 && scrolled < 1000){
        new Particules(null, null, false);
    }
    i++;
    requestAnimationFrame(animate);
}
animate();
//window.addEventListener('load', animate());

