import mongoose, { Schema, model, models } from "mongoose";

const orderSchema = new Schema({
   userId:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:"User"
   },
   productId:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:"Product"
   },
   variant:{
    type:{
        type:String,
        required:true,
        enum:["SQUARE", "WIDE", "PORTRAIT"]
    },
    price:{
        type:Number,
        required:true
    },
    license:{
        type:String,
        required:true,
        enum:["personal","commercial"]
    }
   },
   razorpayOrderId:{
    type:String,
    required:true
   },
   razorpayPaymentId:{
    type:String,
    required:true
   },
   amount:{
    type:Number,
    required:true
   }
})