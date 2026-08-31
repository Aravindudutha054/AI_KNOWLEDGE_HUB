import "./GradientText.css";

export default function GradientText({
    children,
}){

    return(

        <span className="gradient-text">

            {children}

        </span>

    )

}