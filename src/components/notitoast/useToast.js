"use client";
import { useContext } from "react";
import { ToastContext } from "./ToastProvider";

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  const { addToast } = context;
  return addToast;
};
