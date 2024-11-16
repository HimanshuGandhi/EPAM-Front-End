const table = document.querySelector('table');
const cells=document.querySelectorAll('td');

table.addEventListener('click',function(eve){
const cell= eve.target;

if (cell.classList.contains('special')) {
cell.classList.add('yellow')
cells.forEach(c => {
if ( !c.parentNode.classList.contains('blue') && !c.classList.contains('yellow')) {
c.classList.add('green');
}
});
}


cell.classList.add('yellow')


if(cell.cellIndex===0){


let rowIn=cell.parentNode.rowIndex;

rowIn=rowIn*3;
for(let i=rowIn;i<=rowIn+2;++i){
cells[i].classList.remove('green');
}
const row = cell.parentNode;


cell.classList.remove('yellow');
row.classList.add('blue');
} else{

if(cell.classList.contains('green')){
cell.classList.remove('green')
cell.classList.add('yellow')
}
}

})


/* START TASK 2: Your code goes here */
const input = document.getElementById('validation');
const regex = /^[+]{1}(380)[0-9]{9}$/


const btn = document.querySelector('button');
const p =document.createElement('p');
input.addEventListener('input',function(){
    if(regex.test(input.value)){
        btn.disabled=false;
        p.classList.remove('error')
        p.classList.remove('inp')
        p.innerHTML='';
        input.style.borderColor='black';
        btn.addEventListener('click',function(){
        p.innerHTML='Data was succesfully sent';
        p.classList.add('validated');
        input.insertAdjacentElement('beforebegin',p)
        })
    }else{
            input.style.borderColor='red';
            btn.disabled=true;
            p.innerHTML='Type number does not follow format +380*********';
            p.classList.remove('validated');
            p.classList.add('error');
            p.classList.add('inp');
            input.insertAdjacentElement('beforebegin',p)
    
       
    }
})




