import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Projects(){
    const projects = [ 
        { 
            title: "embeDDed", 
            link: "https://github.com/DemianDeVante/reaembedded",
            cover: "./embedded.png",
        },        { 
            title: "Embeddable JSFX", 
            link: "https://github.com/DemianDeVante/Demian-Reaper-Effects",
            cover: "./embeddable.png",
        },
        { 
            title: "Reaper Scripts", 
            link: "https://github.com/DemianDeVante/Reaper-Useful-Scripts",
            cover: "./scripts.png",
        },
        { 
            title: "Nutritional Calculator", 
            link: "https://github.com/DemianDeVante/smae-calculator",
            cover: "./nutrition.png",
        }
    ]
    return (<div className="text-center">
        <div>
            <h1 className=" text-2xl hover:scale-125 transition-all font-bold underline underline-offset-8 decoration-yellow-500 -rotate-2">Code Projects</h1>
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