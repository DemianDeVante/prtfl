import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function ProjectsArtistic(){
    const projects = [ 
        { 
            title: "Unreleased", 
            link: "https://on.soundcloud.com/b1ws3UJbP4bAZNAK9",
            cover: "./unreleased.jpg",
        },
        { 
            title: "Orchestration", 
            link: "https://on.soundcloud.com/EnS76TpPFDYgdCPu6",
            cover: "./orchestration.png",
        },
    ]
    return (<div className="py-10 text-center">
        <div>
            <h1 className=" text-2xl hover:scale-125 transition-all font-bold underline underline-offset-8 decoration-yellow-500 -rotate-2">Music</h1>
        </div>
        <div className="flex">
            <div className="mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10">
                {projects.map((project, index) => {
                    return (
                        <Link href={project.link} key={index}>
                            <div className={cn("rounded-md")}>
                                <DirectionAwareHover
                                    imageUrl={project.cover}
                                >
                                    <h1>{project.title}</h1>
                                </DirectionAwareHover>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    </div>)
}