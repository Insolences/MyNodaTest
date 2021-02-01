class authController {
    async registration(res,req){
        try {

        }
        catch (e) {

        }
    }
    async login(res,req){
        try {

        }
        catch (e) {

        }
    }
    async getUsers(res,req){
        try {
            console.log('USERS work:', res)
            // res.send('USERS work')
        }
        catch (e) {
            console.log('ERROR', e)
        }
    }
}

module.exports = new authController()
