export function rotateCard(
  oldElementId: string,
  newElementId: string,
  horizontal: boolean = false
) {
  const img = document.getElementById(oldElementId);

  const rotateElement = () => {
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
        newImage.style.minHeight =
          newImage.parentElement?.clientWidth.toString()! + "px";

        newImage.style.minWidth =
          newImage.parentElement?.clientHeight.toString()! + "px";
      } else {
        newImage.style.aspectRatio = "1/1.5";
      }
    }
  };

  img?.addEventListener("load", rotateElement);
  img?.addEventListener("change", rotateElement);
}
