window.onload = () => {
    loadTasks(); 
  
    document.getElementById("new").addEventListener("click", () => {
      const task = prompt("Introduce una nueva tarea:");
      if (task && task.trim() !== "") {
        addTask(task);
      }
    });
  };
  
  function addTask(text) {
    const ftList = document.getElementById("ft_list");
  
    const newTask = document.createElement("div");
    newTask.textContent = text;
  
    newTask.addEventListener("click", () => {
      if (confirm("¿Eliminar esta tarea?")) {
        newTask.remove();
        saveTasks(); 
      }
    });
  
    ftList.prepend(newTask); 
    saveTasks();
  }
  
  function saveTasks() {
    const tasks = [];
    const listItems = document.getElementById("ft_list").children;
    for (let item of listItems) {
      tasks.push(item.textContent);
    }
    document.cookie = "tasks=" + JSON.stringify(tasks) + "; path=/";
  }
  
  function loadTasks() {
    const cookies = document.cookie.split("; ");
    let taskCookie = cookies.find(row => row.startsWith("tasks="));
    if (taskCookie) {
      const savedTasks = JSON.parse(taskCookie.split("=")[1]);
      for (let task of savedTasks.reverse()) {
        addTask(task);
      }
    }
  }
  
