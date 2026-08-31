import "./MetricCard.css";

export default function MetricCard({

value,

label,

icon,

trend,

}){

return(

<div className="metric-card">

{icon}

<h3>{value}</h3>

<p>{label}</p>

{trend &&

<span>

{trend}

</span>

}

</div>

)

}