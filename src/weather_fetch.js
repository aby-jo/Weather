const calculate_windir = (degree) => {
  const direction = [
    "North",
    "North East",
    "East",
    "South East",
    "South",
    "South West",
    "West",
    "North West",
  ];
  degree = parseInt(degree, 10);
  const index = Math.round(degree / 45) % 8;
  return direction[index];
};
const getthedate = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date(date);
  const day = days[today.getDay()];
  const datee = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  return [day, datee, month, year];
};
const weather_fetch = async (place) => {
  if (place) {
    const key = "L7YKT7B7HPRS6K9DU9WM9KPZ3";
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(place)}?unitGroup=metric&key=${key}`,
      );
      if (!response.ok) {
        throw "Invalid Request";
      }
      const data = await response.json();
      const today = data.days[0];
      const temp_for_today = "Temperature for the day: " + today.temp + "°C";
      const prediction_for_today =
        "Prediction for the day: " + today.description;
      const date = getthedate(today.datetime);
      const address = data.resolvedAddress;
      const temp_now = data.currentConditions.temp + "°C";
      const conditions = data.currentConditions.conditions;
      const feelslike =
        "Feels Like: " + data.currentConditions.feelslike + "°C";
      const humidity = "Humidity: " + data.currentConditions.humidity + "%";
      const windir_in_degree = data.currentConditions.winddir;
      const windir = calculate_windir(windir_in_degree);
      const windspeed =
        "Wind Speed: " + data.currentConditions.windspeed + " km/hr ";
      return [
        address,
        temp_now,
        conditions,
        date,
        feelslike,
        humidity,
        windspeed + windir,
        temp_for_today,
        prediction_for_today,
      ];
    } catch (exception) {
      console.log(exception);
      return null;
    }
  } else {
    console.log("No place provided");
    return 404;
  }
};
export { weather_fetch };
