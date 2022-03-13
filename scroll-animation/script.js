 document.addEventListener('DOMContentLoaded', () => {
    let boxes = document.querySelectorAll('.box')
    let active = false
    
    checkBoxes(boxes)

    function checkBoxes(boxes) {
        const triggerBottom = window.innerHeight / 5 * 4
        // for each box, if it is on the viewport
        // add "show" class
        // if not remove "show" class
        boxes.forEach(box => {
            // detect if the box is on the viewport
            if (box.getBoundingClientRect().top <= triggerBottom) {
                box.classList.add("show")
            } else {
                box.classList.remove("show")
            }
        })
    }

    const lazyLoad = function() {
        if (active === false) {
            active = true

            setTimeout(() => {
                checkBoxes(boxes)
                active = false
            }, 200)
        }
    }

    document.addEventListener('scroll', lazyLoad)
})