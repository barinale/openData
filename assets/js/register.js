const input = document.querySelectorAll('.input-controll')

input.forEach(element=>{
    element.addEventListener('click',()=>{
        element.querySelector('input').focus();
    })
    if(!element.querySelector('input').value.trim()==''){
        element.querySelector('label:first-child').style.visibility="visible"
        element.querySelector('.input > span').style.display="none"
    }
    element.querySelector('input').addEventListener('focus',()=>{
        // element.style.border="2px solid #58DD3A"
        // element.querySelector('label:first-child').style.color="#58DD3A";
        // element.querySelector('label:first-child').style.visibility="visible"
        // element.querySelector('.input > span').style.display="none"

        //    element.style.border="2px solid #58DD3A"
        // element.querySelector('label:first-child').style.color="#58DD3A";
        // element.querySelector('label:first-child').style.visibility="visible"
        // element.querySelector('.input > span').style.display="none"
        // element.style.padding='6px 17px 7px 10px';
element.style.border="2px solid #58DD3A"
        element.querySelector('label:first-child').style.color="#58DD3A";
        element.querySelector('label:first-child').style.visibility="visible"
        element.querySelector('.input > span').style.display="none"
        element.style.padding="8px 15px 5px 10px"
        element.style.marginBottom='16px';

    })
        // element.querySelector('input').addEventListener('blur',()=>{
        // element.style.border="2px solid transparent"
        // element.querySelector('label:first-child').style.color="#9a9a9a";
        // if(element.querySelector('input').value.trim()==''){
        //     element.querySelector('label:first-child').style.visibility="hidden"
        //     element.querySelector('.input > span').style.display="block"
        // }
          element.querySelector('input').addEventListener('blur',()=>{
        element.style.border="2px solid transparent"
        element.style.marginBottom='15px';
        element.style.padding="7px 15px 7px 10px"

        element.querySelector('label:first-child').style.color="#9a9a9a";
        if(element.querySelector('input').value.trim()==''){
            element.querySelector('label:first-child').style.visibility="hidden"
            element.querySelector('.input > span').style.display="block"
        }

    })
})

const inputCheck = document.querySelector('.check input')

inputCheck.addEventListener('focus',()=>{
           inputCheck.style.border="2px solid #58DD3A"

})

inputCheck.addEventListener('blur',()=>{
           inputCheck.style.border="none"

})

// const lset = document.querySelector('.password ')
//         lset.style.border="2px solid #58DD3A"
//         lset.querySelector('label:first-child').style.color="#58DD3A";
//         lset.querySelector('label:first-child').style.visibility="visible"
//         lset.querySelector('.input > span').style.display="none"
//         lset.style.padding="7px 15px 5px 10px"
//         lset.style.marginBottom='16px'