export const fetchData = async () => {
    try {
      const response = await fetch('/api/getData'); // Update the URL with the correct endpoint
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error.message); // Log the error message
      throw new Error('Failed to fetch data');
    }
  };
