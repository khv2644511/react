import React, { useContext } from "react";
import "./Apptheme.css";
import { DarkModeContext, DarkModeProvider } from "./context/DarkModeContext";

export default function AppTheme() {
  return (
    <DarkModeProvider>
      <Header />
      <Main />
      <Footer />
    </DarkModeProvider>
  );
}

function Header() {
  return <header className="header">Header</header>;
}

function Main() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <main className="main">
      Main
      {darkMode ? (
        <>
          <Profile style={{ backgroundColor: "black", color: "white" }} />
          <Products style={{ backgroundColor: "black", color: "white" }} />
        </>
      ) : (
        <>
          <Profile />
          <Products />
        </>
      )}
    </main>
  );
}

function Profile() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      Profile
      {darkMode ? (
        <User style={{ backgroundColor: "black", color: "white" }} />
      ) : (
        <span>감자</span>
      )}
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <div>
        DarkMode:
        {darkMode ? (
          <span style={{ backgroundColor: "black", color: "white" }}>
            DarkMode
          </span>
        ) : (
          <span>Light Mode</span>
        )}
      </div>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}

function Footer() {
  return <footer className="footer">Footer</footer>;
}
