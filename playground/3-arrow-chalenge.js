const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo: function() {
        // return this.tasks.filter(function(task) {
        //     return task.completed === false
        // })

        // same result as code above
        return this.tasks.filter((task) => task.completed === false)
    }
}

console.log(tasks.getTasksToDo())