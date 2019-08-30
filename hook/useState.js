import React, { useState } from "react";

function xxxpz() {
  const [count, setCount] = useState < number > 1;
  // setCount 可以创建多个
  // useState的实现在在俩个数组的基础上，还有一个对应的光标
  // const 是可以改变的，这个不是改变是重新赋值
  return <div>{count}</div>;
}
