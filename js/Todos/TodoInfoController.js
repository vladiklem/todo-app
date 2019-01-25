;(function (module) {
    function TodoInfoController(view , model , userId){
        this._view = view
        this._model = model
        this._userId = userId
    }

    TodoInfoController.prototype.initialize = function () {
        let self = this

        this._view.onClickDeleteTodo = this.onClickDeleteTodo.bind(this)
        this._view.onClickCompleteTodo = this.onClickCompleteTodo.bind(this)
        let addButton = document.querySelector("#add-todo")
        addButton.addEventListener('click' , this.onClickAddTodo.bind(this))
        this._model.getTodosByUserId(this._userId , function () {
            self._view.render(self._model)
        })
    }

    TodoInfoController.prototype.onClickDeleteTodo = function (evt) {
        let todoId = evt.target.dataset.todoId
        this._model.deleteTodoById(todoId)
        let self = this
        this._model.getTodosByUserId(this._userId , function () {
            self._view.render(self._model)
        })
    }

    TodoInfoController.prototype.onClickAddTodo = function () {
        let todoName = document.querySelector("#todo-name").value
        this._model.addTodo(todoName , this._userId)
        let self = this
        this._model.getTodosByUserId(this._userId , function () {
            self._view.render(self._model)
        })
    }

    TodoInfoController.prototype.onClickCompleteTodo = function (evt) {

        if(evt.target.checked){
            this._model.completeTodoById(evt.target.dataset.todoId)
        }else{
            this._model.uncompleteTodoById(evt.target.dataset.todoId)
        }

        let self = this
        this._model.getTodosByUserId(this._userId , function () {
            self._view.render(self._model)
        })
    }

    module.TodoInfoController = TodoInfoController
})(window.module)