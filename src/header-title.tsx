import React from 'react';

interface TitleProps {
    title: string;
    subtitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
    // Получаем значение заголовка из переменной окружения
    const pageTitle = process.env.REACT_APP_TITLE || title;

    return (
        <React.Fragment> 
            <div className="flex justify-center">
                <h1 className="font-bold uppercase text-3xl text-center mb-1 min-w-min">
                    {pageTitle}
                </h1>
            </div>
            <p className="text-center mb-1">
                {subtitle}
            </p>
        </React.Fragment>
    );
};

export default Title;

