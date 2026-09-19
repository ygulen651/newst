"use client";

import type { Language } from "@/lib/i18n";

const exactTranslations: Record<string, string> = {
  "Ana Sayfa": "Home",
  Hakkımızda: "About Us",
  Markalarımız: "Our Brands",
  Çözümlerimiz: "Solutions",
  "Isı Pompası": "Heat Pump",
  "Servis Ağı": "Service Network",
  İletişim: "Contact",
  Ürünler: "Products",
  Çözümler: "Solutions",
  Kurumsal: "Corporate",
  Menü: "Menu",
  "Menüyü kapat": "Close menu",

  "Ürünleri İncele": "Explore Products",
  "Çözümleri İncele": "Explore Solutions",
  "Detayları İncele": "View Details",
  İncele: "View",
  "Teklif Al": "Get a Quote",
  "Bize Ulaşın": "Contact Us",
  "İletişime Geçin": "Get in Touch",
  "Bizimle İletişime Geçin": "Get in Touch With Us",
  "Markayı Tanıyın": "Discover the Brand",
  "Uzmana Danışın": "Talk to an Expert",
  Gönder: "Send",
  "Mesaj Gönderin": "Send a Message",
  "Ad Soyad": "Full Name",
  "Mesajınız": "Your Message",
  "Adınız ve soyadınız": "Your full name",
  "Size nasıl yardımcı olabiliriz?": "How can we help you?",

  "Bir Saray Holding Markası": "A Saray Holding Brand",
  "Bir Saray Holding kuruluşudur.": "A Saray Holding company.",
  "Saray Holding Güvencesi": "Backed by Saray Holding",
  Güvencesi: "Assurance",
  "Newstag Enerji": "Newstag Energy",
  "NEWSTAG ENERJİ": "NEWSTAG ENERGY",
  "İstanbul, Türkiye": "Istanbul, Turkiye",
  Türkiye: "Turkiye",
  Lokasyon: "Location",
  Telefon: "Phone",
  "E-posta": "Email",
  "Genel Merkez": "Head Office",
  "Yıldızhan Cad. Saray İş Merkezi No:4, Köşe Sk., 34887 Sancaktepe/İstanbul":
    "Yildizhan Avenue, Saray Business Center No. 4, Kose Street, 34887 Sancaktepe/Istanbul",

  "Enerjiyi Bugünden": "Carry Energy From Today",
  "Geleceğe Taşıyın": "Into the Future",
  "Enerji Dönüşümünün Çözüm Ortağı": "The Solution Partner for Energy Transformation",
  "Enerji Dönüşümünüzün Çözüm Ortağı": "The Solution Partner for Your Energy Transformation",
  "Enerji Dönüşümünün": "Energy Transformation",
  "Enerji Dönüşümünüzün": "Your Energy Transformation",
  "Çözüm Ortağı": "Solution Partner",
  "Keşfetmek İçin Kaydırın": "Scroll to Explore",
  "Kim Olduğumuzu Keşfedin": "Discover Who We Are",
  "65 Yıllık Miras, Yeni Nesil Enerji": "65 Years of Heritage, Next-Generation Energy",
  "65 Yıllık Miras,": "65 Years of Heritage,",
  "Yeni Nesil Enerji": "Next-Generation Energy",
  "65 Yıl": "65 Years",
  "15 Yıl": "15 Years",
  "2 Marka": "2 Brands",

  "Sektöre Yön Veren": "Leading the Industry",
  "Markalarımız ile Hizmetinizdeyiz": "At Your Service with Our Brands",
  "Çin’in IT devi ve dünyanın en büyük üç sunucu üreticisinden biri olan Inspur; IT ve bulut altyapısındaki mühendislik gücünü enerji depolama sistemlerine taşıyor. 1 GWh'a yaklaşan kurulum deneyimiyle enerji güvenliğinin de ana bir oyuncusu konumunda.":
    "China’s IT giant and one of the world’s three largest server manufacturers, Inspur brings its engineering expertise in IT and cloud infrastructure to energy storage systems. With nearly 1 GWh of installation experience, it is also a major player in energy security.",
  "Ürün Markalarımız": "Our Product Brands",
  "Her İhtiyaca": "For Every Need",
  "Özel Çözümler": "Tailored Solutions",
  "Servis ve Satış Ağı": "Service and Sales Network",
  "Enerjiniz İçin Her Zaman Sahadayız": "Always in the Field for Your Energy",
  "Enerjiniz İçin": "For Your Energy",
  "Her Zaman Sahadayız": "Always in the Field",
  "Hizmet Kapsamı": "Service Scope",
  "Servis Süreci": "Service Process",
  "Servis Talebi Oluştur": "Create a Service Request",
  "Kurulum sonrası sürdürülebilir operasyon desteği": "Sustainable operational support after installation",

  "BESS Nasıl Çalışır?": "How Does BESS Work?",
  "Enerji Akış Haritası": "Energy Flow Map",
  "GES / Şebeke": "Solar / Grid",
  PCS: "PCS",
  Batarya: "Battery",
  "EMS / BMS": "EMS / BMS",
  "Yük / Şebeke": "Load / Grid",
  Şarj: "Charge",
  Depolama: "Storage",
  Deşarj: "Discharge",
  "BESS ile Elde Edilen Faydalar": "Benefits Delivered by BESS",
  "Neden Inspur?": "Why Inspur?",
  "Global Teknoloji Ortağımız": "Our Global Technology Partner",
  "Inspur Markasını Tanıyın": "Discover the Inspur Brand",
  "Maliyet Değil; Sürekli Kazanç ve Enerji Güvenliği":
    "Not a Cost; Continuous Value and Energy Security",
  "Inspur BESS Ürün Portföyü": "Inspur BESS Product Portfolio",
  "Projeniz İçin BESS Konfigürasyonu": "BESS Configuration for Your Project",
  "BESS Ürünlerine Dön": "Back to BESS Products",
  "Ürün Seçenekleri": "Product Options",
  "Uygulama Notları": "Application Notes",
  "Diğer BESS Ürünleri": "Other BESS Products",
  "Teknik Görüşme Talep Et": "Request a Technical Meeting",

  "Isı Pompası Nasıl Çalışır?": "How Does a Heat Pump Work?",
  "Isı Enerjisi Akışı": "Heat Energy Flow",
  "Dış Hava": "Outdoor Air",
  Evaporatör: "Evaporator",
  Kompresör: "Compressor",
  Kondenser: "Condenser",
  "Isıtma / Soğutma / Sıcak Su": "Heating / Cooling / Hot Water",
  "Isı Pompası ile Elde Edilen Faydalar": "Benefits Delivered by Heat Pumps",
  "Hava Kaynaklı": "Air Source",
  "Toprak Kaynaklı": "Ground Source",
  "Su Kaynaklı": "Water Source",
  "Thermaplus Ürün Gamı": "Thermaplus Product Range",
  "Konut Serileri": "Residential Series",
  "Havuz Serileri": "Pool Series",
  "Endüstriyel Seriler": "Industrial Series",
  "Tasarruf Hesaplama": "Savings Calculator",
  "Isı Pompası Ürünlerine Dön": "Back to Heat Pump Products",
  "Thermaplus Ürünlerine Dön": "Back to Thermaplus Products",
  "Doğru Model Seçimi": "Selecting the Right Model",
  "Ücretsiz Keşif Talep Et": "Request a Free Survey",
  "Aynı Serideki Diğer Ürünler": "Other Products in the Same Series",
  "Temiz Isı Teknolojisi": "Clean Heat Technology",
  "Newstag'ın Tescilli Markası": "Newstag's Registered Brand",

  "Enerji Santralleri": "Power Plants",
  "Sanayi Tesisleri": "Industrial Facilities",
  "Ticari İşletmeler": "Commercial Businesses",
  Konutlar: "Homes",
  "Veri Merkezleri": "Data Centers",
  "Sınırlı Şebeke Noktaları": "Limited Grid Locations",
  "Sınırlı Şebeke": "Limited Grid",

  "Arbitraj ile Tasarruf": "Savings with Arbitrage",
  "Lisanssız GES İçin Tamamlayıcı": "Complement for Unlicensed Solar",
  "Lisanssız GES Tamamlayıcısı": "Complement for Unlicensed Solar",
  "Pik Güç Tıraşlama": "Peak Shaving",
  "Kapasite Kısıtını Aşma": "Overcoming Capacity Limits",
  "Operasyonel Süreklilik": "Operational Continuity",
  "Reaktif Güç Kompanzasyonu": "Reactive Power Compensation",
  "Harmonik Kompanzasyonu": "Harmonic Compensation",
  "Jeneratör İkamesi": "Generator Replacement",
  "Karbon Vergisi Baskısını Azaltma": "Reducing Carbon Tax Pressure",
  "Yüksek Enerji Fiyatları": "High Energy Prices",
  "Enerji Verimliliği": "Energy Efficiency",
  "Tek Sistem": "Single System",
  Çevrecilik: "Environmental Responsibility",
  "Yüksek Enerji Tasarrufu": "High Energy Savings",
  "3'ü 1 Arada Tek Sistem": "Three-in-One System",
  "Fosil Yakıttan Bağımsızlık": "Independence from Fossil Fuels",
  "Atık Isı Değerlendirme": "Waste Heat Recovery",
  "Havuz Konforu": "Pool Comfort",
  "Akıllı Kontrol": "Smart Control",

  "Yerli Üretim Gücü": "Power of Local Production",
  "Güçlü Servis": "Strong Service",
  "Çevreci Teknoloji": "Green Technology",
  "Kanıtlanmış Güvenilirlik": "Proven Reliability",
  "Kanıtlanmış Saha Deneyimi": "Proven Field Experience",
  "Güvenlik ve Uzun Ömür": "Safety and Long Life",
  "Ar-Ge ve Mühendislik Gücü": "R&D and Engineering Strength",
  "Global Sunucu Üreticisi": "Global Server Manufacturer",
  "Ülkede Aktif Operasyon": "Countries with Active Operations",
  "Global Patent Portföyü": "Global Patent Portfolio",
  "IT Dünyasının Devi": "IT Industry Giant",
  "IT Dünyasının": "The Giant of IT",
  Devi: "World",
  "Yapay zeka sunucularında dünyanın 1 numarası olmayı başarmış, tüm sunucu üreticileri arasında dünyanın ilk 3 firması arasında olan lider şirket.":
    "The industry leader ranked number one worldwide in AI servers and among the world's top three server manufacturers.",

  "Demir-Çelik": "Iron and Steel",
  Çimento: "Cement",
  Otomotiv: "Automotive",
  "Beyaz Eşya": "White Goods",
  "Alışveriş Merkezleri": "Shopping Malls",
  Oteller: "Hotels",
  Plazalar: "Office Towers",
  "Perakende Zincirleri": "Retail Chains",
  "Havuz Isıtması": "Pool Heating",
  "Entegre Çözüm": "Integrated Solution",
  "Kesinti Önleme": "Outage Prevention",
  "Güç Kalitesi": "Power Quality",
  "Hassas İklimlendirme": "Precision Climate Control",
  "Şarj Ağı Noktaları": "Charging Network Sites",
  "Maden ve Taş Ocakları": "Mines and Quarries",
  "Konserler ve Kamp Alanları": "Concerts and Campsites",
  "Şebeke Kısıtlarını Aşma": "Overcoming Grid Constraints",
  "Bağlantı Sürecini Beklememe": "No Waiting for Grid Connection",
  "Yatırım Maliyetini Azaltma": "Reducing Investment Cost",
  "Pik Talep Yönetimi": "Peak Demand Management",
  "Jeneratör Maliyetinden Tasarruf": "Savings from Generator Costs",
  "Güç Olmayan Noktada Faaliyet": "Operations Where There Is No Power",

  Güven: "Trust",
  İnovasyon: "Innovation",
  Sürdürülebilirlik: "Sustainability",
  Mükemmellik: "Excellence",
  Vizyonumuz: "Our Vision",
  Misyonumuz: "Our Mission",
  "Fark Yaratan Değerlerimiz": "Our Differentiating Values",
  Fark: "Values",
  Yaratan: "That Create",
  Değerlerimiz: "Difference",
  "Saray Holding'i Keşfedin": "Discover Saray Holding",
  "Geleceği Birlikte İnşa Edelim": "Let's Build the Future Together",
  "Geleceği Birlikte": "Let's Build the Future",
  "İnşa Edelim": "Together",

  "Haber Merkezi": "News Center",
  "Dünyamızı dönüştüren enerji haberleri için aşağı kaydırmaya devam edin.":
    "Keep scrolling for energy news that transforms our world.",
  "Tamamını Oku": "Read More",
  "Sayfa Bulunamadı": "Page Not Found",
  "Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı olabilir.":
    "The page you are looking for may have been removed, renamed, or temporarily unavailable.",
  "Ana Sayfaya Dön": "Back to Home",
  "Kapasite Seçenekleri": "Capacity Options",
  "Model Karşılaştırma": "Model Comparison",
  "Teknik Özellikler": "Technical Specifications",
  "Teknik değer": "Technical specification",
  "Projenize uygun kapasiteyi temel performans değerleriyle karşılaştırın.":
    "Compare the key performance values to select the right capacity for your project.",
  "Isıtma kapasitesi (kW)": "Heating capacity (kW)",
  "COP aralığı": "COP range",
  "Güç kaynağı": "Power supply",
  "Ses seviyesi, 1 m": "Sound level at 1 m",
  "Nominal ısıtma kapasitesi": "Nominal heating capacity",
  "Enerji sınıfı": "Energy class",
  "Net ağırlık": "Net weight",
  "Tavsiye edilen havuz (m³)": "Recommended pool volume (m³)",
  "Sıcak su kapasitesi (kW)": "Domestic hot water capacity (kW)",
  "Ses basınç seviyesi": "Sound pressure level",
  "Thermaplus Up Serisi; ev, villa ve küçük ticari alanlarda dört mevsim verimli ısıtma ve soğutma için geliştirilmiştir. R32 soğutucu akışkan, DC inverter kontrol ve Wi-Fi destekli akıllı kullanım altyapısıyla konforu dengeli enerji tüketimiyle bir araya getirir.":
    "Thermaplus Up Series is designed for efficient year-round heating and cooling in homes, villas, and small commercial spaces. Its R32 refrigerant, DC inverter control, and Wi-Fi-enabled smart controls combine comfort with balanced energy consumption.",
  "Thermaplus Boost Serisi; ev, villa ve küçük ticari alanlarda yüksek sıcaklık ihtiyacına uygun verimli ısıtma, soğutma ve kullanım sıcak suyu için geliştirilmiştir. R290 soğutucu akışkan, DC inverter kontrol ve Wi-Fi desteğiyle güçlü performansı dengeli enerji tüketimiyle sunar.":
    "Thermaplus Boost Series is designed for efficient heating, cooling, and domestic hot water in homes, villas, and small commercial spaces with high-temperature requirements. Its R290 refrigerant, DC inverter control, and Wi-Fi support deliver powerful performance with balanced energy consumption.",
  "Thermaplus All Serisi; konut, villa, otel ve işletmelerin kullanım sıcak suyu ihtiyacı için geliştirilmiştir. 200 ve 300 litre tank seçenekleri, R290 soğutucu akışkan, Wi-Fi kontrol ve yedek ısıtıcıyla 75 °C'ye kadar sıcak su desteği sunar.":
    "Thermaplus All Series is designed to meet domestic hot water needs in homes, villas, hotels, and businesses. It offers 200- and 300-liter tank options, R290 refrigerant, Wi-Fi control, and hot water up to 75°C with backup heating.",
  "Thermaplus Silent Pool Serisi; villa, bahçe ve açık havuz projelerinde su sıcaklığını dengeli biçimde korumak için geliştirilmiştir. R32 soğutucu akışkan, sessiz çalışma karakteri, titanyum eşanjör ve Wi-Fi destekli kontrol yapısıyla dört mevsim havuz konforu sağlar.":
    "Thermaplus Silent Pool Series is designed to maintain balanced water temperatures in villa, garden, and outdoor pool projects. Its R32 refrigerant, quiet operation, titanium heat exchanger, and Wi-Fi-enabled controls provide year-round pool comfort.",
  "Thermaplus Commercial Pool Serisi; otel, spor tesisi, sosyal tesis ve yüksek hacimli havuz projeleri için geliştirilmiştir. Altı kapasite seçeneği, R410A soğutucu akışkan ve PVC kabuk içinde titanyum eşanjör yapısıyla havuz suyunu kontrollü ve verimli biçimde ısıtır.":
    "Thermaplus Commercial Pool Series is designed for hotels, sports facilities, social facilities, and large-volume pool projects. Six capacity options, R410A refrigerant, and a titanium heat exchanger in a PVC shell provide controlled and efficient pool heating.",
  "Thermaplus Commercial Duo Serisi; otel, apartman, ticari tesis ve merkezi sistem projelerinde yüksek kapasiteli ısıtma, soğutma ve kullanım sıcak suyu ihtiyacı için geliştirilmiştir. R290 soğutucu akışkan, Wi-Fi kontrol ve 78 °C'ye kadar çalışma suyu desteğiyle güçlü ticari performans sunar.":
    "Thermaplus Commercial Duo Series is designed for high-capacity heating, cooling, and domestic hot water in hotels, apartment buildings, commercial facilities, and central systems. R290 refrigerant, Wi-Fi control, and water temperatures up to 78°C deliver powerful commercial performance.",
};

