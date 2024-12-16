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
  fundingId: number;
  title: string;
  content: string;
  image: string;
  curAmount?: number;
  targetAmount: number;
  percent: number;
  status?: StatusType;
  category: CategoryType;
  organizationName: string;
  fundingStartDate?: Date | null;
  fundingEndDate?: Date | null;
  donationStartDate?: Date | null;
  donationEndDate?: Date | null;
}

export interface FundingDetailType extends FundingType {
  organizationName: string;
}

export interface MyFundingType {
  myFundingId: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  funding: FundingType;
}

export interface OrganizationType {
  organizationId: string;
  name: string;
  content: string;
}

export interface PostFundingReq {
  fundingId: number;
  price: number;
  redirectUri: string;
}
