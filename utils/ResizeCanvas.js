function resizeCanvas() {
  var optimal_dimensions = [1600, 900];
  var scaleFactorX = window.innerWidth / optimal_dimensions[0];
  var scaleFactorY = window.innerHeight / optimal_dimensions[1];
  if (scaleFactorX < scaleFactorY && scaleFactorX < 1) {
    canvas.setWidth(optimal_dimensions[0] * scaleFactorX);
    canvas.setHeight(optimal_dimensions[1] * scaleFactorX);
    canvas.setZoom(scaleFactorX);
  } else if (scaleFactorX > scaleFactorY && scaleFactorY < 1) {
    canvas.setWidth(optimal_dimensions[0] * scaleFactorY);
    canvas.setHeight(optimal_dimensions[1] * scaleFactorY);
    canvas.setZoom(scaleFactorY);
  } else {
    canvas.setWidth(optimal_dimensions[0]);
    canvas.setHeight(optimal_dimensions[1]);
    canvas.setZoom(1);
  }
  canvas.renderAll();
}
addEventListener("resize", (event) => {
  resizeCanvas();
});
