export function rotateCard(
  oldElementId: string,
  newElementId: string,
  horizontal: boolean = false
) {
  let img = document.getElementById(oldElementId);

  img?.addEventListener("load", () => {
    const image = document.getElementById(oldElementId) as HTMLImageElement;

    const isHorizontal = image.width > image.height;

    const newImage = document.getElementById(newElementId) as HTMLImageElement;

    if (horizontal) {
      if (isHorizontal) {
        newImage.style.aspectRatio = "1.5/1";
      } else {
        newImage.style.transform = "rotate(-90deg)";
        newImage.style.aspectRatio = "1/1.5";
      }
    } else {
      if (isHorizontal) {
        newImage.style.transform = "rotate(90deg)";
        newImage.style.aspectRatio = "1.5/1";
      } else {
        newImage.style.aspectRatio = "1/1.5";
      }
    }
  });
}
