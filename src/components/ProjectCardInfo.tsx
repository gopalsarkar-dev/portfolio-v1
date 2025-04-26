"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type ProjectInfoTypeProps = {
  title: string;
  link: string;
  desription: string;
  builtOn: string;
};

const ProjectCardInfo = ({ info }: { info: ProjectInfoTypeProps }) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <Card className="sm:max-h-min sm:max-w-screen-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{info.title}</CardTitle>
        <div className="text-sm">{info.builtOn}</div>
      </CardHeader>
      <CardContent>
        <p
          className={`${!showFull ? "line-clamp-2" : ""} transition-all duration-300`}
        >
          {info.desription}
        </p>
        <button
          onClick={() => setShowFull(!showFull)}
          className="mt-1 font-bold transition-all duration-300 hover:underline"
        >
          {!showFull ? "Show more" : "Show less"}
        </button>
      </CardContent>
      <CardFooter>
        <Link href={info.link}>
          <Button size={"lg"} className="w-full">
            Github <FaArrowUpRightFromSquare className="ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCardInfo;
