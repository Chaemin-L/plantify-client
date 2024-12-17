export interface BenefitCardType {
  card_name: string;
  card_image: string;
  discount_target?: string;
  discount_type?: string;
  benefit_point: number;
}

export interface BenefitCardListType {
  top_card: BenefitCardType;
  other_cards: BenefitCardType[];
}

interface BenefitType {
  benefit_category: string;
  benefit_description: string;
}

export interface SearchCardType {
  addable: boolean;
  card_name: string;
  card_image: string;
  company: string;
  type: string;
  card_id: number;
  benefits: BenefitType[];
}

export type MyCardType = {
  myCard_id: number;
  card_id: number;
  card: {
    card_name: string;
    card_image: string;
    company: string;
    type: string;
    card_id: number;
    benefits: string[];
  };
};

export type GetMyCardRes = MyCardType[];
