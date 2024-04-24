import React from "react"

interface ButtonProps {
    styleType?: "primary" | "outline";
}

const Button = (props: React.ComponentProps<"button"> & ButtonProps) => {

    // Seperating classNames from the rest of the props 
    const { className: str, ...restProps } = props

    if (props.styleType === "outline") {
        return (
            <button className={"p-2 border-black border-2 bg-white text-black rounded-lg " + props.className} {...restProps}></button>
        )
    }

    // Primary
    return <button className={"p-2 border-black border-2 bg-black text-white rounded-lg " + props.className} {...restProps}></button>

}

export default Button
