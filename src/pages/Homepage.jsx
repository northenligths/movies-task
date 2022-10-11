import React, { useState } from "react";
import Header from "../components/Header";
import Movies from "../components/Movies";
import axios from "axios";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Movies />
    </div>
  );
};

export default Homepage;
