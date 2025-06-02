"use client"
import React from 'react';
import {QRCodeSVG} from 'qrcode.react';

const CallQRCode = ({ phoneNumber }) => {
  const telUrl = `tel:${phoneNumber}`;

  return (
    <div>
      <QRCodeSVG value={telUrl} size={200} />
    </div>
  );
};

export default CallQRCode;
