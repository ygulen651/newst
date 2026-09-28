import { HIGHLIGHT_HELP } from "../format";
import { L, type PageDef } from "../types";

const stat = (n: number) => [
  { key: `stat${n}Value`, label: `${n}. rakam`, type: "text" as const },
  { key: `stat${n}Label`, label: `${n}. rakam açıklaması`, type: "text" as const },
];

export const brandsPage: PageDef = {
  id: "brands",
  title: "Markalar (genel sayfa)",
  path: "/markalar",
  sections: [
    {
      title: "Giriş",
      fields: [
        { key: "eyebrow", label: "Üst etiket", type: "text", default: L("Newstag Enerji", "Newstag Enerji") },
        { key: "title", label: "Başlık", type: "text", help: HIGHLIGHT_HELP, default: L("Ürün *Markalarımız*", "Our *Brands*") },
        {
          key: "intro",
          label: "Metin",
          type: "textarea",
          default: L(
            "Global teknoloji devi Inspur ve tescilli markamız Thermaplus ile enerji dönüşümünün iki kilit teknolojisini sunuyoruz.",
            "We offer two key technologies for energy transformation through global technology brand Inspur and our registered brand Thermaplus."
          ),
        },
      ],
    },
    {
      title: "Marka kartları",
      fields: [
        {
          key: "brands",
          label: "Markalar",
          type: "list",
          itemLabel: "Marka",
          fields: [
            { key: "name", label: "Marka adı", type: "text" },
            { key: "tagline", label: "Slogan", type: "text" },
            { key: "desc", label: "Açıklama", type: "textarea" },
            { key: "logo", label: "Logo", type: "image" },
            { key: "image", label: "Ürün görseli", type: "image" },
            { key: "brandLink", label: "Marka sayfası", type: "link" },
            { key: "productsLink", label: "Ürünler bağlantısı", type: "link" },
            ...stat(1),
            ...stat(2),
            ...stat(3),
          ],
          default: [
            {
              name: L("INSPUR BESS", "INSPUR BESS"),
              tagline: L("Enerji Güvenliğinin Ana Oyuncusu", "A Key Player in Energy Security"),
              desc: L(
                "Yıllık 31 milyar doları aşan geliriyle dünyanın en büyük üç sunucu üreticisinden biri olan Inspur; IT, bulut ve yapay zeka altyapısındaki mühendislik gücünü batarya enerji depolama sistemlerine taşıyor. 1 GWh'a yaklaşan kurulum deneyimi ve tek projede 400 MWh'lik başarısıyla enerji güvenliğinin küresel oyuncusu.",
                "Inspur is one of the world's top server manufacturers and brings its engineering strength in IT, cloud, and AI infrastructure into battery energy storage systems. With close to 1 GWh of installation experience and a 400 MWh single-project reference, it is a global energy storage player."
              ),
              logo: "/images/image1.png",
              image: "/images/products/bess-konteyner.png",
              brandLink: "/markalar/inspur",
              productsLink: "/bess#urunler",
              stat1Value: L("$31B+", "$31B+"),
              stat1Label: L("Yıllık Gelir", "Annual Revenue"),
              stat2Value: L("Top 3", "Top 3"),
              stat2Label: L("Global Sunucu Üreticisi", "Global Server Brand"),
              stat3Value: L("1 GWh", "1 GWh"),
              stat3Label: L("Kurulum Deneyimi", "Installation Experience"),
            },
            {
              name: L("THERMAPLUS", "THERMAPLUS"),
              tagline: L("Çevreci, Verimli, Ekonomik", "Green, Efficient, Economical"),
              desc: L(
                "Newstag'ın kendi tescilli markası Thermaplus; Türkiye'de üretilen ısı pompası teknolojisini yerli parça, yerli mühendislik ve güçlü servis ağıyla birleştiriyor. Konut, havuz ve endüstriyel serileriyle 6 kW'tan 1.066 kW kaskad sistemlere uzanan geniş ürün gamı sunuyor.",
                "Thermaplus is Newstag's own registered heat pump brand. It combines heat pump technology manufactured in Turkey with local components, local engineering, and a strong service network. Its product range covers residential, pool, and industrial needs from 6 kW to 1,066 kW cascade systems."
              ),
              logo: "/images/Adsız tasarım.png",
              image: "/images/heat-pump-branded.png",
              brandLink: "/markalar/thermaplus",
              productsLink: "/isi-pompasi#urunler",
              stat1Value: L("A+++", "A+++"),
              stat1Label: L("Enerji Verimliliği", "Energy Efficiency"),
              stat2Value: L("3-5", "3-5"),
              stat2Label: L("COP Değeri", "COP Value"),
              stat3Value: L("%75", "%75"),
              stat3Label: L("Varan Tasarruf", "Potential Savings"),
            },
          ],
        },
        { key: "profileButton", label: "Marka butonu", type: "text", default: L("Marka Tanıtımı", "Brand Profile") },
        { key: "productsButton", label: "Ürünler butonu", type: "text", default: L("Ürünleri İncele", "View Products") },
      ],
    },
  ],
};
