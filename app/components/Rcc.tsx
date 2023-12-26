"use client";
import { baseUrl } from "@/util/base_url";
import React, { Component } from "react";

type RccState = {
  userData: any;
};

class Rcc extends Component<{}, RccState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      userData: null,
    };
    console.log("constructor called");
  }

  async componentDidMount() {
    const res = await fetch(`${baseUrl}/api/user`);
    const data = await res.json();
    this.setState({ userData: data });
  }

  render() {
    console.log("render called");
    return <div>User Data: {JSON.stringify(this.state.userData)}</div>;
  }
}

export default Rcc;
