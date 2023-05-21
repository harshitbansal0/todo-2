var todoList = document.querySelector(".todo-list");
var todoTask = document.querySelector("li.todo-task");
var add = document.querySelector(".add-task");
var toggleDarkMode = document.querySelector(".toggle-dark-mode");

todoList.addEventListener("click", function(event) {
    

    if (event.target.matches('.remove')) {
    	event.target.closest('li').remove()
    } else if (event.target.matches('.toggle-color')) {
    	event.preventDefault();
        var color = event.target.dataset.color;
        var nearestTask = event.target.closest('li');
        var is_active = nearestTask.classList.contains(color); 
        
        nearestTask.classList.remove('blue', 'green', 'red');
        nearestTask.style.color = "#000000";

        if (!is_active) {
        	nearestTask.style.color = "#ffffff";
            nearestTask.classList.add(color);
        }
    } else if (event.target.matches('.toggle-complete')){
        var nearestTask = event.target.closest('li');
        var is_complete = nearestTask.classList.contains('completed'); 
    	
    	nearestTask.classList.remove('completed');
        
        if (!is_complete) {
            nearestTask.classList.add('completed');
        }
    }
});

add.addEventListener("click", function(e) {
	event.preventDefault();
	var addListItem = document.createElement('li');
	var taskTitle = document.getElementById('task-title');
	todoList.appendChild(addListItem);
	addListItem.classList.add('todo-task');
	addListItem.innerHTML = '<span class="task-title"></span>' +
							'<a href="#" class="button toggle-color" data-color="blue">B</a>' +
							'<a href="#" class="button toggle-color" data-color="green">G</a>' +
							'<a href="#" class="button toggle-color" data-color="red">R</a>' +
							'<a href="#" class="button toggle-complete" data-status="mark-completed"><i class="fas fa-check"></i></a>' +
							'<a class="button remove"><i class="fas fa-trash"></i></a>';
	addListItem.querySelector('.task-title').appendChild(document.createTextNode(taskTitle.value));
	taskTitle.value = '';
});

toggleDarkMode.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
