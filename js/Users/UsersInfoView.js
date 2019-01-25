;(function (module) {
    function UsersInfoView(element){
        this._listElement = element
        this.onClickGetTodos = null
    }

    UsersInfoView.prototype.render = function (model) {
        let usersList = model._usersList;
        for(let i = 0; i < usersList.length; i++){
            this._listElement.innerHTML += `
                <button class="user-button" data-id="${usersList[i].id}">${usersList[i].username}</button>
            `
        }

        this._initEventListeners()
    }

    UsersInfoView.prototype._initEventListeners = function () {
        let users = this._listElement.querySelectorAll(".user-button")
        for(let i = 0; i < users.length; i++){
            users[i].addEventListener('click' , this.onClickGetTodos)
        }
    }

    module.UsersInfoView = UsersInfoView
})(window.module)