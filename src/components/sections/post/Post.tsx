"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardPost from "./CardPost";

import img1 from "../../../../public/post/img1.png";

export default class Post extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 2000,
        };
        let data = [
            {
                id: 1,
                image: img1,
                title: "Tiêu đề 1",
                description: "Mô tả 1",
            },
            {
                id: 2,
                image: img1,
                title: "Tiêu đề 2",
                description: "Mô tả 2",
            },
            {
                id: 3,
                image: img1,
                title: "Tiêu đề 3",
                description: "Mô tả 3",
            },
            {
                id: 4,
                image: img1,
                title: "Tiêu đề 4",
                description: "Mô tả 4",
            },
        ];
        return (
            <div>
                <Slider {...settings}>
                    {data.map((item, index) => {
                        return (
                            <CardPost
                                key={index}
                                image={item.image.src}
                                title={item.title}
                                description={item.description}
                            />
                        );
                    })}
                </Slider>
            </div>
        );
    }
}
