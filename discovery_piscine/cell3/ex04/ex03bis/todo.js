$(document).ready(function () {
    loadTasks();
  
    $('#new').click(function () {
      const task = prompt("Introduce una nueva tarea:");
      if (task && task.trim() !== "") {
        addTask(task);
      }
    });
  
    function addTask(text) {
      const newTask = $('<div></div>').text(text);
      newTask.click(function () {
        if (confirm("¿Eliminar esta tarea?")) {
          newTask.remove();
          saveTasks();
        }
      });
  
      $('#ft_list').prepend(newTask);
      saveTasks();
    }
  
    function saveTasks() {
      const tasks = [];
      $('#ft_list div').each(function () {
        tasks.push($(this).text());
      });
      document.cookie = "tasks=" + JSON.stringify(tasks) + "; path=/";
    }
  
    function loadTasks() {
      const cookies = document.cookie.split("; ");
      const taskCookie = cookies.find(c => c.startsWith("tasks="));
      if (taskCookie) {
        const savedTasks = JSON.parse(taskCookie.split("=")[1]);
        savedTasks.reverse().forEach(task => addTask(task));
      }
    }
  });
  