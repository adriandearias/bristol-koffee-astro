// src/reviews.js
import fetch from 'node-fetch';

export async function getGoogleReviews() {
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=reviews&key=YOUR_API_KEY`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    if (data.result && data.result.reviews) {
        return data.result.reviews;
    } else {
        return [];
    }
}
