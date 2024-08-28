import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : 'jhong',
        comment: 'hi'
    },
    {
        name : 'jhong2',
        comment: 'hello, world'
    },
    {
        name : 'jhong3',
        comment: 'bye, world'
    },

]

function CommentList(props){
    return(
        <div>
        {comments.map((comment)=>{
            return(
                <Comment name = {comment.name} comment = {comment.comment}/>
            );
        })}
        </div>
    );
}

export default CommentList;