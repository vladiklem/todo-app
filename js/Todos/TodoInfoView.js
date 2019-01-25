;(function (module) {
    function TodoInfoView(element){
        this._element = element

        this.onClickDeleteTodo = null
        this.onClickCompleteTodo = null
    }

    TodoInfoView.prototype.render = function (model) {
        let todosList = model.getTodosList()
        this._element.innerHTML = ``;
        for(let i = 0; i < todosList.length; i++){
            let status = "";
            let title = todosList[i].title
            if(todosList[i].completed){
                status = "checked"
                title = title.strike()
            }
            this._element.innerHTML += `
                <div style="display: flex">
                    <input type="checkbox" class="complete-todo" data-todo-id="${todosList[i].id}" ${status}>
                    <h3>${title}</h3>
                    <button class="delete-todo" data-todo-id="${todosList[i].id}">delete</button>
                </div>            `
        }

        this._initEventListeners()
    }

    TodoInfoView.prototype._initEventListeners = function () {
        let deleteButtons = document.querySelectorAll(".delete-todo")
        let completeCheckboxes = document.querySelectorAll(".complete-todo")
        for(let i = 0; i < deleteButtons.length; i++){
            deleteButtons[i].addEventListener('click' , this.onClickDeleteTodo)
            completeCheckboxes[i].addEventListener('click' , this.onClickCompleteTodo)
        }

    }

    module.TodoInfoView = TodoInfoView
})(window.module)