export interface CardType {
  card_name: string;
  card_image: string;
  discount_target?: string;
  discount_type?: string;
  benefit_point: number;
}

export interface BenefitCardListType {
  top_card: CardType;
  other_cards: CardType[];
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
  card_id: number;
  myCard_id: number;
  card: CardType;
};

export type GetMyCardRes = MyCardType[];
