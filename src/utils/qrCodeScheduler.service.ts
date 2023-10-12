// qr-code-scheduler.service.ts
import { Injectable } from '@nestjs/common';
import { QRCodeService } from './qrcode.service';

@Injectable()
export class QRCodeSchedulerService {
  private interval: NodeJS.Timeout;
  private qrCode: string;

  constructor(private readonly qrCodeService: QRCodeService) {
    this.generateQRCode();
    this.startInterval();
  }

  private async generateQRCode() {
    // Generate a new QR code
    const moviesURL = 'https://your-public-domain.com/movies/dynamic';
    this.qrCode = await this.qrCodeService.generateQRCodeLink(moviesURL);
  }

  private startInterval() {
    const interval = 10000; // 10 seconds

    this.interval = setInterval(() => {
      this.generateQRCode();
    }, interval);
  }

  getQRCode(): string {
    return this.qrCode;
  }
}
