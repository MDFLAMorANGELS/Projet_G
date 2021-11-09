<template>
<div class="container_post"> 
    <div id="textarea">
        <label for="story">Raconter nous votre story :</label>
        <textarea  v-model="titre" id="story" name="publication" rows="1" cols="80" placeholder="Ecrivez un titre" maxlength="74" required></textarea>
        <textarea  v-model="text" id="story" name="publication" rows="8" cols="80" placeholder="Ecrivez ici votre publication" maxlength="1200" required></textarea>
    </div>
    <button @click="button()" id="button_post"> Publié </button>
</div>
</template>

<script>
export default {
    name:'Form_post',
    data: function() {
    return {
        titre: '',
        text: '',
    }
    },
    methods: {
        button :function() {
            console.log(this.titre,this.text);
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


</style>
