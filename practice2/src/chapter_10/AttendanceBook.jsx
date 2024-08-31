import React from "react";

const student = [
    {
        id : 1,
        name: 'jhong',
    },
    {
        id : 2,
        name: 'hard to naming',
    },
    {
        id : 3,
        name: 'react',
    },
    {
        id : 4,
        name: 'hello,world'
    },
];

function AttendanceBook(props){
    return(
        <ul>
            {student.map((student) =>{
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;