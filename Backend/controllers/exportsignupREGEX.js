exports.signup = async (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  //ici declaration de regex
  const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regexPassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/;
  const regexName =
    /^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-\.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){1,})(['’\-,\.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){2,})?)*)$/;
  if (
    regexMail.test(email) &&
    regexPassword.test(password) &&
    regexName.test(userName)
  ) {
    bcryptjs
      .hash(password, 10)
      .then((hash) => {
        const user = new User({
          //...req.body,// pour tout récuperer
          userName: userName,
          email: email,
          password: hash,
         
        });
        console.log("user");
        user
          .save() 
          .then(() => {
            console.log("then");
            return res.status(201).json({
              message: "Félicitation, utilisateur crée !",
            });
          })
          .catch((error) => {
            console.error("test", error.message);
            return res
              .status(401)
              .json({ error: " L'utilisateur a déjà été crée !" });
          });
      })
      .catch((error) => {
        return res.status(500).json({ error: "Internal error" });
      });
  } else {
    return res
      .status(401)
      .json({ error: "Email, mot de passe ou le nom n'est pas bon" });
  }
};