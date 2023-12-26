"use client";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Card from "./Card";
import FetchData from "./FetchData";
import { signIn } from "next-auth/react";
import { redirect, useSearchParams } from "next/navigation";
const fetchData = async () => {
  const res = await fetch("/api/user");

  const data = await res.json();
  return data;
};
const Form = () => {
  const [formData, setFormData] = useState({});
  const [Data, setData] = useState<any>([]);
  const searchParams = useSearchParams();

  const errorGet = searchParams.get("error");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const res = await fetch("/api/user", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    // });

    // const data = await res.json();
    // setData([data?.user, ...Data]);
    // console.log(data);
    // if (res.ok) {
    //   alert(data.message);
    // } else {
    //   alert(res.statusText);
    // }

    try {
      const res = await signIn("credentials", formData);
      console.log("res", res);
      if (res?.status === 200) {
        redirect("/");
      } else if (res?.error) {
        alert(res?.error);
      }
    } catch (error) {
      console.log(error);

      alert(error);
    }
  };

  const onFormChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const signInCredentials = async () => {
    await signIn("credentials", {
      name: formData?.name,
      email: formData?.email,
      password: formData?.password,

      redirect: false,
    });
  };
  return (
    <div>
      <p>Count : {Data?.length}</p>
      <div className="flexCenter shadow-md  ">
        <button className="btn w-full m-2" onClick={signInCredentials}>
          Credentials
        </button>{" "}
        <button className="btn w-full m-2" onClick={async () => await signIn("google")}>
          Google
        </button>{" "}
        <button className="btn w-full" onClick={async () => await signIn("github")}>
          Github
        </button>{" "}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg bg-gray-100 p-4 flex flex-col rounded-sm"
        >
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="name" className="mx-2">
              Name:
            </label>
            <input
              name="name"
              onChange={onFormChange}
              type="text"
              placeholder="Enter your name"
              className="p-2 m-2 min-w-full  border border-blue-600   outline-green-500 rounded-sm"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="name" className="mx-2">
              Email:
            </label>
            <input
              name="email"
              type="email"
              onChange={onFormChange}
              placeholder="Enter your email"
              className="p-2 m-2 min-w-full  border border-blue-600   outline-green-500 rounded-sm"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="name" className="mx-2">
              Password:
            </label>
            <input
              name="password"
              type="password"
              onChange={onFormChange}
              placeholder="Enter your password"
              className="p-2 m-2 min-w-full  border border-blue-600   outline-green-500 rounded-sm"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="message" className="mx-2">
              Message:
            </label>
            <textarea
              name="message"
              id=""
              cols={30}
              rows={4}
              onChange={onFormChange}
              placeholder="You message here..."
              className="p-2 m-2 min-w-full  border border-blue-600   outline-green-500 rounded-sm"
            />
          </div>
          <button type="submit" className="btn min-w-full">
            Click Me
          </button>
        </form>
      </div>
      <FetchData data={Data} setData={setData} />
      {/* <Card data={Data} /> */}
    </div>
  );
};

export default Form;
