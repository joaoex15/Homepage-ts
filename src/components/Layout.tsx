import { Footer } from "./Footer";
import { Header } from "./Header/Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header titulo="BANK" />
      {children}
      <Footer titulo="Dio Bank © 2025" />
    </>
  );
}