const phraseTranslations: Record<string, string> = {
  "Güneş santrallerinden veri merkezlerine, sanayiden konutlara: Inspur BESS ve Thermaplus Isı Pompası ile temiz enerji dönüşümü.":
    "From solar plants to data centers, from industry to homes: clean energy transformation with Inspur BESS and Thermaplus Heat Pumps.",
  "Newstag'ın kendi markası Thermaplus; Türkiye'de üretilen ısı pompası teknolojisini yerli parça, yerli mühendislik ve güçlü servis ağıyla birleştirerek konutlardan endüstriyel tesislere kadar her ölçekte verimli ısıtma, soğutma ve sıcak su konforu sunuyor.":
    "Thermaplus, Newstag's own brand, combines heat pump technology produced in Turkiye with local components, local engineering, and a strong service network to deliver efficient heating, cooling, and domestic hot water comfort from homes to industrial facilities.",
  "Enerji önce kaynaktan alınır, güç elektroniğiyle dönüştürülür, bataryada saklanır ve akıllı kontrol katmanı tarafından doğru anda sahaya geri verilir.":
    "Energy is first received from the source, converted by power electronics, stored in the battery, and sent back to the site at the right moment by the intelligent control layer.",
  "Üretim veya ucuz tarife enerjisi sisteme alınır.":
    "Generation or low-tariff energy is received into the system.",
  "AC/DC dönüşümü milisaniyeler içinde yönetilir.":
    "AC/DC conversion is managed within milliseconds.",
  "LFP hücrelerde güvenli ve ölçeklenebilir depolama yapılır.":
    "Safe and scalable storage is performed in LFP cells.",
  "Yazılım, batarya sağlığını ve enerji akışını optimize eder.":
    "Software optimizes battery health and energy flow.",
  "Enerji ihtiyaç anında tesise veya şebekeye aktarılır.":
    "Energy is transferred to the facility or grid when needed.",
  "Düşük sıcaklıklı çevre enerjisi kablo hattı boyunca taşınır; evaporatör, kompresör ve kondenser çevrimiyle kullanılabilir ısıya dönüştürülür.":
    "Low-temperature ambient energy moves along the line and is converted into usable heat through the evaporator, compressor, and condenser cycle.",
  "Havadaki, topraktaki veya sudaki düşük sıcaklıklı enerji alınır.":
    "Low-temperature energy from air, ground, or water is captured.",
  "Soğutucu akışkan ısıyı emer ve buharlaşır.":
    "The refrigerant absorbs heat and evaporates.",
  "Basınç yükselir, enerji kullanılabilir ısıya dönüşür.":
    "Pressure rises and energy turns into usable heat.",
  "Isı, suya veya iç ortama kontrollü şekilde aktarılır.":
    "Heat is transferred to water or the indoor space in a controlled way.",
  "Tek cihazla konfor ve kullanım sıcak suyu sağlanır.":
    "Comfort and domestic hot water are provided with one device.",
  "En yaygın çözüm; kurulumu basit, yatırım maliyeti düşük.":
    "The most common solution; simple to install with a low investment cost.",
  "Yüksek verim; büyük ölçekli projeler için ideal.":
    "High efficiency; ideal for large-scale projects.",
  "Göl ve nehir kenarı tesisler için optimum performans.":
    "Optimum performance for facilities near lakes and rivers.",
  "Saray Holding'in 65 yıllık kurumsal mirasını ve gücünü, enerji sektöründeki 15 yıllık üretim deneyimini ve global ortaklıklarını bir araya getiren Newstag, enerji dönüşümünüzün çözüm ortağı olmak için sizleri bekliyor.":
    "Newstag brings together Saray Holding's 65-year corporate heritage and strength, 15 years of production experience in the energy sector, and global partnerships to become your solution partner in energy transformation.",
  "Batarya enerji depolama sistemlerinde dünya devi Inspur'un Türkiye iş ortağı olarak ve kendi tescilli markamız Thermaplus ısı pompalarıyla; enerji santrallerinden sanayi tesislerine, ticari işletmelerden konutlara kadar her ölçekte verimli, güvenli ve düşük karbonlu enerji altyapıları kuruyoruz.":
    "As Inspur's partner in Turkiye for battery energy storage systems and with our registered Thermaplus heat pump brand, we build efficient, safe, and low-carbon energy infrastructure at every scale, from power plants and industrial facilities to commercial businesses and homes.",
  "Keşiften projelendirmeye, kurulumdan devreye almaya ve Türkiye genelindeki servis ağımızla kurulum sonrası desteğe kadar tüm süreci tek çatı altında yönetiyoruz.":
    "From site survey and project design to installation, commissioning, and after-sales support through our nationwide service network, we manage the entire process under one roof.",
  "Gelin, sürdürülebilir bir gelecek için enerji dönüşümünüzü bugünden başlatalım.":
    "Let’s start your energy transformation today for a sustainable future.",
  "BESS ve Isı Pompası teknolojilerini yenilenebilir enerji kaynaklarıyla entegre ederek; enerji maliyetlerini düşüren, arz güvenliğini artıran ve karbon ayak izini ölçülebilir şekilde azaltan altyapılar tasarlıyoruz. Enerji santrallerinden konutlara, her sektöre özel mühendislik yaklaşımıyla hizmet veriyoruz.":
    "By integrating BESS and heat pump technologies with renewable energy sources, we design infrastructure that lowers energy costs, improves supply security, and measurably reduces carbon footprints. From power plants to homes, we serve every sector with a tailored engineering approach.",
  "1961 yılından bu yana gıda, tarım, endüstri, ambalaj, mobilya, lojistik gibi birçok sektördeki gücünü uzun yıllar önce enerji sektörüne de taşıyan Saray Holding, sürdürülebilir gelecek vizyonuyla büyümeye devam ediyor.":
    "Since 1961, Saray Holding has built strength across many sectors—including food, agriculture, industry, packaging, furniture, and logistics—and expanded into the energy sector many years ago. Today, it continues to grow with a vision for a sustainable future.",
  "Jeotermal ve yenilenebilir enerji alanında atılan güçlü adımlarla bugün Türkiye'nin en büyük yenilenebilir enerji üreticileri arasında olan Saray, Newstag markası altında batarya enerji depolama sistemleri (BESS) ve ısı pompası çözümleriyle enerji sektöründeki hizmet gamını genişleterek sürdürülebilir geleceğe olan katkılarını taçlandırıyor.":
    "Now among Turkiye's largest renewable energy producers following major investments in geothermal and renewable energy, Saray is expanding its energy services under the Newstag brand with battery energy storage systems (BESS) and heat pump solutions, further strengthening its contribution to a sustainable future.",
};

