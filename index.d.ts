declare var possibleEvents: Set<string>;
declare class TickInputHandler {
    static epochTicks: number;
    static ticksPerMillisecond: number;
    static maxDateMilliseconds: number;
    showResult(inputElement: HTMLInputElement): string;
}
