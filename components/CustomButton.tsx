"use client";
import image from 'next/image';
import {CustomButtonProps} from "@/types";




const CustomButton = ({containerStyles }: CustomButtonProps) => {
    return (
        <button disabled = {false}
                type = {'button'}
                className={'custom-btn ${containerStyles}'}
                onClick = {() => {}}
        >
            <span className={`flex-1`}>
                title
            </span>

        </button>
    );
}

export default CustomButton;