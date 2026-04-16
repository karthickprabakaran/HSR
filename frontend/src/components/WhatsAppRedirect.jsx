import { FaWhatsapp } from "react-icons/fa6";

// WhatsApp requires digits only (no `+`). Update this number if needed.
const WHATSAPP_PHONE = "919384842525";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;

export default function WhatsAppRedirect() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:bg-[#1da851]"
    >
      <FaWhatsapp size={28} className="text-white" />
    </a>
  );
}

