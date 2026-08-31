/**
 * Convert minutes into readable format.
 */

export function formatTimeSaved(minutes) {

    if (!minutes)

        return "0 hrs";

    if (minutes < 60)

        return `${minutes} mins`;

    return `${(minutes / 60).toFixed(1)} hrs`;

}

/**
 * Percentage helper
 */

export function calculatePercentage(value, total) {

    if (!total)

        return 0;

    return Number(

        ((value / total) * 100).toFixed(1)

    );

}