import "./Badge.css";

export default function Badge({

children,

variant="primary"

}){

return(

<div className={`badge badge-${variant}`}>

{children}

</div>

)

}