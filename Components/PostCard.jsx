import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="bg-sky-100 mt-4 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 flex flex-col justify-evenly">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6 h-1/3">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>

      <div className="h-2/3 flex justify-between flex-col">
        <h1 className="transition duration-700 text-justify my-2 cursor:pointer hover:text-blue-900 text-xl font-semibold h-1/4">
          <Link href={`/post/${post.slug}`}>{post.title} </Link>
        </h1>
        <p className="text-justify text-lg text-grey-700 font-normal mb-8  h-2/3">
          {post.excerpt}
        </p>
        <div className="justify-start py-4 lg:mb-0 w-full lg:w-auto mr-0 ">
          <div className="font-medium, text-gray-700 ">
            <p>Posted on :{moment(post.createdAt).format("MMM DD, YYYY")}</p>
            <p className="inline align-center text-gray-700 text-md">
              By: {post.author?.name}
            </p>
          </div>
        </div>
        <div className="text-center">
          <Link href={`/post/${post.slug}`}>
            <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-900 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
              Continue Reading
            </span>
          </Link>
        </div>
      </div>

      <div className="block lg:flex text-justify items-center justify-center mb-8 w-full"></div>
    </div>
  );
};

export default PostCard;
