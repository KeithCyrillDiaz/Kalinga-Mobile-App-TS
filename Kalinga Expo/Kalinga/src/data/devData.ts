import { DonorPersonalInformationFormKeys, DonorScreeningPage2FormKeys, DonorScreeningPage3FormKeys, DonorScreeningPage4FormKeys, PersonalInformationKeysToCheck, questionTypes, RequestorPersonalInformationFormKeys, Requirements, ScreeningFormTypePage2 } from "./props";

export const message = {
    statusbar: "Discover the power of breastmilk for your baby's health and well-being."
}


export const WelcomePageRequestData = [
    {
      id: '1',
      title: 'Donate',
      description: 'Share the gift of nourishment by contributing your breast milk to help infants in need. Your donation can make a life-changing difference.',
      image: require('@@/assets/custom/splashScreenImages/WelcomePage.png'),
    },
    {
      id: '2',
      title: 'Request',
      description: 'Seek assistance from compassionate donors to supply your precious baby with the vital nourishment they require. Discover a supportive community ready to provide a lifeline for your needs.',
      image: require('@@/assets/custom/splashScreenImages/Request.png'),
    },
    {
      id: '3',
      title: 'Build a Healthy Community',
      description: 'Join our supportive community of mothers, professionals, and donors. Share experiences, seek guidance, and provide support to others on their journey.',
      image: require('@@/assets/custom/splashScreenImages/Build_Community.png'),
    },
    {
      id: '4',
      title: 'Be Informed',
      description: 'Access a wealth of knowledge, expert advice, and educational resources to enhance your breastfeeding journey.',
      image: require('@@/assets/custom/splashScreenImages/Informed.png'),
    },
  ];


  export const dataPrivacyActText = `
At Kalinga Breast Milk Application, we are very committed to protecting the privacy and security of your personal information. This Data Privacy Policy outlines how we collect, use, disclose, and protect the personal information of our breast milk donors.

1. Information We Collect:
We collect various personal details from breast milk donors, including their name, age, birthdate, email, address, and phone number. Additionally, we gather information about their infants, such as their name, age, sex, birthdate, birthweight, and age of gestation. Health-related data relevant to milk donation, such as medical and sexual history, as well as any specific medical requirements, such as Hepatitis B Tests, HIV 1 and 2, Syphilis Test Result, Pregnancy Booklet, and government ID, are also collected. Donor preferences and instructions are further part of the information gathered.

2. How We Use Your Information:
The personal information obtained from breast milk donors serves various purposes. Primarily, it facilitates communication with the milk bank regarding the milk donation, allowing for seamless coordination in the collection and distribution of donated breast milk. Furthermore, this data helps in maintaining accurate records of donors and donations, ensuring compliance with legal and regulatory requirements throughout the donation process.

3. Information Sharing and Disclosure:
Personal information shared with certain entities is necessary to fulfill our mission. This may include healthcare professionals involved in the milk donation process, third-party service providers assisting with milk collection, processing, and distribution, as well as regulatory authorities as required by law.

4. Data Security:
To safeguard the confidentiality and integrity of the personal information provided by breast milk donors, stringent security measures are implemented. These measures include the encryption of sensitive data, implementation of access controls and authentication mechanisms, and conducting regular security assessments and audits to identify and mitigate potential vulnerabilities.

5. Retention of Information:
We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Once the data is no longer needed, we securely dispose of or anonymize it to prevent unauthorized access or disclosure.

6. Your Rights:
Breast milk donors maintain certain rights regarding their personal information. This includes the right to request access to their data held by us, the ability to request corrections to inaccuracies in their personal information, and the option to withdraw consent for the collection and use of their personal information at any time.

7. Contact Us:
For any inquiries, concerns, or requests concerning our Data Privacy Policy or the handling of personal information, individuals are encouraged to contact us using the provided contact information.

8. Changes to this Policy:
We reserve the right to update or modify this Data Privacy Policy as needed. Any revisions will be promptly communicated and reflected on our website along with the updated effective date.`

export const sexData = [
  {label: "Male", value: "Male"},
  {label: "Female", value: "Female"},
]

export const babyOptions = [
  { label: 'Single Baby', value: '1' },
  { label: 'Twins', value: '2' },
  { label: 'Triplets', value: '3' },
  { label: 'Quadruplets', value: '4' },
  { label: 'Quintuplets', value: '5' },
];

export const buttonRequestorData: Array<Requirements["Requestor"]> = [
  "Clinical History",
  "Presenting Complaint",
  "Clinical Findings",
  "Diagnosis",
  "Treatments and Interventions",
  "Prescription",
  "Government ID",
];

export const DonorScreeningFormPage1keysTocheck: Array<PersonalInformationKeysToCheck["Donor"]> = [
  "Applicant_ID",
  "userType",
  "fullName",
  "Municipality",
  "barangay",
  "Age",
  "birthDate",
  "email",
  "contactNumber",
  "homeAddress",
]

export const RequestorScreeningFormPage1keysTocheck: Array<PersonalInformationKeysToCheck["Requestor"]> = [
  "Applicant_ID",
  "userType",
  "fullName",
  "Municipality",
  "barangay",
  "Age",
  "birthDate",
  "email",
  "contactNumber",
  "homeAddress",
  "numberOfBabies"
]

