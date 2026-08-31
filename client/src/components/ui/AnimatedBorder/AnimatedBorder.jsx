import "./AnimatedBorder.css";

export default function AnimatedBorder({
    children,
}) {
    return (
        <div className="animated-border">
            <div className="animated-border-inner">
                {children}
            </div>
        </div>
    );
}