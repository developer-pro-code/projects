const mainBox = document.getElementById('main');
const form = document.getElementById('form');
const createdBox = document.getElementById('createdBox');
const textBox = document.getElementById('textBox');
const addBtn = document.getElementById('addBtn');

let counter = 0;
let marked = 0

//fucntion to mark the element
function mark(f){
    document.getElementById(`${f.target.id}`).parentElement.firstChild.innerHTML = `<del>${f.target.parentElement.firstChild.textContent}</del>`;
    document.getElementById(`${f.target.id}`).hidden = true;
    document.getElementById(`${f.target.id}`).nextElementSibling.hidden = false;
}

//function to unmark the element
function unmark(f){
    document.getElementById(`${f.target.id}`).parentElement.firstChild.innerHTML = `<span>${f.target.parentElement.firstChild.textContent}</span>`;
    document.getElementById(`${f.target.id}`).hidden = true;
    document.getElementById(`${f.target.id}`).previousElementSibling.hidden = false;
}

//function to delete the element
function del(f){
    document.getElementById(`${f.target.id}`).parentElement.remove()
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (textBox.value) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'newdiv');
        newDiv.innerHTML = `<span>${textBox.value}</span><button type=button class=rmbtn id=rmbtn${counter}>Done</button><button type=button class=rmbtn id=rembtn${marked}>Undo</button><button type=button class=rmbtn id=del${marked}>Delete</button>`;
        form.insertBefore(newDiv,createdBox);
        document.getElementById(`rembtn${marked}`).hidden = true
        counter++
        marked++
    }
    form.reset()
})

form.addEventListener('click', (f)=>{
    if(f.target.tagName === 'BUTTON' && f.target.textContent === 'Done'){
        mark(f)
    }
    if (f.target.tagName === 'BUTTON' && f.target.textContent === 'Undo') {
        unmark(f)
    }
    if (f.target.tagName === 'BUTTON' && f.target.textContent === 'Delete') {
        del(f);
    }
})