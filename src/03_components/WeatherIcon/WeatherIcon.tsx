// components/WeatherIcon.tsx
const WeatherIcon = ({ id, className }: { id: number; className?: string }) => {
    const name = getIcon(id);

    return (
        <span
            role="img"
            aria-label={name}
            className={className}
            style={{
                display: "inline-block",
                backgroundColor: "currentColor",
                WebkitMaskImage: `url(/assets/icons_weather/${name}.svg)`,
                maskImage: `url(/assets/icons_weather/${name}.svg)`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskPosition: "center",
                maskPosition: "center",
            }}
        />
    );
};

export default WeatherIcon;

function getIcon(iconNumber: number): string {
    const icon = Number.parseInt(iconNumber.toString());
    if (icon >= 200 && icon < 300) return "gewitter";
    if (icon >= 300 && icon < 600) return "regen";
    if (icon >= 600 && icon < 700) return "schnee";
    if (icon >= 700 && icon < 800) return "nebel";
    if (icon === 800) return "sonne";
    if (icon === 801) return "sonne_wolken";
    if (icon === 802) return "wolken";
    if (icon >= 803) return "viele_wolken";
    return "sonne";
}