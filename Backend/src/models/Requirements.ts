import mongoose from 'mongoose'


interface IScreeningForm extends Document {
  applicant_Id: string;
  fullName: string;
  age: number;
  birthDate: string;
  email: string;
  contactNumber: string;
  homeAddress: string;
  municipality: string;
  barangay: string;
  userType: string;
  numberOfBabies?: string;

  // Infant Information
  childInformation?: {
    name: string;
    birthWeight?: string;
    sex?: string;
    birthDay?: string;
    age?: string;
    ageOfGestation?: string;
    medicalCondition?: string;
  }[];

  typeOfDonor?: string;
  QA?: string;
  QB?: string;
  Q1?: string;
  Q2?: string;

  // Medical History
  MH1?: string;
  MH2?: string;
  MH2_Reason?: string;
  MH3?: string;
  MH4?: string;
  MH5?: string;
  MH6?: string;
  MH7?: string;
  MH8?: string;
  MH8_Reason?: string;
  MH9?: string;
  MH10?: string;
  MH11?: string;
  MH12?: string;
  MH13?: string;
  MH14?: string;
  MH14_Reason?: string;
  MH15?: string;

  // Sexual History
  SH1?: string;
  SH2?: string;

  // Requestor
  RFR?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the schema with explicit types
const ScreeningFormSchema: mongoose.Schema<IScreeningForm> = new mongoose.Schema({
  applicant_Id: { type: String, required: true },
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  birthDate: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  homeAddress: { type: String, required: true },
  municipality: { type: String, required: true },
  barangay: { type: String, required: true },
  userType: { type: String, required: true },
  numberOfBabies: { type: String },

  // Infant Information
  childInformation: [{
    name: { type: String, required: true },
    birthWeight: { type: String },
    sex: { type: String },
    birthDay: { type: String },
    age: { type: String },
    ageOfGestation: { type: String },
    medicalCondition: { type: String },
  }],

  typeOfDonor: { type: String },
  QA: { type: String },
  QB: { type: String },
  Q1: { type: String },
  Q2: { type: String },

  // Medical History
  MH1: { type: String },
  MH2: { type: String },
  MH2_Reason: { type: String },
  MH3: { type: String },
  MH4: { type: String },
  MH5: { type: String },
  MH6: { type: String },
  MH7: { type: String },
  MH8: { type: String },
  MH8_Reason: { type: String },
  MH9: { type: String },
  MH10: { type: String },
  MH11: { type: String },
  MH12: { type: String },
  MH13: { type: String },
  MH14: { type: String },
  MH14_Reason: { type: String },
  MH15: { type: String },

  // Sexual History
  SH1: { type: String },
  SH2: { type: String },

  // Requestor
  RFR: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const formModel = mongoose.model("Forms", ScreeningFormSchema);
export const createForm = (values: Record<string, any>) => new formModel(values).save().then((result) => result.toObject());
export const getForms = () => formModel.find()
export const getFormById = (_id: mongoose.Types.ObjectId) => formModel.findById(_id)
export const getFormsByParameter = (parameter: any) => formModel.findOne(parameter)