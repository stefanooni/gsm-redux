import "../../styles/_app.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../states/_global";
import { FavouritesSubscriber } from "../components/FavouritesSubscriber";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <FavouritesSubscriber />
      <Component {...pageProps} />
    </Provider>
  );
}
