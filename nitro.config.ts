// nitro.config.ts
import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
    serverAssets: [{
        baseName: 'notice',
        dir: './notice',
    },
    {
        baseName: 'templates',
        dir: './templates',
    }],
    routeRules: {
        '/**': { cors: true },
    }

})
