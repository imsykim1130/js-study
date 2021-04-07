const imageContainer = document.querySelector(".image-container");

addEventListener("mousemove", (e) => {
  const x = (e.clientX / innerWidth) * 2 - 1;
  const y = (e.clientY / innerHeight) * 2 - 1;
  imageContainerTransform.x = x * 50;
  imageContainerTransform.y = y * 50;
});

const imageContainerTransform = {
  x: 0,
  y: 0,
};

const animate = () => {
  requestAnimationFrame(animate);
  imageContainer.style.transform = `translate3d(${imageContainerTransform.x}px, ${imageContainerTransform.y}px, 0)`;
};

animate();
