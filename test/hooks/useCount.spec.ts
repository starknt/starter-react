import { act, renderHook } from '@testing-library/react-hooks'
import { expect, it, test } from 'vitest'

test('useCount', () => {
    it('increase', () => {
        const { result } = renderHook(() => useCount())

        act(() => {
            result.current.increase()
        })

        expect(result.current.value).toEqual(1)

        act(() => {
            result.current.increase(2)
        })

        expect(result.current.value).toEqual(3)
    })

    it('decrease', () => {
        const { result } = renderHook(() => useCount(3))

        expect(result.current.value).toEqual(3)

        act(() => {
            result.current.decrease()
        })

        expect(result.current.value).toEqual(2)

        act(() => {
            result.current.decrease(2)
        })

        expect(result.current.value).toEqual(0)
    })
})
