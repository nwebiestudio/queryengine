import * as React from "react";
import Main from "../components/Main";
import { Authorization } from "../components/Authorization";

import HomePage from "./index";

function Auth() {
  return (
    <>
       <Authorization />
    
      <Main />
    </>
  );
}

export default Auth;
