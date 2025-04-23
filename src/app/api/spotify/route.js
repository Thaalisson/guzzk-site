import { getSpotifyToken } from "@/app/lib/spotify";

export async function GET(req) {
  try {
    const token = await getSpotifyToken();
    const artistId = "4PbiezwRSac1g4poxAFGC0"; // ID do artista Guzzk

    const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error("Failed to fetch Spotify data");

    const data = await response.json();
    return Response.json(data.tracks);
  } catch (error) {
    return Response.json({ error: "Error fetching data from Spotify" }, { status: 500 });
  }
}
