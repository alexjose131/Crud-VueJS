<template>
  <div id="app" class="container-fluid">
    <header>
      <div id="nav" class="bg-success container">
        <router-link to="/">Home</router-link> |
        <router-link to="/posts">Posts</router-link>  |
        <router-link to="/createPost">Nuevo Post</router-link>
      </div>
    </header>
    <router-view/>

    <footer>
      asdasd
    </footer>
  </div>
  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: transparentize($color: gray, $amount: 0.9);
}

#nav {
  padding: 30px;

  color: white;

  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>
