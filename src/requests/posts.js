import axios from 'axios'
function requestPost(){
    return axios.request({
        method:"get",
        url:"https://jsonplaceholder.typicode.com/posts"
    });
}

export default requestPost