<template>
  <div class="Register">
    <Form_register/>
  </div>
</template>

<script>
// @ is an alias to /src
import Form_register from '@/components/Form_register.vue'

export default {
  name: 'Register',
  components: {
    Form_register
  }
}
</script>
