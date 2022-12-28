import createBoard from "./board";
let runComponents = (() => {
  function start() {
    let main = document.querySelector("#main");
    main.appendChild(createBoard());
  }
  return { start: start() };
})();

export default runComponents;
