export type MenuCategoryKey = "cakes" | "iceCream" | "coffee" | "drinks" | "snacks";

export type MenuItem = {
  name: string;
  price: string;
  image?: string;
};

export type MenuCategory = {
  key: MenuCategoryKey;
  title: string;
  items: MenuItem[];
};

export type BusinessInfo = {
  name: string;
  phone: string;
  email: string;
  hours: string;
};

export type Location = {
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapQuery: string;
};

export const business: BusinessInfo = {
  name: "Cukráreň Amando",
  phone: "0908 389 536",
  email: "info@cukraren-amado.sk",
  hours: "Denne 10:00 – 20:00",
};

export const locations: Location[] = [
  {
    name: "AMADO Bratislava",
    address: "Topoľčianska 22, 851 05 Bratislava-Petržalka",
    phone: business.phone,
    hours: business.hours,
    mapQuery: "Cukráreň Amando, Topoľčianska 22, Bratislava",
  },
  {
    name: "AMADO OC Molo",
    address: "Myšenička 2/C, Pezinok",
    phone: business.phone,
    hours: business.hours,
    mapQuery: "AMADO Cukráreň OC Molo, Myšenička 2/C, Pezinok",
  },
  {
    name: "AMADO Centrum",
    address: "Moyzesova 10, Pezinok",
    phone: business.phone,
    hours: business.hours,
    mapQuery: "AMADO Cukráreň, Moyzesova 10, Pezinok",
  },
  {
    name: "AMADO TESCO",
    address: "Myšenička 2/B, Pezinok",
    phone: business.phone,
    hours: business.hours,
    mapQuery: "AMADO Cukráreň TESCO, Myšenička 2/B, Pezinok",
  },
];

export const menuCategories: MenuCategory[] = [
  {
    key: "cakes",
    title: "Zákusky",
    items: [
      { name: "Tiramisu", price: "3,90 €" },
      { name: "Sacher torta", price: "4,20 €" },
      { name: "Ovocný rez", price: "3,50 €" },
      { name: "Panna cotta", price: "3,80 €" },
      { name: "Laskonka", price: "2,90 €" },
      { name: "Profiterolky", price: "4,50 €" },
    ],
  },
  {
    key: "iceCream",
    title: "Zmrzlina",
    items: [
      { name: "Vanilková", price: "2,20 €" },
      { name: "Čokoládová", price: "2,20 €" },
      { name: "Jahodová", price: "2,20 €" },
      { name: "Pistáciová", price: "2,50 €" },
      { name: "Mix 2 príchute", price: "3,20 €" },
      { name: "Zmrzlinový pohár", price: "4,90 €" },
    ],
  },
  {
    key: "coffee",
    title: "Káva",
    items: [
      { name: "Espresso", price: "2,00 €" },
      { name: "Double espresso", price: "2,40 €" },
      { name: "Cappuccino", price: "2,60 €" },
      { name: "Latte macchiato", price: "2,90 €" },
      { name: "Flat white", price: "2,80 €" },
      { name: "Iced coffee", price: "3,20 €" },
    ],
  },
  {
    key: "drinks",
    title: "Čaj a nápoje",
    items: [
      { name: "Čierny čaj", price: "2,00 €" },
      { name: "Zelený čaj", price: "2,00 €" },
      { name: "Bylinkový čaj", price: "2,20 €" },
      { name: "Čaj ovocný", price: "2,20 €" },
      { name: "Limonáda", price: "2,80 €" },
      { name: "Voda", price: "1,50 €" },
    ],
  },
  {
    key: "snacks",
    title: "Rýchle občerstvenie",
    items: [
      { name: "Croissant", price: "2,10 €" },
      { name: "Slaný koláč", price: "2,80 €" },
      { name: "Bageta", price: "4,50 €" },
      { name: "Muffin", price: "2,40 €" },
      { name: "Chlebík s nátierkou", price: "3,20 €" },
    ],
  },
];
