import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Social(){
    const projects = [ 
        { 
            title: "Youtube", 
            link: "https://www.youtube.com/@demiandevante/videos",
            cover: "./youtube.png",
        },
        { 
            title: "Spotify", 
            link: "https://open.spotify.com/intl-es/artist/7y6AuMYIJ3BiiDWaPYx8eS?si=kuCK5L7zQ62V4cSzIKVEVw",
            cover: "./spotify.png",
        },
        { 
            title: "Soundcloud", 
            link: "https://open.spotify.com/intl-es/artist/7y6AuMYIJ3BiiDWaPYx8eS?si=kuCK5L7zQ62V4cSzIKVEVw",
            cover: "./soundcloud.png",
        },
        { 
            title: "Instagram", 
            link: "https://www.instagram.com/angeldetaesito/",
            cover: "./instagram.webp",
        },
    ]
    return (<div className="py-10 text-center">
        <div>
            <h1 className=" text-2xl hover:scale-125 transition-all font-bold underline underline-offset-8 decoration-yellow-500 -rotate-2">Social</h1>
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