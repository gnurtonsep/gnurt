import {} from "react";
import { twMerge } from "tailwind-merge";

import { Color } from "@/utils";

import { SPINNER_COLOR } from "./styles";

/**
 * ========== Define type ==========
 */
type SpinnerDirection = "row" | "col";

type SpinnerSize = "sm" | "base" | "md" | "lg";

type SpinnerProps = {
    label?: string;
    size?: SpinnerSize;
    direction?: SpinnerDirection;
    color?: Color;
};

const SpinnerIcon = ({ className }: { className: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            width="200"
            height="200"
        >
            <g>
                <g transform="translate(80,50)">
                    <g transform="rotate(0)">
                        <circle
                            fill-opacity="1"
                            fill="currentColor"
                            r="6"
                            cy="0"
                            cx="0"
                        >
                            <animateTransform
                                repeatCount="indefinite"
                                dur="1s"
                                keyTimes="0;1"
                                values="1.5 1.5;1 1"
                                begin="-0.875s"
                                type="scale"
                                attributeName="transform"
                            ></animateTransform>
                            <animate
                                begin="-0.875s"
                                values="1;0"
                                repeatCount="indefinite"
                                dur="1s"
                                keyTimes="0;1"
                                attributeName="fill-opacity"
                            ></animate>
                        </circle>
                    </g>
                </g>
                <g transform="translate(71.21320343559643,71.21320343559643)">
                    <g transform="rotate(45)">
                        <circle
                            fill-opacity="0.875"
                            fill="currentColor"
                            r="6"
                            cy="0"
                            cx="0"
                        >
                            <animateTransform
                                repeatCount="indefinite"
                                dur="1s"
                                keyTimes="0;1"
                                values="1.5 1.5;1 1"
                                begin="-0.75s"
                                type="scale"
                                attributeName="transform"
                            ></animateTransform>
                            <animate
                                begin="-0.75s"
                                values="1;0"
                                repeatCount="indefinite"
                                dur="1s"
                                keyTimes="0;1"
                                attributeName="fill-opacity"
                            ></animate>
                        </circle>
                    </g>
                </g>
                <g transform="translate(50,80)">
                    <g transform="rotate(90)">
                        <circle
                            fill-opacity="0.75"
                            fill="currentColor"
                            r="6"
                            cy="0"
                            cx="0"
                        >
                            <animateTransform
                                repeatCount="indefinite"
                                dur="1s"
                                keyTimes="0;1"
                                values="1.5 1.5;1 1"
                                begin="-0.625s"
                                type="scale"
                                attributeName="transform"
                            ></animateTransform>
                            <animate
                                begin="-0.625s"
                                values="1;0"
                                repeatCount="indefinite"
                                dur="1s"
                                keyTimes="0;1"
                                attributeName="fill-opacity"
                            ></animate>
                        </circle>
                    </g>
                </g>
                <g transform="translate(28.786796564403577,71.21320343559643)">
                    <g transform="rotate(135)">
                        <circle
                            fill-opacity="0.625"
                            fill="currentColor"
                            r="6"
                            cy="0"
                            cx="0"
                        >
                            <animateTransform
                                repeatCount="indefinite"
                                dur="1s"
                                keyTimes="0;1"
                                values="1.5 1.5;1 1"
                                begin="-0.5s"
                                type="scale"
                                attributeName="transform"
                            ></animateTransform>
                            <animate
                                begin="-0.5s"
                                values="1;0"
                                repeatCount="indefinite"
                                dur="1s"
                                keyTimes="0;1"
                                attributeName="fill-opacity"
                            ></animate>
                        </circle>
                    </g>
                </g>
                <g transform="translate(20,50.00000000000001)">
                    <g transform="rotate(180)">
                        <circle
                            fill-opacity="0.5"
                            fill="currentColor"
                            r="6"
                            cy="0"
                            cx="0"
                        >
                            <animateTransform
                                repeatCount="indefinite"
                                dur="1s"
                                keyTimes="0;1"
                                values="1.5 1.5;1 1"
                                begin="-0.375s"
                                type="scale"
                                attributeName="transform"
                            ></animateTransform>
                            <animate
                                begin="-0.375s"
                                values="1;0"
                                repeatCount="indefinite"
                                dur="1s"
                                keyTimes="0;1"
                                attributeName="fill-opacity"
                            ></animate>
                        </circle>
                    </g>
                </g>
                <g transform="translate(28.78679656440357,28.786796564403577)">
                    <g transform="rotate(225)">
                        <circle
                            fill-opacity="0.375"
                            fill="currentColor"
                            r="6"
                            cy="0"
                            cx="0"
                        >
                            <animateTransform
                                repeatCount="indefinite"
                                dur="1s"
                                keyTimes="0;1"
                                values="1.5 1.5;1 1"
                                begin="-0.25s"
                                type="scale"
                                attributeName="transform"
                            ></animateTransform>
                            <animate
                                begin="-0.25s"
                                values="1;0"
                                repeatCount="indefinite"
                                dur="1s"
                                keyTimes="0;1"
                                attributeName="fill-opacity"
                            ></animate>
                        </circle>
                    </g>
                </g>
                <g transform="translate(49.99999999999999,20)">
                    <g transform="rotate(270)">
                        <circle
                            fill-opacity="0.25"
                            fill="currentColor"
                            r="6"
                            cy="0"
                            cx="0"
                        >
                            <animateTransform
                                repeatCount="indefinite"
                                dur="1s"
                                keyTimes="0;1"
                                values="1.5 1.5;1 1"
                                begin="-0.125s"
                                type="scale"
                                attributeName="transform"
                            ></animateTransform>
                            <animate
                                begin="-0.125s"
                                values="1;0"
                                repeatCount="indefinite"
                                dur="1s"
                                keyTimes="0;1"
                                attributeName="fill-opacity"
                            ></animate>
                        </circle>
                    </g>
                </g>
                <g transform="translate(71.21320343559643,28.78679656440357)">
                    <g transform="rotate(315)">
                        <circle
                            fill-opacity="0.125"
                            fill="currentColor"
                            r="6"
                            cy="0"
                            cx="0"
                        >
                            <animateTransform
                                repeatCount="indefinite"
                                dur="1s"
                                keyTimes="0;1"
                                values="1.5 1.5;1 1"
                                begin="0s"
                                type="scale"
                                attributeName="transform"
                            ></animateTransform>
                            <animate
                                begin="0s"
                                values="1;0"
                                repeatCount="indefinite"
                                dur="1s"
                                keyTimes="0;1"
                                attributeName="fill-opacity"
                            ></animate>
                        </circle>
                    </g>
                </g>
                <g></g>
            </g>
        </svg>
    );
};

const generateSpinnerDirection = (direction: SpinnerDirection) => {
    switch (direction) {
        case "row":
            return "flex-row";
        case "col":
            return "flex-col";
        default:
            return "flex-row";
    }
};

const generateSpinnerColor = (color: Color) => {
    return SPINNER_COLOR[color];
};

const generateSpinnerSize = (size: SpinnerSize) => {
    switch (size) {
        case "sm":
            return "w-5 h-5";
        case "base":
            return "w-6 h-6";
        case "md":
            return "w-7 h-7";
        case "lg":
            return "w-8 h-8";
        default:
            return "w-5 h-5";
    }
};

const Spinner = ({
    color = "gray",
    direction = "col",
    label,
    size = "base",
}: SpinnerProps) => {
    return (
        <div data-slot="base">
            <div
                data-slot="wrapper"
                className={twMerge(
                    "inline-flex gap-1 justify-center items-center",
                    generateSpinnerColor(color),
                    generateSpinnerDirection(direction)
                )}
            >
                <div data-slot="icon-wrapper">
                    <SpinnerIcon className={generateSpinnerSize(size)} />
                </div>
                {label && (
                    <div data-slot="label-wrapper">
                        <p data-text={size}>{label}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Spinner;
