// import { Html, Head, Main, NextScript } from 'next/document'
// import { withFork } from "effector-next";
// import {ReactElement} from "react";
// const enhance = withFork({ debug: false });
//
// const Document = (): ReactElement => {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }
//
//
// export default enhance(Document);

import Document from "next/document";
import { withFork } from "effector-next";

const enhance = withFork({ debug: false });

export default enhance(Document);