;(function (module) {
    function UsersInfoController(view, model) {
        this._view = view
        this._model = model
    }

    UsersInfoController.prototype.initialize = function () {
        let self = this

        this._view.onClickGetTodos = this.onClickGetTodos.bind(this)
        this._model.asyncGetUsers(function () {
            self._view.render(self._model)
        })
    }

    UsersInfoController.prototype.onClickGetTodos = function (evt) {
        let userId = parseInt(evt.target.dataset.id)
        let todosList = document.querySelector("#todosList")
        let todoInfoModel = new module.TodoInfoModel()
        let todoInfoView = new module.TodoInfoView(todosList)
        let todoInfoController = new module.TodoInfoController(todoInfoView , todoInfoModel , userId)
        todoInfoController.initialize()
    }

    module.UsersInfoController = UsersInfoController
})(window.module)