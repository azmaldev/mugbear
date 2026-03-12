// MugBear — Free Avatar Hub for Developers | MIT License
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DICEBEAR_STYLES: () => DICEBEAR_STYLES,
  PROVIDERS: () => PROVIDERS,
  cartoonAvatar: () => cartoonAvatar,
  getAllAvatars: () => getAllAvatars,
  getAvatar: () => getAvatar,
  initialsAvatar: () => initialsAvatar,
  pixelAvatar: () => pixelAvatar,
  robotAvatar: () => robotAvatar
});
module.exports = __toCommonJS(src_exports);
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
function initialsAvatar(name, size = 128) {
  return getAvatar(name, { provider: "dicebear", style: "initials", size });
}
function cartoonAvatar(name, size = 128) {
  return getAvatar(name, { provider: "dicebear", style: "avataaars", size });
}
function robotAvatar(name, size = 128) {
  return getAvatar(name, { provider: "robohash", size, set: "set1" });
}
function pixelAvatar(name, size = 128) {
  return getAvatar(name, { provider: "dicebear", style: "pixel-art", size });
}
function getAllAvatars(name, size = 128) {
  return {
    initials: initialsAvatar(name, size),
    cartoon: cartoonAvatar(name, size),
    robot: robotAvatar(name, size),
    pixel: pixelAvatar(name, size),
    notionists: getAvatar(name, { provider: "dicebear", style: "notionists", size }),
    thumbs: getAvatar(name, { provider: "dicebear", style: "thumbs", size }),
    uiAvatars: getAvatar(name, { provider: "ui-avatars", size })
  };
}
var DICEBEAR_STYLES = [
  "initials",
  "avataaars",
  "notionists",
  "thumbs",
  "bottts",
  "micah",
  "pixel-art",
  "lorelei",
  "adventurer",
  "croodles",
  "fun-emoji",
  "identicon",
  "rings",
  "shapes"
];
var PROVIDERS = ["dicebear", "ui-avatars", "robohash"];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DICEBEAR_STYLES,
  PROVIDERS,
  cartoonAvatar,
  getAllAvatars,
  getAvatar,
  initialsAvatar,
  pixelAvatar,
  robotAvatar
});
//# sourceMappingURL=index.js.map