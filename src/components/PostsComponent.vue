<template>
    <div>
        <h2>Lista de posts Agregados</h2>

    <div class="container">
        <div class="row">
            <div class="card p-3 ml-5 mt-3" style="width: 18rem; float: left;" v-for="post of posts" :key="post.id">
                <div class="card-body">
                    <h5 class="card-title">{{post.title}}</h5>
                    <p class="card-text">{{post.body}}</p>
                </div>
                <div class="container ">
                        <button v-on:click="deletePosts(post.id)" class=" button bg-danger">Eliminar</button>
                        <router-link :to="{name: 'Post', params: {id: post.id}}"><button class="button bg-success">Ver detalles</button></router-link>
                </div>
            </div>
        </div>
    </div>

    
    </div>
</template>

<script lang="ts">

import {Component, Vue }from 'vue-property-decorator'

@Component
export default class PostsComponent extends Vue{

    deletePosts(id: any){
        this.$store.dispatch("postsModule/delete", id);
        
    }

    mounted() {
        this.$store.dispatch("postsModule/read");
    }

    get posts(){
        return this.$store.state.postsModule.posts;
    }
}

</script>

<style lang="scss" scoped>
    .button{
        border: black;
        text-shadow: none;
        padding: 5px;
        margin: 5px;
        position: relative;
    }
</style>