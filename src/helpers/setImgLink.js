export const setImgLink = async (image_link, setImg, defImage) => {
  const res = await fetch(image_link, { method: "GET" });
  if (res.status) {
    setImg(image_link);
  } else {
    setImg(defImage);
  }
};
