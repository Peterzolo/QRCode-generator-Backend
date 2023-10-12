import { Injectable, Logger } from '@nestjs/common';
import { QRCodeService } from './qrcode.service';

@Injectable()
export class QRCodeSchedulerService {
  private interval: NodeJS.Timeout;
  private qrCode: string | null = null; // Initialize with null

  constructor(private readonly qrCodeService: QRCodeService) {
    this.startInterval();
  }

  private async generateQRCode() {
    try {
      const moviesURL =
        'https://qrcode-generator-by-peter-solomon.onrender.com/movies/random';
      this.qrCode = await this.qrCodeService.generateQRCodeLink(moviesURL);
    } catch (error) {
      Logger.error(
        'Failed to generate QR code',
        error.stack,
        'QRCodeSchedulerService',
      );
    }
  }

  private startInterval() {
    const interval = 10000; // 10 seconds

    this.interval = setInterval(async () => {
      await this.generateQRCode(); // Wait for QR code generation
    }, interval);
  }

  async getQRCode(): Promise<string | null> {
    if (this.qrCode === null) {
      // If the QR code is not available yet, wait for it
      await new Promise<void>((resolve) => {
        const checkAvailability = () => {
          if (this.qrCode !== null) {
            resolve();
          } else {
            setTimeout(checkAvailability, 100); // Check again in 100ms
          }
        };
        checkAvailability();
      });
    }
    return this.qrCode;
  }
}
