import { createContext, useState } from "react";

// Context sağlayıcısının kurulumunu yap
export const SidebarContext = createContext();

// Sağlayıcı componentını tanımla (HOC)
export const SidebarProvider = ({ children }) => {
  // navbar kapalı mı state'i
  const [isCollapsed, setIsCollapsed] = useState(true);

  // navbar aç/kapa yapan fonksiyon
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // componentlara sağlanacak verileri tanımla
  return (
    <SidebarContext.Provider
      value={{ isCollapsed, toggleSidebar }} //
    >
      {children}
    </SidebarContext.Provider>
  );
};
