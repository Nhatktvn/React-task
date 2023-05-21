import React from "react";

const Upload = () => {
  const handleUpImgSingle = () => {
    var fileChoose = document.getElementById("imageFile").files;
    if (fileChoose.length > 0) {
      var fileToLoad = fileChoose[0];
      var fileReader = new FileReader();
      fileReader.onload = function (e) {
        var srcData = e.target.result;
        var newImage = document.createElement("img");
        newImage.src = srcData;
        document.querySelector(".container-img").append(newImage);
      };
      fileReader.readAsDataURL(fileToLoad);
    }
  };

  const handleUpImgMulti = () => {
    var fileChoose = document.getElementById("imageFileMul").files;
    for (var i = 0; i < fileChoose.length; i++) {
      var fileToLoad = fileChoose[i];
      var fileReader = new FileReader();
      fileReader.onload = function (e) {
        var srcData = e.target.result;
        var newImage = document.createElement("img");
        newImage.src = srcData;
        document.querySelector(".container-imgMulti").append(newImage);
      };
      fileReader.readAsDataURL(fileToLoad);
    }
  };
  return (
    <div>
      <div>
        <h2>Single upload image</h2>
        <input
          type="file"
          id="imageFile"
          accept="image/gif, image/jpeg, image/png"
          onChange={handleUpImgSingle}
        />
        <div
          className="container-img"
          style={{ width: "300px", height: "300px" }}
        ></div>
      </div>

      <div>
        <h2>Multi upload image</h2>
        <input
          type="file"
          id="imageFileMul"
          multiple
          onChange={handleUpImgMulti}
        />
        <div className="container-imgMulti">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Upload;
