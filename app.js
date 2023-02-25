import axios from "axios";

async function getData(id){
    const { data:user } = await axios("https://jsonplaceholder.typicode.com/users/"+String(id));
    const { data:post } = await axios("https://jsonplaceholder.typicode.com/posts?userId="+String(id));

    user.post = post
    //user.ad = "asasdadas"
    console.log("user",user);
}

export default getData