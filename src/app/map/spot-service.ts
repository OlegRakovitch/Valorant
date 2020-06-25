import { Injectable } from '@angular/core';
import { Spot } from './spot';
import { Map } from './map';
import { MapService } from './map-service';

type HardcodedSpotsCollection = { [map: string]: Spot[] };

@Injectable()
export class SpotService {

  private readonly hardcodedSpots: Promise<HardcodedSpotsCollection>;

  constructor(
    private maps: MapService
  ) {
    this.hardcodedSpots = this.loadHardcodedSpots();
  }

  private async loadHardcodedSpots() {

    const spots: HardcodedSpotsCollection = {};
    for(const map of await this.maps.getMaps()) {

      spots[map.name] = this.getHardcodedSpots(map);
    }
    return spots;
  }

  private getHardcodedSpots(map: Map) {
    const factory = new SpotFactory(map);

    let data: string[][];
    if (map.name === 'ascent') {
      data = [
        ['Арка', 'arch'],
        ['Лодка', 'boat'],
        ['Коробка', 'box'],
        ['Столбик', 'column'],
        ['Рыба', 'fish'],
        ['Генератор', 'generator'],
        ['Грот', 'grotto'],
        ['Фонарь', 'lantern'],
        ['Рынок', 'market'],
        ['Плэнт', 'plant'],
        ['Плэнт', 'plant2'],
        ['Камни', 'stones'],
        ['Дерево', 'tree'],
        ['Под окном', 'under_window'],
        ['Окно', 'window'],
        ['Бревна', 'wood']
      ];
    } else if (map.name === 'split') {
      data = [
        ['Подъем', 'ascent'],
        ['Балкон', 'balcony'],
        ['Балкон', 'balcony2'],
        ['Подвал', 'basement'],
        ['Календарь', 'calendar'],
        ['Касса', 'cashier'],
        ['Ток', 'electricity'],
        ['Лифт', 'elevator'],
        ['Печка', 'furnace'],
        ['Гараж', 'garage'],
        ['Мусор', 'garbage'],
        ['Зелень', 'green'],
        ['Кишка', 'intestines'],
        ['Почта', 'mail'],
        ['Плэнт', 'plant'],
        ['Плэнт', 'plant2'],
        ['Экран', 'screen'],
        ['Окно', 'window'],
        ['Окно', 'window2'],
        ['Провод', 'wire']
      ];
    }
    return data.map(([caption, name]) =>
      factory.create(caption, name));
  }

  async loadSpots(map: Map): Promise<Spot[]> {
    const spots = await this.hardcodedSpots;
    return spots[map.name];
  }
}

class SpotFactory {
  constructor(private map: Map) { }

  create(caption: string, file: string) {
    return new Spot(caption, `${this.map.name}/${file}.jpeg`);
  }
}
