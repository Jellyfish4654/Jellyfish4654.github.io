import {useEffect} from "react";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const GoToTop = () => {
  useEffect(() => {
    const button = document.getElementById("scroll-to-top");
    if (button != null) {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          button.classList.add("show");
        } else {
          button.classList.remove("show");
        }
      });
    }
  }, []);

  return (
      <button id="scroll-to-top" onClick={() => scrollToTop()} title="Scroll to top">
          <i className="bx bx-chevron-up"></i>
      </button>
  );
}

export default GoToTop;