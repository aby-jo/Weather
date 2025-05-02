const add_weather_data = (display, data_array) => {
  const location_container = document.createElement("div");

  const location = document.createElement("div");
  location.id = "location";
  const conditions = document.createElement("div");
  conditions.id = "condition";

  const temp_container = document.createElement("div");
  temp_container.id = "tempcontainer";
  const temp_now = document.createElement("div");
  temp_now.id = "temperature";
  const requiredDataContainer = document.createElement("div");
  requiredDataContainer.id = "container";

  const feelslike = document.createElement("div");
  const humidity = document.createElement("div");
  const windspeed = document.createElement("div");
  // const date=document.createElement("div")
  // const temp_for_today=document.createElement("div")
  // const prediction=document.createElement("div")

  display.appendChild(location_container);
  location_container.appendChild(location);
  location_container.appendChild(conditions);

  display.appendChild(temp_container);

  temp_container.appendChild(temp_now);

  temp_container.appendChild(requiredDataContainer);

  requiredDataContainer.appendChild(feelslike);
  requiredDataContainer.appendChild(humidity);
  requiredDataContainer.appendChild(windspeed);
  // display.appendChild(date)
  // display.appendChild(temp_for_today)
  // display.appendChild(prediction)
  location.textContent = data_array[0];
  temp_now.textContent = data_array[1];
  conditions.textContent = data_array[2];
  // date.textContent=data_array[3]
  feelslike.textContent = data_array[4];
  humidity.textContent = data_array[5];
  windspeed.textContent = data_array[6];
  // temp_for_today.textContent=data_array[7]
  // prediction.textContent=data_array[8]
};
export { add_weather_data };
