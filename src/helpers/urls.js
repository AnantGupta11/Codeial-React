
const API_ROOT= '/api/v1'
export const APIurls = {
    login: ()=> `${API_ROOT}/users/create-session`,
    signup: ()=> `${API_ROOT}/users/createUser`,
    fetchPosts:(page=1,limit =5)=> `${API_ROOT}/posts?page=${page}&limit=${limit}`,
};