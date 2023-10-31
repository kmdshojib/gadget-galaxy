"use client";
import React from "react";

const FAQ = () => {
  return (
    <div className="join join-vertical w-full mt-5">
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input title="accordiian" type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          What should I do if I have concerns about the quality of a product I
          purchased online?
        </div>
        <div className="collapse-content">
          <p>
            Contact the seller&apos;s customer support. we have policies in
            place for returns, refunds, or exchanges. Read and understand the
            return policy before making a purchase. If the issue persists, you
            can dispute the transaction with your payment provider.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input title="accordiian" type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Are there any consumer rights and protections in e-commerce
          transactions?{" "}
        </div>
        <div className="collapse-content">
          <p>
            Yes, many countries have consumer protection laws that apply to
            e-commerce transactions. These laws often cover issues like returns,
            refunds, and warranties. Familiarize yourself with your local
            consumer rights to ensure you&apos;re protected.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input title="accordiian" type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Can I trust online product reviews when making a purchase decision?{" "}
        </div>
        <div className="collapse-content">
          <p>
            While online reviews can be helpful, be aware that some may be fake
            or biased. Consider reading multiple reviews from different sources
            and look for detailed and balanced feedback. Verified purchase
            reviews are often more reliable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
