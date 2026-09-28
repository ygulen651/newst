import { L, type PageDef } from "../types";

export const layoutPage: PageDef = {
  id: "layout",
  title: "Genel (menü, footer, ortak metinler)",
  path: "/",
  sections: [
    {
      title: "Logo",
      fields: [{ key: "logo", label: "Site logosu", type: "image", default: "/images/image5.png" }],
    },
    {
      title: "Menü",
      fields: [
        { key: "navHome", label: "Ana Sayfa", type: "text", default: L("Ana Sayfa", "Home") },
        { key: "navAbout", label: "Hakkımızda", type: "text", default: L("Hakkımızda", "About Us") },
        { key: "navBrands", label: "Markalarımız", type: "text", default: L("Markalarımız", "Our Brands") },
        { key: "navSolutions", label: "Çözümlerimiz", type: "text", default: L("Çözümlerimiz", "Solutions") },
        { key: "navBess", label: "BESS", type: "text", default: L("BESS", "BESS") },
        { key: "navHeatPump", label: "Isı Pompası", type: "text", default: L("Isı Pompası", "Heat Pump") },
        { key: "navService", label: "Servis Ağı", type: "text", default: L("Servis Ağı", "Service Network") },
        { key: "navContact", label: "İletişim", type: "text", default: L("İletişim", "Contact") },
        { key: "mobileMenuTitle", label: "Mobil menü başlığı", type: "text", default: L("NEWSTAG ENERJİ", "NEWSTAG ENERGY") },
      ],
    },
    {
      title: "Ortak buton ve etiketler",
      fields: [
        { key: "exploreProducts", label: "Ürünleri İncele", type: "text", default: L("Ürünleri İncele", "Explore Products") },
        { key: "exploreSolutions", label: "Çözümleri İncele", type: "text", default: L("Çözümleri İncele", "Explore Solutions") },
        { key: "getQuote", label: "Teklif Al", type: "text", default: L("Teklif Al", "Get a Quote") },
        { key: "contactUs", label: "Bize Ulaşın", type: "text", default: L("Bize Ulaşın", "Contact Us") },
        { key: "discoverMore", label: "Daha Fazlasını Keşfedin", type: "text", default: L("Daha Fazlasını Keşfedin", "Discover More") },
        { key: "products", label: "Ürünler", type: "text", default: L("Ürünler", "Products") },
        { key: "solutions", label: "Çözümler", type: "text", default: L("Çözümler", "Solutions") },
        { key: "holdingBadge", label: "Holding rozeti", type: "text", default: L("Bir Saray Holding Markası", "A Saray Holding Brand") },
      ],
    },
    {
      title: "Footer",
      fields: [
        {
          key: "footerTagline",
          label: "Tanıtım cümlesi",
          type: "textarea",
          default: L(
            "Saray Holding güvencesiyle, geleceğin enerji altyapısını bugün inşa ediyoruz. Sürdürülebilir ve verimli enerji çözümleri.",
            "Backed by Saray Holding, we are building the energy infrastructure of the future today. Sustainable and efficient energy solutions."
          ),
        },
        { key: "footerCorporate", label: "Kurumsal başlığı", type: "text", default: L("Kurumsal", "Corporate") },
        { key: "footerProducts", label: "Ürünler başlığı", type: "text", default: L("Ürünler", "Products") },
        { key: "footerSolutions", label: "Çözümler başlığı", type: "text", default: L("Çözümler", "Solutions") },
        { key: "footerAboutUs", label: "Hakkımızda bağlantısı", type: "text", default: L("Hakkımızda", "About Us") },
        { key: "footerSarayHolding", label: "Saray Holding bağlantısı", type: "text", default: L("Saray Holding", "Saray Holding") },
        { key: "sarayHoldingUrl", label: "Saray Holding web adresi", type: "link", default: "https://www.sarayholding.com.tr/" },
        { key: "footerBess", label: "BESS bağlantısı", type: "text", default: L("Inspur BESS", "Inspur BESS") },
        { key: "footerHeatPump", label: "Isı pompası bağlantısı", type: "text", default: L("Thermaplus Isı Pompası", "Thermaplus Heat Pump") },
        {
          key: "footerSolutionLinks",
          label: "Çözümler sütunu",
          type: "list",
          itemLabel: "Bağlantı",
          fields: [
            { key: "title", label: "Başlık", type: "text" },
            { key: "href", label: "Adres", type: "link" },
          ],
          default: [
            { title: L("Enerji Santralleri", "Power Plants"), href: "/cozumlerimiz/enerji-santralleri" },
            { title: L("Sanayi Tesisleri", "Industrial Facilities"), href: "/cozumlerimiz/sanayi-tesisleri" },
            { title: L("Ticari İşletmeler", "Commercial Facilities"), href: "/cozumlerimiz/ticari-isletmeler" },
            { title: L("Konutlar", "Residential"), href: "/cozumlerimiz/konutlar" },
            { title: L("Veri Merkezleri", "Data Centers"), href: "/cozumlerimiz/veri-merkezleri" },
            { title: L("Sınırlı Şebeke Noktaları", "Limited Grid Locations"), href: "/cozumlerimiz/sinirli-sebeke" },
          ],
        },
        { key: "footerBrandNote", label: "Alt not", type: "text", default: L("Bir Saray Holding kuruluşudur.", "A Saray Holding company.") },
        { key: "copyrightName", label: "Telif adı", type: "text", default: L("Newstag Enerji.", "Newstag Energy.") },
        { key: "footerLocation", label: "Konum (kısa)", type: "text", default: L("İstanbul, Türkiye", "Istanbul, Turkiye") },
      ],
    },
    {
      title: "İletişim bilgileri (footer)",
      fields: [
        {
          key: "address",
          label: "Adres",
          type: "text",
          default: L(
            "Yıldızhan Cad. Saray İş Merkezi No:4, Köşe Sk., 34887 Sancaktepe/İstanbul",
            "Yildizhan Avenue, Saray Business Center No. 4, Kose Street, 34887 Sancaktepe/Istanbul"
          ),
        },
        {
          key: "addressMapUrl",
          label: "Harita bağlantısı",
          type: "link",
          default: "https://www.google.com/maps/place/data=!4m2!3m1!1s0x14cad3c555555555:0xc12bb9adc218764f?sa=X&ved=1t:8290&ictx=111",
        },
        { key: "phone", label: "Telefon", type: "link", default: "0 216 311 00 67" },
        { key: "email", label: "E-posta", type: "link", default: "info@newstag.com.tr" },
      ],
    },
  ],
};
