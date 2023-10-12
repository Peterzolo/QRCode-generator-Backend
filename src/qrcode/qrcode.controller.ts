// src/controllers/qrcode.controller.ts
// import { Controller, Get, Res } from '@nestjs/common';
// import { Response } from 'express';
// import { QRCodeService } from '../utils/qrcode.service';

// @Controller('qrcode')
// export class QRCodeController {
//   constructor(private readonly qrcodeService: QRCodeService) {}

//   @Get()
//   async generateQRCode(@Res() res: Response) {
//     try {
//       const moviesURL = 'http://localhost:3000/movies/random';
//       const qrCodeImage =
//         await this.qrcodeService.generateQRCodeLink(moviesURL);

//       res.header('Content-Type', 'image/png');
//       return res.send(qrCodeImage);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to generate QR code' });
//     }
//   }
// }

import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { QRCodeSchedulerService } from 'src/utils/qrCodeScheduler.service';
// import { QRCodeSchedulerService } from 'src/utils/qrCodeScheduler.service';

@Controller('qrcode')
export class QRCodeController {
  constructor(
    private readonly qrCodeSchedulerService: QRCodeSchedulerService,
  ) {}

  @Get()
  async generateQRCode(@Res() res: Response) {
    try {
      const qrCodeImage = this.qrCodeSchedulerService.getQRCode();

      res.header('Content-Type', 'image/png');
      return res.send(qrCodeImage);
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate QR code' });
    }
  }
}
