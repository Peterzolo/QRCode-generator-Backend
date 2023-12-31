import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movie/movie.module';
import { QrCodeModule } from './qrcode/qrCode.module';

@Module({
  imports: [MoviesModule, QrCodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
