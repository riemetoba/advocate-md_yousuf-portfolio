import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '8801977263182'; 
const DEFAULT_MESSAGE = 'Hello, I would like to consult regarding a legal matter.';

const FloatingWhatsApp = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] shadow-lg flex items-center justify-center transition-colors"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.001 3C9.11 3 3.52 8.59 3.52 15.48c0 2.73.89 5.26 2.4 7.31L4.5 28.5l5.87-1.54a12.41 12.41 0 0 0 5.63 1.35h.005c6.89 0 12.48-5.59 12.48-12.48C28.485 8.59 22.9 3 16.001 3Zm0 22.84h-.004a10.32 10.32 0 0 1-5.26-1.44l-.377-.224-3.484.914.93-3.397-.246-.348a10.29 10.29 0 0 1-1.58-5.5c0-5.7 4.638-10.34 10.343-10.34 2.762 0 5.36 1.077 7.315 3.033a10.27 10.27 0 0 1 3.024 7.313c0 5.7-4.638 10.34-10.66 10.99Zm5.663-7.735c-.31-.155-1.834-.905-2.118-1.008-.284-.104-.491-.155-.698.155-.207.31-.802 1.008-.984 1.215-.181.207-.362.233-.672.078-.31-.155-1.31-.483-2.496-1.54-.923-.823-1.546-1.84-1.727-2.15-.181-.31-.02-.478.135-.632.139-.138.31-.362.465-.543.155-.181.207-.31.31-.517.103-.207.052-.388-.026-.543-.078-.155-.698-1.68-.957-2.301-.252-.605-.508-.523-.698-.533-.181-.008-.388-.01-.595-.01-.207 0-.543.078-.827.388-.284.31-1.085 1.06-1.085 2.584 0 1.524 1.11 2.997 1.265 3.204.155.207 2.185 3.337 5.294 4.68.74.32 1.318.51 1.768.653.743.236 1.42.203 1.955.123.596-.089 1.834-.75 2.093-1.474.259-.724.259-1.345.181-1.474-.077-.13-.284-.207-.594-.362Z" />
      </svg>
    </motion.a>
  );
};

export default FloatingWhatsApp;