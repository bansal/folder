import { authHandler } from "~~/server/utils/auth";

export default defineOAuthGitHubEventHandler({
        config: {
                emailRequired: true,
        },
        async onSuccess(event: any, { user }: { user: any }) {
                const { email, name, avatar_url: avatar, login } = user;
                const userName = name ?? login ?? email.split("@")[0];
                const authUser = await authHandler({
                        name: userName,
                        email,
                        provider: "github",
                        avatar,
                });
                await setUserSession(event, { user: authUser });
                return sendRedirect(event, "/");
        },
});
