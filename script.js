document.getElementById('doliform').addEventListener('submit'),
function(e){
    e.preventDefault();
    const taskText=document.getElementById('todoform').value;
    if(taskText === '')return;
    const li=document.createElement('li');

    const span=document.createElement('span');
    span.className='task-text';
    span.textContent=taskText;

    const actionsDiv=document.createElement('div');
    actionsDiv.className='action';

    const completeBtn=document.createElement('button');
    completeBtn.className='complete-btn';
    completeBtn.textcontent='complete';
    span.classList.toggle('completed');
    li.classList.toggle('completed');
    

}