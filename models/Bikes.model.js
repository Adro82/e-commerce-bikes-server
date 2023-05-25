const { Schema, model } = require("mongoose");

const productSchema = new Schema(
    {
        brand: {
            type: String,
            required: [true, 'La marca es obligatoria.'],
        },
        model: {
            type: String,
            required: [true, 'El modelo es obligatorio.'],
        },
        description: {
            type: String,
            minlength: [5, 'La descripción debe tener min. 5 caracteres.'],
            required: [true, 'La descripción es obligatoria.'],
        },
        stock: {
            type: Number,
            min: [0, 'Sólo a partir de 60 gramos.'],
            required: [true, 'El formato es obligatoria.'],
        },
        imageUrl: {
            type: String,
            default: 'https://beanbased.es/wp-content/uploads/2022/04/cropped-image0.jpeg',
            set: value => value === '' ? 'https://beanbased.es/wp-content/uploads/2022/04/cropped-image0.jpeg' : value,
            required: [true, 'La imagen es obligatoria.'],
        },
        price: {
            type: Number,
            required: [true, 'El precio por unidad es obligatoria'],
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
);

const Bikes = model("Bikes", productSchema)

module.exports = Bikes