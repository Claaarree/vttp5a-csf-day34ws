import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'day34ws';
  form!: FormGroup;
  data! : Map<string, string>;

  constructor(private weatherSvc: WeatherService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      city: this.fb.control<string>('')
    })
  }

  protected handleForm() {
    console.log(this.form.value.city)
    const city = this.form.value.city
    const result = this.weatherSvc.getWeatherDetails(city)
    result.subscribe({
      next: (value) => {
        console.log(value)
        const feel = value.current.feelslike_c
        const actual =  value.current.temp_c
        console.log("feel " + feel)
        console.log("acutal " + actual)
        this.data =  new Map()
        this.data.set("feel", feel)
            .set("actual", actual)
      },
      error: (error) => {console.log(error)}})
    // const city = this.form.value
  }
}
