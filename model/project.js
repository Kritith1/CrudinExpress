import mongoose from "mongoose";

const ProjectModel = mongoose.model(
  "Project",
  mongoose.Schema(
    {
      projectImage: {
        type: String,
        // required: [true, "Please add an image"],
        trim: true,
      },
      projectTitle: {
        type: String,
        required: [true, "Please add an image"],
        trim: true,
      },
      projectDate: {
        type: Date,
        required: [true, "Please add published date"],
        trim: true,
      },
      projectLink: {
        type: String,
        required: [true, "Please provide link to your github"],
        trim: true,
      },
    },
    { timestamps: true }
  )
);

export default ProjectModel;
