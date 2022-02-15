<template>
<form enctype="multipart/form-data" @submit.prevent="validateForm()" action="">
<div class="container_post"> 
    <div id="textarea">
        <label for="story">Raconter nous votre story :</label>
        <textarea ref="title"  v-model="title" id="story" name="publication" rows="1" cols="80" placeholder="Ecrivez un titre" maxlength="150" required></textarea>
        <textarea ref="data" v-model="data" id="story" name="publication" rows="7" cols="80" placeholder="Ecrivez ici votre publication" maxlength="1000" required></textarea>

    <div class="field">
        <label for="file" class="file">Choisissez une image :</label>
        <input 
        id="image"
        type="file"
        name="image"
        @change="onFileSelected"
        >
        <p>previsualise image</p>
        <img :src="image" alt="">
    </div>
    <div class="previsualise">
    </div>
    </div>
    <input type="submit"  id="button_post" value="Publier">
</div>
</form>
</template>

<script>

export default {
    name:'Form_post',
    data () {
    return {
        title: '',
        data: '',
        file: '',
        image:'https://www.gorilla-cannabis-seeds.co.uk/images/product_image_not_found.gif',
        selectFile: null
    }
    },
    methods: {
        validateForm()  {
            //console.log(this.selectFile)
            const fd = new FormData();
            fd.append('image', document.getElementById('image').files[0])
            fd.append('title', this.title)
            fd.append('data', this.data)
            console.log(fd);
            this.$store.dispatch('createPost',fd)
        this.$refs["title"].value = "";
        this.$refs["data"].value = "";
        },
        onFileSelected(event) {
            this.selectFile = event.target.files[0]
            const file = event.target.files[0]
            this.image = URL.createObjectURL(file)
        }
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
