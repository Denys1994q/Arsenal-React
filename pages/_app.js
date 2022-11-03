import "../styles/index.sass";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { wrapper } from "../store/store";

import Layout from "../components/layout/Layout.js";

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default wrapper.withRedux(MyApp);

// import "../styles/index.sass";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

// import { Provider } from "react-redux";
// import { store } from "../store/store.js";

// import Layout from "../components/layout/Layout.js";

// const MyApp = ({ Component, pageProps }) => {
//     return (
//         <Provider store={store}>
//             <Layout>
//                 <Component {...pageProps} />
//             </Layout>
//         </Provider>
//     );
// };

// export default MyApp;
