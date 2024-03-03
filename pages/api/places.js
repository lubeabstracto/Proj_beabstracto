// places.js
import axios from "axios";

async function getPlaceDetails(placeId, apiKey) {
  const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=formatted_phone_number,name,vicinity&key=${apiKey}`;
  const response = await axios.get(detailsUrl);
  return response.data.status === "OK" ? response.data.result : null;
}

export default async function handler(req, res) {
  const { latitude, longitude } = req.query;
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  const types = "restaurant|cafe|bakery"; // Adicione mais tipos conforme necessário, separados por pipe |

  try {
    let allResults = [];
    let nextPageToken = null;
    do {
      const nearbySearchUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=10000&type=${types}&key=${apiKey}${nextPageToken ? `&pagetoken=${nextPageToken}` : ''}`;
      const nearbySearchResponse = await axios.get(nearbySearchUrl);

      if (nearbySearchResponse.data.status !== "OK") {
        res.status(400).json({ error: nearbySearchResponse.data.error_message || "Failed to fetch nearby places" });
        return;
      }

      allResults = allResults.concat(nearbySearchResponse.data.results);
      nextPageToken = nearbySearchResponse.data.next_page_token;

      // A API exige uma pequena pausa entre solicitações de paginação.
      if (nextPageToken) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    } while (nextPageToken);

    // Obter detalhes para todos os lugares encontrados
    const placesDetails = await Promise.all(allResults.map(place => getPlaceDetails(place.place_id, apiKey)));

    // Filtrar resultados nulos (lugares que não retornaram detalhes)
    const validPlaces = placesDetails.filter(Boolean);

    res.status(200).json(validPlaces);
  } catch (error) {
    console.error("Error fetching places details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
