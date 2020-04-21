import Vue from "vue";

import postsService from '@/services/postsService'

export default {
    namespaced: true,

    state: {
        posts: [],
        post: {},
    },

    getters: {

    },

    mutations: {
        setPosts(state:any, posts:[]){
            Vue.set(state, 'posts', posts);
        },

        deletePost(state:any, postId:number){
            state.posts.forEach((post: any) => {
                if (post.id == postId){
                    state.posts.splice(post,1);
                };
            });
        },

        setPost(state: any, post:Object){
            Vue.set(state, 'post', post);
        },

        updatePost(state:any, postData:any){
            state.posts.forEach((post: any) => {
                if (post.id == postData.id){
                    state.post.id = postData.id;
                    state.post.userId = postData.userId;
                    state.post.title = postData.title;
                    state.post.body = postData.body;
                };
            });
        }

    },

    actions: {
        read: async function(context: any){
            await postsService.getPosts().then((response: any) => {
                console.log(response);
                context.commit("setPosts", response.data);
            });
        },

        delete: async function(context:any, id:number){
            await postsService.deletePosts(id).then((response:any) =>{
                console.log('se ha eliminado', response);
                context.commit("deletePost",id);
                alert('Se ha eliminado el Post.');
            }).catch(error =>{
                console.log('ha ocurrido un error al borrar: ', error);
            });
        },

        readOne: async function(context: any, id:number){
            await postsService.getPost(id).then((response:any) =>{
                context.commit("setPost", response.data);
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
        },

        create: async function(context: any, postData: Object){
            await postsService.addPost(postData).then((response:any) =>{
                alert('Post agregado correctamente.');
                context.commit("setPosts", response.data);
                console.log(response);
            }).catch((error:any) => {
                console.log(error);
            });
        },

        update: async function(context: any, postData: any){
            await postsService.editPost(postData.id, postData).then((response:any) => {
                context.commit("updatePost", postData);
                console.log(response);
                alert('Post actualizado correctamente.');
            }).catch((error: any) => {
                console.log(error);
            });
        }
    },




}