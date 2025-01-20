import React, { useEffect } from "react";
import { Usuario } from "../../prisma/generated/client";
import { useRouter } from "next/navigation";

export function useCreateAccount() {
  const router = useRouter();
  const [dataAccount, setDataAccount] =
    React.useState<Pick<Usuario, "email" | "password" | "name">>();
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
        const response = await fetch("/api/usuarios", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataAccount),
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
        setState({
          ...state,
          isLoading: false,
          isError: true,
          isSuccess: false,
        });
      } finally {
        setDataAccount(undefined);
      }
    };
    if (dataAccount && state.isLoading) {
      fetchUser();
    }
  }, [state, dataAccount]);

  useEffect(() => {
    if (dataAccount && !state.isLoading) {
      setState({
        isLoading: true,
        isError: false,
        isSuccess: false,
        error: null,
        user: null,
      });
    }
  }, [state, dataAccount]);

  return [state, setDataAccount] as const;
}
