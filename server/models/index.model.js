const mongoose = require('mongoose');

const ApiModel = mongoose.model('Item', 
    mongoose.Schema(
        {
            slug: {
                type: String,
                minlength: [5, 'Slug does not contain enough characters (Minimum 5).'],
                maxlength: [5, 'Slug contains too many characters (Maximum 5).'],
                trim: true,
                validate: {
                    validator : (slug) => {
                        return /[\w\-]/.test(slug);
                    },
                    message: props => `${props.value} is not a valid slug.`
                }
            }
        },
        {timestamps: true}
    )
);

module.exports = ApiModel;
