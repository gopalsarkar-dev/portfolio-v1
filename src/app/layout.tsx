import TopBar from "@/components/Header/TopBar";
import "./globals.css";
import ThemeProvider from "@/components/Header/ThemeProvider";

type RootLayoutProviderProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProviderProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <TopBar />
          <main className="container mx-auto max-w-screen-lg px-6">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
