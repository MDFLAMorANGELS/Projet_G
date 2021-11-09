<template>
<div id="main">
    <div id="head">
        <p>Bonjour <span>{{userInfos.username}}</span></p>
        <button id="deconnexion" @click="logout()"> Déconnexion </button>
    </div>
    <div>
        <Form_post/>
    </div>
</div>
</template>

<script>

import { mapState } from 'vuex';

import Form_post from '../components/Form_post.vue';

export default {
    name: 'Accueil',
    components: {
        Form_post,
    },
    mounted: function() {
        console.log(this.$store.state);
        if (this.$store.state.user.userID == -1) {
            this.$router.push('/');
            return ;
        }
        this.$store.dispatch('getUserInfos');
    },
    computed: {
        ...mapState(['user','userInfos'])
    },
    methods: {
        logout: function() {
            this.$store.commit('logout');
            this.$router.push('/') }
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
</style>

