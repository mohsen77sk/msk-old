export interface MskFSDocument extends HTMLDocument {
  mozFullScreenElement?: Element;
  mozCancelFullScreen?: () => void;
  msFullscreenElement?: Element;
  msExitFullscreen?: () => void;
  webkitFullscreenElement?: Element;
  webkitExitFullscreen?: () => void;
}

export interface MskFSDocumentElement extends HTMLElement {
  mozRequestFullScreen?: () => void;
  msRequestFullscreen?: () => void;
  webkitRequestFullscreen?: () => void;
}
