import { siteConfig } from "../config/siteConfig";

/**
 * Helpers (robust fallbacks so template works across clients)
 */
const getBusinessName = () =>
  siteConfig.business?.name || siteConfig.site?.name || "Business";

const getWhatsAppNumber = () =>
  siteConfig.business?.whatsapp || siteConfig.contact?.whatsapp || "";

/**
 * Build WhatsApp message from order form data
 * @param {Object} formData
 * @returns {string}
 */
export const buildWhatsAppMessage = (formData = {}) => {
  const {
    customerName = "",
    mobile = "",
    itemType = "",
    weight = "",
    flavor = "",
    occasionTheme = "",
    dateNeeded = "",
    time = "",
    deliveryMode = "",
    area = "",
    budget = "",
    notes = "",
  } = formData;

  const businessName = getBusinessName();

  const messageParts = [
    `Hi ${businessName} 👋`,
    "",
  ];

  // Only add if present (clean messages)
  if (customerName) messageParts.push(`Name: ${customerName}`);
  if (mobile) messageParts.push(`Mobile: ${mobile}`);

  // Items section (supports multiline)
  if (itemType) {
    messageParts.push("");
    messageParts.push("📦 Items:");
    messageParts.push(itemType);
  }

  if (weight) messageParts.push(`Weight: ${weight}`);
  if (flavor) messageParts.push(`Flavor: ${flavor}`);
  if (occasionTheme) messageParts.push(`Occasion/Theme: ${occasionTheme}`);
  if (dateNeeded) messageParts.push(`Date: ${dateNeeded}`);
  if (time) messageParts.push(`Time: ${time}`);
  if (deliveryMode) messageParts.push(`Delivery/Pickup: ${deliveryMode}`);
  if (area) messageParts.push(`Area: ${area}`);
  if (budget) messageParts.push(`Budget: ${budget}`);
  if (notes) messageParts.push(`Notes: ${notes}`);

  messageParts.push("");
  messageParts.push("Please confirm availability + total price. Thanks!");

  return messageParts.join("\n");
};

/**
 * Open WhatsApp with pre-filled message
 * @param {Object} formData
 */
export const openWhatsApp = (formData = {}) => {
  const whatsappNumber = getWhatsAppNumber();
  if (!whatsappNumber) {
    alert("WhatsApp number not configured.");
    return;
  }

  const message = buildWhatsAppMessage(formData);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

/**
 * Open WhatsApp with simple message
 * @param {string} message
 */
export const openWhatsAppSimple = (
  message = "Hi! I'd like to place an order."
) => {
  const whatsappNumber = getWhatsAppNumber();
  if (!whatsappNumber) {
    alert("WhatsApp number not configured.");
    return;
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

export default { buildWhatsAppMessage, openWhatsApp, openWhatsAppSimple };













// import { siteConfig } from '../config/siteConfig';

// /**
//  * Build WhatsApp message from order form data
//  * @param {Object} formData - The form data object
//  * @returns {string} - Formatted message string
//  */
// export const buildWhatsAppMessage = (formData) => {
//   const {
//     customerName = '',
//     mobile = '',
//     itemType = '',
//     weight = '',
//     flavor = '',
//     occasionTheme = '',
//     dateNeeded = '',
//     time = '',
//     deliveryMode = '',
//     area = '',
//     budget = '',
//     notes = '',
//   } = formData;

//   const businessName = siteConfig.site.name;

//   // Build multi-line message
//   const messageParts = [
//     `Hi ${businessName} 👋`,
//     '',
//     `Name: ${customerName}`,
//   ];

//   // Add optional fields only if they have values
//   if (mobile) messageParts.push(`Mobile: ${mobile}`);
//   // messageParts.push(`Item: ${itemType}`);

//    // Items section (can be multi-line for multiple items)
//   if (itemType) {
//     messageParts.push('');
//     messageParts.push('📦 Items:');
//     messageParts.push(itemType);
//     messageParts.push('');
//   }
  
//   if (weight) messageParts.push(`Weight: ${weight}`);
//   if (flavor) messageParts.push(`Flavor: ${flavor}`);
//   if (occasionTheme) messageParts.push(`Occasion/Theme: ${occasionTheme}`);
//   messageParts.push(`Date: ${dateNeeded}`);
//   if (time) messageParts.push(`Time: ${time}`);
//   messageParts.push(`Delivery/Pickup: ${deliveryMode}`);
//   if (area) messageParts.push(`Area: ${area}`);
//   if (budget) messageParts.push(`Budget: ${budget}`);
//   if (notes) messageParts.push(`Notes: ${notes}`);

//   messageParts.push('');
//   messageParts.push('Please confirm availability + total price. Thanks!');

//   return messageParts.join('\n');
// };

// /**
//  * Open WhatsApp with pre-filled message
//  * @param {Object} formData - The form data object
//  */
// export const openWhatsApp = (formData) => {
//   const message = buildWhatsAppMessage(formData);
//   const encodedMessage = encodeURIComponent(message);
//   const whatsappNumber = siteConfig.contact.whatsapp;
//   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
//   window.open(whatsappUrl, '_blank');
// };

// /**
//  * Open WhatsApp with simple message
//  * @param {string} message - Simple message to send
//  */
// export const openWhatsAppSimple = (message = "Hi! I'd like to place an order.") => {
//   const encodedMessage = encodeURIComponent(message);
//   const whatsappNumber = siteConfig.contact.whatsapp;
//   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
//   window.open(whatsappUrl, '_blank');
// };

// export default { buildWhatsAppMessage, openWhatsApp, openWhatsAppSimple };
