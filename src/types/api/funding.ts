export type StatusType =
  | "INPROGRESS"
  | "COMPLETED"
  | "DELIVERING"
  | "DELIVERED";

export type CategoryType =
  | "CHILDREN"
  | "ANIMAL"
  | "ENVIRONMENT"
  | "DISABILITY"
  | "GLOBAL"
  | "ELDERLY"
  | "SOCIAL";

export interface FundingType {
  fundingId: string;
  title: string;
  content: string;
  image: string;
  curAmount: number;
  targetAmount: number;
  percent: number;
  status: StatusType;
  category: CategoryType;
  fundingStartDate: Date | null;
  fundingEndDate: Date | null;
  donationStartDate: Date | null;
  donationEndDate: Date | null;
}

export interface FundingDetailType extends FundingType {
  organizationName: string;
}

export interface MyFundingType {
  myFundingId: string;
  fundingId: string;
  price: number;
  status: StatusType;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrganizationType {
  organizationId: string;
  name: string;
  content: string;
}
