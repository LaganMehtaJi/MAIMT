export const Card = ({ course }) => {
    return (
        <div onClick={()=>console.log("Clicked")} className="bg-white w-full rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer">
            {/* Image at top */}
            <img
                src={`/assets/${course.image}`}
                alt={course.courseName}
                className="h-40 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col gap-2 flex-1">
                <h2 className="text-xl font-bold text-gray-800">{course.courseName}</h2>
                <p className="text-sm text-gray-600 flex-1">{course.description}</p>
            </div>
        </div>
    );
};
