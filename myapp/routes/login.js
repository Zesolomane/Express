var express = require('express');

var router = express.Router();

const loginMiddleware = (req, res, next) => {
    console.log(`${req.method}` - `${req.url}`);
    next();
}
// router.use(loginMiddleware);
const users = [
    {username:'john1', password:'password123'}, {username:'john2', password:'password123'},
    {username:'john3', password:'password123'}, {username:'john4', password:'password123'}
]
router.get('/',(req, res)=>{
    console.log('heres the login page');
    console.log(req.session);
    console.log(req.session.id);

    res.end();

})
const validateUser = (username,password) => {
    const isFound = false;
    users.forEach((i) =>{
        if(username == users.username && password == users.password) {
            isFound = true;
            return username , isFound;
            
            // handle session info
        }
    })
   return false;
}
router.post('/',loginMiddleware,(req, res) =>{
//   console.log('handle the logic')  
    // check for users 
    const {
        username, password
    } = req.body;


    // use middleware to make sure the sent info is safe to run on the server 
    validateUser(username, password);
    res.redirect('/login');
})

module.exports = router;
