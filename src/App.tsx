export function App() {
    const { value, increase, decrease } = useCount()

    return (
        <div className="flex justify-center flex-col gap-4">
            <h1 className="mt-2 text-center text-amber text-3xl">Hello World!!</h1>
            <p className="text-center text-lg text-emerald">计数: {value}</p>
            <button className="self-center py1 px4 ring rounded" onClick={() => increase()}>点击这里 +1 </button>
            <button className="self-center py1 px4 ring rounded" onClick={() => decrease()}>点击这里 -1 </button>
        </div>
    )
}
