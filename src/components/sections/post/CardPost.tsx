"use client";

import Image, { StaticImageData } from "next/image";

interface Props {
  image: string | StaticImageData;
  title?: string;
  description?: string;
}

const CardPost = (props: Props) => {
  const post = props;

  return (
    <div className="flex h-[100px] w-[350px] border-spacing-1 bg-white">
      <div className="m-1 w-24 items-center border border-emerald-200">
        <Image src={post.image} alt="ảnh" width={80} height={80} />
      </div>
      <div className="h-[100px] w-[255px]">
        <h4 className="max-lines:2 mb-1.5 h-12 cursor-pointer overflow-y-hidden border border-slate-300 text-base font-semibold hover:text-cyan-500">
          {post.title}
        </h4>
        <p className=" max-lines:2 h-11 overflow-y-hidden border border-orange-500 text-sm">
          {post.description}
        </p>
      </div>
    </div>
  );
};

export default CardPost;
