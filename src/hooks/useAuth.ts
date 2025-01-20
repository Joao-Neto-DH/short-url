import React, { use, useEffect } from "react";
import { Usuario } from "../../prisma/generated/client";
import { useRouter } from "next/navigation";

export function useAuth() {
  const router = useRouter();
  const [dataSession, setDataSession] =
    React.useState<Pick<Usuario, "email" | "password">>();
  const [state, setState] = React.useState<{
    user: Usuario | null;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    error: string | null;
  }>({
    user: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: null,
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataSession),
        });
        const data = await response.json();

        if (response.status === 500) {
          setState({
            ...state,
            isSuccess: false,
            isLoading: false,
            isError: true,
            error: data.error,
          });
          return;
        }
        router.push("/short");
        setState({ ...state, isLoading: false, user: data });
      } catch (error) {
        setState({ ...state, isLoading: false, isError: true });
      } finally {
        setDataSession(undefined);
      }
    };

    if (dataSession && state.isLoading) {
      fetchUser();
    }
  }, [state, dataSession]);

  useEffect(() => {
    if (dataSession && !state.isLoading) {
      setState({
        isLoading: true,
        isError: false,
        isSuccess: false,
        error: null,
        user: null,
      });
    }
  }, [state, dataSession]);

  return [state, setDataSession] as const;
}
