<template>
  <div>
    <label for="comment"><b>Commentaire</b></label>
    <input
      v-model="comment"
      @keyup="comments()"
      maxlength="250"
      type="text"
      placeholder="Ecrivez un commentaire"
      name="comment"
    />
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
      comments: function() {
          console.log(this.comment);
      }
    },
  computed: {

    },
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