import "./Container.css";

export default function Container({
    children,
    size = "xl",
    className = "",
}) {

    return (

        <div
            className={`container container-${size} ${className}`}
        >

            {children}

        </div>

    );

}