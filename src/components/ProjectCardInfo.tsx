import Link from "next/link";
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
  return (
    <>
      <Card className="max-w-sm sm:max-w-screen-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{info.title}</CardTitle>
          <div className="text-sm">{info.builtOn}</div>
        </CardHeader>
        <CardContent className="pb-4">
          <p className="text-justify">{info.desription}</p>
        </CardContent>
        <CardFooter>
          <Link href={info.link}>
            <Button size={"lg"} className="w-full">
              Github <FaArrowUpRightFromSquare />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProjectCardInfo;
