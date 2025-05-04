import * as nosecone from "@nosecone/next";

const noseconeConfig: nosecone.NoseconeOptions = {
  ...nosecone.defaults,
  contentSecurityPolicy: {
    ...nosecone.defaults.contentSecurityPolicy,
    directives: {
      ...nosecone.defaults.contentSecurityPolicy.directives,
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
      ],
      upgradeInsecureRequests: process.env.NODE_ENV === "production",
    },
  },
} as const;

const noseconeMiddleware = nosecone.createMiddleware(
  process.env.VERCEL_ENV === "preview"
    ? nosecone.withVercelToolbar(noseconeConfig)
    : noseconeConfig,
);

export default noseconeMiddleware;