export function PokemonStatsItem({stat}) {
    const maxWidth = 280;

    function calcProgressBarWidth() {
        return stat.value * maxWidth / stat.maxValue;
    }

    return (
        <div className="flex flex-col gap-2 mb-3">
            <p className="font-display text-sm">{stat.label}</p>
            <div className="flex items-center justify-between">
                <div className="relative w-fit">
                    <div className="bg-gray-200 h-3 rounded-sm" style={{width: maxWidth}}></div>
                    <div className="absolute top-0 left-0 bg-yellow-300 h-3 rounded-sm" style={{width: calcProgressBarWidth()}}></div>
                </div>
                <p className="flex gap-1">
                    <span className="font-bold">{stat.value}</span>
                    <span>/</span>
                    <span>{stat.maxValue}</span>
                </p>
            </div>
        </div>
    )
}