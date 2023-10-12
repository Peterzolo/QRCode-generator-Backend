import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Logger } from '@nestjs/common';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI)],
  providers: [Logger],
})
export class DatabaseModule implements OnModuleInit {
  constructor(private readonly logger: Logger) {}

  async onModuleInit() {
    try {
      await MongooseModule.forRoot(process.env.MONGO_URI);
      this.logger.log('Connected to MongoDB');
    } catch (error) {
      this.logger.error('MongoDB connection error:', error);
    }
  }
}
