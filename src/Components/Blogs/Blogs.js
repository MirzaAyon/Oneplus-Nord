import React, { useState } from "react";
import "./Blogs.css";
import { faqsData } from "./data";
import FAQ from "./FAQ";
const Blogs = () => {
    const [faqs] = useState(faqsData);
    return (
        <main className="container-datails">
            <section className="faqs">
                <h1>FAQs</h1>
                {faqs.map((faq) => (
                    <FAQ key={faq.id} {...faq} />
                ))}
            </section>
        </main>
    );
};

export default Blogs;
