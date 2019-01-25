;(function (module) {
    function TodoInfoModel(){
        this._userId = undefined
        this._todosList = []

        this.setTodosList = function (todosList) {
            this._todosList = todosList
        }

        this.getTodosList = function () {
            return this._todosList
        }
    }

    TodoInfoModel.prototype.getTodosByUserId = function (userId , callback) {
        let xml = new XMLHttpRequest()
        let self = this
        xml.open('GET', 'http://localhost:3000/api/todos?userId=' + userId, false)
        xml.onload = function () {
            if(this.status >= 200 && this.status < 300){
                self.setTodosList(JSON.parse(xml.responseText))
                callback(self.getTodosList())
            }
        }
        xml.send()
    }

    TodoInfoModel.prototype.deleteTodoById = function (todoId) {
        let xml = new XMLHttpRequest()
        xml.open('DELETE' , 'http://localhost:3000/api/todos/' + todoId, false)
        xml.onload = function () {
            if(this.status >= 200 && this.status < 300){
                console.log(JSON.parse(this.responseText))
            }
        }
        xml.send()
    }

    TodoInfoModel.prototype.addTodo = function (todoName , userId) {
        let xml = new XMLHttpRequest()
        xml.open('POST', 'http://localhost:3000/api/todos', false)
        xml.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
        xml.onload = function () {
            if (xml.status >= 200 && xml.status < 300) {
                console.log(JSON.parse(xml.responseText))
            }
        }
        xml.send(JSON.stringify({
            title:todoName ,
            completed: false ,
            userId: userId
        }))
    }

    TodoInfoModel.prototype.completeTodoById = function (todoId) {
        let xml = new XMLHttpRequest()
        xml.open('PATCH', 'http://localhost:3000/api/todos/' + todoId, false)
        xml.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
        xml.onload = function () {
            if (xml.status >= 200 && xml.status < 300) {
                console.log(JSON.parse(xml.responseText))
            }
        }
        xml.send(JSON.stringify({
            completed: true
        }))
    }

    TodoInfoModel.prototype.uncompleteTodoById = function (todoId) {
        let xml = new XMLHttpRequest()
        xml.open('PATCH', 'http://localhost:3000/api/todos/' + todoId, false)
        xml.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
        xml.onload = function () {
            if (xml.status >= 200 && xml.status < 300) {
                console.log(JSON.parse(xml.responseText))
            }
        }
        xml.send(JSON.stringify({
            completed: false
        }))
    }

    module.TodoInfoModel = TodoInfoModel

})(window.module)