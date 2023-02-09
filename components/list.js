import React from "react";

export default function List({ children, name }) {
  return (
    <div className="bg-slate-400 rounded-md p-4 flex-1">
      <h1 className=" text-gray-900 font-bold my-3">{name}</h1>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
