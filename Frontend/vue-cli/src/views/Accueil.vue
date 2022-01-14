<template>
<div id="main">
    <div id="head">
        <div class="head-hello">
            <p ><i v-if=" userInfos.isAdmin  != 1 " class="fas fa-user-shield"></i></p> 
            <p class="head-hello-name">Bonjour <span>{{userInfos.username}}</span></p>
        </div>
        <button id="deconnexion" @click="logout()"> Déconnexion </button>
    </div>
    <div>
        <Form_post/>
    </div>
    <div id="test2">
        <div id="boxPost" v-for="publication in post" :key="publication">
            <div> 
                <p>{{ publication.username }} a Publié le {{ publication.created_at }}</p>
            </div>
            <div id="test">
                <p id="titlePost">Titre : {{ publication.title }} </p>
                <p id="dataPost"> Post : {{ publication.data }} </p>
            </div>
            <Form_comment :postID='publication.ID'/>
            <p>{{ comment }}</p>
        </div>
    </div>
</div>
</template>

<script>

import { mapState } from 'vuex';

import Form_post from '../components/Form_post.vue';
import Form_comment from '../components/Form_comment.vue';


export default {
    name: 'Accueil',
    data: function() {
    return {
    }
    },
    components: {
        Form_post,
        Form_comment,
    },
    mounted: function() {
        console.log(this.$store.state);
        if (this.$store.state.user.userID == -1) {
            this.$router.push('/');
            return ;
        }
        this.$store.dispatch('getUserInfos'),
        this.$store.dispatch('getAllPost');
        this.$store.dispatch('getAllComment');

    },
    computed: {
        ...mapState(['user','userInfos']),
        ...mapState(['post']),
        ...mapState(['comment'])

    },
    methods: {
        logout: function() {
            this.$store.commit('logout');
            this.$router.push('/') 
        },
    },
    
}
</script>

<style scoped>
p {
    font-size: 1.3em;
}
p span {
    font-weight: bold;
}
.head-hello{
    display: flex;
}
#deconnexion {
    background: linear-gradient(#8d0b66, #3f87a6);
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    border-radius: 30px;
    font-size: 1.2em;
}
#head {
    display: flex;
    justify-content: space-between;
    margin: 2%;
}
main {
    margin: 2%;
}
#boxPost {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px solid rgb(88, 88, 88);
    flex-wrap: nowrap;
    text-align: center;
    background-color: gray;
    width: 80%;
    margin: 1%;
    border-radius: 20px;
    box-shadow: 2px 2px 2px #999;
}
#titlePost {
    background-color: rgb(88, 109, 179);
    border-radius: 20px;
}
#dataPost {
    background-color: rgb(216, 96, 96);
    border-radius: 20px;
}
#test {
    width: 80%;
}
#test2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.button_comment {
  background: linear-gradient(#8d0b66, #3f87a6);
  color: white;
  padding: 8px 25px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  font-size: 1.2em;
}
</style>