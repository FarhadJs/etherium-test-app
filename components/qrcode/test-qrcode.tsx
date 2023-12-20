import { BrowserQRCodeReader } from '@zxing/library';
const qrScanner = async () => {
  const codeReader = new BrowserQRCodeReader();
  const videoInputDevices = await codeReader.listVideoInputDevices();

  // Select the first available video input device
  const selectedDeviceId = videoInputDevices[0].deviceId;

  // Create a video element to display the camera feed
  const videoElement = document.createElement('video');
  document.body.appendChild(videoElement);

  try {
    // Start the video stream from the selected device
    await codeReader.decodeOnceFromVideoDevice(selectedDeviceId, videoElement);

    // Handle the decoded QR code
    codeReader.addListener((result) => {
      console.log(result.getText());
    });
  } catch (error) {
    console.error(error);
  }
};

qrScanner();