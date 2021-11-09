const User = require('../models/User');
const passwordValidator = require('password-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.signup =  (req, res , next) => {
    try {
        const schema = new passwordValidator();
        schema
        .is().min(8)                                    // Minimum length 8
        .is().max(100)                                  // Maximum length 100
        .has().uppercase()                              // Must have uppercase letters
        .has().lowercase()                              // Must have lowercase letters
        .has().digits(2)                                // Must have at least 2 digits
        .has().not().spaces()                           // Should not have spaces
        .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
        if(!schema.validate(req.body.password)){
            return res.status(400).json({message: 'Mot de passe faible'})
        }
        /* regex ici
        const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regexPassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/;
        const regexUsername = 
        /^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-\.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){1,})(['’\-,\.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){2,})?)*)$/;
        if (
            regexMail.test(email) &&
            regexPassword.test(password) &&
            regexUsername.test(username) &&
        ) {}
        */
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User (
                req.body.username,
                req.body.email,
                hash
            );
            user.save()
            .then(() => {
                return res.status(201).json({message: 'User created '})
                ;})
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.login = (req, res, next) => {
    User.findByEmail(req.body.email)
    .then(data => {
        const user = data[0][0];
        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé'});
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect'});
            }
            res.status(200).json({
                userID : user.ID,
                token: jwt.sign(
                    {userID : user.ID},
                    'RANDOM_TOKEN_SECRET',
                    {expiresIn: '24h'}
                )
            });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.getUserInfo = async (req, res, next) => {
    try {
        let  info = await User.findById( req.userID );
        console.log(info[0][0])
        res.status(200).json({user : info});
    } catch (error) {
        console.log(error);
        next(error);
        
    }
}