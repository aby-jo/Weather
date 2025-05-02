import { weather_fetch } from "./weather_fetch";
import { add_weather_data } from "./add_weather_data";
const clear_display = (display, loading) => {
  display.replaceChildren();
  loading.style.display = "none";
  display.appendChild(loading);
};
const add_location = async (display, value, loading) => {
  loading.style.display = "block";
  const data_array = await weather_fetch(value);
  if (data_array == null) {
    alert("Invalid Place or Unknown Place");
  } else if (data_array == 404) {
    alert("No Place provided");
  }
  clear_display(display, loading);
  add_weather_data(display, data_array);
};
const display_creation = () => {
  const body = document.querySelector("body");
  const display = document.createElement("div");
  display.id = "display";
  const loading = document.createElement("div");
  loading.textContent = "Loading...";
  loading.style.display = "none";
  loading.id = "load";
  display.appendChild(loading);
  const form = document.createElement("form");
  form.id = "form";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  const input = document.createElement("input");
  input.type = "Text";
  input.id = "place";
  input.placeholder = "Search";
  form.appendChild(input);
  body.appendChild(display);
  body.appendChild(form);
  add_location(display, "India", loading);
  let isFetching = false;
  input.addEventListener("keydown", async (event) => {
    if (isFetching) return;
    if (event.key == "Enter") {
      event.preventDefault();
      if (input.value.trim() == "") {
        alert("Please provide a location");
        return;
      }
      clear_display(display, loading);
      isFetching = true;
      const value = input.value;
      await add_location(display, value, loading);
      isFetching = false;
    }
  });
};
export { display_creation };
