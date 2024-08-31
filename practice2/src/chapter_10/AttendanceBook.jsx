import React from "react";

const student = [
    {
        name: 'jhong',
    },
    {
        name: 'hard to naming',
    },
    {
        name: 'react',
    },
    {
        name: 'hello,world'
    },
];

function AttendanceBook(props){
    return(
        <ul>
            {student.map((student) =>{
                return <li>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;