const wordTranslations: Record<string, string> = {
  Ağ: "Network",
  Ağı: "Network",
  Akış: "Flow",
  Akışı: "Flow",
  Akıllı: "Smart",
  Alınır: "Captured",
  Ana: "Main",
  Arıza: "Fault",
  Atık: "Waste",
  Bağımsızlık: "Independence",
  Bağlantı: "Connection",
  Bakım: "Maintenance",
  Basınç: "Pressure",
  Batarya: "Battery",
  Bilişim: "IT",
  Birlikte: "Together",
  Bugün: "Today",
  Çalışır: "Works",
  Çalışma: "Operation",
  Çalışması: "Work",
  Çatı: "Rooftop",
  Çevre: "Environment",
  Çevreci: "Green",
  Çevrim: "Cycle",
  Çıkış: "Outlet",
  Çözüm: "Solution",
  Çözümleri: "Solutions",
  Çözümü: "Solution",
  Değer: "Value",
  Değerlerimiz: "Values",
  Değil: "Not",
  Depolama: "Storage",
  Devreye: "Commissioning",
  Dış: "Outdoor",
  Doğalgaz: "Natural Gas",
  Doğru: "Right",
  Dön: "Back",
  Dönüş: "Return",
  Dönüşüm: "Transformation",
  Dönüşümü: "Transformation",
  Dönüşümünün: "Transformation",
  Dönüşümünüzün: "Your Transformation",
  Düşük: "Low",
  Dünya: "World",
  Dünyasının: "World",
  Elde: "Delivered",
  Ekonomik: "Economical",
  Elektrik: "Electricity",
  Enerji: "Energy",
  Enerjisi: "Energy",
  Enerjiyi: "Energy",
  Enerjiniz: "Your Energy",
  Esnekliği: "Flexibility",
  Faydalar: "Benefits",
  Faydaları: "Benefits",
  Fiyatları: "Prices",
  Fiyatlı: "Priced",
  Gelecek: "Future",
  Geleceği: "Future",
  Genel: "Head",
  Geniş: "Wide",
  Gıda: "Food",
  Gönder: "Send",
  Güç: "Power",
  Gücü: "Power",
  Güçlü: "Strong",
  Güven: "Trust",
  Güvencesi: "Assurance",
  Güvenliği: "Security",
  Güvenli: "Safe",
  Hakkımızda: "About Us",
  Haritası: "Map",
  Hava: "Air",
  Havuz: "Pool",
  Her: "Every",
  Hizmet: "Service",
  Hücrelerde: "Cells",
  İç: "Indoor",
  İçin: "For",
  İhtiyaç: "Need",
  İhtiyaca: "Need",
  İletişim: "Contact",
  İletişime: "Contact",
  İncele: "View",
  İnşa: "Build",
  İş: "Business",
  İşletmeler: "Businesses",
  Isı: "Heat",
  Isıtma: "Heating",
  Kalitesi: "Quality",
  Kanıtlanmış: "Proven",
  Kapasite: "Capacity",
  Kapsamı: "Scope",
  Karbon: "Carbon",
  Kaydırın: "Scroll",
  Kaynaklı: "Source",
  Keşfedin: "Discover",
  Keşfetmek: "Explore",
  Kesinti: "Outage",
  Kısıtını: "Limit",
  Kısıtlı: "Limited",
  Kompanzasyonu: "Compensation",
  Konfor: "Comfort",
  Konforu: "Comfort",
  Konut: "Residential",
  Konutlar: "Homes",
  Kontrol: "Control",
  Kullanan: "Using",
  Kullanılabilir: "Usable",
  Kullanım: "Usage",
  Kurulum: "Installation",
  Kurumsal: "Corporate",
  Lider: "Leader",
  Markalarımız: "Our Brands",
  Markası: "Brand",
  Merkezi: "Center",
  Merkezleri: "Centers",
  Miras: "Heritage",
  Mirası: "Heritage",
  Mirasını: "Heritage",
  Mükemmellik: "Excellence",
  Nasıl: "How",
  Nesil: "Generation",
  Noktaları: "Locations",
  Olan: "With",
  Ortağı: "Partner",
  Ortaklık: "Partnership",
  Özel: "Tailored",
  Pompası: "Pump",
  Proje: "Project",
  Projeniz: "Your Project",
  Reaktif: "Reactive",
  Sağlanır: "Provided",
  Sağlar: "Provides",
  Sahadayız: "In the Field",
  Sanayi: "Industry",
  Satış: "Sales",
  Seçenekleri: "Options",
  Seçimi: "Selection",
  Serileri: "Series",
  Servis: "Service",
  Sıcak: "Hot",
  Sıcaklıklı: "Temperature",
  Sınıfı: "Class",
  Sınırlı: "Limited",
  Sistemi: "System",
  Sistem: "System",
  Soğutma: "Cooling",
  Soğutmalı: "Cooled",
  Süreci: "Process",
  Süreklilik: "Continuity",
  Sürdürülebilir: "Sustainable",
  Sürdürülebilirlik: "Sustainability",
  Şarj: "Charging",
  Şebeke: "Grid",
  Şebekeye: "Grid",
  Şebekenin: "Grid",
  Taşıyın: "Carry",
  Taşınabilir: "Portable",
  Tasarruf: "Savings",
  Teknoloji: "Technology",
  Teknolojisi: "Technology",
  Temiz: "Clean",
  Tescilli: "Registered",
  Ticari: "Commercial",
  Toprak: "Ground",
  Türkiye: "Turkiye",
  Ulaşın: "Us",
  Uygulama: "Application",
  Üreticisi: "Manufacturer",
  Üretim: "Production",
  Ürün: "Product",
  Ürünleri: "Products",
  Ürünler: "Products",
  Verimli: "Efficient",
  Verimlilik: "Efficiency",
  Verimliliği: "Efficiency",
  Veri: "Data",
  Vizyonumuz: "Our Vision",
  Yaklaşım: "Approach",
  Yan: "Additional",
  Yap: "Log Out",
  Yaratan: "Creating",
  Yedek: "Backup",
  Yeni: "Next",
  Yerli: "Local",
  Yıllık: "Years of",
  Yıl: "Years",
  Yönetimi: "Management",
  Yük: "Load",
  Yüksek: "High",
};

