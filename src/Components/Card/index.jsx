const imageUrl = "https://images.unsplash.com/photo-1491466424936-e304919aada7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTkyMHgxMDgwJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww"
const desc = "Bachelor of Computer Applications (BCA) is a 3-year undergraduate program that provides foundational knowledge in computer science, programming, and software development. It prepares students for careers in IT and software industries or for higher studies in the field."
export const Card = ({ course = "BCA", description = desc }) => {
    return (
        <>
            <div
                className="bg-cover bg-center h-64 w-[90%] rounded-2xl p-4"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <div className="flex flex-col gap-2">
                    <h2 className="text-white text-3xl font-bold">{course}</h2>
                    <p className="text-white bg-black/40 py-4 px-2 rounded-xl">
                        {desc}
                    </p>
                    <button className="bg-white rounded-2xl px-2 py-1 w-fit hover:bg-white/80 shadow-lg shadow-black/50 transition">
                        View More
                    </button>
                </div>
            </div>

        </>
    )
}