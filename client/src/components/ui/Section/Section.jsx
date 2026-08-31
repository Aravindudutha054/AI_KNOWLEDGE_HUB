import "./Section.css";

export default function Section({

    children,

    className="",

    background="transparent",

    id

}){

return(

<section

id={id}

className={`section bg-${background} ${className}`}

>

{children}

</section>

)

}