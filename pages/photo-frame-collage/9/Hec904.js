import { React, useRef, useState, useEffect, useContext } from "react";
import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MaterialContext } from "../../../utils/materialContext";
import Hex from "../../../components/Hex";
import Hex48 from "../../../components/Hex48";
import OptionsBar from "../../../components/OptionsBar";

function Hec904() {
  const f = useRef(null);
  const w = useRef(null);
  const exportRef = useRef();
  const [show, setShow] = useState(false);
  const collageName = "Hec904"

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var [chosenImageClassName, setChosenImageClassName] = useState("");
  const [color, setColor] = useState("#e6e6e6");

  var [firstImgSrc, setFirstImgSrc] = useState("/img/web/add.png");
  var [secondImgSrc, setSecondImgSrc] = useState("/img/web/add.png");
  var [thirdImgSrc, setThirdImgSrc] = useState("/img/web/add.png");
  var [fourthImgSrc, setFourthImgSrc] = useState("/img/web/add.png");
  var [fifthImgSrc, setFifthImgSrc] = useState("/img/web/add.png");
  var [sixthImgSrc, setSixthImgSrc] = useState("/img/web/add.png");
  var [seventhImgSrc, setSeventhImgSrc] = useState("/img/web/add.png");
  var [eigthImgSrc, setEighthImgSrc] = useState("/img/web/add.png");
  var [ninthImgSrc, setNinthImgSrc] = useState("/img/web/add.png");
  var [userImagesArr, setUserImagesArr] = useState([]);

  var [wallPaper, setWallPaper] = useState("/img/web/blank_wall.jpg");

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

  const { activeMaterial } = useContext(MaterialContext);

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
        case "4":
          setFourthImgSrc(imageFile);
          insertImage(imageFile, 4);
          break;
        case "5":
          setFifthImgSrc(imageFile);
          insertImage(imageFile, 5);
          break;
        case "6":
          setSixthImgSrc(imageFile);
          insertImage(imageFile, 6);
          break;
        case "7":
          setSeventhImgSrc(imageFile);
          insertImage(imageFile, 7);
          break;
        case "8":
          setEighthImgSrc(imageFile);
          insertImage(imageFile, 8);
          break;
        case "9":
          setNinthImgSrc(imageFile);
          insertImage(imageFile, 9);
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

  function resetWallpaper() {
    setWallPaper("/img/web/defaultBackground.png");
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
            {/* F0016 */}
            <Draggable bounds="parent" onDrag={handleDrag}>
              <div
                className="hexComboImage"
                id="1"
                style={{ left: 606, top: 158 }}
              >
                <Hex
                  img={firstImgSrc}
                  onClick={handleImageClick}
                  className="1"
                  frameSource={`/img/${activeMaterial}/F048.png`}
                  type={"F048"}
                />
              </div>
            </Draggable>
            {/* F0016 */}
            <Draggable bounds="parent" onDrag={handleDrag}>
              <div
                className="hexComboImage"
                id="2"
                style={{ left: 903, top: 158 }}
              >
               <Hex
                  img={secondImgSrc}
                  onClick={handleImageClick}
                  className="2"
                  frameSource={`/img/${activeMaterial}/F048.png`}
                  type={"F048"}
                />
              </div>
            </Draggable>
            {/* F0016 */}
            <Draggable bounds="parent" onDrag={handleDrag}>
              <div
                className="hexComboImage"
                id="3"
                style={{ left: 557, top: 245 }}
              >
                <Hex
                  img={thirdImgSrc}
                  onClick={handleImageClick}
                  className="3"
                  frameSource={`/img/${activeMaterial}/F048.png`}
                  type={"F048"}
                />
              </div>
            </Draggable>
            {/* F0016 */}
            <Draggable bounds="parent" onDrag={handleDrag}>
              <div
                className="hexComboImage"
                id="4"
                style={{ left: 657, top: 245 }}
              >
               <Hex
                  img={fourthImgSrc}
                  onClick={handleImageClick}
                  className="4"
                  frameSource={`/img/${activeMaterial}/F048.png`}
                  type={"F048"}
                />
              </div>
            </Draggable>
            {/* F0016 */}
            <Draggable bounds="parent" onDrag={handleDrag}>
              <div
                className="hexComboImage"
                id="5"
                style={{ left: 754, top: 245 }}
              >
               <Hex
                  img={fifthImgSrc}
                  onClick={handleImageClick}
                  className="5"
                  frameSource={`/img/${activeMaterial}/F048.png`}
                  type={"F048"}
                />
              </div>
            </Draggable>
            {/* F0016 */}
            <Draggable bounds="parent" onDrag={handleDrag}>
              <div
                className="hexComboImage"
                id="6"
                style={{ left: 854, top: 245 }}
              >
             <Hex
                  img={sixthImgSrc}
                  onClick={handleImageClick}
                  className="6"
                  frameSource={`/img/${activeMaterial}/F048.png`}
                  type={"F048"}
                />
              </div>
            </Draggable>
            {/* F0016 */}
            <Draggable bounds="parent" onDrag={handleDrag}>
              <div
                className="hexComboImage"
                id="7"
                style={{ left: 951, top: 245 }}
              >
               <Hex
                  img={seventhImgSrc}
                  onClick={handleImageClick}
                  className="7"
                  frameSource={`/img/${activeMaterial}/F048.png`}
                  type={"F048"}
                />
              </div>
            </Draggable>
            {/* F0016 */}
            <Draggable bounds="parent" onDrag={handleDrag}>
              <div
                className="hexComboImage"
                id="8"
                style={{ left: 606, top: 333 }}
              >
               <Hex
                  img={eigthImgSrc}
                  onClick={handleImageClick}
                  className="8"
                  frameSource={`/img/${activeMaterial}/F048.png`}
                  type={"F048"}
                />
              </div>
            </Draggable>
            {/* F0016 */}
            <Draggable bounds="parent" onDrag={handleDrag}>
              <div
                className="hexComboImage"
                id="9"
                style={{ left: 903, top: 333 }}
              >
                <Hex
                  img={ninthImgSrc}
                  onClick={handleImageClick}
                  className="9"
                  frameSource={`/img/${activeMaterial}/F048.png`}
                  type={"F048"}
                />
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
        collageName={collageName}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Wallpaper</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Button onClick={() => handleUploadDevice()}>
              Upload from device
            </Button>
          </div>
          <div>
            <Button>Upload from our collection</Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Hec904;
