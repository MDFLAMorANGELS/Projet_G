<template>
  <div id="container">         
      <div id="form">
        <h1 v-if="mode == 'login'">Connexion</h1>
        <h1 v-else>Inscription</h1>
        <p v-if="mode == 'login'" @click="switchToCreateAccount">Tu n'as pas encore de compte ? 
            <span> Créer un compte </span>
        </p>
        <p v-else @click="switchToLogin"> Vous avez déja un compte ?
            <span> Connecte toi </span>
        </p>
        <div v-if="mode == 'create'">
            <label  for="username"><b>Nom d'utilisateur</b></label>
            <input v-model="username" type="text"  placeholder="Nom d'utilisateur" name="username" required>
        </div>
        <label for="email"><b>email</b></label>
        <input v-model="email" type="email"  placeholder="Adresse mail" name="email" required>
        <label for="password"><b>Mot de passe</b></label>
        <input v-model="password" type="password" placeholder="Mot de passe" name="password" required>

        <div v-if="mode == 'login' && status == 'error_login'" >
            Adresse mail et/ou mot de passe invalide
        </div>
        <div v-if="mode == 'create' && status == 'error_create'" >
            Adresse mail et/ou username deja utilisé
        </div>
        <button @click="login()" v-if="mode == 'login'"  id='submit'>
            <span v-if="status == 'loading'">Connexion en cours ...</span>
            <span v-else>Connexion</span>
        </button>
        <button @click="createAccount()" v-else id='submit' >
            <span v-if="status == 'loading'">Création en cours ...</span>
            <span v-else>Créer mon compte</span>
        </button>
      </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'Form_login',
  data: function() {
    return {
        mode: 'login',
        username:'',
        email: '',
        password: '',
    }
  },
  computed: {
      ...mapState(['status'])
  },
  methods: {
      switchToCreateAccount: function() {
          this.mode = 'create';
      },
      switchToLogin: function() {
          this.mode = 'login';
      },
      login: function () {
          const self= this;
          this.$store.dispatch('login', {
              email: this.email,
              password: this.password,
          }).then(function () {
              self.$router.push('/Accueil');
          }, function(error) {
              console.log(error);
          })
      },
      createAccount: function() {
          const self= this;
          this.$store.dispatch('createAccount', {
              username: this.username,
              email: this.email,
              password: this.password,
          }).then(function () {
              self.login();
          }, function(error) {
              console.log(error);
          })
      },
  }
}

</script>

<style scoped>

#container{
    width:400px;
    margin:0 auto;
    margin-top:10%;
}

#form {
    width:100%;
    padding: 30px;
    border: 1px solid #f1f1f1;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    border-radius: 30px;
}
#container h1{
    width: 38%;
    margin: 0 auto;
    padding-bottom: 10px;
}

p span{
    color: rgb(85, 187, 255);
    cursor: pointer;
    text-decoration: underline;
}

/* Full-width inputs */
input[type=text], input[type=password], input[type=email] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 30px;
}

/* Set a style for all buttons */
button {
    background: linear-gradient(#8d0b66, #3f87a6);
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    border-radius: 30px;
    font-size: 1.2em;
}

button:hover {
    background-color: white;
    color: #5ce963;
}
</style>