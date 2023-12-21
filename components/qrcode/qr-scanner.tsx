"use client";
import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";

const ScanQR: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scanResult, setScanResult] = useState<string>("");
  const [hasFlash, setHasFlash] = useState<boolean>(false);

  const cameras = QrScanner.listCameras(true);
  // cameras.then((res) => console.log(res));

  const initializeScanner = async () => {
    if (videoRef.current) {
      const qrScanner = new QrScanner(
        videoRef.current,
        (result) => {
          setScanResult(result.data);
        },
        {
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );

      try {
        await qrScanner.start();
        setHasFlash(await qrScanner.hasFlash());
      } catch (error) {
        console.error(error);
      }

      return qrScanner;
    }
  };

  useEffect(() => {
    const qrScanner = initializeScanner();

    return () => {
      qrScanner.then((scanner) => {
        scanner?.stop();
        scanner?.destroy();
      });
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} />
      <p>Scanned QR Code: {scanResult}</p>
    </div>
  );
};

export default ScanQR;
