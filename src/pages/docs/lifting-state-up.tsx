/**
 * Ví dụ: Tạo 1 máy tính nhiệt độ để tính xem nước có sôi ở 1 nhiệt độ nhất định hay không.
 *
 * - 1. Function BoilingVerdict. Nhận vào props là celsius và in ra liệu nó có đủ để đun sôi nước hay không.
 * - 2. Tiếp theo, sẽ tạo 1 component Calculator. Nó sẽ hiển thị input cho phép nhập nhiệt độ.
 * - 3. Thêm input thứ 2, Yêu cầu mới ngoài đầu vào là celsius (nhiệt độ), giờ cung cấp thêm fahrenheit(độ F) và chúng được đồng bộ với nhau.
 * -
 */
import {ChangeEvent, useState} from "react";

function BoilingVerdict(props: {celsius: number}){

    if (props.celsius >= 100) {
        return <p>Nước đã sôi!!!</p>
    }

    return (
        <p>Nước chưa sôi@@@</p>
    )
}

function toCelsius(fahrenheit: number) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert: (value: number) => number) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export function Calculator(){
    const [value, setValue] = useState({temperature: '', scale: 'c'})

    const handleCelsiusChange = (temperature: string) => {
        setValue({scale: 'c', temperature})
    }

    const handleFahrenheitChange = (temperature: string) => {
        setValue({scale: 'f', temperature});
    }

    const celsius = value.scale === 'f' ? tryConvert(value.temperature, toCelsius) : value.temperature;
    const fahrenheit = value.scale === 'c' ? tryConvert(value.temperature, toFahrenheit) : value.temperature;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict
                celsius={parseFloat(celsius)} />
        </div>
    )
}

type TCaleNames = {
    c: string,
    f: string
}

const scaleNames = {
    c: 'Celsius',// nhiệt độ
    f: 'Fahrenheit'// độ F
};

const TemperatureInput = (props: {scale: keyof TCaleNames, temperature: string, onTemperatureChange: (e: string) => void}) => {
    const {scale, temperature, onTemperatureChange} = props;

    const handleChangeTemperature = (e: ChangeEvent<HTMLInputElement>) => {
        onTemperatureChange(e.target.value)
    }

    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input
                value={temperature}
                onChange={handleChangeTemperature} />
        </fieldset>
    )
}
