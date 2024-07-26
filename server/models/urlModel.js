import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        trim: true,
      },
      shortId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
})

const urlModel = mongoose.models.url || mongoose.model("url",urlSchema)

export default urlModel;