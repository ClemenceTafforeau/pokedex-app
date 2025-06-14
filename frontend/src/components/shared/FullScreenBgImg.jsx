export function FullScreenBgImg({path, alt}) {
    return (
        <img src={path} alt={alt} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-5 object-cover w-1/4"/>
    )
}