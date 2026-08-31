import "./SectionHeader.css";
import Badge from "../Badge";

export default function SectionHeader({
    badge,
    title,
    description,
    align = "center",
    maxWidth = "720px",
    className = "",
}) {
    return (
        <div
            className={`section-header section-header-${align} ${className}`}
            style={{ maxWidth }}
        >
            {badge && (
                <Badge variant="primary">
                    {badge}
                </Badge>
            )}

            <h2 className="section-title">
                {title}
            </h2>

            {description && (
                <p className="section-description">
                    {description}
                </p>
            )}
        </div>
    );
}