const lowercaseWordTranslations: Record<string, string> = {
  acil: "emergency",
  akışkan: "refrigerant",
  aralığı: "range",
  ağırlık: "weight",
  destekli: "enabled",
  eşanjör: "heat exchanger",
  hacimleri: "volumes",
  litre: "liter",
  modeli: "model",
  seviyesi: "level",
  soğutucu: "refrigerant",
  sıcaklık: "temperature",
  tank: "tank",
  tavsiye: "recommended",
  ağ: "network",
  ağı: "network",
  akış: "flow",
  akışı: "flow",
  akıllı: "smart",
  alan: "area",
  alanı: "area",
  alanında: "in the field",
  alınır: "is captured",
  altında: "under",
  ana: "main",
  anında: "when needed",
  arıza: "fault",
  asla: "never",
  atık: "waste",
  bağımlılığını: "dependence",
  bağımsızlık: "independence",
  bağlantı: "connection",
  bakım: "maintenance",
  basınç: "pressure",
  batarya: "battery",
  bekleme: "waiting",
  beraber: "together",
  beri: "since",
  bile: "even",
  bilişim: "IT",
  binadan: "from the building",
  bir: "a",
  birimi: "unit",
  birim: "unit",
  birlikte: "together",
  bizimle: "with us",
  bugün: "today",
  büyük: "large",
  çalışır: "works",
  çalışma: "operation",
  çalışması: "work",
  çalışan: "working",
  çatısı: "roof",
  çevre: "environment",
  çevredeki: "ambient",
  çevreci: "green",
  çevrim: "cycle",
  çıkış: "outlet",
  çok: "very",
  çünkü: "because",
  çözüm: "solution",
  çözümleri: "solutions",
  çözümü: "solution",
  da: "also",
  daha: "more",
  de: "also",
  değer: "value",
  değeri: "value",
  değerlerimiz: "values",
  değil: "not",
  demir: "iron",
  depolama: "storage",
  depolanır: "is stored",
  destek: "support",
  desteği: "support",
  detayları: "details",
  devreye: "commissioning",
  dış: "outdoor",
  dijital: "digital",
  doğru: "right",
  doğalgaz: "natural gas",
  dön: "back",
  dönüş: "return",
  dönüşüm: "transformation",
  dönüşümü: "transformation",
  dönüşümünde: "in transformation",
  dönüşümünün: "transformation",
  dönüşümünüzde: "in your transformation",
  dönüşümünüzün: "your transformation",
  dönüştürülür: "is converted",
  düşük: "low",
  dünya: "world",
  dünyanın: "world's",
  dünyasının: "world",
  eden: "that",
  eder: "does",
  edelim: "let's",
  elde: "delivered",
  elektrik: "electricity",
  elektrikli: "electric",
  ekonomik: "economical",
  emer: "absorbs",
  enerji: "energy",
  enerjisi: "energy",
  enerjisini: "energy",
  enerjiyi: "energy",
  enerjiniz: "your energy",
  enerjinizin: "your energy",
  entegre: "integrated",
  erişilebilir: "accessible",
  esnekliği: "flexibility",
  et: "request",
  edilen: "delivered",
  faydalar: "benefits",
  faydaları: "benefits",
  fiyatları: "prices",
  fiyatlı: "priced",
  fosil: "fossil",
  geçin: "get",
  geleceğe: "future",
  geleceği: "future",
  gelecek: "future",
  genel: "head",
  geniş: "wide",
  geri: "back",
  gibi: "like",
  giderinde: "expense",
  göl: "lake",
  gönder: "send",
  göre: "according to",
  görüşme: "meeting",
  güç: "power",
  gücü: "power",
  güçlü: "strong",
  güven: "trust",
  güvencesi: "assurance",
  güvenli: "safe",
  güvenliği: "security",
  haber: "news",
  hakkımızda: "about us",
  haritası: "map",
  hassas: "precision",
  hata: "error",
  hava: "air",
  havuz: "pool",
  hem: "both",
  her: "every",
  hizmet: "service",
  hızlı: "fast",
  hücrelerde: "in cells",
  iç: "indoor",
  için: "for",
  ihtiyaca: "need",
  ihtiyacını: "need",
  ihtiyaç: "need",
  iki: "two",
  ile: "with",
  iletişim: "contact",
  iletişime: "contact",
  inşa: "build",
  incele: "view",
  iş: "business",
  işletmeler: "businesses",
  işleyiş: "operation",
  işte: "here",
  ısı: "heat",
  ısıtma: "heating",
  kalitesi: "quality",
  kanıtlanmış: "proven",
  kapasite: "capacity",
  kapsamı: "scope",
  karbon: "carbon",
  katmanı: "layer",
  katmanından: "layer",
  kaynaklı: "source",
  kaydırın: "scroll",
  keşfetmek: "explore",
  keşfedin: "discover",
  keşif: "survey",
  kesinti: "outage",
  kilit: "key",
  kondenser: "condenser",
  konfor: "comfort",
  konforu: "comfort",
  konut: "residential",
  konutlar: "homes",
  kontrol: "control",
  kurulum: "installation",
  kurumsal: "corporate",
  kullanılabilir: "usable",
  kullanım: "usage",
  kullanımı: "usage",
  lider: "leader",
  markalarımız: "our brands",
  markası: "brand",
  mekan: "outdoor",
  mekân: "outdoor",
  merkezi: "center",
  merkezleri: "centers",
  miras: "heritage",
  mirası: "heritage",
  mirasını: "heritage",
  mükemmellik: "excellence",
  nasıl: "how",
  ne: "what",
  neden: "why",
  nehir: "river",
  nesil: "generation",
  noktaları: "locations",
  olan: "with",
  olarak: "as",
  olmayan: "without",
  operasyon: "operation",
  oranda: "rate",
  ortam: "environment",
  ortama: "space",
  ortağı: "partner",
  ortaklığı: "partnership",
  ortaklık: "partnership",
  ölçekte: "scale",
  ölççeklenebilir: "scalable",
  özel: "tailored",
  pompası: "pump",
  portföyü: "portfolio",
  proje: "project",
  projeniz: "your project",
  reaktif: "reactive",
  saha: "field",
  sahada: "in the field",
  sahadayız: "in the field",
  sağlanır: "is provided",
  sağlar: "provides",
  sanayi: "industry",
  saray: "Saray",
  satış: "sales",
  seçenekleri: "options",
  seçimi: "selection",
  serileri: "series",
  servis: "service",
  sıcak: "hot",
  sıcaklığı: "temperature",
  sıcaklıklı: "temperature",
  sınıfı: "class",
  sınırlı: "limited",
  sistemi: "system",
  sistem: "system",
  soğutma: "cooling",
  soğutmalı: "cooled",
  solüsyon: "solution",
  sonrasında: "after",
  su: "water",
  süre: "time",
  süreci: "process",
  sürekli: "continuous",
  süreklilik: "continuity",
  sürdürülebilir: "sustainable",
  sürdürülebilirlik: "sustainability",
  şarj: "charging",
  şebeke: "grid",
  şebekeye: "grid",
  şebekenin: "grid",
  taçlanıyor: "is strengthened",
  talep: "request",
  taşıyın: "carry",
  taşınır: "moves",
  taşınabilir: "portable",
  tasarruf: "savings",
  teknoloji: "technology",
  teknolojisi: "technology",
  teknik: "technical",
  temiz: "clean",
  tescilli: "registered",
  ticari: "commercial",
  toprak: "ground",
  tüm: "all",
  türkiye: "Turkiye",
  ucuz: "low-cost",
  ulaşın: "us",
  uygun: "suitable",
  uygulama: "application",
  üreticisi: "manufacturer",
  üretim: "production",
  ürün: "product",
  ürünleri: "products",
  ürünler: "products",
  varan: "up to",
  ve: "and",
  veren: "providing",
  veri: "data",
  verimli: "efficient",
  verimlilik: "efficiency",
  verimliliği: "efficiency",
  vizyonumuz: "our vision",
  yakıt: "fuel",
  yaklaşım: "approach",
  yan: "additional",
  yaratan: "creating",
  yeni: "next",
  yerli: "local",
  yıl: "years",
  yılda: "per year",
  yıllık: "years of",
  yönetilir: "managed",
  yönetimi: "management",
  yük: "load",
  yüksek: "high",
  yüzde: "percent",
};

