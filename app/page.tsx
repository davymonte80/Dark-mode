import React from "react";
import RootLayout from "./layout";
import { ThemeProvider } from "next-themes";
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/auth/LoginForm";
function Page() {
  return (
    <RootLayout>
      <ThemeProvider>
        <div>
          <main>
            <LoginForm />
          </main>
        </div>
      </ThemeProvider>
    </RootLayout>
  );
}

export default Page;
