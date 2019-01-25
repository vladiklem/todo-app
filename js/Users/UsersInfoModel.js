;(function (module) {
    function UsersInfoModel(){
        this._usersList = []

        this.setUsersList = function (list) {
            this._usersList = list
        }

        this.getUsersCount = function () {
            return this._usersList.length
        }

        this.getUserById = function (userId) {
            return this._usersList[userId]
        }
    }

    UsersInfoModel.prototype.asyncGetUsers = function(callback){
        let xml = new XMLHttpRequest();
        let self = this;
        xml.open('GET' , 'http://localhost:3000/api/users' , true)
        xml.onload = function () {
            if(this.status >= 200 && this.status < 300){
                self.setUsersList(JSON.parse(this.responseText))
                callback(self._usersList)
            }
        }
        xml.send()
    }

    module.UsersInfoModel = UsersInfoModel

})(window.module)