export async function GET() {
    const infoApiUrl = process.env.INFO_API_BASE;
    const data = await fetch(`${infoApiUrl}/weatherJson.php`, { cache: 'no-store' });
    const weatherData = await data.json();

    const owmApiKey = process.env.OWM_API_KEY;

    const owmData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Berlin&mode=json&units=metric&APPID=${owmApiKey}&lang=de`, { cache: 'no-store' });
    const owmWeatherData = await owmData.json();

    weatherData.owm = owmWeatherData;

    return Response.json(weatherData);
}