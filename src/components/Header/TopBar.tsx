import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const TopBar = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-transparent backdrop-blur-md">
      <div className="container mx-auto flex max-w-screen-lg items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/favicon.ico"
            alt="portfolio-icon"
            width={36}
            height={36}
          />
          <div className="text-xl font-bold text-neutral-900 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-clip-text dark:text-transparent">
            Gopal
          </div>
        </Link>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default TopBar;
