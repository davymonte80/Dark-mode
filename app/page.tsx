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
            <p>This is a simple homepage created with React and Next.js.</p>
          </main>
        </div>
      </ThemeProvider>
    </RootLayout>
  );
}

export default Page;
