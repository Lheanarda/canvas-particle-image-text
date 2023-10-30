import { canvas, ctx } from "./canvas";
import Effect from "./class/Effect";
import { PRINTED_TEXT, TOTAL_IMAGES } from "./constants";
import { loadImage } from "./utils";

const containerLoading = document.getElementById('container-loading')
const loadingProgress = document.getElementById('loading-progress')

function removeLoadingPage(){
    containerLoading.style.display = 'none'
}

async function initCanvasPage(){
    const effect = new Effect()

    let progress = 0
    let progressPerPhoto = 100/TOTAL_IMAGES
    for(let i = 1; i<= TOTAL_IMAGES; i++){
        await loadImage(`/assets/photo${i}.jpg`)
        progress += progressPerPhoto
        loadingProgress.textContent = `${progress.toFixed(0)}%`
    }

    removeLoadingPage()


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
}


initCanvasPage()
