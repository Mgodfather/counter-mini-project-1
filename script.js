let increBtn = document.querySelector('.incre')
let decreBtn = document.querySelector('.decre')

let countBy = document.querySelector('.countby')

let numResult = document.querySelector('.num')

let resetBtn = document.querySelector('.reset')

let count = 0;

// THIS LOGIC IS BULD BY ME

increBtn.addEventListener('click', () => {
    if (countBy.value) {
        count += parseInt(countBy.value)
        numResult.innerText = `${count}`
    } else {
        count += 1
        numResult.innerText = `${count}`
    }
})

decreBtn.addEventListener('click', () => {
    if (countBy.value) {
        count -= parseInt(countBy.value)
        numResult.innerText = `${count}`
    } else {
        count -= 1
        numResult.innerText = `${count}`
    }
})

resetBtn.addEventListener('click', () => {
    countBy.value = ''
    count = 0
    numResult.innerText = 0
})



//THIS LOGIC IS FROM YOUTUBE --(Procodr)

// let count = parseInt(numResult.innerText);
// increBtn.addEventListener('click', () => {
//         count += parseInt(countBy.value)
//         numResult.innerText = `${count}`
// })

// decreBtn.addEventListener('click', () => {
//         count -= parseInt(countBy.value)
//         numResult.innerText = `${count}`
// })

// resetBtn.addEventListener('click', () => {
//     // countBy.value = ''
//     count = 0
//     numResult.innerText = 0
// })