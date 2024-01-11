"use client";
import React, { Component } from "react";

import { GalleryLeft } from "@/components/sections/gallery/GalleryLeft";
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
            </div>
        );
    }
}
