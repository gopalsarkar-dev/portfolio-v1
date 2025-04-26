import ProjectCardInfo from "@/components/ProjectCardInfo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectPageSeo } from "@/lib/pageSeoInfo";
import { backendProjectInfo, frontendProjectInfo } from "@/lib/projectInfo";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return projectPageSeo;
};

const page = () => {
  return (
    <>
      <div className="grid gap-8 pb-16 pt-24">
        <div className="text-2xl font-bold text-neutral-900 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-clip-text dark:text-transparent sm:text-5xl">
          All Project
        </div>
        <Tabs defaultValue="fullstack-project" className="space-y-8">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="fullstack-project">
              Full-Stack Project
            </TabsTrigger>
            <TabsTrigger value="frontend-project">Frontend Project</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend-project">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {frontendProjectInfo.map((pInfo, pIndex) => (
                <ProjectCardInfo info={pInfo} key={pIndex} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fullstack-project">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {backendProjectInfo.map((bInfo, bIndex) => (
                <ProjectCardInfo info={bInfo} key={bIndex} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default page;
