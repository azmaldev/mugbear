// MugBear — Free Avatar Hub for Developers | MIT License
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/react.tsx
var react_exports = {};
__export(react_exports, {
  AvatarWithFallback: () => AvatarWithFallback,
  MugBearAvatar: () => MugBearAvatar
});
module.exports = __toCommonJS(react_exports);
var React = __toESM(require("react"));

// src/index.ts
function getAvatar(name, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const encoded = encodeURIComponent(name.trim());
  switch (options.provider) {
    case "dicebear": {
      const style = (_a = options.style) != null ? _a : "initials";
      const size = (_b = options.size) != null ? _b : 128;
      const radius = (_c = options.radius) != null ? _c : 0;
      let url = `https://api.dicebear.com/7.x/${style}/svg?seed=${encoded}&size=${size}&radius=${radius}`;
      if (options.backgroundColor) {
        url += `&backgroundColor=${options.backgroundColor.replace("#", "")}`;
      }
      return url;
    }
    case "ui-avatars": {
      const size = (_d = options.size) != null ? _d : 128;
      const rounded = (_e = options.rounded) != null ? _e : false;
      const bold = (_f = options.bold) != null ? _f : false;
      const bg = ((_g = options.background) != null ? _g : "random").replace("#", "");
      const color = ((_h = options.color) != null ? _h : "ffffff").replace("#", "");
      const upper = (_i = options.uppercase) != null ? _i : true;
      return `https://ui-avatars.com/api/?name=${encoded}&size=${size}&rounded=${rounded}&bold=${bold}&background=${bg}&color=${color}&uppercase=${upper}&format=svg`;
    }
    case "robohash": {
      const size = (_j = options.size) != null ? _j : 128;
      const set = (_k = options.set) != null ? _k : "set1";
      return `https://robohash.org/${encoded}?size=${size}x${size}&set=${set}`;
    }
    default:
      throw new Error(`[MugBear] Unknown provider. Use 'dicebear', 'ui-avatars', or 'robohash'.`);
  }
}

// src/react.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function MugBearAvatar({
  name,
  provider = "dicebear",
  style = "initials",
  size = 64,
  shape = "circle",
  alt,
  className,
  imgStyle,
  onError
}) {
  const [error, setError] = React.useState(false);
  const options = provider === "dicebear" ? { provider: "dicebear", style, size } : provider === "ui-avatars" ? { provider: "ui-avatars", size, rounded: shape === "circle" } : { provider: "robohash", size };
  const fallbackUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&size=${size}`;
  const src = error ? fallbackUrl : getAvatar(name, options);
  const borderRadius = shape === "circle" ? "50%" : "8px";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "img",
    {
      src,
      alt: alt != null ? alt : `Avatar for ${name}`,
      width: size,
      height: size,
      className,
      style: { borderRadius, display: "block", ...imgStyle },
      onError: () => {
        setError(true);
        onError == null ? void 0 : onError();
      }
    }
  );
}
function AvatarWithFallback({
  name,
  fallbackBg = "#18181b",
  fallbackColor = "#ffffff",
  size = 64,
  shape = "circle",
  ...rest
}) {
  const [failed, setFailed] = React.useState(false);
  const initials = name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  if (failed) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          width: size,
          height: size,
          borderRadius: shape === "circle" ? "50%" : "8px",
          backgroundColor: fallbackBg,
          color: fallbackColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: size * 0.35,
          fontWeight: "bold",
          fontFamily: "sans-serif",
          userSelect: "none"
        },
        "aria-label": `Avatar for ${name}`,
        children: initials
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    MugBearAvatar,
    {
      name,
      size,
      shape,
      onError: () => setFailed(true),
      ...rest
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AvatarWithFallback,
  MugBearAvatar
});
//# sourceMappingURL=react.js.map