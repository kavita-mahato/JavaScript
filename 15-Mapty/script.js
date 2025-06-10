"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

let map, mapEvent;

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration){
    // this.date = ...
    // this.id = ...
    this.coords = coords;
    this.distance = distance;  // in km
    this.duration = duration;  // in min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence){
    super(coords,distance,duration);
    this.cadence = cadence;
    this.calcPace();
  }
  calcPace (){
    // min/km
    this.pace = this.duration/this.distance;
    return this.pace;
  }
}

class Cycling extends Workout{
  constructor(coords, distance, duration, elevation){
    super(coords,distance,duration);
    this.elevation = elevation;
  }
  calcSpeed(){
    // km/h
    this.speed = this.distance / (this.duration/60);
    return this.speed;
  }
}

const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 523);
console.log(run1, cycling1);

class App {
  #map;
  #mapEvent;
  constructor() {
    this._getPosition();
    form.addEventListener("submit", this._newWorkout.bind(this));

    inputType.addEventListener("change", this._toggleElevationField);
  }
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadmap.bind(this),
        function () {
          alert("Could not get your position!");
        }
      );
  }
  _loadmap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    console.log(this);
    this.#map = L.map("map").setView(coords, 13);
    // console.log(map);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handlling clicks
    this.#map.on("click", this._showform.bind(this));
  }
  _showform(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }
  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }
  _newWorkout(e) {
    e.preventDefault();
    // Clear input field
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = "";
    // Display Marker
    const { lat, lng } = this.#mapEvent.latlng;

    L.marker(lat, lng)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWIdth: 100,
          sutoClose: false,
          className: "running-popup",
        })
      )
      .setPopupContent("Workout")
      .openPopup();
  }
}

const app = new App();
