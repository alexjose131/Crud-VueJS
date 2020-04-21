<template>
    <div class="fondo container border">
        <h2>Crear un nuevo Post</h2>
        <hr>
    
        <div class="container text-left">
            <form v-on:submit="addPost">
                <div class="form-group">
                    <label for="formGroupExampleInput">Id del Usuario: </label>
                    <input type="number" v-model = 'userId' id="formGroupExampleInput">
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Titulo: </label>
                    <input type="text" v-model = 'title' class="form-control" id="formGroupExampleInput" placeholder="titulo">
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Cuerpo del Post: </label>
                    <textarea rows="30" v-model = 'body' class="form-control" id="formGroupExampleInput2" placeholder="Cuerpo"></textarea>
                </div>

                <div class="text-center">
                    <input type="submit" value="Aceptar" class="enviar btn bg-success">
                </div>
                
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class CreatePost extends Vue{
    data() {
        return {
            userId: null,
            id: 101,
            title: '',
            body: '',
        };
    };

    addPost(e:any){
        e.preventDefault();
        console.log(this.$data);
        
        this.$store.dispatch('postsModule/create', this.$data);
    };

}
</script>

<style scoped>
    .fondo{
        background: white;
    }
    .enviar{
        border: 5px;
        margin-bottom: 10px;
    }
</style>