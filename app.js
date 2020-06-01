
const inputs = document.querySelectorAll('.input');

inputs.forEach(input => input.addEventListener('focus', funcFocus));
inputs.forEach(input => input.addEventListener('blur', funcBlur));

function funcFocus(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function  funcBlur(){
    let parent = this.parentNode.parentNode;
    if(this.value==''){
        parent.classList.remove('focus');
    }
    
}