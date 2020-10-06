import '../scss/style.scss';

const input=document.querySelectorAll('.input-div');

// const blurfunc=(el)=>{
//     if(el.value==""){
//         parent.classList.remove('focus');
//     }
// }

input.forEach(el=>{
    el.addEventListener('click',()=>{
        // const focused=document.querySelectorAll('.focus');
        // focused.forEach(el=>{
        //     el.classList.remove('focus');
        // });

        el.classList.add('focus')
    });
    el.parentNode.addEventListener('mouseout',()=>{
        if(el.childNodes[3].childNodes[3].value==""){
            el.classList.remove('focus');
        }
    });
    
})


