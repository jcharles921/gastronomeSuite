import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
export const orderSchema = new mongoose.Schema({
    id: Number,
    price: Number,
    quantity: Number,
    description: String,
    category: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    status: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
    },
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
    },
    orderDetails: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderDetail',
    }],
});
export interface Order extends Document {
    id: number;
    
    price: number;
    quantity: number;
    description: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    status: string;
    user: string;
    payment: string;
    orderDetails: string[];
}