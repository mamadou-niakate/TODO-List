class localStorageService {
    constructor() {
        this.tasksKey = "tasks";
    }
    
    setTasksKey = (tasksKey) => {
        this.tasksKey = tasksKey;
        localStorage.setItem(this.tasksKey,[]);
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

    getTask = (id) => {
        const requestedTask = this.getTasks().filter(task => task.id === id)
        return requestedTask
    }

    addTask = (task) => {
        if(this.getTasks().length === 0) {
            localStorage.setItem(this.tasksKey,JSON.stringify([task]));
        } else {
            const newTasks = this.getTasks();
            newTasks.push(task);
            localStorage.setItem(this.tasksKey,JSON.stringify(newTasks));
        }
    }

    updateTask = (taskToUpdate) => {
        let newTasks = this.getTasks();
        newTasks = newTasks.map(task => {
            if(task.id === taskToUpdate.id) {
                return taskToUpdate
            }
            return task;
        });
        localStorage.setItem(this.tasksKey,JSON.stringify(newTasks));
    }

    removeTask = (id) => {
        let newTasks = this.getTasks();
        newTasks = newTasks.filter(task => task.id !== id);
        localStorage.setItem(this.tasksKey,JSON.stringify(newTasks));
    }

}

export  default new localStorageService();