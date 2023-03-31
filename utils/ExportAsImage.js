import html2canvas from "html2canvas";


const exportAsImage = async (element, imageFileName) => {
  const canvas = await html2canvas(element);
  const image = canvas.toDataURL("image/png", 1.0);

  // Create new canvas with yellow border
  const borderSize = 0;
  const borderedCanvas = document.createElement("canvas");
  borderedCanvas.width = canvas.width + borderSize * 2;
  borderedCanvas.height = canvas.height + borderSize * 2;
  const ctx = borderedCanvas.getContext("2d");
  // ctx.fillStyle = "yellow";
  ctx.fillRect(0, 0, borderedCanvas.width, borderedCanvas.height);
  ctx.drawImage(canvas, borderSize, borderSize);

  const borderedImage = borderedCanvas.toDataURL("image/png", 1.0);
  downloadImage(borderedImage, imageFileName);
};


const downloadImage = (blob, fileName) => {
const fakeLink = window.document.createElement("a");
fakeLink.style = "display:none;";
fakeLink.download = fileName;

fakeLink.href = blob;

document.body.appendChild(fakeLink);
fakeLink.click();
document.body.removeChild(fakeLink);

fakeLink.remove();
};



export default exportAsImage;