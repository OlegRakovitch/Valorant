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
            area: [680, 353, 711, 353, 712, 385, 746, 385, 746, 409, 727, 409, 727, 421, 655, 422, 654, 386, 680, 385]
          },
          boat: {
            caption: 'Лодка',
            area: [167, 181, 193, 181, 193, 269, 168, 269]
          },
          box: {
            caption: 'Коробка',
            area: [151, 268, 151, 257, 162, 257, 162, 269]
          },
          column: {
            caption: 'Столбик',
            area: [276, 144, 210, 144, 209, 95, 319, 96, 317, 125, 277, 125]
          },
          fish: {
            caption: 'Рыба',
            area: [126, 304, 271, 303, 272, 346, 127, 347]
          },
          generator: {
            caption: 'Генератор',
            area: [652, 284, 632, 284, 633, 208, 652, 208]
          },
          grotto: {
            caption: 'Грот',
            area: [1, 166, 50, 165, 49, 255, 2, 257]
          },
          lantern: {
            caption: 'Фонарь',
            area: [203, 366, 202, 347, 245, 347, 245, 366]
          },
          market: {
            caption: 'Рынок',
            area: [290, 202, 290, 277, 336, 278, 358, 257, 356, 202]
          },
          stones: {
            caption: 'Камни',
            area: [757, 308, 732, 308, 732, 351, 758, 351]
          },
          tree: {
            caption: 'Дерево',
            area: [506, 297, 611, 297, 611, 346, 506, 346]
          },
          window: {
            caption: 'Окно',
            area: [652, 171, 652, 201, 678, 201, 678, 206, 758, 205, 757, 172]
          },
          wood: {
            caption: 'Бревна',
            area: [282, 252, 253, 252, 253, 269, 282, 268]
          }
        }
      },
      bind: {
        caption: 'Bind',
        spots: {
          bathhouse: {
            caption: 'Баня',
            area: [553, 357, 671, 357, 671, 400, 648, 400, 649, 437, 617, 437, 617, 383, 553, 383]
          },
          car: {
            caption: 'Машина',
            area: [514, 286, 473, 286, 472, 269, 509, 269, 524, 269, 524, 297, 524, 312, 473, 312, 473, 299, 514, 299]
          },
          carpets: {
            caption: 'Ковры',
            area: [401, 428, 401, 384, 424, 384, 424, 428]
          },
          construction: {
            caption: 'Стройка',
            area: [182, 265, 182, 230, 202, 230, 203, 265]
          },
          fountain: {
            caption: 'Фонтан',
            area: [27, 506, 40, 506, 41, 496, 63, 479, 137, 480, 137, 605, 85, 604, 27, 546]
          },
          garbage: {
            caption: 'Мусор',
            area: [611, 355, 591, 355, 591, 329, 611, 329]
          },
          garden: {
            caption: 'Сад',
            area: [69, 346, 121, 346, 121, 387, 111, 398, 80, 398, 68, 388]
          },
          lamp: {
            caption: 'Лампа',
            area: [471, 266, 449, 267, 449, 281, 433, 281, 432, 267, 393, 267, 393, 299, 460, 298, 461, 276, 471, 276]
          },
          long: {
            caption: 'Лонг',
            area: [64, 356, 31, 356, 31, 495, 42, 495, 64, 478]
          },
          mid: {
            caption: 'Мид',
            area: [181, 453, 181, 500, 260, 500, 263, 369, 251, 364, 236, 363, 219, 369, 219, 404, 208, 404, 208, 452]
          },
          museum: {
            caption: 'Музей',
            area: [58, 159, 79, 189, 203, 189, 203, 159]
          },
          palace: {
            caption: 'Дворец',
            area: [140, 319, 181, 319, 181, 431, 140, 431, 140, 386, 149, 386, 149, 365, 139, 365]
          },
          passage: {
            caption: 'Проезд',
            area: [589, 276, 588, 224, 610, 224, 610, 275]
          },
          pipe: {
            caption: 'Труба',
            area: [114, 258, 114, 239, 160, 238, 160, 258]
          },
          pipes: {
            caption: 'Трубы',
            area: [439, 195, 414, 195, 414, 249, 454, 250, 455, 232, 440, 232]
          },
          plank: {
            caption: 'Доска',
            area: [53, 319, 76, 319, 76, 340, 53, 340]
          },
          short: {
            caption: 'Шорт',
            area: [392, 448, 392, 485, 476, 485, 475, 458, 454, 458, 454, 449]
          },
          towel: {
            caption: 'Полотенце',
            area: [520, 350, 489, 350, 489, 374, 520, 374]
          },
          window: {
            caption: 'Окно',
            area: [525, 159, 525, 200, 570, 200, 551, 223, 599, 223, 579, 200, 600, 200, 600, 159]
          },
          zigzag: {
            caption: 'Зига',
            area: [58, 159, 59, 218, 5, 219, 5, 247, 80, 247, 79, 189]
          }
        },
      },
      split: {
        caption: 'Split',
        spots: {
          ascent: {
            caption: 'Подъем',
            area: [590, 362, 532, 362, 532, 421, 553, 444, 609, 444, 609, 416, 644, 416, 644, 386, 590, 386]
          },
          balcony: {
            caption: 'Балкон',
            area: [633, 260, 633, 325, 644, 325, 644, 260]
          },
          balcony2: {
            caption: 'Балкон',
            area: [192, 212, 203, 212, 203, 292, 192, 292]
          },
          basement: {
            caption: 'Подвал',
            area: [476, 273, 507, 273, 507, 347, 476, 347]
          },
          calendar: {
            caption: 'Календарь',
            area: [111, 125, 111, 166, 184, 166, 184, 125]
          },
          cashier: {
            caption: 'Касса',
            area: [706, 143, 706, 164, 767, 165, 767, 190, 840, 190, 840, 174, 788, 174, 788, 143]
          },
          electricity: {
            caption: 'Ток',
            area: [179, 355, 204, 355, 204, 340, 234, 340, 234, 373, 179, 373]
          },
          elevator: {
            caption: 'Лифт',
            area: [508, 167, 618, 166, 619, 254, 585, 254, 585, 297, 541, 297, 540, 223, 508, 223]
          },
          furnace: {
            caption: 'Печка',
            area: [56, 212, 1, 212, 1, 161, 56, 161]
          },
          garage: {
            caption: 'Гараж',
            area: [31, 412, 175, 412, 175, 473, 32, 472]
          },
          garbage: {
            caption: 'Мусор',
            area: [43, 354, 1, 354, 1, 323, 43, 323]
          },
          green: {
            caption: 'Зелень',
            area: [673, 325, 673, 272, 647, 272, 646, 324]
          },
          intestines: {
            caption: 'Кишка',
            area: [430, 489, 504, 489, 504, 462, 525, 463, 525, 530, 657, 530, 656, 489, 685, 489, 686, 560, 504, 560, 504, 517, 430, 517]
          },
          mail: {
            caption: 'Почта',
            area: [353, 345, 307, 345, 307, 400, 353, 400]
          },
          screen: {
            caption: 'Экран',
            area: [633, 120, 633, 73, 737, 73, 737, 121]
          },
          window: {
            caption: 'Окно',
            area: [621, 206, 621, 238, 632, 258, 644, 258, 644, 206]
          },
          window2: {
            caption: 'Окно',
            area: [264, 252, 290, 269, 292, 400, 260, 432, 239, 432, 238, 344, 235, 308, 206, 308, 207, 319, 192, 319, 192, 295, 264, 294]
          },
          wire: {
            caption: 'Провод',
            area: [92, 475, 64, 475, 64, 503, 92, 503]
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
