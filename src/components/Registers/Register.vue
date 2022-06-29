<template>
  <div class="register">
    <div>
      <form @submit.prevent="submit">
        <div>
          <label for="firstName">First Name:</label>
          <input type="text" name="firstName" v-model="form.firstName" />
        </div>
        <div>
          <label for="secondName">Second Name:</label>
          <input type="text" name="secondName" v-model="form.secondName" />
        </div>
        <div>
          <label for="lastName">Last Name:</label>
          <input type="text" name="lastName" v-model="form.lastName" />
        </div>
        <div>
          <label for="full_name">Email:</label>
          <input type="text" name="email" v-model="form.email" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="form.password" />
        </div>
        <div class="botao">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    <p v-if="showError" id="error">Username already exists</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        email: "",
        firstName: "",
        secondName: "",
        lastName: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        await this.Register(this.form);
        this.$router.push("/posts");
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

button[type="submit"] {
  background-color: #f0833b ;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
  margin-top: 30px;
}

.botao {
  padding-left: 150px;
}
 
/* button[type="submit"]:hover {
  background-color: #45a049;
} */

input {
  margin: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}
#error {
  color: red;
}
</style>
