<template>
  <div id="nav">
    <div id="logo">
      <img src='./assets/logo1.png' alt= 'Logo de Groupomania' />
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

</style>
