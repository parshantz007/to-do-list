// const btn=document.querySelector('#btn')
// btn.addEventListener('click',()=>{

//     console.log("Button clicked")

// })


// const inp=document.querySelector('#inp')
// inp.addEventListener('keydown',(ev)=>{
//     console.log(ev.key)
//     console.log(ev.target.value) // this will print the entire value of our input text 
//     if(parseInt(ev.keyCode)>=65 && parseInt(ev.keyCode)<=90)

//     {
//         console.log("valid username");
//     }
//     else{
//         console.log("invalid username");
//     }
// })

//////////////////////////// gett value by hovering over mouse////////////////////////

// const dog= document.querySelector('#dog')
// const cat=document.querySelector('#cat')


// dog.addEventListener('mouseout',(ev)=>{
//     // console.log(ev)
//     console.log(ev.fromElement.innerText)
// })
// cat.addEventListener('mouseout',(ev)=>{
//     // console.log(ev)
//     console.log(ev.fromElement.innerText)
// })


/////////////////////////to do/////////////////////


const addtask = document.querySelector('#newtask')
const btn = document.querySelector('#addtask')
const tasklist = document.querySelector('#tasklist')
const container = document.querySelector('.main-container')

tasklist.innerHTML = localStorage.getItem('tasklist');

btn.addEventListener('click', (ev) => {
    const task = newtask.value;
    // console.log(task);

    // create a li item

    const li = document.createElement('li')



    // add the task value in it 
    let str = `
    <p><input type="checkbox" class="checkbox">
        <span class="task-text" id="inp">${task}</span>
    </p>
    <div class="help-button">
        <button class="up-btn">⬆</button> <button class="down-btn">⬇</button> <button class="delete-btn">❌</button>
    </div>
    
    `

    li.innerHTML = str;
    // append the child item 
    li.classList.add('task');
    li.classList.add('task-1');

    tasklist.appendChild(li);


    newtask.value = '';
    localStorage.setItem('tasklist', tasklist.innerHTML);


})






//////////////////////////// working the function of up down and delet button /////////////////////////////////////
let chckVal = false;
tasklist.addEventListener('click', (ev) => {
    // console.log(ev);

    // console.log(ev.target.classList);x
    if (ev.target.classList == 'up-btn') {
        // up button par click hota h
        // console.log("up button daba di")
        let newElement=ev.target.parentElement.parentElement;
        let prevElement=ev.target.parentElement.parentElement.previousElementSibling;

        // console.log(newElement);
        // console.log(prevElement);
        ev.target.parentElement.parentElement.parentElement.insertBefore(newElement,prevElement);
        // ev.target.parentElement.parentElement.remove()


    }
    else if (ev.target.classList == "checkbox") {
        
        if (ev.target.checked == true) {
            ev.target.nextElementSibling.classList.add("line-cut")
            localStorage.setItem('tasklist', tasklist.innerHTML);

        }
        else {
            ev.target.nextElementSibling.classList.remove('line-cut')
            localStorage.setItem('tasklist', tasklist.innerHTML);


        }
        // console.log(ev.target.checked);
    }
    else if (ev.target.classList == 'down-btn') {
        // if down par click hota h
        // console.log("down button dabaya kya")
        let newElement=ev.target.parentElement.parentElement;
        let nextElement=newElement.nextElementSibling;
        let parentList=newElement.parentElement;

        console.log(newElement);
        console.log(nextElement);
        parentList.insertBefore(nextElement,newElement);

    }
    else if (ev.target.classList == 'delete-btn') {
        // if delete arrow par click hota hai

        ev.target.parentElement.parentElement.remove();
        localStorage.setItem('tasklist', tasklist.innerHTML);

    }
    else {
        console.log("yha ku dabaya")
    }


})



// input par enter karne ke baad add me button work kree

// let enterButton = document.getElementById('inp')
// enterButton.addEventListener('keydown',(ev)=>{
//     // console.log(ev.code);
// })







