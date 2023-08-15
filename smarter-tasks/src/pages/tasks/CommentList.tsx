import { useMembersState } from "../../context/members/context";
import { useCommentsState } from "../../context/comment/context";
import { CommentData } from "../../context/comment/types";
export default function CommentList() {
    const commentState = useCommentsState();
    const memberState = useMembersState();
    const { comments, isLoading, isError, errorMessage } = commentState;

    console.log("commentState", commentState)

    if (comments.length === 0 && isLoading) {
        return <p className="mt-3 font-bold text-red-500">Loading...</p>;
    }

    if (isError) {
        return <p className="mt-3 text-pink-500">{errorMessage}</p>;
    }

    const getComment = (owner: any) => {
        const assigner = memberState?.members?.filter(
            (user) => user.id === owner
        )?.[0];
        return assigner?.name;
    };

    const setTimeAndDate = (date: string) => {
        const tempDate = new Date(date);
        const formatDate = tempDate.toDateString();
        let hours = tempDate.getHours();
        let minutes = tempDate.getMinutes();
        const newformat = hours >= 12 ? "PM" : "AM";

        hours = hours % 12;
        hours = hours ? hours : 12;

        const formatedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes
            } ${newformat}`;

        return `${formatDate} ${formatedTime}`;
    };

    return (
        <div className="mt-3">
            <hr className="p-2" />
            <h2 className="font-bold text-blue-800">Comments</h2>
            {commentState.comments.map((comment: CommentData) => {
                return (
                    <div className="comment my-3 text-blue-800 rounded-xl p-4 bg-blue-100">
                        <div className="">
                            <div className="flex justify-between">
                                <h2 className="font-semibold float-right">
                                    Member : {getComment(comment.owner)}
                                </h2>
                            </div>
                            <div>
                                <p className="text-sm font-semibold float-right pt-4 mb-4">
                                    {setTimeAndDate(comment.createdAt)}
                                </p>
                            </div></div>
                        <p>{comment.description}</p>
                    </div>
                );
            })}
        </div>
    );
}