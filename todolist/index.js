const mainBox = document.getElementById('main');
const form = document.getElementById('form');
const createdBox = document.getElementById('createdBox');
const textBox = document.getElementById('textBox');
const addBtn = document.getElementById('addBtn');

let counter = 0;
let marked = 0;

// Load tasks from localStorage when page loads
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'newdiv');
        newDiv.innerHTML = `<span>${task.text}</span><button type=button class=rmbtn id=rmbtn${counter}>Done</button><button type=button class=rmbtn id=rembtn${marked}>Undo</button><button type=button class=rmbtn id=del${marked}>Delete</button>`;
        form.insertBefore(newDiv, createdBox);
        document.getElementById(`rembtn${marked}`).hidden = true;
        if (task.completed) {
            const span = newDiv.querySelector('span');
            span.innerHTML = `<del>${task.text}</del>`;
            document.getElementById(`rmbtn${counter}`).hidden = true;
            document.getElementById(`rembtn${marked}`).hidden = false;
        }
        counter++;
        marked++;
    });
}

// Save tasks to localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#newdiv').forEach(div => {
        tasks.push({
            text: div.querySelector('span').textContent,
            completed: div.querySelector('span').innerHTML.includes('<del>')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//function to mark the element
function mark(f) {
    document.getElementById(`${f.target.id}`).parentElement.firstChild.innerHTML = `<del>${f.target.parentElement.firstChild.textContent}</del>`;
    document.getElementById(`${f.target.id}`).hidden = true;
    document.getElementById(`${f.target.id}`).nextElementSibling.hidden = false;
    saveTasks();
}

//function to unmark the element
function unmark(f) {
    document.getElementById(`${f.target.id}`).parentElement.firstChild.innerHTML = `<span>${f.target.parentElement.firstChild.textContent}</span>`;
    document.getElementById(`${f.target.id}`).hidden = true;
    document.getElementById(`${f.target.id}`).previousElementSibling.hidden = false;
    saveTasks();
}

//function to delete the element
function del(f) {
    document.getElementById(`${f.target.id}`).parentElement.remove();
    saveTasks();
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (textBox.value) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'newdiv');
        newDiv.innerHTML = `<span>${textBox.value}</span><button type=button class=rmbtn id=rmbtn${counter}>Done</button><button type=button class=rmbtn id=rembtn${marked}>Undo</button><button type=button class=rmbtn id=del${marked}>Delete</button>`;
        form.insertBefore(newDiv, createdBox);
        document.getElementById(`rembtn${marked}`).hidden = true;
        counter++;
        marked++;
        saveTasks();
    }
    form.reset();
});

form.addEventListener('click', (f) => {
    if (f.target.tagName === 'BUTTON' && f.target.textContent === 'Done') {
        mark(f);
    }
    if (f.target.tagName === 'BUTTON' && f.target.textContent === 'Undo') {
        unmark(f);
    }
    if (f.target.tagName === 'BUTTON' && f.target.textContent === 'Delete') {
        del(f);
    }
});

// Load tasks when page loads
loadTasks();