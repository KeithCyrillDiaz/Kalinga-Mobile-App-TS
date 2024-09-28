import mongoose from 'mongoose'


export interface Donor extends Document{
    Donor_ID?: string;
    DPLink?: string;
    Image_ID?: string;
    Blocked?: string;
    userName?: string;
    MilkAmountDonated?: number;
    fullName?: string;
    birthDate?: string;
    email: string;
    authentication: {
        password: string;
        salt: string;
        // sessionToken?: string; // Uncomment if you use sessionToken
    };
    age?: string;
    address?: string;
    birthday?: string;
    mobileNumber?: string;
    homeAddress?: string;
    municipality?: string;
    barangay?: string;
    NumberPost?: string;
    Badge_ID?: string[];
    Community_ID?: string[];
    Post_ID?: string[];
    BookMark_ID?: string[];
    userType: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const DonorSchema:mongoose.Schema<Donor> = new mongoose.Schema({
    Donor_ID: {type:  String},
    DPLink:  {type: String},
    Image_ID: {type: String},
    Blocked: {type: String, default: "No"},
    userName: {type: String},
    MilkAmountDonated: {type: Number},
    fullName: {type: String},
    birthDate: {type: String},
    email: {type: String, required: true},
    authentication: {
        password: {type: String, required:true, select: false},
        salt: {type: String, required:true, select: false},
        // sessionToken: {type: String, required:true, select: false},
    },
    age: {type: String},
    address: {type: String},
    birthday: {type: String},
    mobileNumber: {type: String},
    homeAddress: {type: String},
    municipality: {type: String},
    barangay: {type: String},
    NumberPost: {type: String},
    Badge_ID: [{ type: String }],
    Community_ID: [{ type: String }],
    Post_ID: [{ type: String }],
    BookMark_ID: [{ type: String }],
    userType: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})


export interface Requestor extends Document{
    Requestor_ID?: string;
    DPLink?: string;
    Image_ID?: string;
    userName?: string;
    Blocked?: string;
    MilkAmountReceived?: number;
    fullName?: string;
    birthDate?: string;
    email: string;
    authentication: {
        password: string;
        salt: string;
        // sessionToken?: string; // Uncomment if you use sessionToken
    };
    age?: string;
    address?: string;
    birthday?: string;
    mobileNumber?: string;
    homeAddress?: string;
    municipality?: string;
    barangay?: string;
    RFR?: string;
    NumberPost?: string;
    Badge_ID?: string[];
    Community_ID?: string[];
    Post_ID?: string[];
    BookMark_ID?: string[];
    userType: string;
    createdAt?: Date;
    updatedAt?: Date;
}


const RequestorSchema: mongoose.Schema<Requestor> = new mongoose.Schema({

    Requestor_ID: {type: String},
    DPLink:  {type: String},
    Image_ID: {type: String},
    userName: {type: String},
    Blocked: {type: String, default: "No"},
    MilkAmountReceived: {type: Number},
    fullName: {type: String},
    birthDate: {type: String},
    email: {type: String, required: true},
    authentication: {
        password: {type: String, required:true, select: false},
        salt: {type: String, required:true, select: false},
        // sessionToken: {type: String, required:true, select: false},
    },
    age: {type: String},
    address: {type: String},
    birthday: {type: String},
    mobileNumber: {type: String},
    homeAddress: {type: String},
    municipality: {type: String},
    barangay: {type: String},
    RFR: {type: String},
    NumberPost: {type: String},
    Badge_ID: [{ type: String }],
    Community_ID: [{ type: String }],
    Post_ID: [{ type: String }],
    BookMark_ID: [{ type: String }],
    userType: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});


export const requestorModel = mongoose.model("requestor", RequestorSchema);
export const donorModel = mongoose.model("donor", DonorSchema);

export const getDonors = () => donorModel.find();
export const getRequestor = () => requestorModel.find();
export const getDonorByParameter = (parameter: any) => donorModel.findOne(parameter);
export const getRequestorByParameter = (parameter: any) => requestorModel.findOne(parameter);


export const registerDonor = (values: Donor) => new donorModel(values).save().then((result) => result.toObject());
export const registerRequestor = (values: Requestor) => new requestorModel(values).save().then((result) => result.toObject());

export const updateDonor = (id: string, values: Record<string, any>) => donorModel.findByIdAndUpdate(id, values);
export const updateRequestor = (id: string, values: Record<string, any>) => requestorModel.findByIdAndUpdate(id, values);