const getMaldivesDestinations = async () => {
    const apiKey = "74bc67dd40c6f4ea4ddf5f8c81f4122e4dae9856d9a0cfe29c93770f8739d9a1";
    const url = `https://serpapi.com/search.json?engine=google_maps&type=place&data=%214m5%213m4%211s0x89c259a61c75684f%3A0x79d31adb123348d2%218m2%213d40.7457399%214d-73.9882272&api_key=${apiKey}`;
   
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  
    const data = await response.json();
    return data["place_results"];
  };
  
  export { getMaldivesDestinations };
  