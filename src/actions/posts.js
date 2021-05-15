import { UPDATE_POSTS } from './actionTypes';

export function fetchPosts(){
    return(dispatch) =>{
        const url = 'http://localhost:8000/api/v1/posts/?page=1&limit=5';
        fetch(url,{mode: 'no-cors',headers: {
            "Content-Type": "application/json"
       }})
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                console.log(data);
                dispatch(updatePosts(data.data.posts));
            })

    };
}
export function updatePosts(posts){
    return{
        type: UPDATE_POSTS,
        posts
    }
}