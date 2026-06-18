import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const STORAGE_KEY = "nexuscon_exhibitor_session";

export function AuthProvider({ children }) {
  const [exhibitor, setExhibitor] = useState(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  // Restore a previous mock session on load
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setExhibitor(JSON.parse(raw));
    } catch {

    }
  }, []);

  function login(email) {
    const name = email.split("@")[0].replace(/[._]/g, " ").trim() || "Exhibitor";
    const session = {
      email,
      displayName: name.charAt(0).toUpperCase() + name.slice(1),
      booth: "B" + String((email.length * 7) % 20 + 1).padStart(2, "0"),
    };
    setExhibitor(session);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    } catch {
      
    }
    return session;
  }

  function logout() {
    setExhibitor(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      
    }
  }

  return (
    <AuthContext.Provider
      value={{
        exhibitor,
        isAuthenticated: !!exhibitor,
        login,
        logout,
        loginModalOpen,
        openLoginModal: () => setLoginModalOpen(true),
        closeLoginModal: () => setLoginModalOpen(false),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
