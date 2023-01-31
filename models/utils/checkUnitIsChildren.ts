import {Domain} from "effector";

export const checkUnitIsChildren = (
    childName: string,
    parent: Domain,
    typeUnit: 'domains' | 'stores' | 'effects' | 'events'
): boolean => {
    let exist = false
    const units = parent.history[typeUnit];
    for(const el of units.values()) {
        const { path } = el.compositeName
        exist = path[path.length - 1] == childName
    }
    return exist
}

