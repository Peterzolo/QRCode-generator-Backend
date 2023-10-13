import {
  Controller,
  Get,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { QRCodeSchedulerService } from 'src/utils/qrCodeScheduler.service';

@Controller('qrcode')
export class QRCodeController {
  constructor(
    private readonly qrCodeSchedulerService: QRCodeSchedulerService,
  ) {}

  @Get()
  async generateQRCode(@Res() res: Response) {
    try {
      const qrCodeImage = this.qrCodeSchedulerService.getQRCode();
      console.log('QRCODE', qrCodeImage);

      res.header('Content-Type', 'image/png');
      return res.send({ result: qrCodeImage });
    } catch (error) {
      throw new HttpException(
        'Failed to generate QR code',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
