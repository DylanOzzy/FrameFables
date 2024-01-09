module.exports = {
    format_date: (date) => {
<<<<<<< HEAD
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
=======
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      // format large numbers with commas
>>>>>>> 3b50e45145934b1b7f4704f919d0baee5b8d6f98
      return parseInt(amount).toLocaleString();
    },
    get_emoji: () => {
      const randomNum = Math.random();
  
<<<<<<< HEAD
=======
      // Return a random emoji
>>>>>>> 3b50e45145934b1b7f4704f919d0baee5b8d6f98
      if (randomNum > 0.7) {
        return `<span for="img" aria-label="lightbulb">💡</span>`;
      } else if (randomNum > 0.4) {
        return `<span for="img" aria-label="laptop">💻</span>`;
      } else {
        return `<span for="img" aria-label="gear">⚙️</span>`;
      }
    },
<<<<<<< HEAD
  };
  
=======
};
>>>>>>> 3b50e45145934b1b7f4704f919d0baee5b8d6f98
