// src/models/movie.model.ts
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Movie extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;

  // You can add more properties as needed
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