const turkishStemTranslations: Array<[string, string]> = [
  ["ağır", "heavy"],
  ["akıll", "smart"],
  ["akış", "flow"],
  ["alışveriş", "shopping"],
  ["ambalaj", "packaging"],
  ["arıza", "fault"],
  ["artır", "increase"],
  ["azalt", "reduce"],
  ["bağlant", "connection"],
  ["bağıml", "dependent"],
  ["bakım", "maintenance"],
  ["başar", "success"],
  ["batarya", "battery"],
  ["bilgisayar", "computer"],
  ["bilişim", "IT"],
  ["bina", "building"],
  ["birikim", "expertise"],
  ["birleştir", "combine"],
  ["borsa", "stock exchange"],
  ["boyler", "boiler"],
  ["bölge", "region"],
  ["buhar", "steam"],
  ["büyü", "grow"],
  ["cihaz", "device"],
  ["çalış", "operation"],
  ["çatı", "rooftop"],
  ["çevir", "convert"],
  ["çevre", "environment"],
  ["çıkış", "outlet"],
  ["çöz", "solution"],
  ["dahil", "included"],
  ["dayan", "durable"],
  ["değer", "value"],
  ["deneyim", "experience"],
  ["denge", "balance"],
  ["depol", "storage"],
  ["destek", "support"],
  ["devre", "commission"],
  ["değirmen", "mill"],
  ["değiş", "change"],
  ["dön", "return"],
  ["dönüş", "transformation"],
  ["düş", "low"],
  ["dünya", "world"],
  ["ekip", "team"],
  ["ekonom", "economical"],
  ["elektr", "electric"],
  ["emisyon", "emission"],
  ["enerji", "energy"],
  ["eriş", "access"],
  ["esnek", "flexible"],
  ["etkinlik", "event"],
  ["fark", "difference"],
  ["fatura", "bill"],
  ["fiyat", "price"],
  ["geçmiş", "past"],
  ["gelece", "future"],
  ["geniş", "wide"],
  ["gerilim", "voltage"],
  ["gerekl", "required"],
  ["gıda", "food"],
  ["göl", "lake"],
  ["gönder", "send"],
  ["gör", "view"],
  ["gürült", "noise"],
  ["güç", "power"],
  ["gün", "day"],
  ["güneş", "solar"],
  ["güven", "security"],
  ["hacim", "volume"],
  ["haber", "news"],
  ["hafif", "lightweight"],
  ["harca", "consume"],
  ["hassas", "precision"],
  ["hava", "air"],
  ["havuz", "pool"],
  ["hedef", "target"],
  ["hesap", "calculation"],
  ["hizmet", "service"],
  ["hız", "speed"],
  ["hücre", "cell"],
  ["ihtiyaç", "need"],
  ["iklim", "climate"],
  ["iklimlendirme", "climate control"],
  ["ileti", "contact"],
  ["imkân", "opportunity"],
  ["inovasyon", "innovation"],
  ["inşa", "build"],
  ["istasyon", "station"],
  ["işlet", "business"],
  ["işlem", "transaction"],
  ["ısı", "heat"],
  ["ısıt", "heating"],
  ["kalite", "quality"],
  ["kapasite", "capacity"],
  ["karbon", "carbon"],
  ["karşı", "meet"],
  ["katkı", "contribution"],
  ["kazan", "gain"],
  ["keş", "survey"],
  ["kesinti", "outage"],
  ["kısıt", "constraint"],
  ["kıyas", "comparison"],
  ["konfor", "comfort"],
  ["konut", "residential"],
  ["koru", "protect"],
  ["kullan", "use"],
  ["kur", "install"],
  ["kurulum", "installation"],
  ["kurumsal", "corporate"],
  ["küçült", "reduce"],
  ["küresel", "global"],
  ["lisans", "license"],
  ["lokasyon", "location"],
  ["maden", "mine"],
  ["maliyet", "cost"],
  ["marka", "brand"],
  ["merkez", "center"],
  ["mimar", "architecture"],
  ["miras", "heritage"],
  ["mühendis", "engineering"],
  ["müşteri", "customer"],
  ["nehr", "river"],
  ["nesil", "generation"],
  ["nokta", "location"],
  ["odak", "focus"],
  ["ölçek", "scale"],
  ["ömür", "life"],
  ["önle", "prevent"],
  ["operasyon", "operation"],
  ["ortak", "partner"],
  ["özel", "tailored"],
  ["parça", "component"],
  ["paz", "market"],
  ["perakende", "retail"],
  ["performans", "performance"],
  ["proje", "project"],
  ["proses", "process"],
  ["regülasyon", "regulation"],
  ["sağ", "provide"],
  ["saha", "field"],
  ["sanayi", "industry"],
  ["satış", "sales"],
  ["seç", "select"],
  ["senaryo", "scenario"],
  ["seri", "series"],
  ["servis", "service"],
  ["sertifika", "certificate"],
  ["sessiz", "silent"],
  ["sıcak", "hot"],
  ["sıfır", "zero"],
  ["sınıf", "class"],
  ["sınır", "limited"],
  ["sistem", "system"],
  ["soğut", "cooling"],
  ["süre", "time"],
  ["sürdür", "sustainable"],
  ["şarj", "charging"],
  ["şebeke", "grid"],
  ["taşı", "carry"],
  ["tasarruf", "savings"],
  ["teknik", "technical"],
  ["teknoloji", "technology"],
  ["temiz", "clean"],
  ["tescil", "registered"],
  ["tesis", "facility"],
  ["ticari", "commercial"],
  ["toprak", "ground"],
  ["tüket", "consumption"],
  ["türk", "Turkish"],
  ["uçtan", "end-to-end"],
  ["ulaş", "reach"],
  ["uygul", "application"],
  ["uyum", "compliance"],
  ["uzak", "remote"],
  ["uzman", "expert"],
  ["üret", "production"],
  ["ürün", "product"],
  ["veri", "data"],
  ["verim", "efficiency"],
  ["villa", "villa"],
  ["vizyon", "vision"],
  ["yakıt", "fuel"],
  ["yaklaş", "approach"],
  ["yaşam", "life"],
  ["yatırım", "investment"],
  ["yedek", "backup"],
  ["yenilenebilir", "renewable"],
  ["yerli", "local"],
  ["yeşil", "green"],
  ["yıl", "year"],
  ["yön", "direction"],
  ["yük", "load"],
  ["yüksek", "high"],
];

const originalText = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Map<string, string>>();
let isApplyingTranslation = false;

