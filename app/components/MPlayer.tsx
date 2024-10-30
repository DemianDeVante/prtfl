"use client"
import React from "react";
// @ts-ignore
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

export default function MPlayer(){
    const tracks = [
        {
            url: "Intro.wav",
            title: "1. Intro",
            tags: ["Previews"],
        },
        {
            url: "Tillsun.wav",
            title: "2. DPR Style",
            tags: ["Previews"],
        },
        {
            url: "Tumbleweeds.wav",
            title: "3. Cartoon Style",
            tags: ["Previews"],
        },
        {
            url: "Dembow2.wav",
            title: "4. Reggaeton Mix",
            tags: ["Previews"],
        },
        {
            url: "Dembow3.wav",
            title: "5. Reggaeton",
            tags: ["Previews"],
        },
    ];
    return (<div className="text-center">
        <Player trackList={tracks} />
    </div>)
}