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
  name: string;
  image_url: string;
  company_name: string;
  card_type: string;
  card_id: number;
  benefits: BenefitType[];
}
