export async function getSpotifyToken() {
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64"),
      },
      body: "grant_type=client_credentials",
    });
  
    const data = await response.json();
    return data.access_token;
  }
  