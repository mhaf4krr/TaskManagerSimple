/* Adding li to ul */


document.forms[0].addEventListener('submit',function(e){
let userInput=document.querySelector('#text-field-1').value;
let selectPriority=document.querySelector('#select-priority').value;
selectPriority=Number(selectPriority);


const li=document.createElement('li');
li.className='tasks-lists-item';

const deleteLink=document.createElement('a');
const doneLink=document.createElement('a');
doneLink.className='shift-item';
doneLink.setAttribute('href','#');
doneLink.appendChild(document.createTextNode('(Done)..     '));

deleteLink.className='delete-item';
deleteLink.setAttribute('href','#');

deleteLink.appendChild(document.createTextNode(`   ..(Remove)`));
li.appendChild(doneLink);
li.appendChild(document.createTextNode(`${userInput}`));

li.appendChild(deleteLink);

switch(selectPriority)
{
  case 1:li.style.background='rgb(245, 60, 60)';

  break;
  case 2:li.style.background='yellow';
  console.log('case 2');
  break;
  
}
document.querySelector('ul').appendChild(li);

e.preventDefault();

});


/*  Removing li from Ul using Event Delegation */

document.querySelector('ul.task-lists').addEventListener('click',removeItem);

function removeItem(e)
{
 if (e.target.classList.contains('delete-item'))
 {
   e.target.parentElement.remove();
 }
}


/* Shift Item*/ 
document.querySelector('ul.task-lists').addEventListener('click',shiftItem);

function shiftItem(e)
{
  if(e.target.classList.contains('shift-item'))
  {

    var liHand=e.target.parentElement;

    /* Clone Method Used*/ 
    var cln=liHand.cloneNode(true);
    console.log(liHand);

    document.querySelector('.tasks-done').appendChild(cln);
    e.target.parentElement.remove();
  }

}
/* Clear All Tasks*/

document.querySelector('.clear-tasks').addEventListener('click',function(e){
  document.querySelector('ul').innerHTML=" ";
});