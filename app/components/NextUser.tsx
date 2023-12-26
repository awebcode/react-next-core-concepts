"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const NextUser: React.FC = () => {
  const Router = useRouter();
    const { data: session } = useSession();
    console.log(session)
  if (session) {
    return (
      <div>
        <Image
          alt="avatar"
          src={session.user?.image || ""}
          height={60}
          width={60}
          className="object-cover rounded-sm hover:scale-105 duration-300 ring-2 ring-green-400 p-3 m-3"
        />
        <h1 className="text-gray-600">
          <span className="text-gray-800">Id:</span>
          {session.user?.id}
        </h1>
        <h1 className="text-gray-600">
          <span className="text-gray-800">Name:</span>
          {session.user?.name}
        </h1>
        <h1 className="text-gray-600">
          <span className="text-gray-800">email:</span>
          {session.user?.email}
        </h1>
        <button className="btn" onClick={() => signOut()}>
          SingOut
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button className="btn m-4" onClick={() => Router.push("/api/auth/signin")}>
          SingIN
        </button>
      </div>
    );
  }
};

export default NextUser;
