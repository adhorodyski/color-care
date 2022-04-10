module.exports = {
    images: {
        domains: ["media.graphassets.com"],
    },
    webpack: (config) => {
        config.experiments = config.experiments || {};
        config.experiments.topLevelAwait = true;
        return config;
    },
};
