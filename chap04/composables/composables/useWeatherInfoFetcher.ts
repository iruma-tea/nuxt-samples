import type { City } from "@/interfaces";

export const useWeatherInfoFetcher = (city: City) => {
    const config = useRuntimeConfig(); // ランタイム設定を利用する
    const asyncData = useLazyAsyncData(
        `useWeatherInfoFetcher-${city.id}`,
        (): Promise<any> => {
            // const weatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather";
            const params: {
                lang: string,
                q: string,
                appid: string,
            } = {
                lang: "ja",
                q: city.q,
                appid: config.public.weathermapAppid as string,
            }
            const queryParams = new URLSearchParams(params);
            const urlFull = `${config.public.weatherInfoUrl}?${queryParams}`;
            const response = $fetch(urlFull);
            return response;
        },
        {
            transform: (data): string => {
                const weatherArray = data.weather;
                const weather = weatherArray[0];
                return weather.description;
            }
        }
    );
    return asyncData;
}