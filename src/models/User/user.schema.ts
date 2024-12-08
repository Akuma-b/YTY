import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema, SchemaType } from 'mongoose';

@Schema({timestamps: true})
export class User{
    @Prop({required: true,unique:true})
    userName:string;

    @Prop({ type: String,required: true })
    firstName: string;

    @Prop({ type: String,required: true })
    lastName: string;

    @Prop({ type: String,required: true, unique: true })
    email: string;

    @Prop({ required: true })
    phone: number;
  
    @Prop({ type: [String], default: ['user'] }) // Example: 'admin', 'user'
    roles: string[];

    @Prop({ required: true })
    birthday: Date;

    @Prop({ type: String, enum: ['male', 'female', 'other'], required: true }) // Gender field
    gender: string;

    @Prop({ type: String, required: false })
    city: string;

    @Prop({ type: String, required: false })
    country: string;

    @Prop({ type:MongooseSchema.Types.Mixed, required: true })
    area: number|string;

    @Prop({ required: true })
    password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
