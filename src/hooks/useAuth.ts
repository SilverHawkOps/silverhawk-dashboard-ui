// hooks/useAuth.ts
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
}

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState<User>();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!storedUser || !token) {
      // store the attempted URL in localStorage for redirect after login
      localStorage.setItem("redirectAfterLogin", pathname);
      setLoading(false); // stop loading before redirect
      router.replace("/signin"); // redirect to login
      return;
    }

    try {
      setUser(JSON.parse(storedUser));
      setIsUserLoggedIn(true);
    } catch (err) {
      console.error("Failed to parse user from localStorage", err);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      router.replace("/signin");
    } finally {
      setLoading(false);
    }
  }, [router, pathname]);

  return { loading, isUserLoggedIn, user };
}
