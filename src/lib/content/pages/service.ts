import { L, type PageDef } from "../types";

export const servicePage: PageDef = {
  id: "service",
  title: "Servis Ağı",
  path: "/servis",
  sections: [
    {
      title: "Giriş",
      fields: [
        { key: "eyebrow", label: "Üst etiket", type: "text", default: L("Servis ve Satış Ağı", "Service and Sales Network") },
        { key: "titleLine1", label: "Başlık 1. satır", type: "text", default: L("Enerjiniz İçin", "Always in the Field") },
        { key: "titleLine2", label: "Başlık 2. satır (turuncu)", type: "text", default: L("Her Zaman Sahadayız", "For Your Energy") },
        {
          key: "intro",
          label: "Metin",
          type: "textarea",
          default: L(
            "Türkiye genelinde hizmet veren servis ve destek ağımızla; kurulum, devreye alma, periyodik bakım, arıza müdahalesi ve teknik yönlendirme süreçlerini genel merkez koordinasyonunda, tek noktadan yönetiyoruz.",
            "With our nationwide service and support network, we manage installation, commissioning, periodic maintenance, fault response, and technical guidance from a single head-office coordination point."
          ),
        },
        { key: "image", label: "Görsel", type: "image", default: "/images/service-technician.png" },
        {
          key: "imageCaption",
          label: "Görsel üzerindeki not",
          type: "text",
          default: L("Kurulum sonrası sürdürülebilir operasyon desteği", "Sustainable operational support after installation"),
        },
      ],
      // Phone, e-mail and address come from "Genel → İletişim bilgileri".
    },
    {
      title: "Türkiye geneli",
      fields: [
        { key: "coverageEyebrow", label: "Üst etiket", type: "text", default: L("Hizmet Kapsamı", "Service Scope") },
        { key: "coverageTitle", label: "Başlık", type: "text", default: L("Tüm Türkiye'de servis ve destek", "Service and support across Turkiye") },
        {
          key: "coverageText",
          label: "Metin",
          type: "textarea",
          default: L(
            "Bölgesel liste yerine 81 ilin tamamında hizmet veren bir organizasyonla çalışıyoruz. Nerede olursanız olun; BESS ve ısı pompası sistemleriniz için keşif, kurulum, bakım ve arıza süreçleriniz tek merkezden koordine edilir.",
            "Instead of a limited regional list, we work with an organization that can coordinate service across all 81 cities. Wherever your project is located, assessment, installation, maintenance, and fault processes for BESS and heat pump systems are managed from one center."
          ),
        },
        {
          key: "coverageStats",
          label: "Rakamlar",
          type: "list",
          itemLabel: "Rakam",
          fields: [
            { key: "value", label: "Değer", type: "text" },
            { key: "label", label: "Açıklama", type: "text" },
          ],
          default: [
            { value: L("81", "81"), label: L("İlde servis koordinasyonu", "Citywide service coordination") },
            { value: L("7/24", "7/24"), label: L("Kritik arıza kaydı takibi", "Critical fault request tracking") },
            { value: L("Tek Merkez", "Single Center"), label: L("Uçtan uca servis koordinasyonu", "End-to-end service coordination") },
            { value: L("6 Aşama", "6 Steps"), label: L("Keşiften işletme desteğine", "From assessment to operational support") },
          ],
        },
      ],
    },
    {
      title: "Servis süreci",
      fields: [
        { key: "processTitle", label: "Başlık", type: "text", default: L("Servis Süreci", "Service Process") },
        {
          key: "processText",
          label: "Metin",
          type: "textarea",
          default: L(
            "Talebin alınmasından saha organizasyonuna kadar süreç tek merkezden takip edilir.",
            "The full process is tracked from request intake to field organization through a single coordination center."
          ),
        },
        {
          key: "steps",
          label: "Adımlar",
          type: "list",
          itemLabel: "Adım",
          fields: [
            { key: "icon", label: "İkon", type: "icon" },
            { key: "title", label: "Başlık", type: "text" },
            { key: "desc", label: "Açıklama", type: "textarea" },
          ],
          default: [
            { icon: "Phone", title: L("Talep Alımı", "Request Intake"), desc: L("Servis, bakım veya keşif ihtiyacınız genel merkez üzerinden kayıt altına alınır.", "Your service, maintenance, or site assessment request is registered through our head office.") },
            { icon: "Wrench", title: L("Teknik Değerlendirme", "Technical Review"), desc: L("Ürün, saha koşulları ve öncelik seviyesine göre doğru ekip ve aksiyon planı belirlenir.", "The right team and action plan are defined according to the product, site conditions, and priority level.") },
            { icon: "Truck", title: L("Saha Organizasyonu", "Field Organization"), desc: L("Türkiye genelindeki hizmet ağımızla kurulum, devreye alma ve servis süreçleri planlanır.", "Installation, commissioning, and service operations are planned through our nationwide service network.") },
            { icon: "ShieldCheck", title: L("Süreklilik", "Continuity"), desc: L("Periyodik bakım, kontrol ve uzaktan takip süreçleriyle sistem performansı korunur.", "System performance is protected through periodic maintenance, checks, and remote monitoring processes.") },
          ],
        },
      ],
    },
    {
      title: "Genel merkez ve hizmet kapsamı",
      fields: [
        { key: "hqEyebrow", label: "Üst etiket", type: "text", default: L("Genel Merkez", "Head Office") },
        { key: "hqTitle", label: "Başlık", type: "text", default: L("Tüm talepler tek merkezden koordine edilir", "All requests are coordinated from one center") },
        {
          key: "hqText",
          label: "Metin",
          type: "textarea",
          default: L(
            "Proje, bakım, servis ve garanti süreçleriniz için genel merkez iletişim kanallarımız üzerinden bize ulaşabilirsiniz.",
            "You can contact us through our head office channels for project, maintenance, service, and warranty processes."
          ),
        },
        { key: "locationLabel", label: "Lokasyon etiketi", type: "text", default: L("Lokasyon", "Location") },
        { key: "phoneLabel", label: "Telefon etiketi", type: "text", default: L("Telefon", "Phone") },
        { key: "phoneNote", label: "Telefon notu", type: "text", default: L("Servis ve destek koordinasyonu", "Service and support coordination") },
        { key: "emailLabel", label: "E-posta etiketi", type: "text", default: L("E-Posta", "Email") },
        { key: "emailNote", label: "E-posta notu", type: "text", default: L("Teklif, servis ve teknik destek", "Quotes, service, and technical support") },
        { key: "scopeLabel", label: "Kapsam etiketi", type: "text", default: L("Kapsam", "Scope") },
        { key: "scopeValue", label: "Kapsam", type: "text", default: L("BESS ve Isı Pompası", "BESS and Heat Pump") },
        { key: "scopeNote", label: "Kapsam notu", type: "text", default: L("Kurulum sonrası destek", "After-installation support") },
        {
          key: "scopeItems",
          label: "Hizmet kapsamı maddeleri",
          type: "list",
          itemLabel: "Madde",
          fields: [{ key: "text", label: "Madde", type: "text" }],
          default: [
            { text: L("BESS kurulum ve devreye alma desteği", "BESS installation and commissioning support") },
            { text: L("Isı pompası keşif, montaj ve servis yönlendirmesi", "Heat pump site assessment, installation, and service coordination") },
            { text: L("Periyodik bakım ve performans kontrolü", "Periodic maintenance and performance checks") },
            { text: L("Arıza kaydı ve teknik destek koordinasyonu", "Fault registration and technical support coordination") },
            { text: L("Yedek parça ve garanti süreç takibi", "Spare parts and warranty process tracking") },
            { text: L("Proje sonrası işletme desteği", "Post-project operational support") },
          ],
        },
        { key: "ctaButton", label: "Alt buton", type: "text", default: L("Servis Talebi Oluştur", "Create a Service Request") },
      ],
    },
  ],
};
