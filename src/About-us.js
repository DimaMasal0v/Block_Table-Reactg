import React from "react";
import './index.css';
import './App.css';
import about from './json/text__about__us.json';
import Img from '../src/svg/Image.svg';

let About = () => (
    <section class="relative sm:mb-0 mb-10">
        <div
            class="sm:grid-cols-2 sm:grid-rows-none grid-cols-none grid-rows-1 sm:px-2 px-1">
            <div class="container_two-text" id="about-us">
                <h5
                    class="uppercase text-yellow-500 sm:text-sm font-bold xl:text-2xl"
                    id="about-us-title"
                >
                    {about.aboutUs.title}
                </h5>
                <h6
                    class="sm:text-6xl italic sm:normal font-normal text-3xl"
                    id="about-us-subtitle"
                >
                    {about.aboutUs.subtitletitle}
                </h6>
                <span class="" id="about-us-text">
                    {about.aboutUs.description}
                </span>
            </div>
            <div class="flex justify-between sm:mr-32">
                <img
                    class="sm:mb-10 sm:w-64 sm:h-96 w-32 h-60"
                    src={Img}
                    alt=""
                />
                <img
                    class="sm:ma-5 ml-4 mt-15 sm:w-64 sm:h-96 w-32 h-60"
                    src="../src/svg/Image (1).svg"
                    alt=""
                />
            </div>
        </div>
    </section>
);

export default About;