import { storageService, dbService, timestamp } from "fbase";
import { stringify, v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import "./../styles.css";

const Photo = ({ userObj }) => {
    const defaultFileName = "이미지 파일을 업로드 해주세요.";
    const [file, setFile] = useState(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [fileName, setFileName] = useState(defaultFileName);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        var listRef = storageService.ref(`${userObj.uid}/`);
        dbService.collection("albums")
            .orderBy("createdAt", "desc")
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                });
                setPhotos(documents);
            });
    })

    const imageSelectHandler = (event) => {
        const imageFile = event.target.files[0];
        setFile(imageFile);
        setFileName(imageFile.name);
        const fileReader = new FileReader();
        fileReader.readAsDataURL(imageFile);
        fileReader.onload = e => setImgSrc(e.target.result);
        fileReader.onloadend = finishedEvent => {
            const {
                currentTarget: { result },
            } = finishedEvent;
            console.log("result : ", result);
        }
    }; 

    const uploadImage = async (event) => {
        event.preventDefault();
        console.log("file : ", file);
        if (file === null) {
            alert("사진을 넣어주세요!!");
            return;
        }
        const metadata = { contentType: file.type };
        const task = storageService.ref().child(`${userObj.uid}/${uuidv4()}`).put(file, metadata);
        const collectionRef = dbService.collection("albums");
        const createdAt = timestamp();
        console.log("userid :", userObj.uid);
        console.log("imgSrc", imgSrc);
        task.then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                console.log("url", url);
                alert("사진 업로드가 완료되었습니다!");
                collectionRef.add({ url, createdAt, userId: userObj.uid });
                const image = document.querySelector("#image");
                image.src = url;
            });
    };

    return (
        <div>
            <form>
                <div className="file-dropper">
                    {fileName}
                    <input 
                        id="image" 
                        type="file" 
                        accept="image/*"
                        onChange={imageSelectHandler}/>
                </div>
                <button type="submit" onClick={uploadImage} className="image-uploader">Upload Image</button>
            </form>
            <div className="photolines">
                { photos && photos.map(doc => (
                    <div key={doc.id}>
                        <img src={doc.url}/>
                    </div>
                ))}
            </div>
        </div>
    ); 
};

export default Photo;