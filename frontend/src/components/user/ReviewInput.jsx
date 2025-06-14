export function ReviewInput({placeholder, onPressingEnter}) {
    return (
        <div
            className="relative w-full flex gap-2 items-center rounded-md border border-zinc-200 has-focus:border-zinc-600 transition ease-in-out duration-500">
            <input onKeyUp={(e) => onPressingEnter(e.target.value)}
                   type="text"
                   placeholder={placeholder}
                   className="py-2 px-3 w-full"/>
        </div>
    )
}