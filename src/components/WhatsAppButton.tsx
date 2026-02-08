import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappNumber = '5511999999999'; // Replace with actual number
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de consultoria da Timóteo.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco
      </span>
    </a>
  );
}
