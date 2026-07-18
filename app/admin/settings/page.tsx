"use client";

import { useEffect, useState } from "react";

import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

import { db } from "@/firebase/firebase";

export default function SettingsPage() {

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [settings, setSettings] = useState({

    academyName: "",

    tagline: "",

    phone: "",

    whatsapp: "",

    email: "",

    address: "",

    maps: "",

    instagram: "",

    facebook: "",

    youtube: "",

    telegram: "",

    heroTitle: "",

    heroSubtitle: "",

    footerText: "",

    seoTitle: "",

    seoDescription: "",

    keywords: "",

    logo: "",

    favicon: "",

  });
  useEffect(() => {

  const loadSettings = async () => {

    try {

      const ref = doc(db, "settings", "website");

      const snap = await getDoc(ref);

      if (snap.exists()) {

        setSettings((prev) => ({
          ...prev,
          ...snap.data(),
        }));

      }

    } catch (error) {

      console.error(error);

      alert("Failed to load settings.");

    } finally {

      setLoading(false);

    }

  };

  loadSettings();

}, []);

const saveSettings = async () => {

  try {

    setSaving(true);

    await setDoc(

      doc(db, "settings", "website"),

      settings,

      { merge: true }

    );

    alert("Settings saved successfully!");

  } catch (error) {

    console.error(error);

    alert("Failed to save settings.");

  } finally {

    setSaving(false);

  }

};

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {

  setSettings({
    ...settings,
    [e.target.name]: e.target.value,
  });

};
return (

  <div className="mx-auto max-w-7xl space-y-8">

    <div>

      <h1 className="text-4xl font-black text-white">

        Website Settings

      </h1>

      <p className="mt-2 text-slate-400">

        Manage all website information from one place.

      </p>

    </div>

    {loading ? (

      <div className="rounded-3xl border border-white/10 bg-[#111827] p-10 text-center">

        <p className="text-slate-400">

          Loading Settings...

        </p>

      </div>

    ) : (

      <div className="grid gap-6 lg:grid-cols-2">

        <Input
          label="Academy Name"
          name="academyName"
          value={settings.academyName}
          onChange={handleChange}
        />

        <Input
          label="Tagline"
          name="tagline"
          value={settings.tagline}
          onChange={handleChange}
        />

        <Input
          label="Phone Number"
          name="phone"
          value={settings.phone}
          onChange={handleChange}
        />

        <Input
          label="WhatsApp Number"
          name="whatsapp"
          value={settings.whatsapp}
          onChange={handleChange}
        />

        <Input
          label="Email"
          name="email"
          value={settings.email}
          onChange={handleChange}
        />

        <Input
          label="Address"
          name="address"
          value={settings.address}
          onChange={handleChange}
        />

        <Input
          label="Google Maps Link"
          name="maps"
          value={settings.maps}
          onChange={handleChange}
        />

        <Input
          label="Instagram"
          name="instagram"
          value={settings.instagram}
          onChange={handleChange}
        />

        <Input
          label="Facebook"
          name="facebook"
          value={settings.facebook}
          onChange={handleChange}
        />

        <Input
          label="YouTube"
          name="youtube"
          value={settings.youtube}
          onChange={handleChange}
        />

        <Input
          label="Telegram"
          name="telegram"
          value={settings.telegram}
          onChange={handleChange}
        />

        <Input
          label="Hero Title"
          name="heroTitle"
          value={settings.heroTitle}
          onChange={handleChange}
        />

        <Input
          label="Hero Subtitle"
          name="heroSubtitle"
          value={settings.heroSubtitle}
          onChange={handleChange}
        />

        <Input
          label="Footer Text"
          name="footerText"
          value={settings.footerText}
          onChange={handleChange}
        />

        <Input
          label="SEO Title"
          name="seoTitle"
          value={settings.seoTitle}
          onChange={handleChange}
        />

        <div className="lg:col-span-2">

          <label className="mb-2 block font-semibold">

            SEO Description

          </label>

          <textarea
            name="seoDescription"
            value={settings.seoDescription}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-xl border border-white/10 bg-[#111827] p-4 outline-none focus:border-cyan-500"
          />

        </div>

        <div className="lg:col-span-2">

          <label className="mb-2 block font-semibold">

            Keywords

          </label>

          <textarea
            name="keywords"
            value={settings.keywords}
            onChange={handleChange}
            rows={3}
            className="w-full rounded-xl border border-white/10 bg-[#111827] p-4 outline-none focus:border-cyan-500"
          />

        </div>
                <Input
          label="Logo URL"
          name="logo"
          value={settings.logo}
          onChange={handleChange}
        />

        <Input
          label="Favicon URL"
          name="favicon"
          value={settings.favicon}
          onChange={handleChange}
        />

        <div className="lg:col-span-2">

          <button
            onClick={saveSettings}
            disabled={saving}
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 text-lg font-bold transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >

            {saving ? "Saving..." : "💾 Save Settings"}

          </button>

        </div>

      </div>

    )}

  </div>

);

}

interface InputProps {

  label: string;

  name: string;

  value: string;

  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;

}

function Input({

  label,

  name,

  value,

  onChange,

}: InputProps) {

  return (

    <div>

      <label className="mb-2 block font-semibold">

        {label}

      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-white/10 bg-[#111827] p-4 outline-none transition focus:border-cyan-500"
      />

    </div>

  );

}