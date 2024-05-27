import React from "react";
import Navbar from "../components/Navbar";
import MainBanner from "../components/MainBanner";
import Projects from "../components/Projects";
import ProjectsArtistic from "../components/ProjectsArtistic";

export default function page() {
    return <div className="bg-black px-4">
        <div className="flex min-h-screen">
            <div className="max-w-3xl mx-auto">
                <Navbar/>
                <MainBanner/>
                <ProjectsArtistic/>
                <Projects/>
            </div>
        </div>
    </div>
}