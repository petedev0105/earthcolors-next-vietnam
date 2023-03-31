/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { React, useRef, useState, useEffect, useContext } from "react";
import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import OptionsBar from "../../../components/OptionsBar";
import { MaterialContext } from "../../../utils/materialContext";

function Rec301() {
  const f = useRef(null);
  const w = useRef(null);
  const exportRef = useRef();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { activeMaterial } = useContext(MaterialContext);

  var [chosenImageClassName, setChosenImageClassName] = useState("");
  const [color, setColor] = useState("#e6e6e6");
  var [firstImgSrc, setFirstImgSrc] = useState("/img/web/add.png");
  var [secondImgSrc, setSecondImgSrc] = useState("/img/web/add.png");
  var [thirdImgSrc, setThirdImgSrc] = useState("/img/web/add.png");
  var [userImagesArr, setUserImagesArr] = useState([]);

  var [wallPaper, setWallPaper] = useState("");

  const handleDrag = (e, ui) => {
    console.log(ui.deltaX, ui.deltaY);
  };

  function insertImage(file, id) {
    if (file && id) {
      const presentId = userImagesArr.findIndex((obj) => obj.id === id);

      if (presentId >= 0) {
        userImagesArr.splice(presentId, id);

        setUserImagesArr([{ file: file, id: id }, ...userImagesArr]);
      } else {
        setUserImagesArr([...userImagesArr, { file: file, id: id }]);
      }

      console.log(userImagesArr);
    }
  }

  function handleUploadDevice() {
    w.current.click();
    handleClose();
  }

  function handleWallpaper(e) {
    setShow(true);
    // w.current.click()
  }

  async function wallpaperChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      var file = e.target.files[0];
      var imageFile = await readFile(file);

      setWallPaper(imageFile);
    }
  }

  const comboFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      var file = e.target.files[0];
      var imageFile = await readFile(file);
      switch (chosenImageClassName) {
        case "1":
          setFirstImgSrc(imageFile);
          insertImage(imageFile, 1);
          break;
        case "2":
          setSecondImgSrc(imageFile);
          insertImage(imageFile, 2);
          break;
        case "3":
          setThirdImgSrc(imageFile);
          insertImage(imageFile, 3);
          break;
        default:
          break;
      }
    }
  };

  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }

  const handleImageClick = (event) => {
    let classname = event.currentTarget.className;
    setChosenImageClassName(classname);
    f.current.click();
  };

  function colorChange(e) {
    setWallPaper("");
    setColor(e.target.value);
  }

  return (
    <div className="mainContainer">
      <div className="comboContainer" ref={exportRef}>
        <div className="comboCenter">
          <div
            className="comboInner"
            style={{
              background: color,
              height: 900,
              width: 1600,
            }}
          >
            <div>
              <img
                src={wallPaper}
                style={{ height: 900, width: 1600, objectFit: "cover" }}
              />
            </div>
            <div>
              <img
                src="/img/web/earthlogo.png"
                style={{ height: 900, width: 1600, zIndex: 0 }}
                className="watermark"
              />
            </div>
            {/* F001 */}
            <Draggable bounds="parent" onDrag={handleDrag}>
              <div
                className="comboImage"
                id="1"
                style={{ left: 536, top: 191 }}
              >
                <div
                  style={{
                    backgroundImage: `url(${firstImgSrc})`,
                  }}
                ></div>
                <img
                  id="outerFrame"
                  src={`/img/${activeMaterial}/F001.png`}
                  className="1"
                  onClick={handleImageClick}
                  // style={{ zIndex: 3 }}
                  style={{ position: "relative" }}
                />
                {/* {firstImgSrc && (
                  <img
                    id="innerFrame"
                    src={firstImgSrc}
                    className="comboImg"
                    style={{ height: 210, width: 140 }}
                  />
                )} */}
              </div>
            </Draggable>
            {/* F002 */}
            <Draggable bounds="parent" onDrag={handleDrag}>
              <div
                className="comboImage"
                id="2"
                style={{ left: 690, top: 191 }}
              >
                <div
                  style={{
                    backgroundImage: `url(${secondImgSrc})`,
                  }}
                ></div>
                <img
                  src={`/img/${activeMaterial}/F002.png`}
                  className="2"
                  onClick={handleImageClick}
                  style={{ zIndex: 2, position: "relative" }}
                />
                {/* {secondImgSrc && (
                  <img
                    src={secondImgSrc}
                    className="comboImg"
                    style={{ height: 210, width: 210 }}
                  />
                )} */}
              </div>
            </Draggable>
            {/* F001 */}
            <Draggable bounds="parent" onDrag={handleDrag}>
              <div
                className="comboImage"
                id="3"
                style={{ left: 917, top: 191 }}
              >
                <div
                  style={{
                    backgroundImage: `url(${thirdImgSrc})`,
                  }}
                ></div>
                <img
                  src={`/img/${activeMaterial}/F001.png`}
                  className="3"
                  onClick={handleImageClick}
                  style={{ zIndex: 2, position: "relative" }}
                />
                {/* {thirdImgSrc && (
                  <img
                    src={thirdImgSrc}
                    className="comboImg"
                    style={{ height: 210, width: 140 }}
                  />
                )} */}
              </div>
            </Draggable>
          </div>
        </div>
      </div>
      <input
        type="file"
        style={{ display: "none" }}
        ref={f}
        onChange={(e) => {
          comboFileChange(e);
        }}
      />
      <input
        type="file"
        style={{ display: "none" }}
        ref={w}
        onChange={(e) => {
          wallpaperChange(e);
        }}
      />

      <OptionsBar
        color={color}
        setColor={setColor}
        setWallPaper={setWallPaper}
        handleUploadDevice={handleUploadDevice}
        exportRef={exportRef}
        uploadRef={w}
      />
    </div>
  );
}

export default Rec301;
