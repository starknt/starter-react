export function useCounter(initiValue?: number) {
    const [value, setValue] = useState(initiValue ?? 0)

    const increase = useCallback((nv?: number) => {
        const plusValue = nv ?? 1

        setValue(value => value + plusValue)
    }, [])

    const decrease = useCallback((nv?: number) => {
        const minusValue = nv ?? 1

        setValue(value => value - minusValue)
    }, [])

    return { value, increase, decrease }
}
