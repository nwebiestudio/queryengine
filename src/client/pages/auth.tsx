import * as React from "react";
import Main from "../components/Main";
import { Authorization } from "../components/Authorization";

import HomePage from "./index";

function Auth() {
  return (
    <>
      <div className="absolute right-0 left-0 top-0 bottom-0 z-10 bg-black bg-opacity-20">
        <Authorization />
      </div>
      <Main />
    </>
  );
}

export default Auth;
