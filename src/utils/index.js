import { canvas, ctx } from "../canvas"

export function getCenterXandY(){
    return{
        x: canvas.width / 2,
        y: canvas.height / 2
    }
}

export function generateFontSize(){
    if(canvas.width <= 600){
        return 80
    }
    else{
        return 130
    }
}
export function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


export function loadImage(url) {
    return new Promise(r => { let i = new Image(); i.onload = (() => r(i)); i.src = url; });
}