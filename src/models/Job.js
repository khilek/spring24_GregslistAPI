import { Schema } from "mongoose"

export const JobSchema = new Schema({

  company: { type: String, required: true, minLength: 0, maxLength: 100},
  jobTitle: { type: String, required: true, minLength: 0, maxLength: 100},
  hours: {type: Number, required: true, minLength: 1, maxLenth: 168 },
  rate: { type: Number, required: true, minLength: 1, maxLength: 100000000 },
  imgUrl: { type: String, required: false, minLength: 0, maxLength: 500 },
  description: { type: String, required: true, minLength: 0, maxLength: 500 },
  creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' },
  
  }, {timestamps: true})