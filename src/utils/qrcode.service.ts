import * as qr from 'qrcode';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class QRCodeService {
  async generateQRCodeLink(url: string): Promise<string> {
    try {
      const qrCodeImage = await qr.toDataURL(url);
      return qrCodeImage;
    } catch (error) {
      Logger.error('Failed to generate QR code', error.stack, 'QRCodeService');
      throw new Error('Failed to generate QR code');
    }
  }
}
