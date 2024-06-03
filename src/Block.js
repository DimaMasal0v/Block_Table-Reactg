// import React from "react";
// import './App.css';
// import ImgOne from './svg/ServiceIcon(1).svg';
// import ImgTwo from './svg/ServiceIcon(2).svg';
// import ImgThree from './svg/ServiceIcon.svg';

// const Block = (props) => {
//     const { blocks } = props;

//     return (
//         <div className="flex justify-center pb-5 min-w-0 xl:flex-no-wrap flex-col relative text-black">
//             <div className="grid sm:grid-cols-3 grid-cols-1 grid-rows-1 sm:grid-rows-3 sm:gap-5">
//                 <div className="one mb-5">
//                     <img className="pl-5 pt-5" src={ImgOne} alt="" />
//                     <h2 className="mt-10 ml-6 mr-6 sm:text-4xl text-2xl sm:font-normal font-medium">
//                         {blocks[0].title}
//                     </h2>
//                     <p className="text-lg font-normal ml-6 mr-6">                                                         
//                         {blocks[0].description}
//                     </p>
//                 </div>
//                 <div className="two mb-5">
//                     <img className="pl-5 pt-5" src={ImgTwo} alt="" />
//                     <h2 className="mt-10 ml-6 mr-6 sm:text-4xl text-2xl sm:font-normal font-medium">
//                         {blocks[1].title}
//                     </h2>
//                     <p className="text-lg font-normal ml-6 mr-6">
//                         {blocks[1].description}
//                     </p>
//                 </div>
//                 <div className="three mb-5">
//                     <img className="pl-5 pt-5" src={ImgThree} alt="" />
//                     <h2 className="mt-10 ml-6 mr-6 sm:text-4xl text-2xl sm:font-normal font-medium">
//                         {blocks[2].title}
//                     </h2>
//                     <p className="text-lg font-normal ml-6 mr-6">
//                         {blocks[2].description}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Block;
import React from "react";
import './App.css';
// import ImgOne from './svg/ServiceIcon(1).svg';
// import ImgTwo from './svg/ServiceIcon(2).svg';
// import ImgThree from './svg/ServiceIcon.svg';

const Block = (props) => {
    const { blocks } = props;

    return (
        <div className="flex justify-center pb-5 min-w-0 xl:flex-no-wrap flex-col relative text-black">
            <div className="grid sm:grid-cols-3 grid-cols-1 grid-rows-1 sm:grid-rows-3 sm:gap-5">
                {blocks.map((block) => {
                    const { title, description, img } = block;
                    return (
                        <div className="one mb-5">
                            <img className="pl-5 pt-5" src={img} alt="" />
                            <h2 className="mt-10 ml-6 mr-6 sm:text-4xl text-2xl sm:font-normal font-medium">
                                {title}
                            </h2>
                            <p className="text-lg font-normal ml-6 mr-6">
                                {description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Block;
