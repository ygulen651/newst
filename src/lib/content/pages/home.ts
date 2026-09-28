import { L, type PageDef } from "../types";

export const homePage: PageDef = {
  id: "home",
  title: "Ana Sayfa",
  path: "/",
  sections: [
    {
      title: "Giriş (video alanı)",
      fields: [
        { key: "heroVideo", label: "Arka plan videosu", type: "video", default: "/images/1500.mp4" },
        { key: "heroTitleLine1", label: "Başlık 1. satır", type: "text", default: L("Enerjiyi Bugünden", "Carry Energy From Today") },
        { key: "heroTitleLine2", label: "Başlık 2. satır", type: "text", default: L("Geleceğe Dönüştürün", "Into the Future") },
        {
          key: "heroSubtitle",
          label: "Alt metin",
          type: "textarea",
          default: L(
            "Güneş santrallerinden veri merkezlerine, sanayiden konutlara: Inspur BESS ve Thermaplus Isı Pompası ile temiz enerji dönüşümü.",
            "From solar plants to data centers, from industry to homes: clean energy transformation with Inspur BESS and Thermaplus Heat Pumps."
          ),
        },
        { key: "heroBessButton", label: "BESS butonu", type: "text", default: L("Inspur BESS", "Inspur BESS") },
        { key: "heroHeatPumpButton", label: "Isı pompası butonu", type: "text", default: L("Thermaplus Isı Pompası", "Thermaplus Heat Pump") },
      ],
    },
    {
      title: "Kayan bannerlar",
      fields: [
        { key: "bannerBessEyebrow", label: "BESS banner üst etiketi", type: "text", default: L("Inspur BESS", "Inspur BESS") },
        {
          key: "bannerBessTitle",
          label: "BESS banner başlığı",
          type: "text",
          default: L("Inspur BESS: Enerji Güvenliğinin Ana Oyuncusu", "Inspur BESS: The Key Player in Energy Security"),
        },
        { key: "bannerBessImage", label: "BESS banner görseli", type: "image", default: "/images/12121.png" },
        { key: "bannerHeatPumpEyebrow", label: "Isı pompası banner üst etiketi", type: "text", default: L("Thermaplus", "Thermaplus") },
        {
          key: "bannerHeatPumpTitle",
          label: "Isı pompası banner başlığı",
          type: "text",
          default: L("Thermaplus Isı Pompası: Çevreci, Verimli, Ekonomik", "Thermaplus Heat Pump: Green, Efficient, Economical"),
        },
        { key: "bannerHeatPumpImage", label: "Isı pompası banner görseli", type: "image", default: "/images/heat-pump-branded.png" },
      ],
    },
    {
      title: "Güven bölümü",
      fields: [
        { key: "trustLogo", label: "Logo", type: "image", default: "/images/image5.png" },
        { key: "trustTitle", label: "Başlık", type: "text", default: L("Enerji Dönüşümünüzün Çözüm Ortağı", "Your Partner in Energy Transformation") },
        {
          key: "trustText",
          label: "Metin",
          type: "textarea",
          default: L(
            "Saray Holding'in 65 yıllık kurumsal mirasını ve gücünü, enerji sektöründeki 15 yıllık üretim deneyimini ve global ortaklıklarını bir araya getiren Newstag, enerji dönüşümünüzün çözüm ortağı olmak için sizleri bekliyor.",
            "Newstag combines Saray Holding's 65-year corporate heritage, 15 years of production experience in the energy sector, and global technology partnerships to become your solution partner in energy transformation."
          ),
        },
        {
          key: "trustStats",
          label: "Rakamlar",
          type: "list",
          itemLabel: "Rakam",
          fields: [
            { key: "icon", label: "İkon", type: "icon" },
            { key: "value", label: "Sayı", type: "link" },
            { key: "unit", label: "Birim", type: "text" },
            { key: "label", label: "Açıklama", type: "text" },
          ],
          default: [
            { icon: "Award", value: "65", unit: L("YIL", "YEARS"), label: L("Saray Holding Kurumsal Mirası", "Saray Holding Corporate Heritage") },
            { icon: "Factory", value: "15", unit: L("YIL", "YEARS"), label: L("Enerji Sektöründe Üretim Deneyimi", "Production Experience in Energy") },
            { icon: "BatteryCharging", value: "1", unit: L("GWh", "GWh"), label: L("Yaklaşan Inspur BESS Kurulum Deneyimi", "Inspur BESS Installation Experience") },
            { icon: "Zap", value: "400", unit: L("MWh", "MWh"), label: L("Tek Projede Kurulum", "Single Project Installation") },
            { icon: "Globe2", value: "120", unit: L("+", "+"), label: L("Ülkede Aktif Global Teknoloji Ortağı", "Countries with Active Global Partner Operations") },
          ],
        },
        { key: "trustButton", label: "Buton", type: "text", default: L("Kim Olduğumuzu Keşfedin", "Discover Who We Are") },
      ],
    },
    {
      title: "Çözümler bölümü",
      fields: [{ key: "scenariosEyebrow", label: "Üst etiket", type: "text", default: L("Newstag Enerji", "Newstag Enerji") }],
    },
    {
      title: "Markalar bölümü",
      fields: [
        { key: "brandsTitleLine1", label: "Başlık 1. satır", type: "text", default: L("Sektöre Yön Veren", "Brands Leading") },
        { key: "brandsTitleLine2", label: "Başlık 2. satır", type: "text", default: L("Markalarımız ile Hizmetinizdeyiz", "the Energy Sector") },
        {
          key: "brandsSubtitle",
          label: "Alt metin",
          type: "textarea",
          default: L(
            "Global teknoloji devi Inspur'un Türkiye distribütörlüğü ve Saray Holding güvencesiyle geliştirdiğimiz tescilli markamız Thermaplus.",
            "We offer Inspur's global energy storage technology and our registered Thermaplus heat pump brand backed by Saray Holding."
          ),
        },
        {
          key: "brands",
          label: "Marka kartları",
          type: "list",
          itemLabel: "Marka",
          fields: [
            { key: "name", label: "Marka adı", type: "text" },
            { key: "role", label: "Rol etiketi", type: "text" },
            { key: "description", label: "Açıklama", type: "textarea" },
            { key: "tags", label: "Etiketler (virgülle ayırın)", type: "text" },
            { key: "logo", label: "Logo", type: "image" },
            { key: "image", label: "Ürün görseli", type: "image" },
            { key: "brandHref", label: "Marka sayfası", type: "link" },
            { key: "productsHref", label: "Ürünler bağlantısı", type: "link" },
          ],
          default: [
            {
              name: L("INSPUR", "INSPUR"),
              role: L("Enerji Depolama (BESS)", "Energy Storage (BESS)"),
              description: L(
                "Çin’in IT devi ve dünyanın en büyük üç sunucu üreticisinden biri olan Inspur; IT ve bulut altyapısındaki mühendislik gücünü enerji depolama sistemlerine taşıyor. 1 GWh'a yaklaşan kurulum deneyimiyle enerji güvenliğinin de ana bir oyuncusu konumunda.",
                "Inspur is one of the world's leading server manufacturers and a major IT technology group. The brand brings its engineering strength in IT, cloud, and AI infrastructure into battery energy storage systems, with close to 1 GWh of installation experience."
              ),
              tags: L("Global Teknoloji Devi, 1 GWh Kurulum Deneyimi, 120+ Ülke", "Global Technology Brand, 1 GWh Installation Experience, 120+ Countries"),
              logo: "/images/image1.png",
              image: "/images/products/bess-konteyner.png",
              brandHref: "/markalar/inspur",
              productsHref: "/bess#urunler",
            },
            {
              name: L("Thermaplus", "Thermaplus"),
              role: L("Isı Pompası", "Heat Pump"),
              description: L(
                "Newstag'ın kendi markası Thermaplus; Türkiye'de üretilen ısı pompası teknolojisini yerli parça, yerli mühendislik ve güçlü servis ağıyla birleştirerek konutlardan endüstriyel tesislere kadar her ölçekte verimli ısıtma, soğutma ve sıcak su konforu sunuyor.",
                "Thermaplus is Newstag's registered heat pump brand. It combines heat pump technology manufactured in Turkey with local components, local engineering, and a strong service network for residential, pool, and industrial projects."
              ),
              tags: L("Türkiye'de Üretim, A+++ Verimlilik, Yerli Mühendislik", "Manufactured in Turkey, A+++ Efficiency, Local Engineering"),
              logo: "/images/Adsız tasarım.png",
              image: "/images/heat-pump-branded.png",
              brandHref: "/markalar/thermaplus",
              productsHref: "/isi-pompasi#urunler",
            },
          ],
        },
        { key: "brandsMeetButton", label: "Marka butonu", type: "text", default: L("Markayı Tanıyın", "Meet the Brand") },
        { key: "brandsProductsButton", label: "Ürünler butonu", type: "text", default: L("Ürünleri İncele", "View Products") },
      ],
    },
    {
      title: "Neden Newstag bölümü",
      fields: [
        { key: "whyTitle", label: "Başlık", type: "text", default: L("Neden Newstag Enerji?", "Why Newstag Energy?") },
        {
          key: "whyText1",
          label: "1. paragraf",
          type: "textarea",
          default: L(
            "Küresel iş ortaklarımızın güvenini arkasına alan Newstag Enerji; teknoloji, üretim ve servis süreçlerinde en yüksek standartları sunar. BESS ve ısı pompası teknolojilerini yenilenebilir enerji kaynaklarıyla entegre ederek enerji maliyetlerinizi düşürür, arz güvenliğinizi artırır ve karbon ayak izinizi ölçülebilir şekilde azaltırız.",
            "Newstag Energy delivers high standards in technology, production, and service with the strength of trusted global partners. We integrate BESS and heat pump technologies with renewable energy sources to reduce energy costs, strengthen supply security, and lower your carbon footprint."
          ),
        },
        {
          key: "whyText2",
          label: "2. paragraf",
          type: "textarea",
          default: L(
            "Keşiften projelendirmeye, kurulumdan devreye almaya ve Türkiye genelindeki servis ağımızla kurulum sonrası desteğe kadar tüm süreci tek çatı altında yönetiyoruz. Gelin, sürdürülebilir bir gelecek için enerji dönüşümünüzü bugünden başlatalım.",
            "From assessment and project design to installation, commissioning, and after-sales support through our nationwide service network, we manage the full process under one roof."
          ),
        },
        { key: "whyButton", label: "Buton", type: "text", default: L("Projenizi Konuşalım", "Let's Discuss Your Project") },
      ],
    },
  ],
};
