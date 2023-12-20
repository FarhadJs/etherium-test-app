"use client";
import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import styles from "./Home.module.css";

function Scan() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data) {
      // Perform the operation to set data in real-time
      // This could be an API call or local state update
      // For demonstration, we're using console.log
      console.log("QR Code Data:", data);
    }
  }, [data]); // This effect will run every time 'data' changes

  return (
    <div className={styles.container}>
      <div className="w-56 rounded">
        <QrReader
          onResult={(result, error) => {
            if (result) {
              setData(result);
              console.log("Finded!");
            }

            if (error) {
              console.info(error);
            }
          }}
          constraints={{ facingMode: "environment" }}
          style={{ width: "40%", height: "40%" }}
        />
        <p>{data}</p>
      </div>
    </div>
  );
}

export default Scan;
