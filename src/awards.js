import React from "react";
import './index.css';
import './App.css';
import awards from './json/awards.json'

let Awards = () => (
    <section>
        <div class="bg-gray-400 sm:h-32 h-72 mb-10 grid sm:grid-cols-12 grid-cols-4 gap-4 sm:gap-8">
            <div className="container-grid">
                <div>
                    <p class="select-text text-white bottom-10 top-25 sm:left-10 left-20 absolute">
                        {awards.awardsSection.title}
                    </p>
                </div>
                <div class="svg flex justify-center absolute left-36 sm:mt-6 xl:flex-no-wrap flex-col xl:grid grid-flow-col" id="awards-container">
                    <div class="sm:mr-8 sm:ml-0 -ml-20 flex justify-start sm:mt-0 mt-3" id="award-container-1">
                        <img class="mr-3" src="" alt="" id="award-img-1">
                            {awards.imgSrc1}
                        </img>
                        <span class="sm:text-sm text-xs font-normal text-white mt-3" id="award-text-1"></span>
                    </div>
                    <div class="sm:mr-8 sm:ml-0 -ml-20 flex justify-start" id="award-container-2">
                        <img class="mr-3" src="" alt="" id="award-img-1">
                            {awards.imgSrc2}
                        </img>
                        <span class="sm:text-sm text-xs font-normal text-white mt-5" id="award-text-2"></span>
                    </div>
                    <div class="sm:mr-8 sm:ml-0 -ml-20 flex justify-start" id="award-container-3">
                        <img class="mr-3" src="" alt="" id="award-img-1">
                            {awards.imgSrc3}
                        </img>
                        <span class="sm:text-sm text-xs font-normal text-white mt-5" id="award-text-3"></span>
                    </div>
                    <div class="sm:mr-8 sm:ml-0 -ml-20 flex justify-start" id="award-container-4">
                        <img class="mr-3" src="" alt="" id="award-img-1">
                            {awards.imgSrc4}
                        </img>
                        <span class="sm:text-sm text-xs font-normal text-white mt-5" id="award-text-4"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Awards;

