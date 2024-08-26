"use client";

import { RiQuillPenLine, RiCodeSLine, RiSmartphoneLine, RiPieChartLine, RiRobot2Line, RiCloudLine } from 'react-icons/ri'; // Import necessary icons

// Mapping the icon strings to React Icon components
const iconMap = {
    "/icons/quill-pen-line.svg": RiQuillPenLine,
    "/icons/code-s-slash-line.svg": RiCodeSLine,
    "/icons/smartphone-line.svg": RiSmartphoneLine,
    "/icons/pie-chart-line.svg": RiPieChartLine,
    "/icons/robot-line.svg": RiRobot2Line,
    "/icons/cloud-line.svg": RiCloudLine
};

const Service = ({ service: { title, text, icon } }) => {
    const IconComponent = iconMap[icon]; // Get the corresponding React Icon component

    return (
        <div className="service card hovercard relative overflow-hidden p-4 md:p-5">
            <span className="service-icon mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-primary bg-opacity-10 p-5 text-4xl text-primary">
                {IconComponent && <IconComponent className="fill-current text-primary" />} {/* Render the icon */}
            </span>
            <h5>{title}</h5>
            <p>{text}</p>
        </div>
    );
};

export default Service;
