import { create } from "zustand";
import axios from "axios";

const authStore = create((set) => ({
  loggedIn: null,
  loginForm: {
    email: "",
    password: "",
  },
  SignUpForm: {
    email: "",
    password: "",
  },
  updateLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },
  updateSignUpForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        SignUpForm: {
          ...state.SignUpForm,
          [name]: value,
        },
      };
    });
  },
  login: async () => {
    const { loginForm } = authStore.getState();
    const res = await axios.post("http://localhost:3000/login", loginForm, {
      withCredentials: true,
    });
    set({
      loggedIn: true,
      loginForm: {
        email: "",
        password: "",
      },
    });
  },
  checkAuth: async () => {
    try {
      await axios.get("http://localhost:3000/checkauth", {
        withCredentials: true,
      });
      set({
        loggedIn: true,
      });
    } catch (err) {
      set({
        loggedIn: false,
      });
    }
  },
  signup: async () => {
    const { SignUpForm } = authStore.getState();
    const res = await axios.post("http://localhost:3000/signup", SignUpForm, {
      withCredentials: true,
    });
    set({
      SignUpForm: {
        email: "",
        password: "",
      },
    });
  },
  logout: async () => {
    await axios.get("http://localhost:3000/logout", {
      withCredentials: true,
    });
    set({ loggedIn: false });
  },
}));
export default authStore;
