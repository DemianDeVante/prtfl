import React from "react";
import Navbar from "../components/Navbar";
import MainBanner from "../components/MainBanner";
import Projects from "../components/Projects";

export default function page() {
    return <div className="flex min-h-screen bg-black dark:bg-black bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2]">
        <div className="max-w-3xl mx-auto">
            <Navbar/>
            <MainBanner/>
            <Projects/>
        </div>
    </div>
}