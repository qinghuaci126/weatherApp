import { Component} from '@angular/core';
import {NavController} from '@ionic/angular';

// 引入WeatherService服务
import {WeatherService} from '../../provider/weather.service';
// 引入数据存储
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
  // 定义控制器中需要用到的数据及类型
  weatherResult: any;
  weather: any;
  weather1: any;
  weatherImg: string;
  templow: string;
  temphigh: string;
  location: {
    city: string,
  };

  // 使用构造注入的方式注入依赖对象
  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherService,
    private storage: Storage
  ) {
  }

  // 初始化视图数据
  ionViewWillEnter() {
    // 获取本地储存的数据并根据城市名称初始化城市数据
    this.storage.get('location').then((val) => {
      // 如果本地储存的数据不为空
      if (val != null) {
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: '北京',
        }
      }
      // 用天气服务获得当前城市的天气数据
      this.weatherProvider.getWeather(this.location.city)
        .subscribe(weatherResult => {
          console.log(weatherResult);          
            this.weatherResult = weatherResult;

            console.log(this.weatherResult.showapi_res_body);
            console.log(this.weatherResult.showapi_res_body.f1);


            
            // 天气对象
            //this.weather=$.extend(this.weatherResult.showapi_res_body.f1,this.weatherResult.showapi_res_body.now);
            
            this.weather = this.weatherResult.showapi_res_body.now;
            this.weather1 = this.weatherResult.showapi_res_body.f1;
            //this.templow=this.weather.night_air_temperature;
            //this.temphigh=this.weather.day_air_temperature;

            //this.weather = this.weatherResult.showapi_res_body.now;
            // 天气图片使用墨迹天气的链接拼接imgurl
           // this.weatherImg = 'http://www.moji.com//templets/mojichina/images/weather/weather/w' + this.weather.img + ".png";
           console.log(this.weather); 
           this.weatherImg=this.weather.weather_pic;
          
          }
        )
    })
  }
}


