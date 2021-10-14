import {commandLightOnReciever} from "../pages/hello-command/implementCommand"
import {RemoteController,YellowLightOn,YellowLightOff, YellowLight, RedLightOn, RedLight, RedLightOff} from "../patterns/command/LightCommand"

const remoteController = new RemoteController();
describe("Command Pattern", () => {
    test("Yellow Light On",()=>{
        let expected = commandLightOnReciever(new YellowLightOn(new YellowLight()))
        remoteController.setCommand(new YellowLightOn(new YellowLight))
        let actual = remoteController.executeCommand()
        expect(expected).toEqual(actual)
    });
    test("Yellow Light Off",()=>{
        let expected = commandLightOnReciever(new YellowLightOff(new YellowLight()))
        remoteController.setCommand(new YellowLightOff(new YellowLight()))
        let actual = remoteController.executeCommand()
        expect(expected).toEqual(actual)
    });
    test("Red Light On",()=>{
        let expected = commandLightOnReciever(new RedLightOn(new RedLight()))
        remoteController.setCommand(new RedLightOn(new RedLight()))
        let actual = remoteController.executeCommand()
        expect(expected).toEqual(actual)
    });
    test("Red Light Off",()=>{
        let expected = commandLightOnReciever(new RedLightOff(new RedLight()))
        remoteController.setCommand(new RedLightOff(new RedLight()))
        let actual = remoteController.executeCommand()
        expect(expected).toEqual(actual)
    });
})