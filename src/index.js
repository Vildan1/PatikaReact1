import axios from "axios";

async function getUser(id) {
  const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + id);
  const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + id);
  console.log("Users:", users);
  console.log("Posts:", posts);

}
export default getUser;