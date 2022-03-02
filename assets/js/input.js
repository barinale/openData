const input = document.querySelectorAll('.input-controll')

input.forEach(element=>{
    element.querySelector('input').addEventListener('focus',()=>{
        element.style.outline="2px solid #58DD3A"
    })
       element.querySelector('input').addEventListener('blur',()=>{
        element.style.outline="none"
    })
})

const inputCheck = document.querySelector('.check input')

inputCheck.addEventListener('focus',()=>{
           inputCheck.style.outline="2px solid #58DD3A"

})

inputCheck.addEventListener('blur',()=>{
           inputCheck.style.outline="none"

})

// console.log((1440-180-25)/2)
// console.log(597.5 *2)

// console.log(779 - 108)
// console.log(617 + 25)