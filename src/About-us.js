    import React from "react";
    import Img from '../src/svg/Image.svg';
    import ImgTwo from '../src/svg/Image (1).svg';

    let AboutUs = (props) => (
        <section class="relative sm:mb-0 mb-10">
            <div
                class="sm:flex justify-between sm:px-28">
                <div class="sm:grid-cols-2 sm:grid-rows-none grid-cols-none grid-rows-1 sm:px-2 px-1">
                    <h5
                        class="uppercase text-yellow-500 sm:text-sm font-bold xl:text-2xl"
                    >
                        {props.aboutustitle}
                    </h5>
                    <h6
                        class="sm:text-6xl italic sm:normal font-normal text-3xl"
                    >
                        {props.aboutussubtitle}
                    </h6>
                    <span class="">
                        {props.description}
                    </span>
                </div>
                <div class="flex justify-between sm:gap-5 sm:mr-32">
                    <img
                        class="sm:mb-10 sm:w-64 sm:h-96 w-32 h-60"
                        src={Img}
                        alt=""
                    />
                    <img
                        class="mt-15 sm:w-64 sm:h-96 w-32 h-60"
                        src={ImgTwo}
                        alt=""
                    />
                </div>
            </div>
            <div className="sm:mb-5 hidden sm:block">
                <div className="container-grid flex">
                    <span className="xl:text-6xl sm:text-xs sm:flex">{props.clientsPercentage}</span>
                    <span className="text-sm pt-2 sm:flex">{props.clientsText}</span>
                    <span className="xl:text-6xl sm:text-xs sm:flex">{props.employeesNumber}</span>
                    <span className="text-sm pt-2 sm:flex">{props.employeesText}</span>
                    <span className="xl:text-6xl sm:text-xs sm:flex">{props.projectsCompleted}</span>
                    <span className="text-sm pt-2 sm:flex">{props.projectsText}</span>
                </div>
            </div>
        </section>
    );

    export default AboutUs;