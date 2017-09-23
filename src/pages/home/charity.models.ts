export class Charity{
    name:string;
    primaryInfo:string;
    charityInfo:CharityInfo;
    donationSite:string;
    volunteerWork:string[];
    externalLink:string[];
    contacts:CharityContact;
}

export class CharityInfo{
    whoWeAre:string;
    whatWeDo:string;
}

export class CharityContact{
    mobile:string;
    email:string;
    website:string;
}