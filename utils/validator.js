const Joi = require("joi");

exports.movieSearchDto = Joi.object({
    q: Joi.string().required(),
    page : Joi.number().positive().greater(0).default(1)
})