import { Pipe, PipeTransform } from '@angular/core';

export type WeatherIco = 'drizzle'

@Pipe({
    name: 'weatherIco'
})
export class WeatherIcoPipe implements PipeTransform {
    ico: WeatherIco;


    transform(value: number): string {
        const basicImg = `{./../../assets/icoWeather/${this.ico}}.png`
        this.ico = 'drizzle';

        return basicImg;
    }

}