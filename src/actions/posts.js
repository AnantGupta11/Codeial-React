
import { UPDATE_POSTS } from './actionTypes';
import { APIurls } from '../helpers/urls';
export function fetchPosts(){
    return(dispatch) =>{
        const url = APIurls.fetchPosts();
        fetch(url,{method:"GET",headers: {
            "Content-Type": "application/json"
       }})
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                console.log(data);
                dispatch(updatePosts(data.posts));
            })

    };
}
export function updatePosts(posts){
    return{
        type: UPDATE_POSTS,
        posts,
    }
}