const cleanSentenceTranslations: Record<string, string> = {
  "COP: 1 birim elektrikten 3-5 birim ısı": "COP: 3-5 units of heat from 1 unit of electricity",
  "Yıllık enerji giderinde tasarruf potansiyeli": "Annual energy cost saving potential",
  "ERP enerji verimliliği sınıfı": "ERP energy efficiency class",
  "Endüstriyel serilerde çıkış suyu sıcaklığı": "Outlet water temperature in industrial series",
  "Dış Hava": "Outdoor Air",
  "Havadaki, topraktaki veya sudaki düşük sıcaklıklı enerji alınır.": "Low-temperature energy is captured from air, ground, or water.",
  "Soğutucu akışkan ısıyı emer ve buharlaşır.": "The refrigerant absorbs heat and evaporates.",
  "Basınç yükselir, enerji kullanılabilir ısıya dönüşür.": "Pressure rises and the energy becomes usable heat.",
  "Isı, suya veya iç ortama kontrollü şekilde aktarılır.": "Heat is transferred to water or the indoor space in a controlled way.",
  "Isıtma / Soğutma / Sıcak Su": "Heating / Cooling / Hot Water",
  "Tek cihazla konfor ve kullanım sıcak suyu sağlanır.": "One unit provides comfort and domestic hot water.",
  "Hava Kaynaklı": "Air Source",
  "En yaygın çözüm; kurulumu basit, yatırım maliyeti düşük.": "The most common solution, with simple installation and low investment cost.",
  "Dış Ünite · Kondenser": "Outdoor Unit · Condenser",
  "Dış Ünite · Evaporatör": "Outdoor Unit · Evaporator",
  "İç Ünite · Evaporatör": "Indoor Unit · Evaporator",
  "Boyler Eşanjörü": "Boiler Heat Exchanger",
  "İç Ünite · Kondenser": "Indoor Unit · Condenser",
  "Dış ortama ısı verir": "Releases heat outdoors",
  "Havadan ısı alır": "Captures heat from air",
  "İç ortamdan ısı alır": "Captures heat from indoors",
  "Isıyı aktarır": "Transfers heat",
  "Isıtma": "Heating",
  "Soğutma": "Cooling",
  "Kullanım Suyu": "Domestic Hot Water",
  "Soğutucu Akışkan Döngüsü": "Refrigerant Cycle",
  "Modu değiştirerek enerji akış yönünü inceleyin": "Switch modes to view the energy flow direction",
  "Dış Sıcaklık": "Outdoor Temperature",
  "Su Sıcaklığı": "Water Temperature",
  "İç Ortam": "Indoor Space",
  "Dış sıcaklık": "Outdoor temperature",
  "Soğutma döngüsü:": "Cooling cycle:",
  "Kullanım suyu döngüsü:": "Domestic hot water cycle:",
  "Isıtma döngüsü:": "Heating cycle:",
  "İç üniteden alınan ısı soğutucu akışkana aktarılır, kompresör ve dış ünite üzerinden dış ortama bırakılır.": "Heat taken from the indoor unit is transferred to the refrigerant, then released outdoors through the compressor and outdoor unit.",
  "Dış havadan alınan düşük sıcaklıklı enerji kompresörle yükseltilir ve kullanım suyuna aktarılır.": "Low-temperature energy from outdoor air is raised by the compressor and transferred to domestic hot water.",
  "Dış evaporatör havadan ısı çeker, kompresör akışkan sıcaklığını yükseltir ve iç kondenser ısıyı ortama aktarır.": "The outdoor evaporator draws heat from the air, the compressor raises the refrigerant temperature, and the indoor condenser transfers heat to the space.",
  "Dış Ortam": "Outdoor Space",
  "Kompresör": "Compressor",
  "Basınç ↑ · Sıcaklık ↑": "Pressure Up · Temperature Up",
  "Su Devresi": "Water Circuit",
  "Genleşme Valfi": "Expansion Valve",
  "Basınç ↓ · Sıcaklık ↓": "Pressure Down · Temperature Down",
  "Yüksek basınç / sıcak gaz": "High pressure / hot gas",
  "Yüksek basınç / sıvı": "High pressure / liquid",
  "Düşük basınç / soğuk gaz": "Low pressure / cold gas",
  "Yüksek Enerji Tasarrufu": "High Energy Savings",
  "Doğalgazın 3-5 katı verimlilik ile işletme ve konut enerji giderlerini belirgin şekilde düşürür.": "It significantly reduces business and residential energy costs with 3-5 times the efficiency of natural gas.",
  "3'ü 1 Arada Tek Sistem": "Three Functions in One System",
  "Isıtma, soğutma ve sıcak su ihtiyacını tek sistemle karşılar; ayrı sistemlerin kurulum ve bakım maliyetinden kurtarır.": "It covers heating, cooling, and hot water with one system, reducing separate installation and maintenance costs.",
  "Fosil Yakıttan Bağımsızlık": "Independence from Fossil Fuels",
  "Fiyatı öngörülemez hale gelen doğalgaz bağımlılığını kırar; karbon ayak izini azaltır.": "It reduces dependence on unpredictable natural gas prices and lowers the carbon footprint.",
  "Atık Isı Değerlendirme": "Waste Heat Recovery",
  "Uygun projelerde tesisteki atık ısıyı yeniden kullanarak toplam verimliliği artırır.": "In suitable projects, it reuses waste heat from the facility and improves total efficiency.",
  "Konut ve ticari havuzlarda sezonu uzatır; 500 m³'e kadar havuzlarda sıcak havuz konforu sağlar.": "It extends the season for residential and commercial pools and provides warm pool comfort up to 500 m³.",
  "Akıllı Kontrol": "Smart Control",
  "Wi-Fi, LCD panel ve otomasyon seçenekleriyle sistem performansını izlenebilir hale getirir.": "Wi-Fi, LCD panel, and automation options make system performance easy to monitor.",
  "Türkiye'de üretilen ısı pompası teknolojisi": "Heat pump technology produced in Turkiye",
  "Yerli parça, yerli mühendislik ve güçlü servis ağı": "Local components, local engineering, and a strong service network",
  "Konut, havuz ve endüstriyel seri seçenekleri": "Residential, pool, and industrial series options",
  "GES ve BESS ile entegre, düşük karbonlu kullanım senaryoları": "Low-carbon use cases integrated with solar PV and BESS",
  "A+++ enerji etiketi ile bina enerji pasaportu değerine katkı": "A+++ energy label contribution to building energy performance",
  "8 KW’dan yüksek kapasiteli sanayi projelerine uzanan geniş güç aralığı": "Wide power range from 8 KW to high-capacity industrial projects",
  "Isıtma, soğutma ve kullanım sıcak suyu için 8-35 KW inverter monoblok çözümler ve boyler uyumlu seriler.": "8-35 KW inverter monoblock solutions and boiler-compatible series for heating, cooling, and domestic hot water.",
  "15 m³ villa havuzlarından 500 m³ ticari havuzlara kadar korozyona dayanıklı, sessiz ısıtma çözümleri.": "Quiet, corrosion-resistant heating solutions from 15 m³ villa pools to 500 m³ commercial pools.",
  "78 °C’ye varan çalışma suyu ve kaskad sistem yapısı ile büyük kapasiteli projelere yönelik çözümler.": "Solutions for high-capacity projects with operating water up to 78 °C and cascade system architecture.",
  "Temiz Isı Teknolojisi": "Clean Heat Technology",
  "Thermaplus Isı Pompası": "Thermaplus Heat Pump",
  "Çevreci, verimli, ekonomik. Isı pompası; çevredeki havadan, topraktan veya sudan aldığı enerjiyi ısıtma ve soğutma sistemine aktaran elektrikli bir cihazdır. Kışın ısıtır, yazın soğutur; üstelik kullanım sıcak suyu da üretir.": "Eco-friendly, efficient, and economical. A heat pump is an electric system that transfers energy from ambient air, ground, or water into heating and cooling. It heats in winter, cools in summer, and also produces domestic hot water.",
  "Ürünleri İncele": "View Products",
  "Markayı Tanıyın": "Discover the Brand",
  "Thermaplus ısı pompası": "Thermaplus heat pump",
  "COP (Verimlilik Katsayısı): Isı pompası 1 birim elektrik harcayarak 3-5 birim ısıtma enerjisi üretir. Bu, doğalgaza göre 3-5 kat verimlilik ve yılda %75'e varan tasarruf anlamına gelir.": "COP means coefficient of performance. A heat pump can produce 3-5 units of heating energy from 1 unit of electricity. This means 3-5 times higher efficiency than natural gas and up to 75% annual savings.",
  "Isı Enerjisi Akışı": "Heat Energy Flow",
  "Isı Pompası Nasıl Çalışır?": "How Does a Heat Pump Work?",
  "Düşük sıcaklıklı çevre enerjisi kablo hattı boyunca taşınır; evaporatör, kompresör ve kondenser çevrimiyle kullanılabilir ısıya dönüştürülür.": "Low-temperature ambient energy moves through the cycle and is converted into usable heat by the evaporator, compressor, and condenser.",
  "Isı Pompası ile Elde Edilen Faydalar": "Benefits of Heat Pumps",
  "Thermaplus entegre enerji çözümü": "Thermaplus integrated energy solution",
  "Newstag'ın Tescilli Markası": "Newstag's Registered Brand",
  "Neden Thermaplus?": "Why Thermaplus?",
  "Thermaplus Ürün Gamı": "Thermaplus Product Range",
  "Konut, havuz ve endüstriyel ihtiyaçlara göre gruplanmış seriler.": "Series grouped by residential, pool, and industrial needs.",
  "Konut Serileri": "Residential Series",
  "Havuz Serileri": "Pool Series",
  "Endüstriyel Seriler": "Industrial Series",
  "Detayları İncele": "View Details",
  "Kapasite Hesaplama Simülatörü": "Capacity Calculation Simulator",
  "Mevcut yapı ve sistem bilgilerinizi simülatörümüze girerek, ısı pompası ile sağlanacak tahmini tasarruf oranını hesaplayabilir, ihtiyaç duyulan kapasite ve ürün önerimizi görebilirsiniz. Dilerseniz hesaplama sonunda bilgilerinizi teknik ekibimizle paylaşarak teklif alabilirsiniz.": "Enter your existing building and system information into our simulator to calculate the estimated savings rate provided by a heat pump, and view the required capacity and our product recommendation. At the end of the calculation, you can share your information with our technical team to request an offer.",
  "Hesaplama Yapın": "Calculate Now",
  "Uzmana Danışın": "Talk to an Expert",
  "Isı Pompası Ürünlerine Dön": "Back to Heat Pump Products",
  "Kapasite Seçenekleri": "Capacity Options",
  "Model Karşılaştırma": "Model Comparison",
  "Teknik Özellikler": "Technical Specifications",
  "Projenize uygun kapasiteyi temel performans değerleriyle karşılaştırın.": "Compare key performance values to choose the right capacity for your project.",
  "Teknik değer": "Technical value",
  "Ürünün Kullanıldığı Çözüm Alanları": "Solution Areas Using This Product",
  "Doğru Model Seçimi": "Choosing the Right Model",
  "Isı pompası kapasitesi; bina büyüklüğü, yalıtım durumu, bölge iklimi, sıcak su ve havuz ihtiyacına göre belirlenir. Uzman ekibimiz ücretsiz keşif ile ihtiyacınıza en uygun Thermaplus modelini önerir.": "Heat pump capacity depends on building size, insulation, regional climate, hot water, and pool needs. Our expert team recommends the right Thermaplus model after a free survey.",
  "Ücretsiz Keşif Talep Et": "Request a Free Survey",
  "Ürün Kataloğunu Talep Et": "Request Product Catalog",
  "Aynı Serideki Diğer Ürünler": "Other Products in the Same Series",
  "İncele": "View",
};

