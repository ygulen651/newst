import { HIGHLIGHT_HELP } from "../format";
import { L, type PageDef } from "../types";

export const thermaplusPage: PageDef = {
  id: "thermaplus",
  title: "Markalar → Thermaplus",
  path: "/markalar/thermaplus",
  sections: [
    {
      title: "Giriş",
      fields: [
        { key: "logo", label: "Logo", type: "image", default: "/images/Adsız tasarım.png" },
        { key: "title", label: "Başlık", type: "text", help: HIGHLIGHT_HELP, default: L("Çevreci, Verimli, *Ekonomik*", "Green, Efficient, *Economical*") },
        {
          key: "intro",
          label: "Metin",
          type: "textarea",
          default: L(
            "Newstag'ın kendi markası Thermaplus; Türkiye'de üretilen ısı pompası teknolojisini yerli parça, yerli mühendislik ve güçlü servis ağıyla birlikte sunuyor. Konutlardan endüstriyel tesislere kadar her ölçekte ısıtma, soğutma ve sıcak su konforu sağlıyor.",
            "Thermaplus is Newstag's own heat pump brand. It combines heat pump technology manufactured in Turkey with local components, local engineering, and a strong service network for heating, cooling, and hot water comfort at every scale."
          ),
        },
        { key: "heroButton", label: "Buton", type: "text", default: L("Isı Pompası Ürünlerini İncele", "View Heat Pump Products") },
        { key: "heroImage", label: "Görsel", type: "image", default: "/images/heat-pump-branded.png" },
        {
          key: "stats",
          label: "Rakamlar",
          type: "list",
          itemLabel: "Rakam",
          fields: [
            { key: "value", label: "Değer", type: "text" },
            { key: "label", label: "Açıklama", type: "text" },
          ],
          default: [
            { value: L("3-5", "3-5"), label: L("COP Verimlilik Katsayısı", "COP Efficiency Coefficient") },
            { value: L("%75", "%75"), label: L("Tasarrufa Varan Potansiyel", "Potential Savings") },
            { value: L("A+++", "A+++"), label: L("ERP Enerji Etiketi", "ERP Energy Label") },
            { value: L("1.066 kW", "1,066 kW"), label: L("Kaskad Sistemlere Uzanan Güç", "Power Range with Cascade Systems") },
          ],
        },
      ],
    },
    {
      title: "Neden Thermaplus?",
      fields: [
        { key: "strengthsTitle", label: "Başlık", type: "text", default: L("Neden Thermaplus?", "Why Thermaplus?") },
        {
          key: "strengths",
          label: "Kartlar",
          type: "list",
          itemLabel: "Kart",
          fields: [
            { key: "icon", label: "İkon", type: "icon" },
            { key: "title", label: "Başlık", type: "text" },
            { key: "desc", label: "Açıklama", type: "textarea" },
          ],
          default: [
            { icon: "Flag", title: L("Türkiye'de Üretim", "Manufactured in Turkey"), desc: L("Newstag'ın kendi markası Thermaplus ile Türkiye'de üretilen ısı pompası teknolojisini sunuyoruz.", "Thermaplus delivers heat pump technology manufactured in Turkey as Newstag's own brand.") },
            { icon: "Wrench", title: L("Yerli Mühendislik ve Servis", "Local Engineering and Service"), desc: L("Yerli parça, yerli mühendislik ve Türkiye genelinde güçlü servis ağı ile kurulumdan bakıma tam destek.", "Local components, local engineering, and a strong nationwide service network from installation to maintenance.") },
            { icon: "Leaf", title: L("Çevreci Teknoloji", "Green Technology"), desc: L("Fosil yakıt bağımlılığını kıran, karbon ayak izini azaltan ve yeşil sertifika imkânı sunan çözümler.", "Solutions that reduce fossil fuel dependence, lower carbon footprint, and support green building goals.") },
            { icon: "ShieldCheck", title: L("Kanıtlanmış Güvenilirlik", "Proven Reliability"), desc: L("Saray Holding'in 65 yıllık kurumsal mirası ve enerji sektöründeki 15 yıllık üretim deneyimi güvencesi.", "Backed by Saray Holding's 65-year corporate heritage and 15 years of production experience in energy.") },
          ],
        },
      ],
    },
    {
      title: "Ürün gamı",
      fields: [
        { key: "rangeTitle", label: "Başlık", type: "text", default: L("Thermaplus Ürün Gamı", "Thermaplus Product Range") },
        {
          key: "rangeText",
          label: "Alt metin",
          type: "text",
          default: L("6 kW konut çözümlerinden 1.066 kW kaskad sistemlere uzanan geniş portföy.", "A wide portfolio from 6 kW residential solutions to 1,066 kW cascade systems."),
        },
        {
          key: "productGroups",
          label: "Ürün grupları",
          type: "list",
          itemLabel: "Grup",
          fields: [
            { key: "icon", label: "İkon", type: "icon" },
            { key: "title", label: "Başlık", type: "text" },
            { key: "items", label: "Maddeler (her satıra bir madde)", type: "textarea" },
          ],
          default: [
            {
              icon: "Home",
              title: L("Konut Serileri", "Residential Series"),
              items: L(
                "Konut Isı Pompası: 6 kW - 16 kW · Inverter · Monoblok\nBüyük Konut / Ticari: 25 kW - 70 kW · DC Twin-Rotary\nBoyler ve kullanım sıcak suyu ısı pompaları",
                "Residential heat pumps: 6 kW - 16 kW, inverter, monoblock\nLarge residential and commercial units: 25 kW - 70 kW, DC twin-rotary\nBoiler and domestic hot water heat pumps"
              ),
            },
            {
              icon: "Waves",
              title: L("Havuz Serileri", "Pool Series"),
              items: L(
                "Havuz Isı Pompası: 15 m³ - 100 m³ · Korozyona dayanıklı\nTicari Havuz Serisi: 500 m³'e kadar · -25 °C çalışma\nBüyük Kapasiteli Seri: 70 kW - 145 kW",
                "Pool heat pumps: 15 m³ - 100 m³, corrosion-resistant\nCommercial pool series: up to 500 m³, operation down to -25 °C\nHigh-capacity series: 70 kW - 145 kW"
              ),
            },
            {
              icon: "Factory",
              title: L("Endüstriyel Seriler", "Industrial Series"),
              items: L(
                "Yüksek Sıcaklık Serisi: 80 °C sıcak su · Proses suyu uygulamaları\nKaskad Sistemler: 328 kW - 1.066 kW · Büyük projeler\nTicari sıcak su ve hijyenik su çözümleri",
                "High-temperature series: 80 °C hot water for process water applications\nCascade systems: 328 kW - 1,066 kW for large projects\nCommercial hot water and hygienic water solutions"
              ),
            },
          ],
        },
        { key: "groupLink", label: "Grup bağlantı yazısı", type: "text", default: L("Serideki Ürünler") },
      ],
    },
    {
      title: "Alt çağrı",
      fields: [
        { key: "ctaTitle", label: "Başlık", type: "text", default: L("İşletmenizin Uçtan Uca Enerji Dönüşümünü Başlatma Zamanı") },
        {
          key: "ctaText",
          label: "Metin",
          type: "textarea",
          default: L("İhtiyacınıza en uygun Thermaplus modelini birlikte belirleyelim; keşiften kuruluma tüm süreci yönetelim."),
        },
        { key: "ctaProductsButton", label: "Ürünler butonu", type: "text", default: L("Ürünleri İncele") },
        { key: "ctaQuoteButton", label: "Teklif butonu", type: "text", default: L("Teklif Al") },
      ],
    },
  ],
};
