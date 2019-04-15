import React from "react";

const Avatar = props => {
  return (
    <div className="mx-2">
      <a href="https://github.com/KimTrijnh" className="light-text">
        <img src="https://avatars1.githubusercontent.com/u/26478993?v=4" width="30" height="30" alt="avatar" />
        {props.text}
      </a>
    </div>
  );
};

export default Avatar;
