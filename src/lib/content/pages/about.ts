import { HIGHLIGHT_HELP } from "../format";
import { L, type PageDef } from "../types";

export const aboutPage: PageDef = {
  id: "about",
  title: "Hakkımızda",
  path: "/hakkimizda",
  sections: [
    {
      title: "Giriş",
      fields: [
        { key: "heroImage", label: "Arka plan görseli", type: "image", default: "/images/about-renewable-campus.png" },
        { key: "heroTitleLine1", label: "Başlık 1. satır", type: "text", default: L("Enerji Dönüşümünün", "Energy Transformation") },
        { key: "heroTitleLine2", label: "Başlık 2. satır", type: "text", default: L("Çözüm Ortağı", "Solution Partner") },
        { key: "scrollHint", label: "Kaydırma ipucu", type: "text", default: L("Keşfetmek İçin Kaydırın", "Scroll to Explore") },
      ],
    },
    {
      title: "Biz kimiz",
      fields: [
        { key: "whoEyebrow", label: "Üst etiket", type: "text", default: L("Newstag Enerji", "Newstag Energy") },
        { key: "whoTitleLine1", label: "Başlık 1. satır", type: "text", default: L("65 Yıllık Miras,", "65 Years of Heritage,") },
        { key: "whoTitleLine2", label: "Başlık 2. satır (turuncu)", type: "text", default: L("Yeni Nesil Enerji", "Next-Generation Energy") },
        {
          key: "whoText",
          label: "Metin (paragrafları boş bir satırla ayırın)",
          type: "textarea",
          default: L(
            "Saray Holding'in 65 yıllık kurumsal mirasını ve gücünü, enerji sektöründeki 15 yıllık üretim deneyimini ve global ortaklıklarını bir araya getiren Newstag, enerji dönüşümünüzün çözüm ortağı olmak için sizleri bekliyor.\n\nBatarya enerji depolama sistemlerinde dünya devi Inspur'un Türkiye iş ortağı olarak ve kendi tescilli markamız Thermaplus ısı pompalarıyla; enerji santrallerinden sanayi tesislerine, ticari işletmelerden konutlara kadar her ölçekte verimli, güvenli ve düşük karbonlu enerji altyapıları kuruyoruz.\n\nKeşiften projelendirmeye, kurulumdan devreye almaya ve Türkiye genelindeki servis ağımızla kurulum sonrası desteğe kadar tüm süreci tek çatı altında yönetiyoruz.",
            "Newstag brings together Saray Holding's 65-year corporate heritage, 15 years of production experience in the energy sector, and strong global partnerships to become your solution partner in energy transformation.\n\nAs the Turkiye partner of Inspur, a global leader in battery energy storage systems, and with our registered Thermaplus heat pump brand, we build efficient, secure, and low-carbon energy infrastructure for power plants, industrial facilities, commercial businesses, and residential projects.\n\nWe manage the full process under one roof, from assessment and project design to installation, commissioning, and after-sales support through our nationwide service network."
          ),
        },
        { key: "whoImage", label: "Yan görsel", type: "image", default: "/images/hakımızda yanına.png" },
        {
          key: "milestones",
          label: "Öne çıkan rakamlar",
          type: "list",
          itemLabel: "Rakam",
          fields: [
            { key: "icon", label: "İkon", type: "icon" },
            { key: "value", label: "Değer", type: "text" },
            { key: "label", label: "Açıklama", type: "text" },
          ],
          default: [
            { icon: "Award", value: L("65 Yıl", "65 Years"), label: L("Saray Holding kurumsal mirası", "Saray Holding corporate heritage") },
            { icon: "Factory", value: L("15 Yıl", "15 Years"), label: L("Enerji sektöründe üretim deneyimi", "Production experience in the energy sector") },
            { icon: "Globe2", value: L("Global", "Global"), label: L("Inspur gibi dünya devleriyle ortaklık", "Partnerships with global technology leaders such as Inspur") },
            { icon: "BatteryCharging", value: L("2 Marka", "2 Brands"), label: L("Inspur BESS ve Thermaplus Isı Pompası", "Inspur BESS and Thermaplus Heat Pump") },
          ],
        },
      ],
    },
    {
      title: "Saray Holding güvencesi",
      fields: [
        { key: "holdingImage", label: "Arka plan görseli", type: "image", default: "/images/8592d1b7-795b-41e0-9b1b-ec1a5a49397d.png" },
        { key: "holdingTitle", label: "Başlık", type: "text", help: HIGHLIGHT_HELP, default: L("*Saray Holding* Güvencesi", "Backed by *Saray Holding*") },
        {
          key: "holdingText1",
          label: "1. paragraf",
          type: "textarea",
          default: L(
            "1961 yılından bu yana gıda, tarım, endüstri, ambalaj, mobilya, lojistik gibi birçok sektördeki gücünü uzun yıllar önce enerji sektörüne de taşıyan Saray Holding, sürdürülebilir gelecek vizyonuyla büyümeye devam ediyor.",
            "Since 1961, Saray Holding has built strong operations across food, agriculture, industry, packaging, furniture, logistics, and many other sectors. The group brought this strength into the energy sector years ago and continues to grow with a sustainable future vision."
          ),
        },
        {
          key: "holdingText2",
          label: "2. paragraf",
          type: "textarea",
          help: HIGHLIGHT_HELP,
          default: L(
            "Jeotermal ve yenilenebilir enerji alanında atılan güçlü adımlarla bugün Türkiye'nin en büyük yenilenebilir enerji üreticileri arasında olan Saray, *Newstag* markası altında batarya enerji depolama sistemleri (BESS) ve ısı pompası çözümleriyle enerji sektöründeki hizmet gamını genişleterek sürdürülebilir geleceğe olan katkılarını taçlandırıyor.",
            "With strong investments in geothermal and renewable energy, Saray is now among Turkiye's major renewable energy producers. Under the *Newstag* brand, it expands its energy portfolio with battery energy storage systems (BESS) and heat pump solutions."
          ),
        },
        { key: "holdingButton", label: "Buton", type: "text", default: L("Saray Holding'i Keşfedin", "Discover Saray Holding") },
        { key: "holdingUrl", label: "Buton bağlantısı", type: "link", default: "https://www.sarayholding.com.tr/" },
      ],
    },
    {
      title: "Değerlerimiz",
      fields: [
        {
          key: "valuesTitle",
          label: "Başlık (her satır ayrı satırda görünür)",
          type: "textarea",
          help: HIGHLIGHT_HELP,
          default: L("Fark\nYaratan\n*Değerlerimiz*", "Our\nCore\n*Values*"),
        },
        {
          key: "values",
          label: "Değerler",
          type: "list",
          itemLabel: "Değer",
          fields: [
            { key: "icon", label: "İkon", type: "icon" },
            { key: "title", label: "Başlık", type: "text" },
            { key: "desc", label: "Açıklama", type: "textarea" },
          ],
          default: [
            { icon: "Shield", title: L("Güven", "Trust"), desc: L("Saray Holding'in 65 yıllık kurumsal mirasıyla sarsılmaz bir güven inşa ediyoruz.", "We build lasting trust with Saray Holding's 65-year corporate heritage.") },
            { icon: "Zap", title: L("İnovasyon", "Innovation"), desc: L("Global teknoloji ortaklıklarımızla en yeni enerji teknolojilerini Türkiye'ye taşıyoruz.", "We bring the latest energy technologies to Turkiye through global technology partnerships.") },
            { icon: "Target", title: L("Sürdürülebilirlik", "Sustainability"), desc: L("Gelecek nesillere daha yaşanabilir bir dünya bırakmak için temiz enerji dönüşümüne öncülük ediyoruz.", "We lead clean energy transformation for a more livable world for future generations.") },
            { icon: "Award", title: L("Mükemmellik", "Excellence"), desc: L("Mühendislikten servise kadar her aşamada en yüksek kaliteyi hedefliyoruz.", "We aim for the highest quality at every stage, from engineering to service.") },
          ],
        },
      ],
    },
    {
      title: "Vizyon ve misyon",
      fields: [
        { key: "visionTitle", label: "Vizyon başlığı", type: "text", default: L("Vizyonumuz", "Our Vision") },
        {
          key: "visionText",
          label: "Vizyon metni",
          type: "textarea",
          help: HIGHLIGHT_HELP,
          default: L(
            "Dünya standartlarında enerji teknolojilerini *herkes için erişilebilir* kılan bir gelecek.",
            "A future where world-class energy technologies are *accessible to everyone*."
          ),
        },
        { key: "missionTitle", label: "Misyon başlığı", type: "text", default: L("Misyonumuz", "Our Mission") },
        {
          key: "missionText",
          label: "Misyon metni",
          type: "textarea",
          help: HIGHLIGHT_HELP,
          default: L(
            "Çevreye duyarlı çözümlerle *karbon ayak izini* minimize eden teknolojik dönüşüm.",
            "Technology transformation that minimizes the *carbon footprint* through environmentally responsible solutions."
          ),
        },
      ],
    },
    {
      title: "Alt çağrı",
      fields: [
        { key: "ctaTitle", label: "Başlık", type: "text", default: L("Geleceği Birlikte İnşa Edelim", "Let Us Build the Future Together") },
        {
          key: "ctaText",
          label: "Metin",
          type: "textarea",
          default: L(
            "Enerji dönüşüm yolculuğunuzda yanınızdayız. Projenizi konuşmak için bize ulaşın.",
            "We are by your side throughout your energy transformation journey. Contact us to discuss your project."
          ),
        },
        { key: "ctaButton", label: "Buton", type: "text", default: L("İletişime Geçin", "Contact Us") },
      ],
    },
  ],
};
