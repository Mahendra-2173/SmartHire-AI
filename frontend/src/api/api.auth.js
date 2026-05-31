import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const register = async ({ name, email, password }) => {
  try {
    const response = await api.post("/api/auth/register", { name, email, password });
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Registration failed");
    throw error;
  }
};

export const login = async ({ email, password }) => {
  try {
    const response = await api.post("/api/auth/login", { email, password });
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Login failed");
    throw error;
  }
};

export const logout = async () => {
  try {
    await api.post("/api/auth/logout");
    localStorage.removeItem("token");
  } catch (error) {
    toast.error(error.response?.data?.message || "Logout failed");
    throw error;
  }
};

export const getMe = async () => {
  try {
    const response = await api.get("/api/auth/getme");
    return response.data;
  } catch (error) {
    if (error.response?.status !== 401)
      toast.error(error.response?.data?.message || "Failed to fetch user data");
    throw error;
  }
};