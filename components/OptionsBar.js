import React from "react";
import { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MaterialContext } from "../utils/materialContext";
import Link from "next/link";
import exportAsImage from "../utils/ExportAsImage";

function OptionsBar({
  color,
  setColor,
  setWallPaper,
  exportRef,
  uploadRef,
  collageName,
}) {
  const { activeMaterial, setActiveMaterial, materials, setWallPaperIndex } =
    useContext(MaterialContext);

  function colorChange(e) {
    setWallPaper("");
    setColor(e.target.value);
  }

  function handleUploadDevice() {
    uploadRef.current.click();
    handleClose();
  }

  function resetWallpaper() {
    const rand = getRandomInt(
      wallpapers.length > 2 ? wallpapers.length - 1 : wallpapers.length
    );

    setWallPaper(wallpapers[rand]);
  }

  // const salesArray = [
  //   "FREE &$100 WOODEN LAMP FOR ORDER FROM $199",
  //   "BUY ONE GET ONE FREE",
  //   "50% OFF TODAY",
  // ];

  // const [salesText, setSalesText] = useState("");

  // useEffect(() => {
  //   const rand = getRandomInt(
  //     salesArray.length > 2 ? salesArray.length - 1 : salesArray.length
  //   );

  //   setSalesText(salesArray[rand]);
  // }, []);

  const wallpapers = [
    "/img/web/Background-1.jpg",
    "/img/web/Background-2.jpg",
    "/img/web/Background-3.jpg",
    "/img/web/Background-4.jpg",
    "/img/web/Background-5.jpg",
    "/img/web/Background-6.jpg",
    "/img/web/Background-7.jpg",
    "/img/web/Background-9.jpg",
    "/img/web/Background-10.jpg",
    "/img/web/Background-11.jpg",
    "/img/web/Background-12.jpg",
    "/img/web/Background-14.jpg",
    "/img/web/Background-15.jpg",
    "/img/web/Background-16.jpg",
    "/img/web/Background-17.jpg",
    "/img/web/Background-18.jpg",
    "/img/web/Background-19.jpg",
    "/img/web/Background-20.jpg",
    "/img/web/Background-21.jpg",
    "/img/web/Background-22.jpg",
    "/img/web/Background-23.jpg",
    "/img/web/Background-24.jpg",
    "/img/web/Background-25.jpg",
    "/img/web/Background-26.jpg",
    "/img/web/Background-27.jpg",
    "/img/web/Background-28.jpg",
    "/img/web/Background-29.jpg",
    "/img/web/Background-30.jpg",
    "/img/web/Background-31.jpg",
    "/img/web/Background-32.jpg",
    "/img/web/Background-33.jpg",
    "/img/web/Background-34.jpg",
    "/img/web/Background-35.jpg",
    "/img/web/Background-36.jpg",
    "/img/web/Background-37.jpg",
    "/img/web/Background-38.jpg",
    "/img/web/Background-39.jpg",
    "/img/web/Background-40.jpg",
    "/img/web/Background-41.jpg",
    "/img/web/Background-42.jpg",
    "/img/web/Background-43.jpg",
    "/img/web/Background-32.jpg",
    "/img/web/Background-44.jpg",
    "/img/web/Background-45.jpg",
    "/img/web/Background-46.jpg",
    "/img/web/Background-47.jpg",
    "/img/web/Background-48.jpg",
    "/img/web/Background-49.jpg",
    "/img/web/Background-50.jpg",
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    const rand = getRandomInt(
      wallpapers.length > 2 ? wallpapers.length - 1 : wallpapers.length
    );

    setWallPaper(wallpapers[rand]);
  }, []);

  const countries = [
    "Afghanistan",
    "Algeria",
    "Angola",
    "Anguilla",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bosnia and Herzegovina",
    "Bolivia",
    "Botswana",
    "Brazil",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "DR Congo",
    "East Timor",
    "Ecuador",
    "Egypt",
    "England",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Finland",
    "France",
    "French Guiana",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guadeloupe",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lesotho",
    "Liberia",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puertorico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Salvador",
    "Samoa",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Republic of Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Trinidad and Tobago",
    "Togo",
    "Tonga",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Island",
    "UAE",
    "Uganda",
    "Ukraine",
    "Uruguay",
    "USA",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "British Virgin Islands",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  function handleWallpaper(e) {
    setShow(true);
  }

  function handleMaterialChange(material) {
    if (material != "Frame material") {
      setActiveMaterial(material);
    }
  }

  function handleExportDesign() {
    const d = new Date();
    exportAsImage(
      exportRef.current,
      collageName + "-" + activeMaterial + "-" + d
    );
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleCollageLink(e) {
    const a = document.createElement("a");
    a.href = e;
    a.target = "_blank";
    a.click();
  }

  const treecollages = ["TrHec01", "TrRec01"];

  const rec3collages = ["Rec301", "Rec302", "Rec303", "Rec304", "Rec305"];
  const rec4collages = [
    "Rec401",
    "Rec402",
    "Rec403",
    "Rec404",
    "Rec405",
    "Rec406",
    "Rec407",
  ];
  const rec5collages = [
    "Rec501",
    "Rec502",
    "Rec503",
    "Rec504",
    "Rec505",
    "Rec506",
    "Rec507",
    "Rec508",
  ];
  const rec6collages = [
    "Rec601",
    "Rec602",
    "Rec603",
    "Rec604",
    "Rec605",
    "Rec606",
    "Rec607",
    "Rec608",
  ];
  const rec7collages = ["Rec701", "Rec702", "Rec703", "Rec704", "Rec705"];
  const rec8collages = [
    "Rec801",
    "Rec802",
    "Rec803",
    "Rec804",
    "Rec805",
    "Rec806",
    "Rec807",
  ];
  const staircollages = [
    "Stair01",
    "Stair02",
    "Stair03",
    "Stair04",
    "Stair05",
    "Stair06",
    "Stair07",
    "Stair08",
    "Stair09",
    "Stair10",
    "Stair11",
    "Stair12",
    "Stair13",
    "Stair14",
  ];

  // Hec collages
  const hec3collages = [
    "Hec301",
    "Hec302",
    "Hec303",
    "Hec304",
    "Hec305",
    "Hec306",
    "Hec307",
    "Hec308",
    "Hec309",
  ];
  const hec4collages = [
    "Hec401",
    "Hec402",
    "Hec403",
    "Hec404",
    "Hec405",
    "Hec406",
    "Hec407",
    "Hec408",
  ];
  const hec5collages = [
    "Hec501",
    "Hec502",
    "Hec503",
    "Hec504",
    "Hec505",
    "Hec506",
    "Hec507",
    "Hec508",
    "Hec509"
  ];
  const hec6collages = [
    "Hec601",
    "Hec602",
    "Hec603",
    "Hec604",
    "Hec605",
    "Hec606",
    "Hec607",
    "Hec608",
    "Hec609",
    "Hec610",
    "Hec611"
  ];
  const hec7collages = ["Hec701", "Hec702", "Hec703", "Hec704", "Hec705"];
  const hec8collages = [
    "Hec801",
    "Hec802",
    "Hec803",
    "Hec804",
    "Hec805",
    "Hec806",
  ];
  const hec9collages = [
    "Hec901",
    "Hec902",
    "Hec903",
    "Hec904",
    "Hec905",
    "Hec906",
    "Hec907",
  ];

  return (
    <>
      <div className="text-sm absolute bottom-5 space-y-2 z-20">
        
        <div className=" justify-center items-center">
          <div className=" rounded-md w-inherit flex justify-center">
            <span
              // style={{ color: "#BF5A1F" }}
              className=" px-3 py-2 rounded-md font-bold"
            >
              <i className="bg-white p-1 rounded-md">
                {/* {salesText} */}
                For more creativity: Click and Drag any frame to your desired
                location. Back to default: refresh with F5.
              </i>
            </span>
          </div>
        </div>
        <div className="flex space-x-5 p-2 bg-white rounded-md shadow-md border justify-center items-center">
          <div className="">
            <span className="font-bold">Background color</span>
          </div>
          <input
            type="color"
            className=" h-10 w-10"
            value={color}
            onChange={(e) => colorChange(e)}
          />

          <div className="p-2 border rounded-md">
            <span>{color}</span>
          </div>

          <div className="">
            <button
              className="px-3 py-2 rounded-md border shadow-md bg-slate-300 font-bold"
              onClick={() => handleWallpaper()}
            >
              Upload wallpaper
            </button>
          </div>
          <div className="">
            <button
              className="px-3 py-2 rounded-md border shadow-md bg-slate-300 font-bold"
              onClick={() => resetWallpaper()}
            >
              Random wallpaper{" "}
            </button>
          </div>

          <div className="">
            <select
              className="px-3 py-2 rounded-md border shadow-md  text-white font-bold w-48"
              style={{ backgroundColor: "#BF5A1F" }}
              onChange={(e) => handleCollageLink(e.target.value)}
            >
              <option>Collage Designs</option>

              <optgroup label="tree">
                {treecollages.map((tree) => {
                  return (
                    <option
                      key="tree"
                      value={`https://frames.earthcolors.net/photo-frame-collage/tree/${tree}`}
                    >
                      {tree}
                    </option>
                  );
                })}
              </optgroup>

              <optgroup label="Rec3">
                {rec3collages.map((rec) => {
                  return (
                    <option
                      key="Rec3"
                      value={`https://frames.earthcolors.net/photo-frame-collage/3/${rec}`}
                    >
                      {rec}
                    </option>
                  );
                })}
              </optgroup>

              <optgroup label="Rec4">
                {rec4collages.map((rec) => {
                  return (
                    <option
                      key="Rec4"
                      value={`https://frames.earthcolors.net/photo-frame-collage/4/${rec}`}
                    >
                      {rec}
                    </option>
                  );
                })}
              </optgroup>

              <optgroup label="Rec5">
                {rec5collages.map((rec) => {
                  return (
                    <option
                      key="Rec5"
                      value={`https://frames.earthcolors.net/photo-frame-collage/5/${rec}`}
                    >
                      {rec}
                    </option>
                  );
                })}
              </optgroup>

              <optgroup label="Rec6">
                {rec6collages.map((rec) => {
                  return (
                    <option
                      key="Rec6"
                      value={`https://frames.earthcolors.net/photo-frame-collage/6/${rec}`}
                    >
                      {rec}
                    </option>
                  );
                })}
              </optgroup>

              <optgroup label="Rec7">
                {rec7collages.map((rec) => {
                  return (
                    <option
                      key="Rec7"
                      value={`https://frames.earthcolors.net/photo-frame-collage/7/${rec}`}
                    >
                      {rec}
                    </option>
                  );
                })}
              </optgroup>

              <optgroup label="Rec8">
                {rec8collages.map((rec) => {
                  return (
                    <option
                      key="Rec8"
                      value={`https://frames.earthcolors.net/photo-frame-collage/8/${rec}`}
                    >
                      {rec}
                    </option>
                  );
                })}
              </optgroup>

              <optgroup label="Stair">
                {staircollages.map((stair) => {
                  return (
                    <option
                      key="stair"
                      value={`https://frames.earthcolors.net/photo-frame-collage/stair/${stair}`}
                    >
                      {stair}
                    </option>
                  );
                })}
              </optgroup>

              <optgroup label="Hec3">
                {hec3collages.map((hec) => {
                  return (
                    <option
                      key="hec"
                      value={`https://frames.earthcolors.net/photo-frame-collage/3/${hec}`}
                    >
                      {hec}
                    </option>
                  );
                })}
              </optgroup>

              <optgroup label="Hec4">
                {hec4collages.map((hec) => {
                  return (
                    <option
                      key="hec"
                      value={`https://frames.earthcolors.net/photo-frame-collage/4/${hec}`}
                    >
                      {hec}
                    </option>
                  );
                })}
              </optgroup>

              <optgroup label="Hec5">
                {hec5collages.map((hec) => {
                  return (
                    <option
                      key="hec"
                      value={`https://frames.earthcolors.net/photo-frame-collage/5/${hec}`}
                    >
                      {hec}
                    </option>
                  );
                })}
              </optgroup>

              <optgroup label="Hec6">
                {hec6collages.map((hec) => {
                  return (
                    <option
                      key="hec"
                      value={`https://frames.earthcolors.net/photo-frame-collage/6/${hec}`}
                    >
                      {hec}
                    </option>
                  );
                })}
              </optgroup>

              <optgroup label="Hec7">
                {hec7collages.map((hec) => {
                  return (
                    <option
                      key="hec"
                      value={`https://frames.earthcolors.net/photo-frame-collage/7/${hec}`}
                    >
                      {hec}
                    </option>
                  );
                })}
              </optgroup>

              <optgroup label="Hec8">
                {hec8collages.map((hec) => {
                  return (
                    <option
                      key="hec"
                      value={`https://frames.earthcolors.net/photo-frame-collage/8/${hec}`}
                    >
                      {hec}
                    </option>
                  );
                })}
              </optgroup>

              <optgroup label="Hec9">
                {hec9collages.map((hec) => {
                  return (
                    <option
                      key="hec"
                      value={`https://frames.earthcolors.net/photo-frame-collage/9/${hec}`}
                    >
                      {hec}
                    </option>
                  );
                })}
              </optgroup>
            </select>
          </div>

          <div className="">
            <select
              className="px-3 py-2 rounded-md border shadow-md text-white font-bold"
              style={{ backgroundColor: "#BF5A1F" }}
              // onClick={() => handleWallpaper()}
              onChange={(e) => handleMaterialChange(e.target.value)}
            >
              <option>Frame material</option>
              <optgroup label="Natural Wood">
                {materials.slice(0, 1).map((material) => {
                  return <option key={material}>{material}</option>;
                })}
              </optgroup>
              <optgroup label="Bright Wood">
                {materials.slice(1, 9).map((material) => {
                  return <option key={material}>{material}</option>;
                })}
              </optgroup>
              <optgroup label="Dark Wood">
                {materials.slice(9, 23).map((material) => {
                  return <option key={material}>{material}</option>;
                })}
              </optgroup>
              <optgroup label="Rustic Metal">
                {materials.slice(23, materials.length).map((material) => {
                  return <option key={material}>{material}</option>;
                })}
              </optgroup>
            </select>
          </div>

          <div className="">
            <select
              className="px-3 py-2 rounded-md border shadow-md  text-white font-bold w-48"
              style={{ backgroundColor: "#BF5A1F" }}
            >
              <option>Suppliers</option>
              {countries.map((country) => {
                return (
                  <optgroup label={country} key={country}>
                    <option>{country}</option>
                    <option>{country}</option>
                    <option>{country}</option>
                  </optgroup>
                );
              })}
            </select>
          </div>

          {/* <div className="">
          <button
            className="px-3 py-2 rounded-md border shadow-md bg-orange-700 text-white font-bold"
            style={{ backgroundColor: "#BF5A1F" }}
            // onClick={() => handleWallpaper()}
          >
            Suppliers
          </button>
        </div> */}
          <div className="">
            <Link
              href="https://earthcolors.net/product-images/?k=&c=collage-wallart"
              target="_blank"
            >
              <button
                style={{ backgroundColor: "#BF5A1F" }}
                className="px-3 py-2 rounded-md border-orange-700 border-2 shadow-md font-bold text-white"
              >
                2D Sample
              </button>
            </Link>
          </div>
          <div className="">
            <Link
              href="https://michiovisualization.info/00-0012-03-02-00/"
              target="_blank"
            >
              <button
                style={{ backgroundColor: "#BF5A1F" }}
                className="px-3 py-2 rounded-md border-orange-700 border-2 shadow-md font-bold text-white"
              >
                3D Sample
              </button>
            </Link>
          </div>

          <div className="">
            <button
              className="px-3 py-2 rounded-md border-orange-700 border-2 shadow-md font-bold text-white"
              style={{ backgroundColor: "#BF5A1F" }}
              onClick={() => handleExportDesign()}
            >
              Export design
            </button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Wallpaper</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-3">
            <div>
              <button
                className="px-3 py-2 rounded-md border-2 shadow-md font-bold"
                onClick={() => handleUploadDevice()}
                style={{ borderColor: "#BF5A1F", color: "#BF5A1F" }}
              >
                Upload from device
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OptionsBar;
