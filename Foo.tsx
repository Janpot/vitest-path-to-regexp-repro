import * as React from "react";
import { pathToRegexp } from "path-to-regexp";
import { message } from "./bar";

const p = pathToRegexp("/foo/:id");
console.log(p.regexp.exec("/foo/123"));

export default function Foo() {
  return <div>{message()}</div>;
}
