import RemoteImage from "@/components/RemoteImage";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const SinglePost = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", blogId)
    .single();

  if (error || !data) {
    return <div className="flex justify-center">Post not found!</div>;
  }

  return (
    <div>
      <Link href={"/blogs"} className="flex items-center gap-2">
        <BiArrowBack />
        <p>Back</p>
      </Link>
      <div className="flex flex-col justify-center w-full items-center">
        <h1 className="text-center light-gradient-text font-extrabold text-[44px] lg:w-[60%] leading-none">
          {data.title}
        </h1>
        <p className="italic mb-5 text-center w-[90%] lg:w-[50%]">
          {data.description}
        </p>
      </div>

      <div className="mb-5 flex justify-center">
        <RemoteImage path={data.image_url} width={600} height={400} />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data.content }}
        className="prose max-w-none text-[15px]"
      />
    </div>
  );
};

export default SinglePost;
