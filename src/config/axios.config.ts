import { notification } from "@/utils/notification";
import axios from "axios";

// Create an axios instance with common settings
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: You can set up interceptors for request or response if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the token from localStorage or wherever it is stored
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Attach token to the Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handling response errors and showing notifications
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful response
    notification.success(
      `Success: ${response.data.message || "Request successful!"}` // Customize message
    );
    return response;
  },
  (error) => {
    // Handle error response
    console.error("API Error: ", error.response?.data || error.message);

    // If it's a 401 Unauthorized, remove token and navigate to login
    if (error.response?.status === 401) {
      localStorage.removeItem("auth_token");
      window.location.href = "/login"; // Redirect to login page (or use react-router for SPA navigation)
    }

    // Show error notification
    notification.error(
      error.response?.data?.message || "Something went wrong. Please try again."
    );
    return Promise.reject(error);
  }
);

export default axiosInstance;
