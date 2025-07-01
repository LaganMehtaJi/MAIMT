import { courseDetails } from "../../staticData/courseDetails"
import { Card } from "../Card"
export const CourseCards = () => {
    return (
        // <div>
        //     {console.log(courseDetails)}
        // </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mx-20">
            {courseDetails.map((course, index) => (
                <Card key={index} course={course} />
            ))}
        </div>
    )
}