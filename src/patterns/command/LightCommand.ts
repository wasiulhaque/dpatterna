// @ts-ignore
export interface Command {

    execute(): string

}

export interface Light {
    on(): string
    off(): string
}

export class YellowLight implements Light{

    public on(): string {
        return 'on'
    }

    public off(): string {
        return 'off'
    }
}

var brightness:number=0

export class RedLight implements Light{

    public on(): string {
        return `red${brightness}`
    }

    public off(): string {
        return "off"
    }

    public increaseLight(): string {
        brightness++;
        return `red${brightness}`
    }

    public decreaseLight(): string {
        brightness--;
        return `red${brightness}`

    }
}

export class YellowLightOn implements Command {

    private _light: YellowLight

    constructor(_light: YellowLight) {
        this._light = _light;
    }

    execute(): string {
        return this._light.on();
    }


}

export class YellowLightOff implements Command {
    private _light: YellowLight

    constructor(_light: YellowLight) {
        this._light = _light
    }

    execute(): string {
        return this._light.off()
    }

}


export class RedLightOn implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.on()
    }

}

export class RedLightOff implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.off()
    }

}

export class RedLightIncreaseLight implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.increaseLight()
    }

}

export class RedLightDecreaseLight implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.decreaseLight()
    }

}


export class RemoteController {
    onCommand!: Command;

    constructor() {
    }

    setCommand(onCommand: Command) {
        this.onCommand = onCommand;
    }

    executeCommand() {
        return this.onCommand.execute()
    }


}