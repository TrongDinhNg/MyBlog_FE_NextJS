"use client";
import React, { Component } from "react";

import { GalleryLeft } from "@/components/sections/gallery/GalleryLeft";
import CardPost from "@/components/sections/post/CardPost";
import img1 from "../../../public/post/img1.png";
export default class Test extends Component {
    render() {
        const date = new Date();
        return (
            <div>
                <GalleryLeft
                    bgImg="https://i.pinimg.com/564x/83/bd/fc/83bdfc1435efd18548dd8d83ea0d1272.jpg"
                    categories="Technology"
                    date={date}
                    title="xin chao"
                    description="Test"
                />

                <div>
                    <CardPost
                        image={img1}
                        title="Japan’s Virus Success Has Puzzled The World. Is Its Luck Running Out?"
                        description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…"
                    />
                </div>
            </div>
        );
    }
}
