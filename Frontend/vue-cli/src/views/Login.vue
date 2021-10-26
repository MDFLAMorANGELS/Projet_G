<template>
  <div class="Login">
    <Form_login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Form_login from '@/components/Form_login.vue'

export default {
  name: 'Login',
  components: {
    Form_login
  }
}
</script>
