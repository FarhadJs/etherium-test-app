import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useEffect } from "react";

interface Html5QrcodePluginProps {
  fps: number;
  qrbox: number;
  disableFlip?: boolean;
  aspectRatio?: number;
  qrCodeSuccessCallback: (decodedText: string, result: any) => void;
  qrCodeErrorCallback?: (error: string) => void;
  verbose?: boolean;
}

const Html5QrcodePlugin: React.FC<Html5QrcodePluginProps> = (props) => {
  const qrcodeRegionId = "html5qr-code-full-region";

  useEffect(() => {
    const config = {
      fps: props.fps,
      qrbox: props.qrbox,
      aspectRatio: props.aspectRatio,
      disableFlip: props.disableFlip,
    };
    const verbose = props.verbose === true;

    if (!props.qrCodeSuccessCallback) {
      throw new Error("qrCodeSuccessCallback is required callback.");
    }

    const html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      config,
      verbose
    );

    html5QrcodeScanner.render(
      props.qrCodeSuccessCallback,
      props.qrCodeErrorCallback
    );

    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, [
    props.fps,
    props.qrbox,
    props.aspectRatio,
    props.disableFlip,
    props.verbose,
    props.qrCodeSuccessCallback,
    props.qrCodeErrorCallback,
  ]);

  return <div id={qrcodeRegionId}></div>;
};

export default Html5QrcodePlugin;
