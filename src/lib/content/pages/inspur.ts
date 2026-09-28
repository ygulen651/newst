import { HIGHLIGHT_HELP } from "../format";
import { L, type PageDef } from "../types";

// This page has no hand-written English copy; English comes from the site's auto-translation until filled in.
export const inspurPage: PageDef = {
  id: "inspur",
  title: "Markalar → Inspur",
  path: "/markalar/inspur",
  sections: [
    {
      title: "Giriş",
      fields: [
        { key: "logo", label: "Logo", type: "image", default: "/images/image1.png" },
        { key: "title", label: "Başlık", type: "text", help: HIGHLIGHT_HELP, default: L("IT Dünyasının *Devi*") },
        {
          key: "intro",
          label: "Metin",
          type: "textarea",
          default: L("Yapay zeka sunucularında dünyanın 1 numarası olmayı başarmış, tüm sunucu üreticileri arasında dünyanın ilk 3 firması arasında olan lider şirket."),
        },
        { key: "heroButton", label: "Buton", type: "text", default: L("BESS Ürünlerini İncele") },
        { key: "heroButtonLink", label: "Buton bağlantısı", type: "link", default: "/bess#urunler" },
        { key: "heroImage", label: "Görsel", type: "image", default: "/images/products/bess-konteyner-xl.png" },
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
            { value: L("$31B+"), label: L("Yıllık Gelir (USD)") },
            { value: L("Top 3"), label: L("Global Sunucu Üreticilerinden Biri") },
            { value: L("120"), label: L("Ülkede Aktif Operasyon") },
            { value: L("3"), label: L("Borsada İşlem Gören Şirket") },
          ],
        },
      ],
    },
    {
      title: "Inspur'u farklı kılan nedir?",
      fields: [
        { key: "strengthsTitle", label: "Başlık", type: "text", default: L("Inspur'u Farklı Kılan Nedir?") },
        {
          key: "strengths",
          label: "Kartlar",
          type: "list",
          itemLabel: "Kart",
          fields: [
            { key: "icon", label: "İkon", type: "icon" },
            { key: "title", label: "Başlık", type: "text" },
            { key: "desc", label: "Açıklama", type: "textarea" },
            { key: "image", label: "Görsel (isteğe bağlı)", type: "image" },
          ],
          default: [
            { icon: "Cpu", title: L("Ar-Ge Odaklı Organizasyon"), desc: L("36.000 çalışanın %60'ı Ar-Ge ve mühendislik kadrosunda; 31.000'in üzerinde global patent portföyü."), image: "" },
            { icon: "Server", title: L("Sunucu Teknolojisinde Liderlik"), desc: L("Yapay zeka sunucularında dünyanın 1 numarası, tüm sunucularda 2 numarası; 178 operatör ve endüstri müşterisine hizmet."), image: "" },
            { icon: "Cloud", title: L("IT ve Bulut DNA'sı"), desc: L("IT altyapısı yazılım gücünü BESS'e entegre eden tek oyuncu; hücre bazlı izleme ve yapay zeka destekli kontrol."), image: "" },
            { icon: "Zap", title: L("Sıfır Karbon Vizyonu"), desc: L("BESS ürünleri, Inspur'un sıfır karbon hedefi doğrultusunda yatırım yaptığı ana sektörlerden biri."), image: "" },
          ],
        },
      ],
    },
    {
      title: "Tarihçe",
      fields: [
        { key: "timelineTitle", label: "Başlık", type: "text", default: L("80 Yıllık Teknoloji Yolculuğu") },
        { key: "timelineText", label: "Alt metin", type: "text", default: L("Ana bilgisayar döneminden bulut bilişim çağına uzanan kesintisiz inovasyon.") },
        {
          key: "timeline",
          label: "Tarihçe",
          type: "list",
          itemLabel: "Olay",
          fields: [
            { key: "year", label: "Yıl", type: "text" },
            { key: "event", label: "Olay", type: "text" },
          ],
          default: [
            { year: L("1945"), event: L("Inspur'un temelleri atıldı.") },
            { year: L("1983"), event: L("İlk Inspur bilgisayarı tanıtıldı.") },
            { year: L("1993"), event: L("Çin'in ilk kompakt sunucusu piyasaya sürüldü.") },
            { year: L("2010"), event: L("Büyük ölçekli merkezi bilgisayar sistemi K1 geliştirildi.") },
            { year: L("2022"), event: L("Yapay zeka sunucularında dünya 1.si, tüm sunucularda 2.si oldu.") },
            { year: L("Bugün"), event: L("1 GWh'a yaklaşan BESS kurulum deneyimi ile enerji depolamada küresel oyuncu.") },
          ],
        },
      ],
    },
    {
      title: "Ana sektörler",
      fields: [
        { key: "sectorsTitle", label: "Başlık", type: "text", default: L("Inspur Ana Sektörler") },
        {
          key: "sectors",
          label: "Sektörler",
          type: "list",
          itemLabel: "Sektör",
          fields: [
            { key: "icon", label: "İkon", type: "icon" },
            { key: "title", label: "Başlık", type: "text" },
            { key: "desc", label: "Açıklama", type: "textarea" },
          ],
          default: [
            { icon: "Server", title: L("Bilişim Donanımı"), desc: L("Dünyanın en güçlü sunucularının üreticisi.") },
            { icon: "Cloud", title: L("Bulut Bilişim"), desc: L("Çin devlet veri bulutu ve akıllı şehir yönetimi.") },
            { icon: "Database", title: L("Büyük Veri"), desc: L("90.000'den fazla devlet ve kamu uygulamasının servis sağlayıcısı.") },
            { icon: "MonitorSmartphone", title: L("Akıllı Terminaller"), desc: L("Akıllı robotlar, VR, etkileşimli ekranlar ve sıfır karbon enerji çözümleri.") },
          ],
        },
      ],
    },
    {
      title: "Saha deneyimi",
      fields: [
        { key: "referenceTitle", label: "Başlık", type: "text", default: L("Sahada Kanıtlanmış Deneyim") },
        {
          key: "referenceText",
          label: "Metin",
          type: "textarea",
          default: L(
            "Inspur; santral, off-grid, şarj istasyonu, sıfır karbon alanları, veri merkezi ve mikro şebeke uygulamalarında 1 GWh'a yaklaşan kurulum deneyimine sahip. Rizhao Santral Projesi'nde tek seferde 200 MW / 400 MWh kurulum gerçekleştirdi."
          ),
        },
        { key: "referenceStat1Value", label: "1. rakam", type: "text", default: L("1 GWh") },
        { key: "referenceStat1Label", label: "1. rakam açıklaması", type: "text", default: L("Yaklaşan kurulum deneyimi") },
        { key: "referenceStat2Value", label: "2. rakam", type: "text", default: L("400 MWh") },
        { key: "referenceStat2Label", label: "2. rakam açıklaması", type: "text", default: L("Rizhao tek proje kurulumu") },
        { key: "referenceButton", label: "Buton", type: "text", default: L("Ürünleri İncele") },
        { key: "referenceButtonLink", label: "Buton bağlantısı", type: "link", default: "/bess#urunler" },
        { key: "referenceImage", label: "Görsel", type: "image", default: "/images/11111.jpg" },
      ],
    },
  ],
};
