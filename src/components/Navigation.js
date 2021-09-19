import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faUser, faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import logo from "components/thinkey1.png";

const Navigation = ({ userObj }) => {
    return (
        <nav>
            <ul style={{ display: "flex", justifyContent: "center", marginTop: 50}}>
                <li style={{ marginRight: 30 }}>
                    <Link to="/" className="profileInfo">
                        <img 
                            src={ logo }
                            width="45"
                            height="50"/>
                    </Link>
                </li>
                <li style={{ marginRight: 30 }}>
                    <Link to="/photos" className="profileInfo">
                        <FontAwesomeIcon icon={ faPhotoVideo } color={"#04aaff"} size="2x"/>
                        <span style={{ marginTop: 10 }}>
                            사진첩
                        </span>
                    </Link>
                </li>
                <li style={{ marginRight: 30 }}>
                    <Link to="/messenger" className="profileInfo">
                        <FontAwesomeIcon icon={ faFacebookMessenger } color={"#04aaff"} size="2x"/>
                        <span style={{ marginTop: 10 }}>
                            메시지
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="profileInfo">
                        <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x"/>
                        <span style={{ marginTop: 10 }}>
                            {userObj.displayName ? `${userObj.displayName}` : ""}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;