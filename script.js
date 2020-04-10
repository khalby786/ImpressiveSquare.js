console.log("Impressive Squares v0.1");

var square = new Object();

square.new = function(
  options = {
    class: "impressive-square",
    images: "impressive-image",
    content: "impressive-body",
    width: "100%",
    back: "white",
    fore: "black"
  }
) {
  let style = document.createElement("style");
  style.innerHTML = `
@media only screen and (max-width: 600px) {
  .${options.class} {
    display: block;
    width: 100%;
  }
}
`;
  document.body.appendChild(style);
  let squares = Array.from(
    document.getElementsByClassName(options.class)
  ).forEach(square => {
    square.height = "100%";
    square.style.width = options.width;
    square.style.borderRadius = "9px";
    square.style.boxShadow = " 0px 0px 5px 2px #cfc9c8";
    square.style.transition = "1s ease";
    square.style.display = "inline-block";
    square.style.backgroundColor = options.back;
    square.style.color = options.fore;
    square.style.marginTop = "20px";
    square.style.marginBottom = "20px";
    square.style.marginLeft = "10px";
    square.style.marginRight = "10px";
    square.onmouseover = function() {
      this.style.transform = "scale(1.01)";
    };
    square.onmouseout = function() {
      this.style.transform = "scale(1)";
    };
  });
  let images = Array.from(
    document.getElementsByClassName(options.images)
  ).forEach(image => {
    image.style.width = "100%";
    image.style.marginLeft = "0px";
    image.style.marginRight = "0px";
    image.style.top = "0px";
    image.style.borderTopLeftRadius = "9px";
    image.style.borderTopRightRadius = "9px";
  });
  let bodies = Array.from(
    document.getElementsByClassName(options.content)
  ).forEach(body => {
    body.style.padding = "20px 10px 20px 10px";
  });
  let dark = function(color) {
    let bodies = Array.from(
      document.getElementsByClassName(options.content)
    ).forEach(body => {
      body.style.backgroundColor(color);
    });
  };
};