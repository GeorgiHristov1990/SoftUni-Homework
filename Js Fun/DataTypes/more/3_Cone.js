function coneAreaAndSurface(r,h) {

    let s = Math.sqrt(r * r + h * h);

    let volume = Math.PI*r*r*h/3;
    let surfaceArea= Math.PI*r*(r+s);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
    
}

coneAreaAndSurface(3,5);
coneAreaAndSurface(3.3,7.8);