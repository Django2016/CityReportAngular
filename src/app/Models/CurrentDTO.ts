export class CurrentDTO{
    current : Current;
}

export class Current{
    temperature : string;
    condition : Condition;
}

export class Condition{
    text : string;
    icon : string;
}