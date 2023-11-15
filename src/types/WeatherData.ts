export default interface WeatherData {
    city: string
    country: string
    temperature: number
    humidity: number
    sky: string
    main: 'Clear' | 'Clouds' | 'Rain' | 'Thuderstorm' | 'Drizzle' | undefined
    clouds: number
}