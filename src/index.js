let item = document.querySelectorAll('div.b-item')
let i = 0
let it = 0
let run = 5

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let intervals = setInterval(function() {
    if (it == 0) {
        let run = getRandomInt(item.length)
        i = run
        let elem = document.createElement("img");
        elem.setAttribute("src", "goblin.png");
        elem.classList.add("img");
        random(item[run], elem)
    } else {
        let run = getRandomInt(item.length)
        if (run == i) {
            if (run == item.length - 1) {
                run--
            } else {
                run++
            }
            i = run
            let elem = document.createElement("img");
            elem.setAttribute("src", "goblin.png");
            elem.classList.add("img");
            random(item[run], elem)
        } else {
            i = run
            let elem = document.createElement("img");
            elem.setAttribute("src", "goblin.png");
            elem.classList.add("img");
            random(item[run], elem)
        }
    }
    ++it
    run--
if (run != 0) {
    
} else {
    document.querySelector(".check-result").textContent = "LOSE"
    clearInterval(intervals);
    document.querySelectorAll(".img").forEach(box =>
        box.remove()
    )
}
    
}, 1000);

  
function random(randoms, elem) {
    let interval = setInterval(function() {
        randoms.appendChild(elem)
    }, 1000);
    setTimeout(function() {
        clearInterval(interval);
    }, 1000); 
    let rem = document.querySelector('img')
    if (rem != null) {
        rem.remove()
    }

}


const eventClick = document.querySelectorAll(".b-item").forEach(box =>
    box.addEventListener("click", function () {
            if (box.children[0] != undefined) {
                if (document.querySelector(".check-result").textContent == "4") {
                    document.querySelector(".check-result").textContent = "WIN"
                    clearInterval(intervals);
                    document.querySelectorAll(".img").forEach(box =>
                        box.remove()
                    )
                } else {
                    document.querySelector(".check-result").textContent++
                    let rem = document.querySelector('img')
                    rem.remove()
                }
                run++
            }

    })
)