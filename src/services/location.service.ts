import { Injectable } from '@angular/core';

import { Location, Spot } from '../models';

type LocationCollection = { [name: string]: Location };
type LocationData = { caption: string, spots: { [name: string]: { caption: string, area: number[] } } };
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
      .map(([name, spot]) => new Spot(spot.caption, spot.area, name));
    return new Location(locationName, location.caption, spots);
  }

  private getSpotsData(): SpotsData {
    return {
      ascent: {
        caption: 'Ascent',
        spots: {
          arch: {
            caption: 'Арка',
            area: []
          },
          boat: {
            caption: 'Лодка',
            area: []
          },
          box: {
            caption: 'Коробка',
            area: []
          },
          column: {
            caption: 'Столбик',
            area: []
          },
          fish: {
            caption: 'Рыба',
            area: []
          },
          generator: {
            caption: 'Генератор',
            area: []
          },
          grotto: {
            caption: 'Грот',
            area: []
          },
          lantern: {
            caption: 'Фонарь',
            area: []
          },
          market: {
            caption: 'Рынок',
            area: []
          },
          plant: {
            caption: 'Плэнт',
            area: []
          },
          plant2: {
            caption: 'Плэнт',
            area: []
          },
          stones: {
            caption: 'Камни',
            area: []
          },
          tree: {
            caption: 'Дерево',
            area: []
          },
          under_window: {
            caption: 'Под окном',
            area: []
          },
          window: {
            caption: 'Окно',
            area: []
          },
          wood: {
            caption: 'Бревна',
            area: []
          }
        }
      },
      bind: {
        caption: 'Bind',
        spots: {
          bathhouse: {
            caption: 'Баня',
            area: []
          },
          car: {
            caption: 'Машина',
            area: []
          },
          carpets: {
            caption: 'Ковры',
            area: []
          },
          construction: {
            caption: 'Стройка',
            area: []
          },
          fountain: {
            caption: 'Фонтан',
            area: []
          },
          garbage: {
            caption: 'Мусор',
            area: []
          },
          garden: {
            caption: 'Сад',
            area: []
          },
          lamp: {
            caption: 'Лампа',
            area: []
          },
          long: {
            caption: 'Лонг',
            area: []
          },
          mid: {
            caption: 'Мид',
            area: []
          },
          museum: {
            caption: 'Музей',
            area: []
          },
          palace: {
            caption: 'Дворец',
            area: []
          },
          passage: {
            caption: 'Проезд',
            area: []
          },
          pipe: {
            caption: 'Труба',
            area: []
          },
          pipes: {
            caption: 'Трубы',
            area: []
          },
          plank: {
            caption: 'Доска',
            area: []
          },
          short: {
            caption: 'Шорт',
            area: []
          },
          towel: {
            caption: 'Полотенце',
            area: []
          },
          window: {
            caption: 'Окно',
            area: []
          },
          zigzag: {
            caption: 'Зига',
            area: []
          }
        },
      },
      split: {
        caption: 'Split',
        spots: {
          ascent: {
            caption: 'Подъем',
            area: []
          },
          balcony: {
            caption: 'Балкон',
            area: []
          },
          balcony2: {
            caption: 'Балкон',
            area: []
          },
          basement: {
            caption: 'Подвал',
            area: []
          },
          calendar: {
            caption: 'Календарь',
            area: []
          },
          cashier: {
            caption: 'Касса',
            area: []
          },
          electricity: {
            caption: 'Ток',
            area: []
          },
          elevator: {
            caption: 'Лифт',
            area: []
          },
          furnace: {
            caption: 'Печка',
            area: []
          },
          garage: {
            caption: 'Гараж',
            area: []
          },
          garbage: {
            caption: 'Мусор',
            area: []
          },
          green: {
            caption: 'Зелень',
            area: []
          },
          intestines: {
            caption: 'Кишка',
            area: []
          },
          mail: {
            caption: 'Почта',
            area: []
          },
          plant: {
            caption: 'Плэнт',
            area: []
          },
          plant2: {
            caption: 'Плэнт',
            area: []
          },
          screen: {
            caption: 'Экран',
            area: []
          },
          window: {
            caption: 'Окно',
            area: []
          },
          window2: {
            caption: 'Окно',
            area: []
          },
          wire: {
            caption: 'Провод',
            area: []
          }
        }
      },
      haven: {
        caption: 'Haven',
        spots: {
          banana: {
            caption: 'Банан',
            area: [594, 549, 591, 497, 616, 497, 695, 450, 730, 449, 756, 449, 756, 503, 694, 503, 617, 551, 607, 550]
          },
          book: {
            caption: 'Книга',
            area: [213, 331, 300, 331, 300, 359, 212, 360]
          },
          box: {
            caption: 'Коробка',
            area: [435, 393, 435, 374, 450, 374, 450, 393]
          },
          cabbage: {
            caption: 'Капуста',
            area: [627, 415, 681, 415, 681, 443, 627, 443]
          },
          closet: {
            caption: 'Каморка',
            area: [88, 490, 124, 490, 123, 536, 88, 536]
          },
          green: {
            caption: 'Зелень',
            area: [756, 387, 730, 387, 730, 369, 756, 369]
          },
          hare: {
            caption: 'Заяц',
            area: [314, 402, 342, 402, 342, 442, 314, 441]
          },
          hay: {
            caption: 'Сено',
            area: [559, 414, 559, 418, 533, 417, 533, 374, 558, 374, 559, 388, 613, 388, 613, 414, 559, 414]
          },
          long: {
            caption: 'Лонг',
            area: [54, 429, 54, 494, 59, 494, 60, 551, 60, 570, 88, 570, 89, 429]
          },
          map: {
            caption: 'Карта',
            area: [226, 460, 226, 364, 300, 364, 300, 461]
          },
          mid: {
            caption: 'Мид',
            area: [445, 499, 444, 558, 226, 557, 227, 497]
          },
          pot: {
            caption: 'Горшки',
            area: [18, 427, 18, 409, 52, 409, 52, 427]
          },
          radio: {
            caption: 'Радио',
            area: [156, 406, 117, 406, 117, 428, 156, 428]
          },
          scene: {
            caption: 'Сцена',
            area: [2, 253, 2, 345, 62, 346, 62, 253]
          },
          screen: {
            caption: 'Экран',
            area: [335, 563, 335, 591, 442, 591, 442, 563]
          },
          shield: {
            caption: 'Щит',
            area: [355, 218, 355, 257, 410, 257, 410, 218]
          },
          short: {
            caption: 'Шорт',
            area: [527, 198, 566, 198, 566, 224, 614, 225, 614, 251, 566, 251, 566, 267, 527, 267]
          },
          storage: {
            caption: 'Склад',
            area: [458, 375, 524, 375, 524, 427, 465, 427, 465, 422, 458, 422]
          },
          tatoo: {
            caption: 'Тату',
            area: [581, 281, 615, 281, 615, 374, 581, 373]
          },
          window: {
            caption: 'Окно',
            area: [742, 235, 670, 235, 670, 261, 743, 261]
          }
        }
      }
    };
  }
}
