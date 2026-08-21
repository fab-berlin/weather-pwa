export async function GET() {
    const infoApiUrl = process.env.INFO_API_BASE;
    const data = await fetch(`${infoApiUrl}/weatherJson.php`, { cache: 'no-store' });
    const weatherData = await data.json();

    console.log(weatherData);

    return Response.json(weatherData);
}