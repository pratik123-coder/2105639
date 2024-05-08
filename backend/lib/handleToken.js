async function fetchToken(clientInfo) {
    try {
      const response = await fetch('http://20.244.56.144/test/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientInfo),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      const { access_token } = data;
  
      // Store the new token in local storage
      localStorage.setItem('accessToken', access_token);
  
      return access_token;
    } catch (error) {
      console.error('Error fetching token:', error);
      return null;
    }
  }
  
  
export { fetchToken };

