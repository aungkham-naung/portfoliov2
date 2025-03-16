"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose
} from "./toast";

interface ToastData {
  id: number;
  title: string;
  description?: string;
  variant?: "default" | "destructive";
}

interface ToastContextValue {
  showToast: (options: {
    title: string;
    description?: string;
    variant?: "default" | "destructive";
  }) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProviderWithContext = ({
  children
}: {
  children: ReactNode;
}) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const showToast = ({
    title,
    description,
    variant = "default"
  }: {
    title: string;
    description?: string;
    variant?: "default" | "destructive";
  }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, description, variant }]);
    // Automatically remove the toast after 3 seconds.
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ToastProvider>
        {children}
        <ToastViewport>
          {toasts.map((toast) => (
            <Toast key={toast.id} variant={toast.variant}>
              <ToastTitle>{toast.title}</ToastTitle>
              {toast.description && (
                <ToastDescription>{toast.description}</ToastDescription>
              )}
              <ToastClose />
            </Toast>
          ))}
        </ToastViewport>
      </ToastProvider>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProviderWithContext");
  }
  return context;
};
