// Simple test file for PR review
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price;
  }
  return total;
}

const API_KEY = "sk-1234567890abcdef";

module.exports = { calculateTotal };
