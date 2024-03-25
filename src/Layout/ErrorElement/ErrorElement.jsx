import Lottie from "lottie-react";
import errorAnimation from "../../Components/Lottie/Animation - 1700797183774.json";
import { Link } from "react-router-dom";
import "./ErrorElement.css"
const ErrorElement = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="error-container">
            <div className="error-animation">
                <Lottie
                    animationData={errorAnimation}
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
            <div >
                <Link to='/'>
                    <button className="button">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorElement;