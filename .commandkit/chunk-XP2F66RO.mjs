import {
  __name
} from "./chunk-G5GHKT7C.mjs";

// src/cards/greetingCard.tsx
import { JSX, Builder, loadImage } from "canvacord";
var GreetingsCard = class extends Builder {
  static {
    __name(this, "GreetingsCard");
  }
  constructor() {
    super(930, 280);
    this.bootstrap({
      displayName: "",
      type: "welcome",
      avatar: "",
      message: ""
    });
  }
  setDisplayName(value) {
    this.options.set("displayName", value);
    return this;
  }
  setType(value) {
    this.options.set("type", value);
    return this;
  }
  setAvatar(value) {
    this.options.set("avatar", value);
    return this;
  }
  setMessage(value) {
    this.options.set("message", value);
    return this;
  }
  // this is where you have to define output ui
  async render() {
    const { type, displayName, avatar, message } = this.options.getOptions();
    const image = await loadImage(avatar);
    return /* @__PURE__ */ JSX.createElement("div", { className: "h-full w-full flex flex-col items-center justify-center bg-[#23272A] rounded-xl" }, /* @__PURE__ */ JSX.createElement("div", { className: "px-6 bg-[#2B2F35AA] w-[96%] h-[84%] rounded-lg flex items-center" }, /* @__PURE__ */ JSX.createElement("img", { src: image.toDataURL(), className: "flex h-[40] w-[40] rounded-full" }), /* @__PURE__ */ JSX.createElement("div", { className: "flex flex-col ml-6" }, /* @__PURE__ */ JSX.createElement("h1", { className: "text-5xl text-white font-bold m-0" }, type === "welcome" ? "Welcome" : "Goodbye", ", ", /* @__PURE__ */ JSX.createElement("span", { className: "text-blue-500" }, displayName, "!")), /* @__PURE__ */ JSX.createElement("p", { className: "text-gray-300 text-3xl m-0" }, message))));
  }
};
var greetingCard_default = GreetingsCard;

export {
  greetingCard_default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NhcmRzL2dyZWV0aW5nQ2FyZC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKiBAanN4IEpTWC5jcmVhdGVFbGVtZW50ICovXG4vKiogQGpzeEZyYWcgSlNYLkZyYWdtZW50ICovXG5cbi8vIEpTWCBpbXBvcnQgaXMgcmVxdWlyZWQgaWYgeW91IHdhbnQgdG8gdXNlIEpTWCBzeW50YXhcbi8vIEJ1aWxkZXIgaXMgYSBiYXNlIGNsYXNzIHRvIGNyZWF0ZSB5b3VyIG93biBidWlsZGVyc1xuLy8gbG9hZEltYWdlIGlzIGEgaGVscGVyIGZ1bmN0aW9uIHRvIGxvYWQgaW1hZ2VzIGZyb20gdXJsIG9yIHBhdGhcbmltcG9ydCB7IEpTWCwgQnVpbGRlciwgbG9hZEltYWdlIH0gZnJvbSAnY2FudmFjb3JkJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgdHlwZTogJ3dlbGNvbWUnIHwgJ2dvb2RieWUnO1xuICBhdmF0YXI6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5jbGFzcyBHcmVldGluZ3NDYXJkIGV4dGVuZHMgQnVpbGRlcjxQcm9wcz4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBzZXQgd2lkdGggYW5kIGhlaWdodFxuICAgIHN1cGVyKDkzMCwgMjgwKTtcbiAgICAvLyBpbml0aWFsaXplIHByb3BzXG4gICAgdGhpcy5ib290c3RyYXAoe1xuICAgICAgZGlzcGxheU5hbWU6ICcnLFxuICAgICAgdHlwZTogJ3dlbGNvbWUnLFxuICAgICAgYXZhdGFyOiAnJyxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgIH0pO1xuICB9XG5cbiAgc2V0RGlzcGxheU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9ucy5zZXQoJ2Rpc3BsYXlOYW1lJywgdmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0VHlwZSh2YWx1ZTogUHJvcHNbJ3R5cGUnXSkge1xuICAgIHRoaXMub3B0aW9ucy5zZXQoJ3R5cGUnLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRBdmF0YXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9ucy5zZXQoJ2F2YXRhcicsIHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldE1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9ucy5zZXQoJ21lc3NhZ2UnLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyB0aGlzIGlzIHdoZXJlIHlvdSBoYXZlIHRvIGRlZmluZSBvdXRwdXQgdWlcbiAgYXN5bmMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHlwZSwgZGlzcGxheU5hbWUsIGF2YXRhciwgbWVzc2FnZSB9ID0gdGhpcy5vcHRpb25zLmdldE9wdGlvbnMoKTtcblxuICAgIC8vIG1ha2Ugc3VyZSB0byB1c2UgdGhlIGxvYWRJbWFnZSBoZWxwZXIgZnVuY3Rpb24gdG8gbG9hZCBpbWFnZXMsIG90aGVyd2lzZSB5b3UgbWF5IGdldCBlcnJvcnNcbiAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGxvYWRJbWFnZShhdmF0YXIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1bIzIzMjcyQV0gcm91bmRlZC14bFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgYmctWyMyQjJGMzVBQV0gdy1bOTYlXSBoLVs4NCVdIHJvdW5kZWQtbGcgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2UudG9EYXRhVVJMKCl9IGNsYXNzTmFtZT1cImZsZXggaC1bNDBdIHctWzQwXSByb3VuZGVkLWZ1bGxcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtbC02XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC13aGl0ZSBmb250LWJvbGQgbS0wXCI+XG4gICAgICAgICAgICAgIHt0eXBlID09PSAnd2VsY29tZScgPyAnV2VsY29tZScgOiAnR29vZGJ5ZSd9LCA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+e2Rpc3BsYXlOYW1lfSE8L3NwYW4+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCB0ZXh0LTN4bCBtLTBcIj57bWVzc2FnZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmVldGluZ3NDYXJkO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7QUFNQSxTQUFTLEtBQUssU0FBUyxpQkFBaUI7QUFTeEMsSUFBTSxnQkFBTixjQUE0QixRQUFlO0FBQUEsRUFmM0MsT0FlMkM7QUFBQTtBQUFBO0FBQUEsRUFDekMsY0FBYztBQUVaLFVBQU0sS0FBSyxHQUFHO0FBRWQsU0FBSyxVQUFVO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsSUFDWCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsZUFBZSxPQUFlO0FBQzVCLFNBQUssUUFBUSxJQUFJLGVBQWUsS0FBSztBQUNyQyxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsUUFBUSxPQUFzQjtBQUM1QixTQUFLLFFBQVEsSUFBSSxRQUFRLEtBQUs7QUFDOUIsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLFVBQVUsT0FBZTtBQUN2QixTQUFLLFFBQVEsSUFBSSxVQUFVLEtBQUs7QUFDaEMsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLFdBQVcsT0FBZTtBQUN4QixTQUFLLFFBQVEsSUFBSSxXQUFXLEtBQUs7QUFDakMsV0FBTztBQUFBLEVBQ1Q7QUFBQTtBQUFBLEVBR0EsTUFBTSxTQUFTO0FBQ2IsVUFBTSxFQUFFLE1BQU0sYUFBYSxRQUFRLFFBQVEsSUFBSSxLQUFLLFFBQVEsV0FBVztBQUd2RSxVQUFNLFFBQVEsTUFBTSxVQUFVLE1BQU07QUFFcEMsV0FDRSxrQ0FBQyxTQUFJLFdBQVUscUZBQ2Isa0NBQUMsU0FBSSxXQUFVLHNFQUNiLGtDQUFDLFNBQUksS0FBSyxNQUFNLFVBQVUsR0FBRyxXQUFVLG1DQUFrQyxHQUN6RSxrQ0FBQyxTQUFJLFdBQVUsd0JBQ2Isa0NBQUMsUUFBRyxXQUFVLHVDQUNYLFNBQVMsWUFBWSxZQUFZLFdBQVUsTUFBRSxrQ0FBQyxVQUFLLFdBQVUsbUJBQWlCLGFBQVksR0FBQyxDQUM5RixHQUNBLGtDQUFDLE9BQUUsV0FBVSxnQ0FBOEIsT0FBUSxDQUNyRCxDQUNGLENBQ0Y7QUFBQSxFQUVKO0FBQ0Y7QUFFQSxJQUFPLHVCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=