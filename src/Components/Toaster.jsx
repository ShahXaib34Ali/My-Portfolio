import React, { createContext, useState, useCallback } from 'react';

export const ToastContext = createContext();

export const ToasterProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback(({ title, description }) => {
    const id = Math.random().toString(36).substring(7);
    const newToast = { id, title, description };
    
    setToasts((prev) => [...prev, newToast]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-4">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="bg-card p-4 rounded-lg shadow-lg border border-border animate-fade-in"
          >
            {t.title && (
              <h4 className="font-medium text-foreground">{t.title}</h4>
            )}
            {t.description && (
              <p className="text-muted-foreground text-sm mt-1">{t.description}</p>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};