/**
 * Data behind the diesel-generator globe.
 *
 * The values are indicative, order-of-magnitude estimates of each country's
 * installed base of diesel generator sets (in thousands of units). No official
 * global census exists, so the site shows RELATIVE sizes only.
 *
 * TODO(owner): supply a citable source for these figures. Once there is one,
 * set SHOW_FIGURES to true and put the citation in SOURCE_NOTE — the globe will
 * then show per-country numbers and a world total.
 */
export const SHOW_FIGURES = false;

export const SOURCE_NOTE =
  "Circle sizes are indicative, order-of-magnitude estimates; no official global census of generator sets exists.";

export type GensetCountry = { name: string; lon: number; lat: number; units: number };

// [country, longitude, latitude, units in thousands]
const RAW: [string, number, number, number][] = [
  ["China", 108, 34, 5000], ["United States", -98, 39, 3500], ["India", 79, 22, 3000], ["Nigeria", 8, 9.5, 2500],
  ["Indonesia", 113, -1, 900], ["Brazil", -52, -11, 900], ["Pakistan", 69, 30, 800], ["Russia", 60, 57, 700],
  ["Iraq", 44, 33, 600], ["Japan", 138, 36.5, 600], ["Bangladesh", 90, 24, 500], ["Mexico", -102, 23.5, 500],
  ["Saudi Arabia", 45, 24, 450], ["South Africa", 25, -29, 450], ["Germany", 10, 51, 400], ["Iran", 54, 32, 400],
  ["Philippines", 122, 12, 400], ["United Kingdom", -2, 53, 350], ["Egypt", 30, 27, 350], ["Turkey", 35, 39, 350],
  ["Vietnam", 106, 16, 350], ["Australia", 134, -25, 300], ["Canada", -100, 56, 300], ["France", 2.5, 46.5, 300],
  ["Italy", 12.5, 42.5, 250], ["Thailand", 101, 15, 250], ["South Korea", 128, 36, 250], ["Ukraine", 31, 49, 250],
  ["Spain", -3.7, 40, 200], ["Argentina", -64, -34, 200], ["Malaysia", 102, 4, 200], ["United Arab Emirates", 54, 24, 200],
  ["DR Congo", 23, -2.5, 200], ["Myanmar", 96, 21, 200], ["Venezuela", -66, 7, 200], ["Colombia", -73, 4, 200],
  ["Kenya", 38, 0.5, 150], ["Ghana", -1.2, 7.9, 150], ["Algeria", 3, 28, 150], ["Angola", 17.5, -12, 150],
  ["Lebanon", 35.8, 33.9, 150], ["Yemen", 47.5, 15.5, 150], ["Ethiopia", 39.5, 9, 120], ["Tanzania", 35, -6, 120],
  ["Sudan", 30, 15, 120], ["Peru", -75, -9.5, 120], ["Chile", -71, -33, 120], ["Poland", 19, 52, 120],
  ["Morocco", -6, 32, 100], ["Kazakhstan", 67, 48, 100], ["Netherlands", 5.3, 52.2, 100], ["Cameroon", 12.5, 5.5, 90],
  ["Sri Lanka", 80.7, 7.8, 80], ["Côte d'Ivoire", -5.5, 7.5, 80], ["Nepal", 84, 28.3, 60], ["Afghanistan", 66, 34, 90],
  ["Syria", 38.5, 35, 90], ["Libya", 17, 27, 90], ["Mozambique", 35.5, -18, 60], ["Zambia", 27.8, -13.5, 60],
  ["Zimbabwe", 29.8, -19, 70], ["Uganda", 32.4, 1.3, 70], ["Senegal", -14.5, 14.5, 50], ["Haiti", -72.5, 19, 50],
  ["Cuba", -79.5, 21.8, 50], ["Ecuador", -78.5, -1.5, 70], ["Bolivia", -64.5, -16.5, 50], ["Oman", 57, 21, 80],
  ["Kuwait", 47.8, 29.3, 60], ["Qatar", 51.2, 25.3, 50], ["Sweden", 15, 62, 60], ["Norway", 9, 61, 50],
  ["New Zealand", 172.5, -41.5, 40], ["Papua New Guinea", 145, -6.5, 40], ["Madagascar", 46.8, -19, 40], ["Mali", -2, 17, 40],
];

export const GENSET_COUNTRIES: GensetCountry[] = RAW.map(([name, lon, lat, k]) => ({
  name,
  lon,
  lat,
  units: k * 1000,
})).sort((a, b) => b.units - a.units);

export const formatUnits = (v: number) =>
  v >= 1e6 ? `${(v / 1e6).toFixed(v >= 1e7 ? 0 : 1).replace(/\.0$/, "")}M` : `${Math.round(v / 1e3)}k`;
