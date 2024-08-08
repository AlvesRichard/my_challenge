"use client";
import Front from "@/components/specific/Front";
import Body from "@/components/specific/Body";
import Loading from "../../loading";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'


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
  return (
    <main className="appContainer">
      <Front userData={user} />
      <Body userData={user} />
    </main>
  );
}
