const fastify = require("fastify")({logger: true});
fastify.register(require("fastify-swagger"), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {title: 'fastify-api'}
    }
})
fastify.register(require("./routes/items-routes"));

const start = async () => {
    try {
        await fastify.listen(3030)
    } catch (err) {
        fastify.log.error();

        process.exit(1);
    }
}
start()