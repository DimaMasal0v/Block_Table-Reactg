import React from "react";
import './index.css';
import './App.css';
import header from './json/header.json';

let Title = () => (
    <section>
        <div className="flex justify-center">
            <h1 class="font-bold uppercase text-3xl text-center mb-1 min-w-min">
                {header.title}
            </h1>
        </div>
        <p class="text-center mb-1">
            {header.subtitle}
        </p>
    </section>
);

export default Title;