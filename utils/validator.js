const Joi = require("joi");

exports.movieSearchDto = Joi.object({
    q: Joi.string().required(),
    page : Joi.number().positive().greater(0).default(1)
})

exports.addRemoveFavDto = Joi.object({
    action: Joi.string().valid('add','remove').required(),
    imdbId: Joi.string().required()
})