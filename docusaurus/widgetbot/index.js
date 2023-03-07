module.exports = function widgetbotCrate(context,options) {
    return {
        name: 'plugin-widgetbot-crate',
        injectHtmlTags: () =>  {
            return {
                headTags: [
                    {
                        tagName: 'script',
                        attributes: {
                            src: 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3',
                            async: true,
                            defer: true
                        },
                        innerHTML: "new Crate({ server: '1065445524704079922', channel: '1065445524704079925'})"
                    }
                ]
            }
        }
    }
}