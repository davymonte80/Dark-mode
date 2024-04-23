import React from "react";
import RootLayout from "./layout";
import { ThemeProvider } from "next-themes";
import Navbar from "./Components/Navbar";

function Page() {
  return (
    <RootLayout>
      <ThemeProvider>
        <div>
          <main>
            <h1>Welcome to My Homepage!</h1>
            <p>This is a simple homepage created with React and Next.js.</p>
          </main>
        </div>
      </ThemeProvider>
    </RootLayout>
  );
}

export default Page;
