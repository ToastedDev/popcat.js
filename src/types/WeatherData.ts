export type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
export type ShortDay = "Mon" | "Tues" | "Wed" | "Thurs" | "Fri";

export type WeatherData =
  | {
      location: {
        name: string;
        lat: string;
        long: string;
        timezone: string;
        alert: string;
        degreetype: "C" | "F";
        imagerelativeurl: string;
      };
      current: {
        temperature: string;
        skycode: string;
        skytext: string;
        date: string;
        observationtime: string;
        observationpoint: string;
        feelslike: string;
        humidity: string;
        winddisplay: string;
        day: Day;
        shortday: ShortDay;
        windspeed: string;
        imageUrl: string;
      };
      forecast: {
        low: string;
        high: string;
        skycodeday: string;
        skytextday: string;
        date: string;
        day: Day;
        shortday: ShortDay;
        precip: string;
      }[];
    }[]
  | [];
