export const business = {
  name: "Cukráreň Amando",
  phone: "0908 389 536",
  email: "info@cukraren-amado.sk",
  hours: "Denne 10:00 – 20:00",
} as const;

export const locations = [
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
] as const;

export const phoneHref = `tel:${business.phone.replace(/\s/g, "")}`;
