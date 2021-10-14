import {
    Command,
    YellowLight,
    YellowLightOn,
    YellowLightOff,
    RedLight,
    RedLightOn,
    RedLightOff,
    RedLightIncreaseLight,
    RedLightDecreaseLight,
    RemoteController
} from "../../patterns/command/LightCommand";

let redLightOn: boolean = false

export function commandLightOnReciever(command: Command): string {

    const remoteController = new RemoteController();
    remoteController.setCommand(command)

    return remoteController.executeCommand()

}

export function orderHandler(command: string): string {

    let result: string;

    switch (command) {
        case "on":
            result = redLightOn ? commandLightOnReciever(new RedLightOn(new RedLight())) : commandLightOnReciever(new YellowLightOn(new YellowLight()))
            break;

        case "off":
            redLightOn=false
            result = redLightOn ? commandLightOnReciever(new RedLightOff(new RedLight())) : commandLightOnReciever(new YellowLightOff(new YellowLight()))
            break

        case "increaseLight":
            result = redLightOn ? commandLightOnReciever(new RedLightIncreaseLight(new RedLight())):commandLightOnReciever(new YellowLightOn(new YellowLight()))
            break

        case "decreaseLight":
            result = redLightOn ? commandLightOnReciever(new RedLightDecreaseLight(new RedLight())) : commandLightOnReciever(new YellowLightOn(new YellowLight()))
            break

        case "redLight":
            redLightOn = true
            result = redLightOn ? commandLightOnReciever(new RedLightOn(new RedLight())):commandLightOnReciever(new YellowLightOn(new YellowLight()))
            break

        default:
            //console.log("Default Case")
    }
    // @ts-ignore
    return result;

}