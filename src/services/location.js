const API_URL = "https://nominatim.openstreetmap.org/search?q=";

export async function getLocation(location){
    try {
        const response = await fetch(`${API_URL}${location}&format=json&limit=1`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}