import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import QrScanner from "qr-scanner";

const QrScannerTest: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasCamera, setHasCamera] = useState(false);
  const [flashState, setFlashState] = useState(false);
  const [cameras, setCameras] = useState<QrScanner.Camera[]>([]);
  const [qrResult, setQrResult] = useState("");
  const [qrResultTimestamp, setQrResultTimestamp] = useState("");

  useEffect(() => {
    let scanner: QrScanner | null = null;

    const startScanner = async () => {
      if (videoRef.current) {
        scanner = new QrScanner(
          videoRef.current,
          (result) => {
            setQrResult(result.data);
            setQrResultTimestamp(new Date().toISOString());
          },
          {
            onDecodeError: (error: any) => {
              setQrResult(`Error: ${error.message}`);
            },
            highlightScanRegion: true,
            highlightCodeOutline: true,
          }
        );

        try {
          await scanner.start();
          setCameras(await QrScanner.listCameras(true));
          setHasCamera(await QrScanner.hasCamera());
        } catch (error) {
          console.error(error);
        }
      }
    };

    startScanner();

    return () => {
      if (scanner) {
        scanner.stop();
        scanner.destroy();
        scanner = null;
      }
    };
  }, []);

  const handleCameraChange = async (event: ChangeEvent<HTMLSelectElement>) => {
    // Implementation for changing the camera
  };

  const handleFlashToggle = async () => {
    // Implementation for toggling the flash
  };

  return (
    <>
      {/* ... Other components ... */}
      <b>Device has camera: {hasCamera ? "Yes" : "No"}</b>
      {/* ... Other components ... */}
      <button id="flash-toggle" onClick={handleFlashToggle}>
        📸 Flash: <span id="flash-state">{flashState ? "on" : "off"}</span>
      </button>
      {/* ... Other components ... */}
      <video ref={videoRef} style={{ display: "none" }} />
      Qr Code Rresult :<span>{qrResult}</span>
      Time Stamp :<span>{qrResultTimestamp}</span>
    </>
  );
};

export default QrScannerTest;
