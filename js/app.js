;(function (module) {
    let usersList = document.querySelector("#usersList")
    let usersInfoModel = new module.UsersInfoModel()
    let usersInfoView = new module.UsersInfoView(usersList)
    let usersInfoController = new module.UsersInfoController(usersInfoView , usersInfoModel)
    usersInfoController.initialize()

})(window.module)