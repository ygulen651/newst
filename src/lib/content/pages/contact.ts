import { HIGHLIGHT_HELP } from "../format";
import { L, type PageDef } from "../types";

export const contactPage: PageDef = {
  id: "contact",
  title: "İletişim",
  path: "/iletisim",
  sections: [
    {
      title: "Giriş",
      fields: [
        { key: "heroImage", label: "Arka plan görseli", type: "image", default: "/images/e9551124-2722-4454-bf42-e6d7ff187aec.png" },
        { key: "heroEyebrow", label: "Üst etiket", type: "text", default: L("İletişim", "Contact") },
        { key: "heroTitleLine1", label: "Başlık 1. satır", type: "text", default: L("Bize", "Get in") },
        { key: "heroTitleLine2", label: "Başlık 2. satır", type: "text", default: L("Ulaşın", "Touch") },
      ],
    },
    {
      title: "İletişim bilgileri",
      fields: [
        { key: "infoTitleLine1", label: "Başlık 1. satır", type: "text", default: L("Bizimle", "Contact") },
        { key: "infoTitleLine2", label: "Başlık 2. satır (turuncu)", type: "text", default: L("İletişime Geçin", "Our Team") },
        {
          key: "infoText",
          label: "Metin",
          type: "textarea",
          default: L(
            "BESS ve ısı pompası projeleriniz, teknik destek talepleriniz veya iş ortaklığı için uzman ekibimizle iletişime geçin.",
            "Contact our expert team for BESS and heat pump projects, technical support requests, or business partnerships."
          ),
        },
        {
          key: "addressLabel",
          label: "Adres başlığı",
          type: "text",
          default: L("Genel Merkez", "Head Office"),
          help: "Adres, telefon ve e-posta \"Genel → İletişim bilgileri\" bölümünden gelir.",
        },
        { key: "phoneLabel", label: "Telefon başlığı", type: "text", default: L("Telefon", "Phone") },
        { key: "emailLabel", label: "E-posta başlığı", type: "text", default: L("E-posta", "Email") },
      ],
    },
    {
      title: "Mesaj formu",
      fields: [
        { key: "formTitle", label: "Form başlığı", type: "text", default: L("Mesaj Gönderin", "Send a Message") },
        { key: "nameLabel", label: "Ad soyad etiketi", type: "text", default: L("Ad Soyad", "Full Name") },
        { key: "namePlaceholder", label: "Ad soyad örnek metni", type: "text", default: L("Adınız ve soyadınız", "Your full name") },
        { key: "emailFieldLabel", label: "E-posta etiketi", type: "text", default: L("E-posta", "Email") },
        { key: "messageLabel", label: "Mesaj etiketi", type: "text", default: L("Mesajınız", "Your Message") },
        { key: "messagePlaceholder", label: "Mesaj örnek metni", type: "text", default: L("Size nasıl yardımcı olabiliriz?", "How can we help you?") },
        { key: "submitButton", label: "Gönder butonu", type: "text", default: L("Gönder", "Send") },
        { key: "sendingLabel", label: "Gönderilirken buton yazısı", type: "text", default: L("Gönderiliyor...", "Sending...") },
        {
          key: "successMessage",
          label: "Başarı mesajı",
          type: "textarea",
          default: L(
            "Mesajınız bize ulaştı. Ekibimiz en kısa sürede sizinle iletişime geçecek.",
            "Your message has reached us. Our team will get back to you as soon as possible."
          ),
        },
        { key: "sendAnotherButton", label: "Yeni mesaj butonu", type: "text", default: L("Yeni mesaj gönder", "Send another message") },
        {
          key: "invalidMessage",
          label: "Eksik bilgi uyarısı",
          type: "text",
          default: L("Lütfen adınızı, geçerli bir e-posta adresini ve mesajınızı yazın.", "Please enter your name, a valid email address, and your message."),
        },
        {
          key: "serverErrorMessage",
          label: "Gönderim hatası uyarısı",
          type: "text",
          default: L(
            "Mesajınız şu anda gönderilemedi. Lütfen daha sonra tekrar deneyin veya bize telefonla ulaşın.",
            "Your message could not be sent right now. Please try again later or call us."
          ),
        },
      ],
    },
    {
      title: "Alt bant",
      fields: [
        { key: "marquee", label: "Kayan arka plan yazısı", type: "text", default: L("NEWSTAG ENERJI • ILETISIM •", "NEWSTAG ENERGY • CONTACT •") },
        { key: "bottomTitle", label: "Başlık", type: "text", help: HIGHLIGHT_HELP, default: L("Geleceği Birlikte *İnşa Edelim*", "Let Us Build the *Future Together*") },
        {
          key: "bottomText",
          label: "Metin",
          type: "textarea",
          default: L(
            "Enerji dönüşüm yolculuğunuzda projelendirmeden servise kadar yanınızdayız. Çözümlerimizi keşfetmek için bize ulaşın.",
            "We are with you throughout your energy transformation journey, from project design to service. Contact us to explore our solutions."
          ),
        },
      ],
    },
  ],
};
