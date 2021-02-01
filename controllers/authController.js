const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;
// const jwt = require('jsonwebtoken');
// const privatKey = 'shhhhh';

class authController {
    async registration(res,req){
        const {email,first_name,last_name,password} = req.body;
        const hash = bcrypt.hashSync(password, saltRounds);
        try {
            db.users.create({
                email,
                first_name,
                last_name,
                password:hash,
                user_group_id: 1,
                admin: 0
            }).then(newUser => res.send({registration: "complete", login: newUser.email}))
        }
        catch (e) {
            console.log(e)
        }
    }
    async login(res,req){
        try {

        }
        catch (e) {

        }
    }
    async getUsers(req, res){
        try {
            res.send('USERS work')
        }
        catch (e) {
            console.log('ERROR', e)
        }
    }
}

module.exports = new authController()
