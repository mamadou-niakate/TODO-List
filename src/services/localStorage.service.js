class localStorageService {
    constructor() {
        this.tasksKey = "tasks";
    }
    
    getTasksKey =  () => {
        return this.tasksKey;
    }

    init = (tasks) => {
        localStorage.setItem(this.tasksKey,JSON.stringify(tasks))
    }

    getTasks = () => {
        const tasks = JSON.parse(localStorage.getItem(this.tasksKey));
        return tasks ? tasks : [];
    }

    getTasksGroup = (title) => {
        const tasksGroup = this.getTasks().find(taskGroup => taskGroup.title === title);
        return tasksGroup.tasks;
    }

    getTask = (id) => {
        const requestedTask = this.getTasks().reduce((acc,taskGroup) => {
            const itemFound = taskGroup.tasks.find(task => task.id === id);
            return itemFound ? itemFound : acc;
        },undefined)
        return requestedTask
    }

    addTask = (taskGroupTitle="Todo", task) => {
        if(this.getTasks().length === 0) {
            localStorage.setItem(this.tasksKey,JSON.stringify([{taskGroupTitle,tasks:[task]}]));
        } else {
            const newTasks = this.getTasks();
            newTasks.forEach((taskGroup => {
                if(taskGroup.title === taskGroupTitle) {
                    taskGroup.tasks.push(task);
                }
            }));
            localStorage.setItem(this.tasksKey,JSON.stringify(newTasks));
        }

        return this.getTasks();
    }

    updateTask = (taskGroupTitle="Todo",taskToUpdate) => {
        const tasks = this.getTasks().reduce((acc,tasksGroup) => {
            if(tasksGroup.title === taskGroupTitle) {
                tasksGroup.tasks.forEach(task => {
                    if(task.id === taskToUpdate.id) {
                        task.title = taskToUpdate.title;
                        task.description = taskToUpdate.description;
                        task.status = taskToUpdate.status;
                        task.priority = taskToUpdate.priority;
                    }
                });
            }
            acc.push(tasksGroup);
            return acc;
        },[]);
        localStorage.setItem(this.tasksKey,JSON.stringify(tasks));

        return this.getTasks();
    }

    removeTask = (id) => {
        const newTasks = this.getTasks().reduce((acc,tasksGroup) => {
            tasksGroup.tasks = tasksGroup.tasks.filter(task => task.id !== id);
            acc.push(tasksGroup);
            return acc;
        },[]);
        localStorage.setItem(this.tasksKey,JSON.stringify(newTasks));
    }

    addTasksGroup = (taskGroup) => {
        const newTasks = this.getTasks();
        newTasks.push(taskGroup);
        localStorage.setItem(this.tasksKey,JSON.stringify(newTasks));
        return this.getTasks();
    }

    removeTasksGroup = (taskGroupTitle) => {
        const newTasks = this.getTasks().filter(taskGroup => taskGroup.title !== taskGroupTitle);
        localStorage.setItem(this.tasksKey,JSON.stringify(newTasks));
        return this.getTasks();
    }
}

export  default new localStorageService();