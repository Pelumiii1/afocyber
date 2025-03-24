import NewPostForm from "@/components/Admin/NewPostForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const NewPostPage = () => {
  return (
    <div className="p-10 pt-0 lg:pt-10">
      <div className="flex lg:hidden mb-4">
        <Link href="/dashboard" className="text-black flex items-center gap-3">
          <ArrowLeft />
          Back
        </Link>
      </div>
      <h1 className="font-bold text-[28px]">Add New Blog Post</h1>
      <NewPostForm />
    </div>
  );
};

export default NewPostPage;
