import React from "react";

export default function ContentBox(props) {
  return (
  <div className="bg-slate-700 text-white rounded">{/*rounded box*/}
    <div>{/* logo*/}
        <img></img>
    </div>
    <div className="overflow-y-auto">{/* text box*/}
    {props.children}
    </div>
    <div>{/* footer social icons*/} 
        <img></img>
        <img></img>
        <img></img>
        <img></img>
    </div>
  </div>
  );
}