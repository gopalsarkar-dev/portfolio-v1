import { Card, CardHeader } from "@/components/ui/card";
import { skillPageSeo } from "@/lib/pageSeoInfo";
import { BackendSkill, SkillData } from "@/lib/skillData";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return skillPageSeo;
};

const page = () => {
  return (
    <>
      <div className="grid gap-8 pb-16 pt-24">
        <div className="text-2xl font-bold text-neutral-900 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-clip-text dark:text-transparent sm:text-5xl">
          Fronted Skill
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {SkillData.map((item, index) => {
            return (
              <Card key={index}>
                <CardHeader className="grid place-items-center gap-3">
                  <item.icon size={item.iconSize} />

                  <div className="text-lg font-bold text-neutral-900 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-clip-text dark:text-transparent sm:text-2xl">
                    {item.name}
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="text-4xl font-bold text-neutral-900 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-clip-text dark:text-transparent sm:text-5xl">
          Backend Skill
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {BackendSkill.map((item, index) => {
            return (
              <Card key={index}>
                <CardHeader className="grid place-items-center gap-3">
                  <item.icon size={item.iconSize} />

                  <div className="text-lg font-bold text-neutral-900 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-clip-text dark:text-transparent sm:text-2xl">
                    {item.name}
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* <div className="text-4xl font-bold text-neutral-900 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-clip-text dark:text-transparent sm:text-6xl">
          Cloud Computing Skill
        </div> */}
        {/* <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {CloudData.map((item, index) => {
            return (
              <Card key={index}>
                <CardHeader className="grid place-items-center gap-3">
                  <item.icon size={item.iconSize} />

                  <div className="text-lg font-bold text-neutral-900 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-clip-text dark:text-transparent sm:text-2xl">
                    {item.name}
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div> */}
      </div>
    </>
  );
};

export default page;
