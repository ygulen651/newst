import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  Box,
  Container,
  Home,
  PackageOpen,
} from "lucide-react";

export type ProductInfo = {
  slug: string;
  title: string;
  category: string;
  image: string;
  imageFit?: "cover" | "contain";
  detailImage?: string;
  detailImageFit?: "cover" | "contain";
  summary: string;
  description: string;
  specs: string[];
  options?: string[];
  technicalTable?: {
    columns: string[];
    rows: { label: string; values: string[] }[];
  };
  icon?: LucideIcon;
};

export const bessProducts: ProductInfo[] = [
  {
    slug: "ev-tipi-bess",
    title: "Ev Tipi Enerji Depolama",
    category: "Konut çözümleri",
    image: "/images/products/bess-ev-tipi.png",
    imageFit: "contain",
    summary:
      "Güneş panelinden veya ucuz tarifeden depolanan enerjiyle elektrik maliyetini düşüren, kesintilere karşı koruyan modüler ev bataryası.",
    description:
      "Ev tipi Inspur enerji depolama cihazları; çatı GES üretimini veya düşük tarifeli saatlerde şebekeden alınan enerjiyi depolayarak konutların elektrik maliyetini azaltır, kesinti anında kritik yükleri besler. Estetik ve kompakt gövdesi, modüler büyütülebilir tasarımı sayesinde hem iç hem dış mekân kurulumuna uygundur; mobil uygulama üzerinden uzaktan izlenir ve yönetilir.",
    specs: [
      "Estetik ve kompakt tasarım",
      "Modüler büyütülebilir yapı",
      "İç ve dış mekân kurulumuna uygunluk",
      "Wi-Fi ve Bluetooth desteği",
      "Mobil uygulamadan kontrol",
      "Entegre kendini ısıtma fonksiyonu",
      "Şebeke ve PV ile hibrit çalışma",
    ],
    options: ["5 kWh", "10 kWh", "15 kWh", "20 kWh"],
    icon: Home,
  },
  {
    slug: "tasinabilir-bess",
    title: "Taşınabilir Enerji Depolama",
    category: "Mobil güç çözümleri",
    image: "/images/limited-grid-event.png",
    detailImage: "/images/User attachment.png",
    detailImageFit: "contain",
    summary:
      "Dış mekân etkinlikleri ve acil durum senaryoları için kompakt, hafif ve çok işlevli taşınabilir güç kaynağı.",
    description:
      "Taşınabilir Inspur enerji depolama cihazları, elektriğe erişimin olmadığı her noktada temiz ve sessiz güç sağlar. Kompakt ve hafif tasarımı ile kamp, etkinlik, saha çalışması ve acil durum senaryoları için idealdir; güvenli ve stabil çalışma yapısı ile çok işlevli arayüz sunar.",
    specs: [
      "Kompakt ve hafif tasarım",
      "Dış mekân etkinlikleri için ideal",
      "Acil durum yedek gücü",
      "Çevre dostu ve sessiz çalışma",
      "Güvenli ve stabil güç çıkışı",
      "Çok işlevli arayüz",
    ],
    options: ["1 kWh", "2 kWh"],
    icon: PackageOpen,
  },
  {
    slug: "sivi-sogutmali-kabinet-bess",
    title: "Dış Mekân Sıvı Soğutmalı Kabinet BESS",
    category: "Sanayi ve ticari işletmeler",
    image: "/images/products/bess-kabinet.png",
    imageFit: "contain",
    summary:
      "Sanayi ve ticari tesisler için tak-çalıştır, tek kabinde entegre, paralel bağlantıyla sınırsız büyüyen enerji depolama.",
    description:
      "Dış mekân sıvı soğutmalı Inspur kabinet BESS; batarya, BMS, EMS, PCS, yangın koruma, güç dağıtım ve termal yönetim sistemlerini tek kabinde birleştiren tak-çalıştır bir enerji depolama çözümüdür. Güç tüketiminize, fiziksel alanınıza ve kullanım ihtiyaçlarınıza göre ölçeklenir; paralel bağlantı ile kapasite sınırsız artırılabilir. 8.000'in üzerinde çevrim ömrü ve 314 Ah yeni nesil pil teknolojisiyle operasyonel süreklilik ve tasarruf sunar.",
    specs: [
      "Tak-çalıştır entegre tasarım: batarya, BMS, EMS, PCS, yangın koruma, güç dağıtımı ve termal yönetim tek kabinde",
      "Paralel bağlantı ile sınırsız kapasite artırımı",
      "8.000+ çevrim ile uzun yaşam ömrü",
      "314 Ah yeni nesil pil teknolojisi",
      "Akıllı yönetim sistemi ile maksimum verim, minimum kesinti",
      "İnsansız çalışma olanağı",
      "Geniş uygulama alanı",
    ],
    options: ["50 kW / 100 kWh", "100 kW / 233 kWh", "125 kW / 261 kWh"],
    icon: BatteryCharging,
  },
  {
    slug: "flexcube-konteyner-bess",
    title: "FlexCube Konteyner Tipi BESS",
    category: "Sınırlı şebeke ve off-grid",
    image: "/images/products/bess-flexcube.png",
    imageFit: "contain",
    summary:
      "Şebeke olmayan veya ani güç isteyen noktalar için 10 ft entegre, şarj et & taşı yapısına uygun tak-çalıştır çözüm.",
    description:
      "FlexCube, şebekenin olmadığı veya yetersiz kaldığı noktalarda devreye giren 10 ft entegre ve hafif tasarımlı bir konteyner BESS çözümüdür. İnşaat alanları, maden sahaları, petrol/gaz sahaları ve etkinlik alanları için idealdir; modüler tasarımı ile sınırsız genişler, jeneratör yakıt maliyetinden tasarruf sağlar ve zorlu dış koşullara karşı yüksek koruma sunar.",
    specs: [
      "10 ft entegre hafif tasarım",
      "Modüler tasarım ile sınırsız genişleme",
      "Şebeke olmayan noktalarda off-grid çözüm",
      "İnşaat, maden, petrol/gaz sahaları ve etkinlikler için ideal",
      "Jeneratör yakıt maliyetinden tasarruf",
      "Şarj et & taşı yapısına uygunluk",
      "Zorlu dış koşullara karşı yüksek koruma",
      "Entegre tasarım: batarya, BMS, EMS, PCS, yangın koruma, güç dağıtımı ve termal yönetim",
    ],
    options: ["250 kW (286 kWh / 143 kWh)", "500 kW (430 kWh / 234 kWh)"],
    icon: Box,
  },
  {
    slug: "konteyner-tipi-bess",
    title: "20 ft Konteyner Tipi BESS",
    category: "Enerji santralleri ve şebeke ölçeği",
    image: "/images/products/bess-konteyner.png",
    imageFit: "contain",
    summary:
      "Santral, şebeke ve yüksek güç ihtiyacı olan tesisler için MWh sınıfı, sıvı soğutmalı, modüler enerji depolama.",
    description:
      "20 ft (6 metre) konteyner boyutundaki Inspur BESS, yüksek güç ihtiyacı olan üretim tesisleri, santraller ve şebeke ölçekli projeler için enerji güvenliği ve tasarruf sağlar. Ürün ömrünü %15'e kadar artıran sıvı soğutma, 8.000'in üzerinde çevrim ömrü ve 314 Ah yeni nesil pil teknolojisiyle (600+ Ah teknolojisine uygun altyapı) modüler paralel tasarım sayesinde sınırsız genişleyebilir. Batarya, BMS, EMS, PCS, yükseltici trafo, yangın koruma, güç dağıtım ve termal yönetim sistemleri tek yapıda entegre edilmiştir.",
    specs: [
      "20 ft (6 metre) konteyner boyutu",
      "Santral, şebeke ve sanayi için ideal çözüm",
      "Modüler paralel tasarım ile sınırsız genişleme",
      "Ürün ömrünü %15'e kadar artıran sıvı soğutma",
      "8.000+ çevrim ile uzun yaşam ömrü",
      "314 Ah yeni nesil pil teknolojisi (600+ Ah'e uygun)",
      "Zorlu dış koşullara uygun yüksek koruma",
      "Entegre tasarım: batarya, BMS, EMS, PCS, yükseltici trafo, yangın koruma, güç dağıtımı ve termal yönetim",
    ],
    options: ["2,5 MW / 5 MWh (0,5C)", "2,6 MW / 2,6 MWh (1C)"],
    icon: Container,
  },
];

