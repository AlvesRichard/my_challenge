"use client";
import UsersPreview from "@/components/UsersPreview";
import UserInfo from "../UserInfo";
import { BsPlusSquareFill } from "react-icons/bs";
import "./styles.css";
import { useEffect, useState } from "react";
import Post from "../Post";
import Modal from "../Modal";
import NewPost from "../NewPost";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, addPost } from "@/redux/slices/postsSlice";

export default function Body({ userData }) {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      const storedUsers = localStorage.getItem("users");
      const parsedUsers = JSON.parse(storedUsers);

      const userPosts = parsedUsers.find(
        (user) => parseInt(user.id) === parseInt(userData.id)
      )?.posts;

      if (userPosts && userPosts.length > 0) {
        dispatch(setPosts(userPosts));
      } else {
        alert("Error al cargar las publicaciones.");
      }
    };

    loadPosts();
  }, [dispatch, userData.id]);

  const handleNewPost = (newPost) => {
    const postUpdated = { id: posts[0].id + 1, userId: "#", ...newPost };
    dispatch(addPost(postUpdated));
    updateLocalStorage(postUpdated);
    setIsModalOpen(false);
  };

  const updateLocalStorage = (postUpdated) => {
    const storedUsers = localStorage.getItem("users");
    const parsedUsers = JSON.parse(storedUsers);

    const updatedUsers = parsedUsers.map((user) => {
      if (parseInt(user.id) === parseInt(userData.id)) {
        return { ...user, posts: [postUpdated, ...posts] };
      }
      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <section className="bodyContainer">
      <div className="infoContainer">
        <UserInfo userData={userData} />
        <UserInfo isPersonalInfo={true} userData={userData} />
        <UsersPreview title={"Seguidores"} users={userData.followers} />
        <UsersPreview title={"Seguidos"} users={userData.followed} />
      </div>
      <div className="postsListContainer">
        <div className="topPosts">
          <span className="principalTitlePosts">Publicaciones</span>
          <BsPlusSquareFill
            style={{ color: "#8B95EE", fontSize: 35 }}
            onClick={() => setIsModalOpen(true)}
            className="cursorPointer"
            title="Nueva publicación"
          />
        </div>
        {posts ? (
          posts.map((post) => {
            return (
              <div key={post.id + post.title} className="postContainer">
                <Post post={post} />
              </div>
            );
          })
        ) : (
          <h1>Loading</h1>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewPost onSubmit={handleNewPost} />
      </Modal>
    </section>
  );
}
