"use client";

import { DevJobDescriptionComponent } from "../components/DevJobDescriptionComponent";
import {
  designerProjectList,
  juniorDevProjectList,
} from "../../data/projectsList";
import { ImageComponent } from "../components/ImageComponent";
import { useRouter } from "next/navigation";
import { RiArrowLeftSLine } from "react-icons/ri";

const Project = ({ params }) => {
  const router = useRouter();

  let project;

  const filteredProjectDevList = juniorDevProjectList.filter(
    (project) => project.id === Number(params.id)
  );
  project = filteredProjectDevList[0];

  return (
    <div className="w-full -mt-10">
      <button
        onClick={() => {
          router.back();
        }}
        className="mb-6 flex items-center gap-2 font-semibold "
      >
        <RiArrowLeftSLine size={22} /> back
      </button>

      <section className="flex gap-14 lg:flex-row flex-col-reverse ">
        <ImageComponent project={project} />
        <DevJobDescriptionComponent project={project} />
      </section>
    </div>
  );
};
export default Project;
