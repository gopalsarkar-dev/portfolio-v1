import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BiLogoGmail, BiSolidPhoneCall } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { aboutPageSeo } from "@/lib/pageSeoInfo";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return aboutPageSeo;
};

const page = () => {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="grid place-items-center gap-8">
          <div className="text-center text-4xl font-bold text-neutral-900 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-clip-text dark:text-transparent sm:text-5xl">
            Hi<span className="text-lg">,</span> I am Gopal Sarkar Frontend
            Developer. Currentely larning Backend developmnt to expand my skill.
          </div>

          <Image src="/favicon.ico" alt="logo" width={200} height={200} />

          <div className="flex items-center justify-center gap-5">
            <Link href="tel: 7477757792">
              <Button size={"icon"} variant={"outline"}>
                <BiSolidPhoneCall />
              </Button>
            </Link>
            <Link href="mailto:gopalsarkar.dev@gmail.com">
              <Button size={"icon"} variant={"outline"}>
                <BiLogoGmail />
              </Button>
            </Link>
            <Link href="https://github.com/gopalsarkar-dev">
              <Button size={"icon"} variant={"outline"}>
                <FaGithub />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/gopalsarkar-dev">
              <Button size={"icon"} variant={"outline"}>
                <FaLinkedin />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