export const DonorScreeningFormPage2keysTocheck: Array<DonorScreeningPage2FormKeys> = [
  "QA",
  "QB",
  "Q1",
  "Q2"
]

export const DonorScreeningFormPage3keysTocheck: Array<DonorScreeningPage3FormKeys> = [
  "MH1",
  "MH2",
  "MH2_Reason",
  "MH3",
  "MH4",
  "MH5",
  "MH6",
  "MH7",
  "MH8",
  "MH8_Reason",
  "MH9",
  "MH10",
  "MH11",
  "MH12",
]

export const DonorScreeningFormPage4keysTocheck: Array<DonorScreeningPage4FormKeys> = [
   "MH13",
   "MH14",
   "MH14_Reason",
   "MH15",
   "SH1",
   "SH2",
]




export const buttonDonorData: Array<Requirements["Donor"]> = [
  "Hepa B",
  "HIV",
  "Syphillis",
  "Pregnancy Booklet",
  "Government ID",
];


export const BigTextInputQuestions: Array<{
  questionId: keyof ScreeningFormTypePage2;
  question: string;
}> = [ 
      { 
        questionId: "QA",
        question: "Bakit mo gusto mag bigay ng iyong gatas/breastmilk?", 
      }, 
      { 
        questionId: "QB",
        question: "Paano mo nalaman ang tungkol sa BreastMilk Bank ng Quezon City General Hospital?",
      }, 
]



export const YesOrNoQuestions: Array<questionTypes> = [
  { 
      questionId: "Q1",
      question:  "Gusto mo bang magbigay ng gatas nang regular sa loob ng anim na buwan?", 
      followUpQuestion: false,
  }, 
  {
      questionId: "Q2",
      question:  "Papayagan ka ba ng iyong asawa na magbigay ng iyong gatas sa Human Milk Bank?",
      followUpQuestion: false,
  }, 
]

export const MedicalHistoryQuestionsForDonor: Array<questionTypes> = [
  { 
      questionId: "MH1",
      question:  "Nakapagbigay ka na ba ng iyong gatas dati?", 
      followUpQuestion: false,
  }, 
  {
      questionId: "MH2",
      question:  "Ikaw ba ay natanggihan na magbigay ng iyong gatas/breastmilk? Kung oo, sa anong dahilan?",
      followUpQuestion: true,
  }, 
  { 
      questionId: "MH3",
      question:  "Normal ba ang panganganak mo sa huli mong anak?", 
      followUpQuestion: false,
  }, 
  {
      questionId: "MH4",
      question:  "Nagkaroon ka ba ng impeksiyon o sakit?",
      followUpQuestion: false,
  },
  { 
      questionId: "MH5",
      question:  "Nagkaroon ka ba ng TB o sakit sa atay?", 
      followUpQuestion: false,
  }, 
  {
      questionId: "MH6",
      question:  "Ikaw ba ay nasalinan ng dugo nitong nakaaran na 12 na buwan?",
      followUpQuestion: false,
  },
  { 
      questionId: "MH7",
      question:  "Ikaw ba ay naging recipient ng organ o tissue mula sa ibang tao nitong nakaraang 12 na buwan?", 
      followUpQuestion: false,
  }, 
  {
      questionId: "MH8",
      question:  "Nakainom ka ba ng alak nitong nakaraang 24 oras? Kung oo, gaano karami?",
      followUpQuestion: true,
  },
  { 
      questionId: "MH9",
      question:  "Regular ka bang gumagamit ng mga gamot gaya ng replacement/birth control hormones o pills?", 
      followUpQuestion: false,
  }, 
  {
      questionId: "MH10",
      question:  "Gumagamit ka ba ng mga “megadose vitamins” o mga “herbal drugs”? ",
      followUpQuestion: false,
  },
  { 
      questionId: "MH11",
      question:  "Ikaw ba ay hindi kumakain ng karne o isang “vegetarian”?", 
      followUpQuestion: false,
  }, 
  {
      questionId: "MH12",
      question:  "Kung oo, umiinom ka ba ng multivitamins?",
      followUpQuestion: false,
  },
  { 
      questionId: "MH13",
      question:  "Gumagamit ka ba ng bawal na gamot?", 
      followUpQuestion: false,
  }, 
  {
      questionId: "MH14",
      question:  "Ikaw ba ay naninigarilyo? If yes, how many sticks or packs per day?",
      followUpQuestion: true,
  },
  { 
      questionId: "MH15",
      question:  "Ikaw ba ay naoperahan na sa suso at nalagyan ng “silicone” or “artificial breast implants”?", 
      followUpQuestion: false,
  }, 

  
]


export const SexualHistoryQuestion: Array<questionTypes> = [
  { 
      questionId: "SH1",
      question:  "Nagkaroon ka na ba ng mga sakit na nakukuha sa pakikipagtalik/sex?", 
      followUpQuestion: false,
  }, 
  {
      questionId: "SH2",
      question:  "Nagkaroon ka na ba ng karanasang makipagtalik sa higit pa sa isang lalaki?",
      followUpQuestion: false,
  }, 
]