export const createWhatsAppLink = (phoneNumber, customMessage) => {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(customMessage);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
};
