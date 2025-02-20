import React from "react";
import styles from "./Testimonials.module.scss";
import Image from "next/image";
import { Testimonial } from "./types";
import { testimonialMock } from "./Testimonials.mock";

// A list of testimonials fetched from the backend.
const Testimonials = async () => {
  const IMAGE_SIZE = 50;

  // For a full stack application, uncomment this:
  //
  // const res = await fetch("/api/testimonials");
  // const data: Testimonial[] = await res.json();

  // For a frontend application use this: We just mock the backend data:
  const data: Testimonial[] = testimonialMock;

  const mapData = () => {
    return data.map((testimonial: Testimonial, index: number) => {
      return (
        <div key={index} className={styles.testimonial}>
          <p className={styles.text}>{`"${testimonial.text}"`}</p>
          <div className={styles.author}>
            <Image
              src={testimonial.author.image}
              alt="author"
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              className={styles.image}
            />
            <div className={styles.authorText}>
              <div>{testimonial.author.name}</div>
              <div className={styles.company}>
                <em>{testimonial.author.company.toLocaleUpperCase()}</em>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.testimonials}>
      <h1>Let&apos;s see what our clients say</h1>
      <div>{mapData()}</div>
    </div>
  );
};

export default Testimonials;
