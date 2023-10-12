// movies/movies.module.ts
import { Module } from '@nestjs/common';
import { QRCodeController } from './qrcode.controller';
import { QRCodeSchedulerService } from 'src/utils/qrCodeScheduler.service';
import { QRCodeService } from 'src/utils/qrcode.service';

@Module({
  controllers: [QRCodeController],
  providers: [QRCodeService, QRCodeSchedulerService],
})
export class QrCodeModule {}
