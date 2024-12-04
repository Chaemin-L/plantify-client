export interface CardType {
  card_name: string;
  card_image: string;
  discount_target: string;
  discount_type: string;
  benefit_point: number;
}

export interface BenefitCardListType {
  top_card: CardType;
  other_cards: CardType[];
}
