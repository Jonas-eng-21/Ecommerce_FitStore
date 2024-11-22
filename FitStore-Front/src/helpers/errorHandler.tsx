import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const response = error.response;
    if (response?.data) {
      if (Array.isArray(response.data.errors)) {
        for (const val of response.data.errors) {
          toast.warning(val.description);
        }
      } else if (typeof response.data.errors === "object") {
        for (const key in response.data.errors) {
          toast.warning(response.data.errors[key][0]);
        }
      } else {
        toast.warning(response.data);
      }
    } else if (response?.status === 401) {
      toast.warning("Please login");
      window.history.pushState({}, "LoginPage", "/login");
    } else {
      toast.warning("An unknown error occurred");
    }
  } else {
    toast.error("An unexpected error occurred");
  }
};
