import "./IconWrapper.css";

export default function IconWrapper({

icon,

size="md",

variant="primary"

}){

return(

<div className={`

icon-wrapper

icon-${size}

icon-${variant}

`}>

{icon}

</div>

)

}