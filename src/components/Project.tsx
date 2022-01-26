import { type } from "os";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "./styled/navbar.styled";
import { BiRightArrowAlt } from "react-icons/bi";
const ProjectContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;
const ProjectCard = styled.div`
  background-color: white;
  display: flex;
  padding: 2rem;
  gap: 0.875rem;
  flex-direction: column;
`;

type Project = {
  title: string;
  desc: string;
  image_url: string;
  link?: string;
};
const ProjectArray: Project[] = [
  {
    title: "string",
    desc: "string",
    image_url:
      "https://images.unsplash.com/photo-1620646233562-f2a31ad24425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVuc3BhbHNofGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    link: "string",
  },
  {
    title: "string",
    desc: "string",
    image_url:
      "https://images.unsplash.com/photo-1620646233562-f2a31ad24425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVuc3BhbHNofGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    link: "string",
  },
  {
    title: "string",
    desc: "string",
    image_url:
      "https://images.unsplash.com/photo-1620646233562-f2a31ad24425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVuc3BhbHNofGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    link: "string",
  },
  {
    title: "string",
    desc: "string",
    image_url:
      "https://images.unsplash.com/photo-1620646233562-f2a31ad24425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVuc3BhbHNofGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    link: "string",
  },
];

const Project = () => {
  return (
    <ProjectContainer>
      {ProjectArray.map((project) => (
        <ProjectCard>
          <img src={project.image_url} alt="image" />
          <h5>{project.title}</h5>
          <p>{project.desc}</p>
          <NavLink>
            <Link to={project.link ? project.link : "/"}>
              
              Visit Link <BiRightArrowAlt />
            </Link>
          </NavLink>
        </ProjectCard>
      ))}
    </ProjectContainer>
  );
};
export default Project;
