const mongoose = require('mongoose');

const tourPackageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        single: {
            type: Number,
            required: true
        },
        double: {
            type: Number,
            required: true
        }
    },
    duration: {
        days: {
            type: Number,
            required: true
        },
        nights: {
            type: Number,
            required: true
        }
    },
    departureDate: {
        type: Date,
        required: true
    },
    tags: [String],
    facility: {
        flight: {
            type: Boolean,
            required: true
        },
        hotel: {
            type: Boolean,
            required: true
        },
        exploring: {
            type: Boolean,
            required: true
        },
        meals: {
            type: Boolean,
            required: true
        },
        visa: {
            type: Boolean,
            required: true
        },
        insurance: {
            type: Boolean,
            required: true
        }
    },
    benefits: {
        saSurprise: {
            type: Boolean,
            required: true
        },
        saPriceGuarantee: {
            type: Boolean,
            required: true
        }
    },
    itinerary: [
        {
            name: {
                type: String,
                required: true
            },
            details: {
                type: String,
                required: true
            }
        }
    ],
    inclusive: [String],
    exclusive: [String],
    paymentPolicy: [String],
    cancellationPolicy: [String],
    generalNotes: [String],
    highlights: [String]
});

const TourPackage = mongoose.model('TourPackage', tourPackageSchema);

module.exports = TourPackage;
