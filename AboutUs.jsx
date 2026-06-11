import React from "react";

const AboutUs = () => {
    const features = [
        "Fresh indoor plants",
        "Eco-friendly packaging",
        "Fast delivery",
    ];

    return (
        <div className="mt-10 p-5 bg-green-50 rounded">
            <h1 className="text-2xl font-bold mb-3">
                About Paradise Nursery
            </h1>

            <p className="mb-3 text-gray-600">
                We provide high-quality plants to make your home greener
                and healthier.
            </p>

            <ul className="list-disc ml-5">
                {features.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default AboutUs;