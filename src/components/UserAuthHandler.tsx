"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "../lib/supabaseClient";
import useUserStore from "@/store/userStore";

export default function UserAuthHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    async function checkUser() {
      // Check if user exists in store
      if (user) {
        setLoading(false);
        return;
      }
      // Get user from supabase
      const { data } = await supabase.auth.getUser();
      const userId = data?.user?.id;

      if (!userId) {
        setLoading(false);
        return;
      }

      setLoading(false);
      const { data: userData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();
      setUser(userData);
    }

    checkUser();
  }, [router, setUser, user]);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (user && path.includes("login")) {
    router.replace("/dashboard");
  } else if (user) {
    return <>{children}</>;
  }
  return <>{children}</>;
}
