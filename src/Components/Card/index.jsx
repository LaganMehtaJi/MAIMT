export const Card = (props) => {
    return (

        <div onClick={props.click} className="bg-white w-full rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer">
            {/* Image at top */}
            <img
                src={`/assets/${props.image}`} 
                alt={props.courseName}
                className="h-40 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col gap-2 flex-1 justify-center text-center">
                <h2 className="text-xl font-bold text-gray-800 justify-items-center">{props.courseName}</h2>
              
            </div>
        </div>
    );
};
