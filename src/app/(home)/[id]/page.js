"use client";
import Front from "@/components/Front";
import Body from "@/components/Body";
import Loading from "../../loading";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

const admin = {
  id: "#",
  name: "Admin",
  photo: "/perfiles/admin.jpg",
};

export default function Profile() {
  const [user, setUser] = useState(null);
  const pathname = usePathname()

  useEffect(() => { 
      const id = pathname.split("/")[1]
      const storedUsers = localStorage.getItem("users");
      const users = JSON.parse(storedUsers)
      setUser(users.filter(user=>user.id===parseInt(id))[0])
   
  }, []);

  if (!user) {
    return <Loading />;
  }

  const handleFollowToggle = () => {
    const storedUsers = localStorage.getItem("users");
    const users = JSON.parse(storedUsers);
    let updatedUser;
    const modificatedUsers = users.map((u) => {
      if (parseInt(u.id) === parseInt(user.id)) {
        if (user.followers.some(follower => follower.id === "#")) {
          const updatedFollowers = u.followers.filter(follower => follower.id !== "#");
          updatedUser = { ...u, followers: updatedFollowers };
          return updatedUser;
        } else {
          updatedUser = { ...u, followers: [...u.followers, admin] };
          return updatedUser;
        }
      }
      return u;
    });
    setUser(updatedUser);
    localStorage.setItem("users", JSON.stringify(modificatedUsers));
  };

  return (
    <main className="appContainer">
      <Front userData={user} onFollowToggle={handleFollowToggle}/>
      <Body userData={user} />
    </main>
  );
}
