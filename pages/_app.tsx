import '../styles/globals.css'
// import type { AppProps } from 'next/app'
//
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import { withHydrate } from "effector-next";
import App from "next/app";

const enhance = withHydrate();

export default enhance(App);

//
// // Events
// export const createTeam = createEvent();
// export const getTeams = createEvent();
//
// // Effects
// const getTeamsFx = createEffect(async () => await TeamService.getTeams());
//
// const createTeamFx = createEffect(async ({ teamName, orgName }) => await TeamService.sendTeams(teamName, orgName));
//
// // Stores
// export const $teams = createStore([]);
//
// // Samples
// // Get
// sample({
//   clock: getTeams,
//   target: getTeamsFx,
// });
//
// sample({
//   clock: getTeamsFx.doneData,
//   fn: (data) => (data ? data : []),
//   target: $teams,
// });
//
// // Create
// sample({
//   clock: createTeam,
//   fn: ({ orgName, teamName }) => ({ orgName, teamName }),
//   target: createTeamFx,
// });
//
// sample({
//   clock: createTeamFx.done,
//   target: getTeamsFx,
// });