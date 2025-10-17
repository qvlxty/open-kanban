import React from "react"

export const useClickOutsude = (
    handler: () => void
) => {
    const ref = React.useRef<HTMLDivElement>(null)
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handler()
            }
        }
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    return ref
} 