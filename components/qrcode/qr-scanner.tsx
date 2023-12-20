import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";

const ScanQR = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const CameraResult = useRef<HTMLElement>(null);
  const camHasFlash = useRef<HTMLElement>(null);
  const qrScannerRef = useRef<QrScanner>();
  const [scanResult, setScanResult] = useState<string>("");

  //
  function setResult(label: HTMLElement, result: any) {
    console.log(result.data);
    label.innerText = result.data;
  }

  //   const scanner = new QrScanner(
  //     videoRef.current!,
  //     (result) => setResult(CameraResult.current!, result),
  //     {
  //       highlightScanRegion: true,
  //       highlightCodeOutline: true,
  //     }
  //   );

  // List cameras after the scanner started to avoid listCamera's stream and the scanner's stream being requested
  // at the same time which can result in listCamera's unconstrained stream also being offered to the scanner.
  // Note that we can also start the scanner after listCameras, we just have it this way around in the demo to
  // start the scanner earlier.
  const scanner = new QrScanner(videoRef.current!, (result) => {});
  scanner.start();

  //

  useEffect(() => {
    if (videoRef.current) {
      const qrScanner = new QrScanner(videoRef.current, (result) => {
        console.log("Scanned QR code:", result);
        setScanResult(result.data); // Update the scan result state
      });
      qrScanner.start();
      qrScannerRef.current = qrScanner;
    }

    return () => {
      qrScannerRef.current?.stop();
      qrScannerRef.current?.destroy();
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} />
      {scanResult && <p>Scanned QR Code: {scanResult}</p>}{" "}
      {/* Display scan result */}
      Qr Code Result :<span ref={CameraResult}></span>
      Camera Has Flash ? :<span ref={camHasFlash}></span>
    </div>
  );
};

export default ScanQR;
