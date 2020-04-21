import { API_URL } from "./config";

export default{
    getPosts(){
        return API_URL.get("posts");
    },

    deletePosts(id: number){
        return API_URL.delete("posts/" + id);
    },

    getPost(id: number){
        return API_URL.get("posts/"+ id);
    },

    addPost(post:Object){
        return API_URL.post("posts", post);
    },

    editPost(id:number, post:Object){
        return API_URL.put("posts/"+ id, post);
    }
}