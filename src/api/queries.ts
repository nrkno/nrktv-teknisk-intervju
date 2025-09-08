import { ILocation } from './types/location';
import { locations } from './data';

/**
 * Gets all locations from the data source
 * @returns Array of all locations
 */
export function getAllLocations(): ILocation[] {
  return locations;
}

/**
 * Gets a single location by its id
 * @param id The id of the location to find
 * @returns The location with the matching id or undefined if not found
 */
export function getLocationById(id: string): ILocation | undefined {
  return locations.find((location) => location.id === id);
}

/**
 * Gets a random location by its id
 * @returns The the random location
 */
export function getRandomLocation(): ILocation {
  const randomIndex = Math.floor(Math.random() * locations.length);
  return locations[randomIndex];
}
