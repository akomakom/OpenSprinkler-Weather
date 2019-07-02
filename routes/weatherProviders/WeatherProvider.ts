import { GeoCoordinates, PWS, WeatherData, ZimmermanWateringData } from "../../types";

export class WeatherProvider {
	/**
	 * Retrieves weather data necessary for Zimmerman watering level calculations.
	 * @param coordinates The coordinates to retrieve the watering data for.
	 * @param pws The PWS to retrieve the weather from, or undefined if a PWS should not be used. If the implementation
	 * of this method does not have PWS support, this parameter may be ignored and coordinates may be used instead.
	 * @return A Promise that will be resolved with the ZimmermanWateringData if it is successfully retrieved,
	 * or rejected with an error message if an error occurs while retrieving the ZimmermanWateringData or the WeatherProvider
	 * does not support this method.
	 */
	getWateringData( coordinates: GeoCoordinates, pws?: PWS ): Promise< ZimmermanWateringData > {
		throw "Selected WeatherProvider does not support getWateringData";
	}

	/**
	 * Retrieves the current weather data for usage in the mobile app.
	 * @param coordinates The coordinates to retrieve the weather for
	 * @return A Promise that will be resolved with the WeatherData if it is successfully retrieved,
	 * or rejected with an error message if an error occurs while retrieving the WeatherData or the WeatherProvider does
	 * not support this method.
	 */
	getWeatherData( coordinates : GeoCoordinates ): Promise< WeatherData > {
		throw "Selected WeatherProvider does not support getWeatherData";
	}
}