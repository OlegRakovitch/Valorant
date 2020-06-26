import { Injectable } from '@angular/core';

import { Location, Spot } from '../models';

type LocationCollection = { [name: string]: Location };
type LocationData = { caption: string, spots: { [name: string]: string } };
type SpotsData = { [location: string]: LocationData };

@Injectable()
export class LocationService {
  private readonly locations: LocationCollection;

  constructor() {
    this.locations = this.loadLocations();
  }

  getLocation(name: string): Location {
    return this.locations[name];
  }

  getLocations(): Location[] {
    return Object.values(this.locations);
  }

  private loadLocations(): LocationCollection {
    return this.toLocationCollection(this.getSpotsData());
  }

  private toLocationCollection(data: SpotsData): LocationCollection {
    const locations: LocationCollection = {};
    for (const locationName of Object.keys(data)) {
      locations[locationName] = this.toLocation(locationName, data[locationName]);
    }
    return locations;
  }

  private toLocation(locationName: string, location: LocationData): Location {
    const spots = Object.entries(location.spots)
      .map(([name, caption]) => new Spot(caption, name));
    return new Location(locationName, location.caption, spots);
  }

  private getSpotsData(): SpotsData {
    return {
      ascent: {
        caption: 'Ascent',
        spots: {
          arch: 'Арка',
          boat: 'Лодка',
          box: 'Коробка',
          column: 'Столбик',
          fish: 'Рыба',
          generator: 'Генератор',
          grotto: 'Грот',
          lantern: 'Фонарь',
          market: 'Рынок',
          plant: 'Плэнт',
          plant2: 'Плэнт',
          stones: 'Камни',
          tree: 'Дерево',
          under_window: 'Под окном',
          window: 'Окно',
          wood: 'Бревна'
        }
      },
      bind: {
        caption: 'Bind',
        spots: {
          bathhouse: 'Баня',
          car: 'Машина',
          carpets: 'Ковры',
          construction: 'Стройка',
          fountain: 'Фонтан',
          garbage: 'Мусор',
          garden: 'Сад',
          lamp: 'Лампа',
          long: 'Лонг',
          mid: 'Мид',
          museum: 'Музей',
          palace: 'Дворец',
          passage: 'Проезд',
          pipe: 'Труба',
          pipes: 'Трубы',
          plank: 'Доска',
          short: 'Шорт',
          towel: 'Полотенце',
          window: 'Окно',
          zigzag: 'Зига'
        },
      },
      split: {
        caption: 'Split',
        spots: {
          ascent: 'Подъем',
          balcony: 'Балкон',
          balcony2: 'Балкон',
          basement: 'Подвал',
          calendar: 'Календарь',
          cashier: 'Касса',
          electricity: 'Ток',
          elevator: 'Лифт',
          furnace: 'Печка',
          garage: 'Гараж',
          garbage: 'Мусор',
          green: 'Зелень',
          intestines: 'Кишка',
          mail: 'Почта',
          plant: 'Плэнт',
          plant2: 'Плэнт',
          screen: 'Экран',
          window: 'Окно',
          window2: 'Окно',
          wire: 'Провод'
        }
      }
    };
  }
}
