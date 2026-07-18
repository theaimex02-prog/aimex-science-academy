import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export interface WebsiteSettings {
  academyName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  maps: string;
  instagram: string;
  facebook: string;
  youtube: string;
  telegram: string;
  heroTitle: string;
  heroSubtitle: string;
  footerText: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  logo: string;
  favicon: string;
}

export async function getSettings() {

  const ref = doc(db, "settings", "website");

  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  return snap.data() as WebsiteSettings;

}