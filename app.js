const myInput = document.querySelector('.search-input');
const myForm = document.querySelector('.my-form');
const tasksContainer = document.querySelector('.tasks');
const task = tasksContainer.firstElementChild;
const checkTasks = document.querySelectorAll('.check-task');
const clearBtn = document.querySelector('.clear-tasks .clear')
 let inputVal = myInput.value;



// window.onload = function () {
//     myInput.focus();
// }

//input validtaion and taskes
myForm.addEventListener('submit', ()=> {
    if(inputVal){


       let newTask = document.createElement('div');
       let checkCircle = document.createElement('div');
       let inputValueOutput = document.createElement('p');
       inputValueOutput.innerHTML = inputVal;
       inputValueOutput.className  = 'input-value';
       checkCircle.className = 'check-task';
       newTask.className = 'row';
      
       

       newTask.appendChild(checkCircle);
       newTask.appendChild(inputValueOutput);
       newTask.appendChild(inputValueOutput);
       task.appendChild(newTask);
   
      checkCircle.addEventListener('click', (e)=>{
       
        // e.target.classList.add('active');
       if(checkCircle.classList.contains('active')){
        // console.log(yes);
         e.target.classList.remove('active');

       }else{
         console.log('no');
         e.target.classList.add('active');
       }
       });

    }
});

//clear button 
clearBtn.onclick  = ()=>{
  task.remove();
}

checkTasks.forEach(task =>{
 task.addEventListener('click', (e)=>{
  e.target.classList.toggle('active');
  console.log(e.target);
 });
});