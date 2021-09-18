import { storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import "./../styles.css";

const Photo = ({ userObj }) => {
    const defaultFileName = "이미지 파일을 업로드 해주세요.";
    const [file, setFile] = useState(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [fileName, setFileName] = useState(defaultFileName);
    
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

    const uploadImage = (event) => {
        event.preventDefault();
        console.log("file : ", file);
        if (file === null) {
            alert("사진을 넣어주세요!!");
            return;
        }
        const metadata = { contentType: file.type };
        const task = storageService.ref().child(`${userObj.uid}/${uuidv4()}`).put(file, metadata);
        console.log("userid :", userObj.uid);
        task.then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                console.log("url", url);
                alert("사진 업로드가 완료되었습니다!");
                const image = document.querySelector("#image");
                image.src = url;
            });
    };

    return (
        <form>
            <img src={imgSrc} className={`image-preview ${imgSrc && "image-preview-show"}`}/>
            <div className="file-dropper">
                {fileName}
                <input 
                    id="image" 
                    type="file" 
                    accept="image/*"
                    onChange={imageSelectHandler}/>
            </div>
            <button type="submit" onClick={uploadImage} style={{ width: "100%", height: "30px", borderRadius: "3px" }}>Upload Image</button>
        </form>
    ); 
};

export default Photo;