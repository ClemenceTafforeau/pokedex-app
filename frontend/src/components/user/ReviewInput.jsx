import {useRef} from "react";
import {CircleAlert} from "lucide-react";

export function ReviewInput({placeholder, onSubmit, onError}) {
    const reviewInput = useRef(null);

    function handleSubmit(e) {
        if (e.target.value.length === 100) {
            onError("length", "Your review should be 100 characters long or fewer.");
            return;
        } else {
            onError("length", "");
        }

        if (e.key === 'Enter') {
            onSubmit(e.target.value);
            reviewInput.current.value = '';
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <div
                className="relative w-full flex gap-2 items-center rounded-md border border-zinc-600 has-focus:border-zinc-600 transition ease-in-out duration-500">
                <input ref={reviewInput}
                       onKeyUp={(e) => handleSubmit(e)}
                       type="text"
                       maxLength="100"
                       placeholder={placeholder}
                       className="py-2 px-3 w-full"/>

            </div>
            <p className="text-sm text-zinc-400 flex gap-2 items-center">
                <span><CircleAlert size="14"/></span>
                <span>Max. 100 characters</span>
            </p>
        </div>
    )
}