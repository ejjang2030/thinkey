import { dbService, authService } from "fbase";
import { useEffect, useState } from "react";
import Thinkey from "components/Thinkey";
import ThinkeyFactory from "components/ThinkeyFactory";

const Home = ({ userObj }) => {
    const [thinkeys, setThinkeys] = useState([]);

    useEffect(() => {
        dbService.collection("thinkey")
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) => {
            const newArray = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            }));
            setThinkeys(newArray);
        });
    }, []);

    console.log("currentUser", authService.currentUser);

    return (
        <div className="container">
            <ThinkeyFactory userObj={userObj}/>
            <div style={{ marginTop: 30 }}>
                {thinkeys.map((thinkey) => (
                    <Thinkey 
                        key={thinkey.id} 
                        thinkeyObj={thinkey}
                        isOwner={thinkey.creatorId === userObj.uid}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;