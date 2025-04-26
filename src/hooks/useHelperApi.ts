import { useState, useCallback } from "react";

type ApiState<T> = {
  loading: boolean;
  data: T | null;
  error: string | null;
};

export default function useHelperApi<T = any>(callback: () => Promise<T>) {
  const [state, setState] = useState<ApiState<T>>({
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setState({ loading: true, data: null, error: null });
    try {
      const response = await callback();
      setState({ loading: false, data: response, error: null });
    } catch (error: any) {
      setState({
        loading: false,
        data: null,
        error: error.message || "Something went wrong",
      });
    }
  }, [callback]);

  return {
    ...state,
    fetchData,
  };
}
