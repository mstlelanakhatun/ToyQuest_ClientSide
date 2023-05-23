import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `ToyQuest | ${title}`;
    }, [title])
};

export default useTitle;