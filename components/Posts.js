import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebaseConfig";
import Post from "./Post";
function Posts({ posts }) {
  const [realTimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  return (
    <div>
      {realTimePosts
        ? realTimePosts?.docs.map((post) => (
            <Post
              key={post.id}
              email={post.data().email}
              message={post.data().message}
              name={post.data().name}
              image={post.data().image}
              postImageURL={post.data().postImageURL}
              timestamp={post.data().timestamp}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              email={post.email}
              message={post.message}
              name={post.name}
              image={post.image}
              postImageURL={post.postImageURL}
              timestamp={post.timestamp}
            />
          ))}
    </div>
  );
}

export default Posts;
