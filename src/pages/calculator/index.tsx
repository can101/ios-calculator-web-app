import react from "react";
import "./style.css";
import devicePath from "../../assets/images/phone-frame.svg";

const Index = () => {
    return (
        <div className="container">
            <div className={"phone"}>
                <div className={"phone-inner-content"}>
                    <h1>Device</h1>
                </div>
                <div className={"phone-inner-background"}>
                </div>
                <img src={devicePath} className={"phone-frame"} alt="device"/>
            </div>
        </div>
    )
}

export default Index;