const forcedWordTranslations: Record<string, string> = {
  ana: "main",
  ağı: "network",
  akış: "flow",
  akışı: "flow",
  akışkan: "refrigerant",
  alınan: "captured",
  alınır: "captured",
  aralığı: "range",
  araç: "vehicle",
  artırır: "increases",
  atık: "waste",
  bağlantı: "connection",
  bakım: "maintenance",
  basınç: "pressure",
  bağımlılığı: "dependency",
  bağımsızlık: "independence",
  belirgin: "significant",
  birlikte: "together",
  bina: "building",
  bir: "one",
  birim: "unit",
  boyler: "boiler",
  bölümünde: "part",
  büyük: "large",
  cihaz: "device",
  cihazla: "device",
  çalışma: "operation",
  çalışır: "works",
  çalışan: "operating",
  çevreci: "eco-friendly",
  çevredeki: "ambient",
  çevrimiyle: "cycle",
  çıkış: "outlet",
  çok: "multi",
  çözüm: "solution",
  çözümleri: "solutions",
  çözümlerimiz: "solutions",
  dayanıklı: "resistant",
  değer: "value",
  değerleriyle: "values",
  değerine: "value",
  değerlendirir: "evaluates",
  değerlendirme: "recovery",
  değiştirerek: "changing",
  dengeleme: "balancing",
  dengeli: "balanced",
  depolama: "storage",
  desteği: "support",
  detayları: "details",
  devam: "continue",
  devresi: "circuit",
  dış: "outdoor",
  doğalgaz: "natural gas",
  doğal: "natural",
  doğru: "right",
  dön: "back",
  dönüş: "return",
  dönüşümü: "transformation",
  dönüştürülür: "converted",
  dört: "four",
  düşük: "low",
  düşürür: "reduces",
  ekonomi: "economy",
  ekonomik: "economical",
  elektrikten: "electricity",
  enerji: "energy",
  enerjisi: "energy",
  enerjiyi: "energy",
  endüstriyel: "industrial",
  eşanjör: "heat exchanger",
  eşanjörü: "heat exchanger",
  et: "request",
  edilen: "delivered",
  etmek: "request",
  fiyatlı: "priced",
  fosil: "fossil",
  geç: "switch",
  geçen: "past",
  geçin: "contact",
  geleceğe: "future",
  genelinde: "across",
  genleşme: "expansion",
  geniş: "wide",
  geri: "back",
  giderinde: "expenses",
  göre: "according to",
  görüşme: "meeting",
  güç: "power",
  güçlü: "strong",
  güvenliği: "security",
  hava: "air",
  havadan: "from air",
  havuz: "pool",
  havuzlarından: "pools",
  hesaplama: "calculator",
  hesaplayan: "calculating",
  hizmet: "service",
  ısı: "heat",
  ısıtma: "heating",
  ısıtır: "heats",
  ihtiyacına: "need",
  ihtiyacını: "need",
  ihtiyaçlara: "needs",
  ile: "with",
  iletişim: "contact",
  inceledin: "viewed",
  incele: "view",
  işletme: "business",
  işletmeler: "businesses",
  iç: "indoor",
  için: "for",
  kalın: "bold",
  kapasite: "capacity",
  kapasitesi: "capacity",
  karşılar: "meets",
  karşılaştırma: "comparison",
  karşılaştırın: "compare",
  katı: "times",
  kaynaklı: "source",
  kadar: "up to",
  keşif: "survey",
  kışın: "in winter",
  konfor: "comfort",
  konforu: "comfort",
  konut: "residential",
  kontrol: "control",
  kontrollü: "controlled",
  korozyona: "corrosion",
  kullanıldığı: "used",
  kullanılabilir: "usable",
  kullanım: "domestic",
  kurulum: "installation",
  maliyetinden: "cost",
  marka: "brand",
  markalarımız: "our brands",
  markayı: "brand",
  mevsim: "season",
  mevcut: "existing",
  model: "model",
  modeli: "model",
  modülümüz: "module",
  nokta: "site",
  olan: "with",
  olarak: "as",
  ortam: "environment",
  ortama: "environment",
  pompası: "pump",
  potansiyeli: "potential",
  proje: "project",
  projelerde: "projects",
  proses: "process",
  sağlanır: "provided",
  sağlar: "provides",
  sanayi: "industry",
  seferde: "single",
  seçim: "selection",
  seçimi: "selection",
  seçenekleri: "options",
  seçenekleriyle: "options",
  serideki: "series",
  seriler: "series",
  serileri: "series",
  serisi: "series",
  servis: "service",
  sessiz: "silent",
  sıcak: "hot",
  sıcaklığı: "temperature",
  sıcaklıklı: "temperature",
  sınıfı: "class",
  sıvı: "liquid",
  sistem: "system",
  sistemi: "system",
  soğuk: "cold",
  soğutma: "cooling",
  soğutucu: "refrigerant",
  sunar: "delivers",
  su: "water",
  suyu: "water",
  süreklilik: "continuity",
  sürdürülebilir: "sustainable",
  şarj: "charging",
  şebeke: "grid",
  taşı: "portable",
  tasarruf: "savings",
  teknoloji: "technology",
  teknolojisi: "technology",
  teknik: "technical",
  temiz: "clean",
  tescilli: "registered",
  ticari: "commercial",
  topraktan: "from ground",
  türkçe: "Turkish",
  türkiye: "Turkiye",
  ücretsiz: "free",
  ünite: "unit",
  üniteden: "unit",
  ünitesi: "unit",
  üretim: "production",
  üretir: "produces",
  ürün: "product",
  ürünü: "product",
  ürünler: "products",
  ürünleri: "products",
  ürünlerine: "products",
  üzerindeki: "on",
  üzerinden: "through",
  uzanan: "ranging",
  uzatır: "extends",
  uzman: "expert",
  ve: "and",
  verim: "efficiency",
  verimli: "efficient",
  verimlilik: "efficiency",
  verimliliği: "efficiency",
  yakıt: "fuel",
  yakın: "soon",
  yakında: "soon",
  yıllık: "annual",
  yılda: "per year",
  yönünü: "direction",
  yüksek: "high",
  yüzey: "surface",
};

