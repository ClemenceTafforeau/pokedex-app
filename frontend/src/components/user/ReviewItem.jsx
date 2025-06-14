export function ReviewItem({review}) {
    return (
        <div className="w-full p-2 flex flex-col gap-2 rounded-md border border-zinc-200">
            <p>{review.content}</p>
            <p className="flex gap-1">
                <span className="font-bold">Posted by:</span>
                <span>{review.author}</span>
            </p>
        </div>
    )
}