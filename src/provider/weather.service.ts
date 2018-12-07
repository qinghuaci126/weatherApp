import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  // 使用阿里云天气服务的API
  appCode = 'APPCODE youselfcode';//自己的appcode
  url = 'http://saweather.market.alicloudapi.com/spot-to-weather';//Api的url
  // 检测运行应用时此服务是否调用
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  // 获取天气数据的方法
  getWeather(city) {
    return this.http.get(this.url, {
      // 头参数
      headers: new HttpHeaders().set('Authorization', this.appCode),
      // 匹配城市参数
      params: {'area': city}
    })
  }
}
