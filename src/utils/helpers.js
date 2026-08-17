// Utility functions for the E-Learning backend

/**
 * Validate if an email is in the correct format
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Generate a random certificate code (for example purposes)
 * @returns {string}
 */
function generateCertificateCode() {
  return 'CERT-' + Math.random().toString(36).substring(2, 10).toUpperCase();
}

/**
 * Paginate array results
 * @param {Array} items
 * @param {number} page
 * @param {number} pageSize
 * @returns {Array}
 */
function paginate(items, page = 1, pageSize = 10) {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

module.exports = {
  isValidEmail,
  generateCertificateCode,
  paginate,
};