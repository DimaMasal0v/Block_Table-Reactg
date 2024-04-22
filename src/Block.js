import React from "react";
import './App.css';

const Block = (props) => {
    <div class="flex justify-center pb-5 xl:grid grid-flow-col min-w-0 xl:flex-no-wrap flex-col relative text-black">
        <div class="container-grid sm:grid-cols-3 grid-cols-1 sm:grid-rows-1 grid-rows-3">
            <div class="one mb-5" id="architecturalInteriorDesign">
                <img class="pl-5 pt-5" src="" alt="" />
                <h2 id="architecturalInteriorDesignTitle" class="mt-10 ml-6 mr-6 sm:text-4xl text-2xl sm:font-normal font-medium">
                    {props.id}
                </h2>
                <p id="architecturalInteriorDesignDescription" class="text-lg font-normal ml-6 mr-6">

                </p>
            </div>
            <div class="two mb-5" id="buildingRenovation">
                <img class="pl-5 pt-5" src="" alt="" />
                <h2 id="buildingRenovationTitle" class="mt-10 ml-6 mr-6 sm:text-4xl text-2xl sm:font-normal font-medium">

                </h2>
                <p id="buildingRenovationDescription" class="text-lg font-normal ml-6 mr-6">

                </p>
            </div>
            <div class="three mb-5" id="constructionManagement">
                <img class="pl-5 pt-5" src="" alt="" />
                <h2 id="constructionManagementTitle" class="mt-10 ml-6 mr-6 sm:text-4xl text-2xl sm:font-normal font-medium">

                </h2>
                <p id="constructionManagementDescription" class="text-lg font-normal ml-6 mr-6">

                </p>
            </div>
        </div>
    </div>
}

export default Block;