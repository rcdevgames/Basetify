import { FastifyInstance } from "fastify"
import { routeGet, routePost } from "../../helpers/routes";
import { getUser } from './users';

export default (app: FastifyInstance, opt, next) => {
    // app.post('/user', opt, getUser);
    routePost(app, "/", getUser);

    next();
}