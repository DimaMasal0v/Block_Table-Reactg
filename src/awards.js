import React from "react";
import germanDesignAward from './svg/german-design-award.svg';
import aDesignAward from './svg/a-design-award.svg';
import ifDesignAward from './svg/if-design-award.svg';
import goodDesignAward from './svg/good-design-award.svg';

const Awards = (props) => {
    const { title, textOne, textTwo,textThree,textFour } = props; // Деструктурируем props
return(
    <section>
        <div className="bg-gray-400 sm:h-32 h-72 mb-10 grid sm:grid-cols-12 grid-cols-4 gap-4 sm:gap-8 relative">
                <div>
                    <p className="select-text text-white bottom-10 top-25 sm:left-10 absolute">
                        {title}
                    </p>
                </div>
                <div className="svg flex justify-center absolute left-36 sm:mt-6 xl:flex-no-wrap flex-col xl:grid grid-flow-col" id="awards-container">
                    <div className="sm:mr-8 sm:ml-0 -ml-20 flex justify-start sm:mt-0 mt-3">
                    <img className="mr-3" src={germanDesignAward} alt="German Design Award" />
                        <span className="sm:text-sm text-xs font-normal text-white mt-3">
                            {textOne}
                        </span>
                    </div>
                    <div className="sm:mr-8 sm:ml-0 -ml-20 flex justify-start">
                        <img className="mr-3" src={aDesignAward} alt="" />
                        <span className="sm:text-sm text-xs font-normal text-white mt-5">
                            {textTwo}
                        </span>
                    </div>
                    <div className="sm:mr-8 sm:ml-0 -ml-20 flex justify-start">
                        <img className="mr-3" src={ifDesignAward} alt="" />
                        <span className="sm:text-sm text-xs font-normal text-white mt-5">
                            {textThree}
                        </span>
                    </div>
                    <div className="sm:mr-8 sm:ml-0 -ml-20 flex justify-start">
                        <img className="mr-3" src={goodDesignAward} alt="" />
                        <span className="sm:text-sm text-xs font-normal text-white mt-5">
                            {textFour}
                        </span>
                    </div>
                </div>
        </div>
    </section>
)
};


export default Awards;


