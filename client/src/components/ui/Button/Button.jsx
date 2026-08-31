import "./Button.css";

export default function Button({

children,

variant="primary",

size="md",

icon,

loading,

fullWidth,

className="",

...props

}){

return(

<button

className={`
btn
btn-${variant}
btn-${size}
${fullWidth?"btn-full":""}
${loading?"btn-loading":""}
${className}
`}

{...props}

>

{icon}

<span>

{children}

</span>

</button>

)

}