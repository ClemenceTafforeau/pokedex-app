export function FullScreenBgImg({path, alt, minWidth, isHidden}) {
    return (
        <img src={path} alt={alt} className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-5 object-cover xl:w-1/4 opacity-10 min-w-[${minWidth}] ${isHidden}`}/>
    )
}