export function ReviewItem({review}) {
    return (
        <div className="w-full p-3 flex flex-col gap-2 rounded-md border border-zinc-700 h-fit">
            <p className="overflow-hidden text-ellipsis">{review.content}</p>
            <p className="flex gap-1">
                <span className="font-bold">Posted by:</span>
                <span>{review.author}</span>
            </p>
        </div>
    )
}