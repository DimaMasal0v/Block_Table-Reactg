import React from "react";

const Title = (props) => (
    <section>
        <div className="flex justify-center">
            <h1 className="font-bold uppercase text-3xl text-center mb-1 min-w-min">
                {props.title}
            </h1>
        </div>
        <p className="text-center mb-1">
            {props.subtitle}
        </p>
    </section>
);

export default Title;
