import {Domain, Effect, Store, Event} from "effector";

export const findUnitFromDomain = <U extends Domain | Store<any> | Effect<any, any, any> | Event<any>>(
    childName: string,
    parent: Domain,
    typeUnit: 'domains' | 'stores' | 'effects' | 'events'
): undefined | U => {
    const units = parent.history[typeUnit];
    for(const el of units.values()) {
        const { path } = el.compositeName
        if(path[path.length - 1] == childName) {
            return el as U
        }
    }
    return undefined
}