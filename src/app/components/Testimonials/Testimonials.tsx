import React from "react";
import styles from "./Testimonials.module.scss";
import Image from "next/image";
import { Testimonial } from "./types";
import { testimonialMock } from "./Testimonials.mock";

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
          <div className={styles.text}>{`"${testimonial.text}"`}</div>
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
              <div>{testimonial.author.company.toLocaleUpperCase()}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.testimonials}>
      <h2>Let&apos;s see what our clients say</h2>
      <div>{mapData()}</div>
    </div>
  );
};

export default Testimonials;
