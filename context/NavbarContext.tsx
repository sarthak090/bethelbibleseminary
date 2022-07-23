import { Nav } from "@/models/Navigation";
import { createContext, useState, useEffect } from "react";
import { generateSubNav } from "utils/naviagtion";

interface ContextData {
  navItems: Nav[];
}

const NavbarContext = createContext<ContextData | any>(undefined);
export const NavProvider = (props: any) => {
  const [navItems, setNavItems] = useState<Nav | any>();
  useEffect(() => {
    Promise.all(generateSubNav()).then((r) => setNavItems(r));
  }, []);

  return (
    <NavbarContext.Provider value={{ navItems }}>
      {props.children}
    </NavbarContext.Provider>
  );
};
export default NavbarContext;
