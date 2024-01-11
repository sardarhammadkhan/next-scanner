import React, { Component } from 'react';
import DWT from '../../DynamsoftSDK';
export const ScanPopup = () => {
  return (
    <DWT
    features={[
      "scan",
      // "camera",
      // "load",
      "save",
      "upload",
      // "barcode",
      // "ocr",
      "uploader"
    ]}
  />
  )
}
