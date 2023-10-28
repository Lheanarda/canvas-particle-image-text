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