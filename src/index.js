import axios from "axios";

async function getUser(id) {
  //Axios call to get user data
  const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + id);
  //Axios call to get post data
  const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + id);
  console.log("Users:", users);
  console.log("Posts:", posts);
}
export default getUser;