export const scrollToTop = (
  scrollId: string,
  scrollStyle: ScrollBehavior = "smooth"
) => {
  const element = document.getElementById(scrollId);
  if (element) {
    element.scrollTo({
      top: 0,
      behavior: scrollStyle,
    });
  } else {
    console.error(`Element with ID "${scrollId}" not found.`);
  }
};
