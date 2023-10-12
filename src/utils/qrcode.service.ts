// src/utils/qrcode.service.ts
import * as qr from 'qrcode';

export class QRCodeService {
  async generateQRCodeLink(url: string): Promise<string> {
    try {
      const qrCodeImage = await qr.toDataURL(url);
      return qrCodeImage;
    } catch (error) {
      throw new Error('Failed to generate QR code');
    }
  }
}
