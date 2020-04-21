<template>
    <div class=" fondocontainer container border">
        <h1>Seccion de Posts</h1>
        <PostsComponent />
    </div>
</template>

<script lang="ts">

import Vue from 'vue'
import PostsComponent from '../components/PostsComponent.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'PostsView',

    components:{
        PostsComponent
    }
}
</script>

<style lang="scss">
    .fondocontainer{
        background: white;
    }
</style>