import ProjectModel from "../model/project.js"
import axios from "axios";

export const projectAll = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    res.json(projects);
  } catch (error) {
    res.json({ message: error });
  }
};

export const projectCreate = (req, res) => {
  axios
    .get("https://api.github.com/users/Kritith1/repos?per_page=3")
    .then((res) => {
      const { data } = res;
      //   console.log(data);
      data.forEach((obj) => {
        new ProjectModel({
          projectTitle: obj.name,
          projectDate: obj.pushed_at,
          projectLink: obj.html_url,
        }).save();
      });
    })

    .catch((error) => console.log(error));
};

export const projectList = async (req, res) => {
  const size = req.params.size;

  res.send(await ProjectModel.find({}).limit(size));
};
