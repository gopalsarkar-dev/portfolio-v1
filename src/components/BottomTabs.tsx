"use client";

import { usePathname, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const BottomTabs = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="fixed bottom-0 z-50 w-[100%] border-t">
        <div className="mx-auto max-w-screen-lg sm:px-6">
          <Tabs value={pathname} onValueChange={(key) => push(key)}>
            <TabsList>
              <TabsTrigger value="/">About</TabsTrigger>
              <TabsTrigger value="/skill">Skill</TabsTrigger>
              <TabsTrigger value="/project">Project</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default BottomTabs;
