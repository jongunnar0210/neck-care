import React from "react";
import styles from "./Testimonials.module.css";
import Image from "next/image";

interface Author {
  image: string;
  name: string;
  company: string;
}

interface Testimonial {
  text: string;
  author: Author;
}

const Testimonials = async () => {
  const IMAGE_SIZE = 50;

  // For a full stack application, uncomment this:
  //
  // const res = await fetch("/api/testimonials");
  // const data: Testimonial[] = await res.json();

  // For a frontend application use this: We just mock the backend data:
  const data: Testimonial[] = [
    {
      text: `Our therapists are using the data provided by NeckCareTM
              to develop more individualized plans of care for their
              patients with neck pain. Patients love that the NeckCare TM
              assessment provides them with unique data and visual
              figures to help them understand their performance. I think
              that NeckCareTM has the potential to improve the
              standardization of clinical practise and to facilitate more
              individualized care, which are considered to be key factors
              in improving outcomes.`,
      author: {
        image:
          "https://img.freepik.com/free-photo/portrait-outdoor-businessman_23-2148763884.jpg?t=st=1739406095~exp=1739409695~hmac=8881f558b38dd834ef52fc723d106a1b7c4f517bb06a580b4b25137bc213d0ec&w=1800",
        name: "Marlon Wong, PT, PhD",
        company: "University of Miami",
      },
    },
    {
      text: `NeckCare has enhanced out ability to assess the
              proprioceptive system in the neck in a more
              comprehensive manner. It is the future of head and neck
              care, both for optimal health and condition management.
              Fantastic customer service at every corner and the device
              and cloud software are easy to implement, providing
              valuable clinical info. Healthcare providers, you should get it
              now!`,
      author: {
        image:
          "https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?t=st=1739409788~exp=1739413388~hmac=d295f9465ab91ef8cdcd46ede2473f6c0ca9b761be59800f3b77045020fc50f4&w=1060",
        name: "Jane Doe, CFO",
        company: "Company X",
      },
    },
  ];

  const mapData = () => {
    return data.map((testimonial: Testimonial, index: number) => {
      return (
        <div key={index} className={styles.testimonial}>
          <div className={styles.text}>{`"${testimonial.text}"`}</div>
          <div className={styles.author}>
            <Image
              src={testimonial.author.image}
              alt="Some guy"
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
