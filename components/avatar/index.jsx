import Image from "next/image";
import React from "react";
import { AvatarConteiner } from "./style";

const Avatar = ({ author, createdAt }) => {
  return (
    <AvatarConteiner>
      <Image
        src={author?.picture?.url}
        alt={author?.name}
        width={50}
        height={50}
      />
      <div>
        <p className="author-name">{author?.name}</p>
        <span className="created-at">
          Publicado em: {new Date(createdAt).toLocaleDateString()}
        </span>
      </div>
    </AvatarConteiner>
  );
};

export default Avatar;
