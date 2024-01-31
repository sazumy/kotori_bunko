import { runAdobeFont } from "./components/runAdobeFont.js";
import { openAndCloseGnav } from "./components/openAndCloseGnav.js";
import { viewMoreAndLess } from "./components/viewMoreAndLess.js";
import { showIgMedia } from "./components/showIgMedia.js";

runAdobeFont(document);
openAndCloseGnav();
viewMoreAndLess();
// NOTE: showIdMediaはGithubアクションズの中で追記される。（トークンを直接コードに書けないため）
