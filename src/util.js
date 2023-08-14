function parseScreeningData(data) {
    const screeningsArray = data.trim().split('\n\n');
    return screeningsArray.map((screening, index) => {
      const [name, frequency, description] = screening.split('\n');
      return { id: index + 1, name, frequency, description };
    });
  }

  export default parseScreeningData ;