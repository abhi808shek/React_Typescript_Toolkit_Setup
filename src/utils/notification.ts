import { toast, ToastOptions } from "react-hot-toast";

export const notification = {
  success: (message: string, options?: ToastOptions) =>
    toast.success(message, options),
  error: (message: string, options?: ToastOptions) =>
    toast.error(message, options),
};
