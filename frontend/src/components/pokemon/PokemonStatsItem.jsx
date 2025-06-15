export function PokemonStatsItem({stat, color}) {
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
            <div className="flex flex-col gap-2 2xl:flex-row 2xl:items-center 2xl:gap-0 justify-between">
                <div className="relative w-fit">
                    <div className="bg-zinc-600 h-3 rounded-sm" style={{width: maxWidth}}></div>
                    <div className={`absolute top-0 z-10 left-0 h-3 rounded-sm bg-zinc-200 opacity-70 transition-[min-width] ease-in-out duration-300`}
                         style={{minWidth: calcProgressBarWidth()}}></div>
                    <div className={`absolute z-0 inset-0 h-3 blur-sm h-3 rounded-sm bg-[${color}] animate-pulse transition-[max-width] ease-in-out duration-300`}
                         style={{maxWidth: calcProgressBarWidth() + 4}}></div>
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