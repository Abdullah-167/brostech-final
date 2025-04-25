import Image from "next/image";
import React from "react";
import styles from "./TeamCard.module.css";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";
import Container from "../Container";

const Team = () => {

  interface teamdata {
    id: number;
  }  

  return (
    <>
      <Container>
        <section className="mt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
            Meet Our Team
          </h1>
          <h2 className="text-lg text-gray-700 text-center mb-3">
            Our staff has a variety of industry-recognized certifications and
            degrees
          </h2>

          <div className="container">
            <section className={`${styles.team_section}`}>
              <div className={`${styles.team_container}`}>
                {teamdata.map((member : any) => (
                  <div key={member.id} className={`${styles.card}`}>
                    <div className={`${styles.card__inner}`}>
                      {/* Front Side */}
                      <div
                        className={`${styles.card__side} ${styles.card__side_front}`}
                      >
                        <Image
                          src={member.cover}
                          alt={member.title}
                          width={300}
                          height={400}
                          className={`${styles.card__image}`}
                        />
                        <h3 className={`${styles.card__title}`}>
                          {member.title}
                        </h3>
                        <p className={`${styles.card__details}`}>
                          {member.post}
                        </p>
                      </div>

                      {/* Back Side */}
                      <div
                        className={`${styles.card__side}  ${styles.card__side_back}`}
                      >
                        <Image
                          src={member.logo}
                          alt={member.title}
                          width={100}
                          height={100}
                        />
                        <h4 className={`${styles.card__heading}`}>
                          <span className="">{member.title}</span>
                        </h4>
                        <p className={`${styles.card__details}`}>
                          {member.post}
                        </p>
                        <div>
                          <Link href={member.linkProfile}>
                            <p style={{ marginTop: "10px" }}>
                              {member.linkedin}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Team;

const teamdata = [
  {
    title: "Bilal Humayun",
    cover: "/CEO.jpg",
    logo: "/white.png",
    post: "FOUNDER, CEO",
    linkedin: <CiLinkedin size={30} />,
    linkProfile: "https://www.linkedin.com/in/bilal-humayun-b36b6a171/",
  },
  {
    title: "Abdullah Iqbal",
    cover: "/coo.jpg",
    logo: "/white.png",
    post: "COO",
    linkedin: <CiLinkedin size={30} />,
    linkProfile: "https://www.linkedin.com/in/muhammad-abdullah-513029196/",
  },
  {
    title: "Muhammad Zeeshan",
    cover: "/Zeeshan.jpg",
    logo: "/white.png",
    post: "Creative Director",
    linkedin: <CiLinkedin size={30} />,
    linkProfile: "https://www.linkedin.com/in/zeeshang8721/",
  },
  {
    title: "Muhammad Abdullah",
    post: "Chief Digital Strategist",
    linkedin: <CiLinkedin size={30} />,
    linkProfile: "https://www.linkedin.com/in/abdullah-bizgrowth/",
    cover: "/abdullah.jpg",
    logo: "/white.png",
  },
];
