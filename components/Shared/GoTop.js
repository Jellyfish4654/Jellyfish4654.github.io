import {useEffect} from "react";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const GoTop = () => {
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
      <div id="scroll-to-top" onClick={() => scrollToTop()}>
          <i className="bx bx-chevrons-up"></i>
      </div>
  );
}

export default GoTop;