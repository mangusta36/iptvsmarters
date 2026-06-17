export interface PricingPlan {
  id: string;
  name: string;
  devices: number;
  price: number;
  duration: string;
  popular: boolean;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic Access",
    devices: 1,
    price: 37,
    duration: "3 Months",
    popular: false,
    features: [
      "26,000+ Live Channels",
      "100,000+ VODs",
      "4K & FHD Quality",
      "Anti-Freeze Servers",
      "All Devices Supported",
      "24/7 WhatsApp Support",
    ],
  },
  {
    id: "standard",
    name: "Standard Pro",
    devices: 2,
    price: 49,
    duration: "6 Months",
    popular: false,
    features: [
      "26,000+ Live Channels",
      "100,000+ VODs",
      "4K & FHD Quality",
      "Anti-Freeze Servers",
      "All Devices Supported",
      "24/7 WhatsApp Support",
    ],
  },
  {
    id: "ultimate",
    name: "Ultimate VIP",
    devices: 3,
    price: 67,
    duration: "12 Months",
    popular: true,
    features: [
      "26,000+ Live Channels",
      "100,000+ VODs",
      "4K & FHD Quality",
      "Anti-Freeze Servers",
      "All Devices Supported",
      "24/7 WhatsApp Support",
      "Free Setup Assistance",
    ],
  },
];
