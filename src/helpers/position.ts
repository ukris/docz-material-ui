export const SCROLL_DEBOUNCE_TIME = 10
export type Position = {
    x: number
    y: number
}
export const getScrollPosition = (
    parent: HTMLElement,
    el: HTMLElement,
    fudgeY: number = 0,
    cb?: (pos: Position) => void
): Position => {
    const position = el.getBoundingClientRect();
    const targetBoundary = parent.getBoundingClientRect()
    const y: number = 
        position.top + fudgeY < targetBoundary.top
                ? 0
                : position.top + fudgeY > window.innerHeight
                ? 0
                : position.top + fudgeY
    const pos: Position = {
        x: 0,
        y
    }
    cb && cb(pos)
    return (pos)
}
export const handleScrollY = (
    parent: HTMLElement,
    el: HTMLElement,
    setHoverPosition: (pos:Position) => void,
    fudgeY: number = 0,
) => {
    setTimeout(()=> {
            setHoverPosition(getScrollPosition(parent,el, fudgeY))
    }, SCROLL_DEBOUNCE_TIME)
}
