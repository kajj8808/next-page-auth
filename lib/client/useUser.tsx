import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser() {
  const { data, error } = useSWR("/api/users/me");
  const router = useRouter();

  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/create-account");
    } else {
      router.replace("/");
    }
  }, [data, error]);

  return { user: data, isLoading: !data && !error };
}
