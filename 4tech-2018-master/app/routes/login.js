'use strict'

const jwt = require('jsonwebtoken')
const secretKey = require('../../config/secretKey')

module.exports = app =>{

    const Collection = app.config.firebaseConfig.collection('usera')

    app.post('/login', async (req,res) =>{
        const documents = await Collection.get();
        let user = null;
        const users = documents.docs.find(doc => {
            let actualUser = extracUser(doc)
            console.log(actualUser)
            if(actualUser.email === req.body.email && actualUser.password === req.body.password){
                user = extracUser(doc)
                return true
            }
            
        })


        console.log(user)

        if(user){
            const id = user.id
            const token = jwt.sign({ id }, secretKey);
            return res.send({
                user: {name: user.name, email:user.email}, 
                auth: true, token:token
            })
        }
        else return res.status(500).send('Login invalido')
    })

}

const extracUser = (doc) => {
    let user = doc.data();
    return {
        id: doc.id,
        name: user.name,
        email: user.email,
        password: user.password
    }
}
