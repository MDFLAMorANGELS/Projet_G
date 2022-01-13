<template>
  <div>
    <form @submit.prevent="validateForm()" action="">
    <label for="comment"><b>Commentaire {{ postID }}</b></label>
    <input
      v-model="comment"
      maxlength="250"
      type="text"
      placeholder="Ecrivez un commentaire"
      name="comment"
    />
<input type="submit" value="Publier">
  </form>
  </div>
</template>

<script>



export default {
  name: "Form_comment",
  data: function() {
      return {
      comment:'',
    }
  },
  methods: {
      validateForm: function() {
        console.log(this.comment,this.postID)
          this.$store.dispatch('createComment', {
              ID: this.postID,
              data: this.comment,
          })
      }
    },
  props: [
    'postID'
  ],
};
</script>

<style scoped>
input[type="text"] {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 30px;
}

</style>