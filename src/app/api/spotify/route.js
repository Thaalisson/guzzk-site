import { getSpotifyToken } from "@/app/lib/spotify";

export async function GET(req) {
  try {
    const token = await getSpotifyToken();
    const artistId = "4PbiezwRSac1g4poxAFGC0"; // ID do artista Guzzk

    const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      return Response.json({ error: "Failed to fetch Spotify tracks" }, { status: response.status });
    }

    const data = await response.json();
    return Response.json(Array.isArray(data?.tracks) ? data.tracks : []);
  } catch (error) {
    return Response.json({ error: "Error fetching data from Spotify" }, { status: 500 });
  }
}
