import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-travelsCare`
    }, [title])
}
export default useTitle;