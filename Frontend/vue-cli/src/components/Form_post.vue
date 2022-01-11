<template>
<div class="container_post"> 
    <div id="textarea">
        <label for="story">Raconter nous votre story :</label>
        <textarea  v-model="title" id="story" name="publication" rows="1" cols="80" placeholder="Ecrivez un titre" maxlength="150" required></textarea>
        <textarea  v-model="data" id="story" name="publication" rows="7" cols="80" placeholder="Ecrivez ici votre publication" maxlength="1000" required></textarea>
        <label for="avatar">Choisissez une image :</label>

<input type="file"
       id="file" name="file"
       accept="image/png, image/jpeg, image/gif">
    </div>
    <button @click="button()" id="button_post"> Publié </button>
</div>
</template>

<script>
export default {
    name:'Form_post',
    data: function() {
    return {
        title: '',
        data: '',
    }
    },
    methods: {
        button :function() {
            console.log(this.titre,this.text);
            this.$store.dispatch('createPost', {
              title: this.title,
              data: this.data,
          })
        },
    },
}
</script>

<style scoped>
.container_post {
    margin: 2%;
}

textarea {
    letter-spacing: 1px;
    font-size: 1.5em;
    padding: 10px;
    max-width: 100%;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid rgb(116, 116, 116);
    box-shadow: 2px 2px 2px #999;
    resize: none;
    background-color: rgb(228, 227, 227);
}

label {
    display: block;
    margin-bottom: 10px;
}
#button_post {
    background: linear-gradient(#8d0b66, #3f87a6);
    color: white;
    padding: 10px 30px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    border-radius: 30px;
    font-size: 1.2em;
}
#textarea {
    display: flex;
    flex-direction: column;
}


</style>