export const heatPumpCategories = [
  "Konut Serileri",
  "Havuz Serileri",
  "Endüstriyel Seriler",
] as const;

export const heatPumpProducts: ProductInfo[] = [
  {
    slug: "thermaplus-up-serisi",
    title: "Thermaplus Up Serisi",
    category: "Konut Serileri",
    image: "/images/2.png",
    imageFit: "contain",
    summary: "8-35 kW kapasite, R32 soğutucu akışkan, DC inverter kontrol ve Wi-Fi desteği.",
    description:
      "Thermaplus Up Serisi; ev, villa ve küçük ticari alanlarda dört mevsim verimli ısıtma ve soğutma için geliştirilmiştir. R32 soğutucu akışkan, DC inverter kontrol ve Wi-Fi destekli akıllı kullanım altyapısıyla konforu dengeli enerji tüketimiyle bir araya getirir.",
    specs: [
      "8-35 kW kapasite aralığı",
      "Isıtma, soğutma ve kullanım sıcak suyu desteği",
      "R32 soğutucu akışkan ve DC inverter kompresör",
      "-30~43 °C çalışma sıcaklığı",
      "COP 4,2-4,9",
      "Wi-Fi destekli akıllı kontrol",
      "IPX4 koruma sınıfı",
    ],
    options: ["8 kW", "13 kW", "16 kW", "18 kW", "23 kW", "28 kW", "35 kW"],
    technicalTable: {
      columns: ["8 kW", "13 kW", "16 kW", "18 kW", "23 kW", "28 kW", "35 kW"],
      rows: [
        { label: "Isıtma kapasitesi (kW)", values: ["1,57-8,40", "4,40-13,00", "5,8-15,5", "5,9-18,2", "7,5-23,0", "10,2-28,0", "12,8-35,0"] },
        { label: "COP aralığı", values: ["4,49-4,91", "4,30-4,90", "4,23-4,75", "4,43-4,92", "4,28-4,66", "4,27-4,70", "4,27-4,72"] },
        { label: "Güç kaynağı", values: ["230V / 1Ph", "230V / 1Ph", "230V / 1Ph", "230V / 1Ph", "380V / 3Ph", "380V / 3Ph", "380V / 3Ph"] },
      ],
    },
  },
  {
    slug: "thermaplus-boost-serisi",
    title: "Thermaplus Boost Serisi",
    category: "Konut Serileri",
    image: "/images/6.png",
    imageFit: "contain",
    summary: "8-22 kW kapasite, doğal R290 akışkan, yüksek sıcaklık desteği ve Wi-Fi kontrol.",
    description:
      "Thermaplus Boost Serisi; ev, villa ve küçük ticari alanlarda yüksek sıcaklık ihtiyacına uygun verimli ısıtma, soğutma ve kullanım sıcak suyu için geliştirilmiştir. R290 soğutucu akışkan, DC inverter kontrol ve Wi-Fi desteğiyle güçlü performansı dengeli enerji tüketimiyle sunar.",
    specs: [
      "8, 11, 15 ve 22 kW model seçenekleri",
      "R290 doğal soğutucu akışkan",
      "Isıtma, soğutma ve kullanım sıcak suyu",
      "-25~43 °C çalışma sıcaklığı",
      "Isıtmada 70 °C'ye kadar çalışma suyu",
      "Wi-Fi destekli akıllı kontrol",
      "IPX4 koruma sınıfı",
    ],
    options: ["8 kW", "11 kW", "15 kW", "22 kW"],
    technicalTable: {
      columns: ["8 kW", "11 kW", "15 kW", "22 kW"],
      rows: [
        { label: "Isıtma kapasitesi (kW)", values: ["3,3-8,3", "4,5-11,4", "5,9-14,8", "8,8-22,0"] },
        { label: "COP aralığı", values: ["2,85-5,17", "2,86-5,29", "3,88-5,22", "3,81-5,24"] },
        { label: "Güç kaynağı", values: ["230V / 1Ph", "230V / 1Ph", "230V / 1Ph", "380V / 3Ph"] },
        { label: "Ses seviyesi, 1 m", values: ["44 dB(A)", "43 dB(A)", "45 dB(A)", "45 dB(A)"] },
      ],
    },
  },
  {
    slug: "thermaplus-all",
    title: "Thermaplus All Serisi",
    category: "Konut Serileri",
    image: "/images/4.png",
    imageFit: "contain",
    summary: "200 ve 300 L tank, R290 akışkan, Wi-Fi kontrol ve 75 °C'ye kadar sıcak su desteği.",
    description:
      "Thermaplus All Serisi; konut, villa, otel ve işletmelerin kullanım sıcak suyu ihtiyacı için geliştirilmiştir. 200 ve 300 litre tank seçenekleri, R290 soğutucu akışkan, Wi-Fi kontrol ve yedek ısıtıcıyla 75 °C'ye kadar sıcak su desteği sunar.",
    specs: [
      "200 ve 300 litre tank seçenekleri",
      "R290 doğal soğutucu akışkan",
      "A+ enerji sınıfı",
      "COP 3,65-3,75",
      "Yedek ısıtıcıyla 75 °C'ye kadar sıcak su",
      "Wi-Fi destekli kontrol",
      "-7~45 °C çalışma aralığı",
    ],
    options: ["200 L", "300 L"],
    technicalTable: {
      columns: ["200 L", "300 L"],
      rows: [
        { label: "Nominal ısıtma kapasitesi", values: ["1,6 kW", "1,6 kW"] },
        { label: "COP (20/15 °C)", values: ["3,65", "3,75"] },
        { label: "Enerji sınıfı", values: ["A+", "A+"] },
        { label: "Net ağırlık", values: ["93 kg", "117 kg"] },
      ],
    },
  },
  {
    slug: "thermaplus-silent-pool-serisi",
    title: "Thermaplus Silent Pool Serisi",
    category: "Havuz Serileri",
    image: "/images/3.png",
    imageFit: "contain",
    summary: "10-33 kW kapasite, R32 akışkan, sessiz çalışma ve Wi-Fi kontrollü dört mevsim havuz konforu.",
    description:
      "Thermaplus Silent Pool Serisi; villa, bahçe ve açık havuz projelerinde su sıcaklığını dengeli biçimde korumak için geliştirilmiştir. R32 soğutucu akışkan, sessiz çalışma karakteri, titanyum eşanjör ve Wi-Fi destekli kontrol yapısıyla dört mevsim havuz konforu sağlar.",
    specs: [
      "10-33 kW kapasite aralığı",
      "20-130 m³ havuz hacimleri",
      "Isıtma ve soğutma desteği",
      "R32 soğutucu akışkan",
      "Titanyum eşanjör ve ABS kasa",
      "Wi-Fi destekli kontrol",
    ],
    options: ["10 kW", "11 kW", "14 kW", "17 kW", "20 kW", "24 kW", "28 kW", "33 kW"],
    technicalTable: {
      columns: ["10 kW", "11 kW", "14 kW", "17 kW", "20 kW", "24 kW", "28 kW", "33 kW"],
      rows: [
        { label: "Tavsiye edilen havuz (m³)", values: ["20-40", "25-50", "30-60", "40-75", "55-100", "70-130", "60-120", "70-130"] },
        { label: "COP (27 °C)", values: ["6,5-5,0", "6,0-4,7", "6,5-5,0", "6,5-5,0", "6,0-4,8", "6,0-5,0", "6,0-5,0", "6,0-5,0"] },
      ],
    },
  },
  {
    slug: "thermaplus-commercial-pool",
    title: "Thermaplus Commercial Pool Serisi",
    category: "Havuz Serileri",
    image: "/images/5.png",
    imageFit: "contain",
    summary: "26-145 kW kapasite, titanyum eşanjör ve 43 °C'ye kadar ticari havuz suyu.",
    description:
      "Thermaplus Commercial Pool Serisi; otel, spor tesisi, sosyal tesis ve yüksek hacimli havuz projeleri için geliştirilmiştir. Altı kapasite seçeneği, R410A soğutucu akışkan ve PVC kabuk içinde titanyum eşanjör yapısıyla havuz suyunu kontrollü ve verimli biçimde ısıtır.",
    specs: [
      "R410A soğutucu akışkan",
      "26-145 kW kapasite aralığı",
      "43 °C'ye kadar havuz suyu",
      "PVC kabuk içinde titanyum eşanjör",
      "IPX4 koruma sınıfı",
      "-7~43 °C çalışma ortamı",
    ],
    options: ["26 kW", "52 kW", "75 kW", "100 kW", "121 kW", "145 kW"],
    technicalTable: {
      columns: ["26 kW", "52 kW", "75 kW", "100 kW", "121 kW", "145 kW"],
      rows: [
        { label: "Nominal ısıtma kapasitesi", values: ["26 kW", "51,5 kW", "75 kW", "100 kW", "121 kW", "145 kW"] },
        { label: "COP", values: ["6,2", "6,1", "6,2", "6,0", "6,0", "6,1"] },
        { label: "Gürültü", values: ["56 dB(A)", "58 dB(A)", "60 dB(A)", "62 dB(A)", "64 dB(A)", "66 dB(A)"] },
      ],
    },
  },
  {
    slug: "thermaplus-commercial-duo",
    title: "Thermaplus Commercial Duo Serisi",
    category: "Endüstriyel Seriler",
    image: "/images/1.png",
    imageFit: "contain",
    summary: "50 ve 92 kW kapasite, R290 akışkan, yüksek sıcaklık ve Wi-Fi kontrollü ticari performans.",
    description:
      "Thermaplus Commercial Duo Serisi; otel, apartman, ticari tesis ve merkezi sistem projelerinde yüksek kapasiteli ısıtma, soğutma ve kullanım sıcak suyu ihtiyacı için geliştirilmiştir. R290 soğutucu akışkan, Wi-Fi kontrol ve 78 °C'ye kadar çalışma suyu desteğiyle güçlü ticari performans sunar.",
    specs: [
      "50 ve 92 kW model seçenekleri",
      "R290 doğal soğutucu akışkan",
      "Isıtma, soğutma ve kullanım sıcak suyu",
      "20-78 °C çalışma suyu desteği",
      "-25~43 °C çalışma ortamı",
      "Wi-Fi destekli kontrol",
      "380-415V / 3Ph güç beslemesi",
    ],
    options: ["50 kW", "92 kW"],
    technicalTable: {
      columns: ["50 kW", "92 kW"],
      rows: [
        { label: "Isıtma kapasitesi (kW)", values: ["18,4-49,25", "35,2-92"] },
        { label: "COP aralığı", values: ["3,8-4,3", "3,86-5,02"] },
        { label: "Sıcak su kapasitesi (kW)", values: ["23,8-68", "40-120"] },
        { label: "Ses basınç seviyesi", values: ["≤62 dB(A)", "≤65 dB(A)"] },
      ],
    },
  },
];
