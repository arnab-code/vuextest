<template>
    <div id="app" class="container">
        <div id="nav">
                <router-link to="/">Home</router-link>|
                <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
html {
    overflow-y: scroll;
}
body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 1.6;
    background: #e8f7f0;
}
.container {
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
    text-align: center;
}
#nav {
    display: flex;
    justify-content: center;
    gap: 5px;
    background-color: #35495e;
    height: 35px;
    border-radius: 5px;
}
#nav > a {
    color: white;
    text-decoration: none;
    padding: 5px;
}
.router-link-exact-active {
    background: #777;
    border-radius: 5px;
}
</style>
