import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "components/thinkey1.png";

const Navigation = ({ userObj }) => {
    return (
        <nav>
            <ul style={{ display: "flex", justifyContent: "center", marginTop: 50}}>
                <li>
                    <Link to="/" style={{ marginRight: 30 }}>
                        <img 
                            src={ logo }
                            width="45"
                            height="50"/>
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="profileInfo">
                        <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x"/>
                        <span style={{ marginTop: 10 }}>
                            {userObj.displayName ? `${userObj.displayName}의 Profile` : "Profile"}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;