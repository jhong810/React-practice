import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        message : "hello, world",
    },
    {
        message : "bye, world",
    },
    {
        message : "오늘 눈썹문신함 낄낄",
    }
];

let timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const {notifications} = this.state;
        timer = setInterval(() =>{
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            }else {
                clearInterval(timer);
            }
        }, 3000);
    }

    render(){
        return(
            <div>
                {this.state.notifications.map((notification)=>{
                    return <Notification message={notification.message}/>;
                })}
            </div>
        );
    }
}

export default NotificationList;