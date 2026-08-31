import "./GlassCard.css";

export default function GlassCard({

children,

hover=true,

className=""

}){

return(

<div

className={`glass-card

${hover?"glass-hover":""}

${className}`}

>

{children}

</div>

)

}