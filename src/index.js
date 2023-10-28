import { canvas, ctx } from "./canvas";
import Effect from "./class/Effect";
import { PRINTED_TEXT, TOTAL_IMAGES } from "./constants";
import { loadImage } from "./utils";


window.addEventListener('load',async ()=>{
    const effect = new Effect()


    const load = document.getElementById('load')
    for(let i = 1; i<= TOTAL_IMAGES; i++){
        await loadImage(`/assets/photo${i}.jpg`)
    }

    load.style.visibility = 'hidden'


    function animate(){
        ctx.clearRect(0,0,canvas.clientWidth, canvas.height)
        requestAnimationFrame(animate)

        effect.render()
    }

    animate()

    window.addEventListener('resize',()=>{
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        effect.resize()
        effect.wrapText(PRINTED_TEXT)
    })

})



