<template>
    <div class="fondo container border">
        <h1>Detalle del Post</h1>
            <div class="row">
                <div class="column">
                    <div class="card p-3" style="width: 18rem; float:left;">
                        <h4>ID del autor: {{post.userId}}</h4>
                        <h4>Codigo de post: {{post.id}}</h4>
                        <h4>Titulo: {{post.title}}</h4>
                    </div>

                    <div class="card p-3" style="height: 94%">
                        <h4 style="">Cuerpo del Post</h4>
                        <p>{{post.body}}</p>
                    </div>
                    
                </div>
            </div>
            
            <router-link :to="{name: 'EditPost', params: {id: post.id}}"><button class="btn bg-success text-center mb-3 mt-3">Editar</button></router-link>
        </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class Post extends Vue{

    beforeMount(){
         this.$store.dispatch('postsModule/readOne', this.$route.params.id);
    };

    get post(){
        return this.$store.state.postsModule.post;
    };
}
</script>

<style scoped>
    .fondo{
        background: white;
    }
    .card{
        margin: 1%;
        
    }
</style>