

function Card({channel, arr='Testing'}) {
    console.log('props: ', {channel, arr})
    return (
        <>
            <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
                <div>
                    <img className="size-48 shadow-xl rounded-md" alt="" src=".\pexels-valentin_21-808934417-31148513.jpg" />
                </div>
                <div className="flex items-center md:items-start">
                    <span className="text-2xl font-medium">{channel}</span>
                    <span className="font-medium text-sky-500">The Anti-Patterns</span>
                    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                        <span>No. {arr}</span>
                        <span>·</span>
                        <span>2025</span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Card