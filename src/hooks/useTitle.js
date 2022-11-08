import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Parvez's Tour House`
    }, [title])
}
export default useTitle;