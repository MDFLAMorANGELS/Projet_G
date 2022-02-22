<template>
  <div id="nav">
      <img id="logo" src='./assets/logo1.png' alt= 'Logo de Groupomania' />
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

#logo {
	width: 150px;
	height: 150px;
}

</style>
