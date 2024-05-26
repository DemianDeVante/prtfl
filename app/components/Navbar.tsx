import Link from "next/link";
import React from "react";
import { IoLogoGithub } from "react-icons/io"; // Update to import the correct icons
import { MdForum } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";


export default function Navbar() {
    const socials = [
        {
            Link: "https://github.com/DemianDeVante",
            Label: "GitHub",
            Icon: IoLogoGithub,
        },
        {
            Link: "https://forum.cockos.com/member.php?u=174529",
            Label: "Reaper Forums",
            Icon: MdForum,
        },
        {
            Link: "https://wa.me/525625067605",
            Label: "Whatsapp",
            Icon: RiWhatsappFill,
        },
    ];
    return (
        <nav className="flex py-10 mx-auto justify-between items-center gap-5">
            <h1 className="text-left w-21 hover:scale-125 transition-all text-2x1 font-bold underline underline-offset-8 decoration-yellow-500 -rotate-2">Demian DeVante</h1>
            <div className="flex gap-4">
                {socials.map((social,index)=>{
                    const Icon = social.Icon

                    return (
                        <Link 
                            href={social.Link} 
                            key={index} 
                            aria-label={social.Label}
                        > 
                            <Icon className="size-6 hover:scale-150 transition-all text-right"/>
                        </Link>
                    );
                })}
            </div>
        </nav>
    )
}