const turkishCharacterPattern = /[çğıöşüÇĞİÖŞÜ]/;
const turkishCommonWordPattern =
  /\b(ana|ağı|akış|akışkan|araç|atık|bakım|basınç|bina|bir|çalışma|çevreci|çözüm|dış|doğal|dön|düşük|enerji|endüstriyel|eşanjör|geç|geri|güç|hava|havuz|hesaplama|ısı|ısıtma|iç|için|ile|iletişim|kapasite|konut|kullanım|marka|mevcut|pompası|proje|seçim|seçenekleri|seriler|serileri|serisi|servis|sıcak|sıcaklığı|sıvı|soğutma|soğutucu|su|şarj|şebeke|tasarruf|teknik|ticari|ürün|ürünler|ve|verimli|verimlilik|yıllık|yüksek)\b/i;

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function withOriginalSpacing(original: string, translated: string) {
  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceWholePhrase(value: string, source: string, target: string) {
  const letter = "A-Za-z0-9ÇĞİÖŞÜçğıöşü";
  const pattern = new RegExp(`(^|[^${letter}])(${escapeRegExp(source)})(?=$|[^${letter}])`, "g");
  return value.replace(pattern, (_match, prefix: string) => `${prefix}${target}`);
}

function replaceKnownPhrases(value: string) {
  let translated = value;
  const sources = { ...phraseTranslations, ...exactTranslations, ...cleanSentenceTranslations };
  for (const [source, target] of Object.entries(sources).sort(([a], [b]) => b.length - a.length)) {
    translated = replaceWholePhrase(translated, source, target);
  }
  return translated;
}

function replaceKnownWords(value: string) {
  return value.replace(/[A-Za-zÇĞİÖŞÜçğıöşü'’]+/g, (word) => {
    const clean = word.replace(/^['’]+|['’]+$/g, "");
    const lowered = clean.toLocaleLowerCase("tr-TR");
    const stem = turkishStemTranslations.find(([source]) => lowered.startsWith(source));
    return wordTranslations[clean] ?? lowercaseWordTranslations[lowered] ?? forcedWordTranslations[lowered] ?? stem?.[1] ?? word;
  });
}

function scrubRemainingTurkish(value: string) {
  return value.replace(/[A-Za-zÇĞİÖŞÜçğıöşü'’]+/g, (word) => {
    const clean = word.replace(/^['’]+|['’]+$/g, "");
    const lowered = clean.toLocaleLowerCase("tr-TR");
    const direct = forcedWordTranslations[lowered] ?? lowercaseWordTranslations[lowered] ?? wordTranslations[clean];
    if (direct) return direct;

    const stem = turkishStemTranslations.find(([source]) => lowered.startsWith(source));
    if (stem) return stem[1];

    return word;
  });
}

function cleanupEnglish(value: string) {
  return value
    .replace(/\bYearslık\b/g, "Years of")
    .replace(/\bYıllık\b/g, "Years of")
    .replace(/\bTürkiye\b/g, "Turkiye")
    .replace(/\bIsı\b/g, "Heat")
    .replace(/\bPompası\b/g, "Pump")
    .replace(/\bÇözüm\b/g, "Solution")
    .replace(/\bOrtağı\b/g, "Partner")
    .replace(/\bEnerji\b/g, "Energy")
    .replace(/\s+/g, " ")
    .trim();
}

function polishEnglish(value: string) {
  return value
    .replace(/\bve\b/gi, "and")
    .replace(/\bile\b/gi, "with")
    .replace(/\biçin\b/gi, "for")
    .replace(/\bbir\b/gi, "a")
    .replace(/\bbu\b/gi, "this")
    .replace(/\bçok\b/gi, "multi")
    .replace(/\bdaha\b/gi, "more")
    .replace(/\bgöre\b/gi, "according to")
    .replace(/\bkadar\b/gi, "up to")
    .replace(/\bserisi\b/gi, "series")
    .replace(/\bseriler\b/gi, "series")
    .replace(/\bürünleri\b/gi, "products")
    .replace(/\bürünler\b/gi, "products")
    .replace(/\bürünü\b/gi, "product")
    .replace(/\bürün\b/gi, "product")
    .replace(/\bçözümü\b/gi, "solution")
    .replace(/\bçözümleri\b/gi, "solutions")
    .replace(/\bçözüm\b/gi, "solution")
    .replace(/\bısı\b/gi, "heat")
    .replace(/\bısıtma\b/gi, "heating")
    .replace(/\bsoğutma\b/gi, "cooling")
    .replace(/\bsıcak\b/gi, "hot")
    .replace(/\bsuyu\b/gi, "water")
    .replace(/\bsu\b/gi, "water")
    .replace(/\bkonut\b/gi, "residential")
    .replace(/\bhavuz\b/gi, "pool")
    .replace(/\bendüstriyel\b/gi, "industrial")
    .replace(/\bticari\b/gi, "commercial")
    .replace(/\btürkiye\b/gi, "Turkiye")
    .replace(/\bşebeke\b/gi, "grid")
    .replace(/\bgüç\b/gi, "power")
    .replace(/\byüksek\b/gi, "high")
    .replace(/\bdüşük\b/gi, "low")
    .replace(/\bsessiz\b/gi, "silent")
    .replace(/\bakıllı\b/gi, "smart")
    .replace(/\bkontrol\b/gi, "control")
    .replace(/\bkapasite\b/gi, "capacity")
    .replace(/\btasarruf\b/gi, "savings")
    .replace(/\bteknik\b/gi, "technical")
    .replace(/\bdetayları\b/gi, "details")
    .replace(/\bincele\b/gi, "view")
    .replace(/\bgeri\b/gi, "back")
    .replace(/\bdön\b/gi, "back")
    .replace(/\s+/g, " ")
    .trim();
}

function shouldSkipValue(value: string) {
  const normalized = normalizeText(value);
  return (
    !normalized ||
    normalized.includes("@") ||
    /^https?:\/\//i.test(normalized) ||
    /^[\d\s.,:+/%-]+$/.test(normalized)
  );
}

function translateValue(value: string) {
  const normalized = normalizeText(value);
  if (shouldSkipValue(normalized)) return value;

  const exact = cleanSentenceTranslations[normalized] ?? exactTranslations[normalized] ?? phraseTranslations[normalized];
  if (exact) return withOriginalSpacing(value, exact);

  let translated = replaceKnownPhrases(normalized);
  translated = replaceKnownWords(translated);
  translated = cleanupEnglish(translated);
  if (turkishCharacterPattern.test(translated) || turkishCommonWordPattern.test(translated)) {
    translated = polishEnglish(cleanupEnglish(scrubRemainingTurkish(translated)));
  }

  return translated === normalized ? value : withOriginalSpacing(value, translated);
}

function shouldSkipNode(node: Node) {
  const parent = node.parentElement;
  if (!parent) return true;
  return ["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE"].includes(parent.tagName);
}

function applyNodeValue(node: Text, value: string) {
  if (node.nodeValue === value) return;
  isApplyingTranslation = true;
  node.nodeValue = value;
  window.queueMicrotask(() => {
    isApplyingTranslation = false;
  });
}

function translateTextNode(node: Text, refreshSource = false) {
  if (shouldSkipNode(node)) return;
  if (!originalText.has(node) || refreshSource) originalText.set(node, node.nodeValue ?? "");
  const source = originalText.get(node) ?? "";
  applyNodeValue(node, translateValue(source));
}

function restoreTextNode(node: Text) {
  const source = originalText.get(node);
  if (source !== undefined) node.nodeValue = source;
}

function translateAttributes(element: Element) {
  const attrs = ["placeholder", "aria-label", "title", "alt"];
  for (const attr of attrs) {
    const value = element.getAttribute(attr);
    if (!value) continue;
    let originals = originalAttributes.get(element);
    if (!originals) {
      originals = new Map();
      originalAttributes.set(element, originals);
    }
    if (!originals.has(attr)) originals.set(attr, value);
    const translated = translateValue(originals.get(attr) ?? value);
    if (element.getAttribute(attr) !== translated) {
      isApplyingTranslation = true;
      element.setAttribute(attr, translated);
      window.queueMicrotask(() => {
        isApplyingTranslation = false;
      });
    }
  }
}

function restoreAttributes(element: Element) {
  const originals = originalAttributes.get(element);
  if (!originals) return;
  for (const [attr, value] of originals) {
    element.setAttribute(attr, value);
  }
}

function walk(root: ParentNode, visitor: (node: Text) => void, attrVisitor: (element: Element) => void) {
  if (root instanceof Element) attrVisitor(root);

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let node = walker.nextNode();
  while (node) {
    if (node.nodeType === Node.TEXT_NODE) {
      visitor(node as Text);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      attrVisitor(node as Element);
    }
    node = walker.nextNode();
  }
}

export function applyAutoTranslation(lang: Language) {
  if (typeof document === "undefined" || !document.body) return;

  if (lang === "en") {
    walk(document.body, translateTextNode, translateAttributes);
    return;
  }

  walk(document.body, restoreTextNode, restoreAttributes);
}

export function observeAutoTranslation(lang: Language) {
  if (typeof document === "undefined" || !document.body || lang !== "en") return () => {};

  const observer = new MutationObserver((mutations) => {
    if (isApplyingTranslation) return;

    for (const mutation of mutations) {
      if (mutation.type === "characterData" && mutation.target.nodeType === Node.TEXT_NODE) {
        translateTextNode(mutation.target as Text, true);
        continue;
      }

      if (mutation.type === "attributes" && mutation.target.nodeType === Node.ELEMENT_NODE) {
        const element = mutation.target as Element;
        const attr = mutation.attributeName;
        if (attr && ["placeholder", "aria-label", "title", "alt"].includes(attr)) {
          const originals = originalAttributes.get(element);
          const current = element.getAttribute(attr);
          if (current && originals) originals.set(attr, current);
          translateAttributes(element);
        }
        continue;
      }

      for (const node of Array.from(mutation.addedNodes)) {
        if (node.nodeType === Node.TEXT_NODE) translateTextNode(node as Text);
        if (node.nodeType === Node.ELEMENT_NODE) {
          walk(node as Element, translateTextNode, translateAttributes);
        }
      }
    }

    window.requestAnimationFrame(() => applyAutoTranslation("en"));
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ["placeholder", "aria-label", "title", "alt"],
    childList: true,
    characterData: true,
    subtree: true,
  });

  return () => observer.disconnect();
}
