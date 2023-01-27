import "../styles/globals.css";
import "animate.css/animate.min.css";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppType } from "next/app";

import { trpc } from "../utils/trpc";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
};

export default trpc.withTRPC(MyApp);
