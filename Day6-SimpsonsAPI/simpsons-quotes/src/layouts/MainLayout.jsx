import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Navbar";
import "./mainLayout.css";

export default function MainLayout() {
  return (
    <>
      <header className="header">
        <Nav />
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
