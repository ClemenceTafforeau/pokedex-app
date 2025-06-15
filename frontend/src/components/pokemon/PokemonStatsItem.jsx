export function PokemonStatsItem({stat}) {
    const maxWidth = 280;

    function calcProgressBarWidth() {
        if (stat.value < stat.maxValue) {
            return stat.value * maxWidth / stat.maxValue;
        } else {
            return maxWidth;
        }

    }

    return (
        <div className="flex flex-col gap-2 mb-3">
            <p className="font-display text-sm">{stat.label}</p>
            <div className="flex items-center justify-between">
                <div className="relative w-fit">
                    <div className="bg-zinc-600 h-3 rounded-sm" style={{width: maxWidth}}></div>
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