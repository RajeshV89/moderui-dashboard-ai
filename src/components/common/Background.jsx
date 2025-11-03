

function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
            {/* Background circles layer */}
            <div className='animate-fade absolute inset-0'>
                <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                    {/* Circle 1*/}
                    <div className="absolute w-[600px] h-[500px] bg-linear-to-br from-purple-600 via-indigo-500 to-blue-500 rounded-full blur-3xl opacity-20 -translate-x-90 -translate-y-10"></div>
                    {/* Circle 2 */}
                    <div className="absolute w-[300px] h-[300px] bg-linear-to-br from-yellow-400 via-red-400 to-pink-400 rounded-full blur-3xl opacity-20 translate-x-72 translate-y-32"></div>
                    {/* Circle 3 */}
                    <div className="absolute w-[450px] h-[450px] bg-linear-to-br from-pink-500 via-rose-500 to-orange-400 rounded-full blur-3xl opacity-20 translate-x-42 translate-y-20"></div>
                </div>
            </div>
        </div>
    )
}

export default Background