import RemoteImage from "@/components/RemoteImage";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import React from "react";

const BlogsPage = async () => {
  const { data } = await supabase.from("posts").select("*");

  if (!data) {
    return <div className="text-center font-bold text-2xl">No Post</div>;
  }

  return (
    <div>
      <h1 className="light-gradient-text font-extrabold text-[64px] text-center">
        Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center p-5 items-center mt-5">
        {data.map((post) => (
          <Link
            href={`/blogs/${post.id}`}
            key={post.id}
            className="hover:scale-105 cursor-pointer"
          >
            <RemoteImage
              path={post.image_url}
              width={200}
              height={200}
              className="rounded-lg h-[15rem] w-full"
            />
            <h1 className="mt-3 font-bold">{post.title}</h1>
            <h1 className="text-[12px] text-gray-300 mt-2">
              {post.description}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
