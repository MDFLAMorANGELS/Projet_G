<template>
  <div id="nav">
    <div id="logo">
      <img src='./assets/logo1.png' alt= 'Logo de Groupomania' />
    </div>
    <div id="link">
      <router-link to="/">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-between;
  background-color: slategrey;
}

#link {
  display: flex;
  align-items: center;
  margin-right: 8%;
}

#logo
{
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin: 0 2% 0 2%;
  justify-content: flex-start;
}

img {
	width: 150px;
	height: 150px;
}

#nav a {
  font-weight: bold;
  color: #0b1824;
  text-decoration: none;
  margin: 10%;
}

#nav a.router-link-exact-active {
  color: #53af57;
}
</style>
