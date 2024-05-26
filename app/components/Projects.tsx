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
            background: "bg-blue-500",  // Example background class
        },
        { 
            title: "Embeddable JSFX", 
            link: "https://github.com/DemianDeVante/Demian-Reaper-Effects",
            cover: "./embeddable.png",
            background: "bg-red-500",  // Example background class
        },
        { 
            title: "RPC Control", 
            link: "https://github.com/DemianDeVante/Reaper-RPC-Control",
            cover: "./rpc.jpg",
            background: "bg-green-500",  // Example background class
        },
        { 
            title: "Music", 
            link: "https://www.youtube.com/@demiandevante/videos",
            cover: "./music.jpg",
            background: "bg-yellow-500",  // Example background class
        },
        { 
            title: "Reaper Scripts", 
            link: "https://github.com/DemianDeVante/Reaper-Useful-Scripts",
            cover: "./scripts.png",
            background: "bg-purple-500",  // Example background class
        },
        { 
            title: "Nutritional Calculator", 
            link: "https://github.com/DemianDeVante/smae-calculator",
            cover: "./nutrition.png",
            background: "bg-pink-500",  // Example background class
        }
    ];

    return (
        <div className="py-10 text-center">
            <div>
                <h1 className=" text-2xl hover:scale-125 transition-all font-bold underline underline-offset-8 decoration-yellow-500 -rotate-2">
                    Projects
                </h1>
            </div>
            <div className="flex">
                <div className="mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10">
                    {projects.map((project, index) => {
                        return (
                            <Link href={project.link} key={index}>
                                <div className={cn("p-5 rounded-md", project.background)}>
                                    <DirectionAwareHover imageUrl={project.cover}>
                                        <h1>{project.title}</h1>
                                    </DirectionAwareHover>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
