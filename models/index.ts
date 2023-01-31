import {createEvent, createStore, createEffect, PageContext} from "effector-next";
import {MouseEvent} from "react";
import axios from "axios";
import {instance} from "../common/network/instance";

export const pageLoaded = createEvent<PageContext>();
export const buttonClicked = createEvent<MouseEvent<HTMLElement>>();
export const effect = createEffect(async () => {
    return axios.request({
        method: 'get',
        url: 'http://127.0.0.1:8083/example',
    })
});



// @ts-ignore
export const $data = createStore(null)
    .on(effect.doneData, (_,payload) => payload.data)


$data.watch((data) => {
    console.log('data', data)
})

//
//
// buttonClicked.watch((payload) => {
//     console.log('payload',payload)
// })
//
// // @ts-ignore
// $data.on(effect.done, (_, { result }) => result);
//
// forward({
//     from: pageLoaded.map(() => "nameFromPageLoaded"),
//     to: effect,
// });
//
// forward({
//     from: buttonClicked.map(() => "nameFromButtonClicked"),
//     to: effect,
// });



export const callApiFx = createEffect(async ()=> {
    return await instance.get('/example')
})

export const $exampleStore = createStore<{text: string}>({
    text: ''
}).on(callApiFx.pending, (state, payload) => {
    console.log('pending')
    return state
}).on(callApiFx.doneData, (state, payload) => {
    console.log('doneData')
    return state
})
