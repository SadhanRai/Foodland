import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: String, 
    },

    // ================= HEADER =================
    header: {
      firstName: {
        type: String,
        // required: true,
      },
      surname: {
        type: String,
        // required: true,
      },
      city: {
        type: String,
      },
      country: {
        type: String,
      },
      postcode: {
        type: String,
      },
      phone: {
        type: String,
      },
      email: {
        type: String,
      },
    },

    // ================= EDUCATION =================
    education: [
      {
        institution: {
          type: String,
          //   required: true,
        },
        degree: {
          type: String,
          //   required: true,
        },
        startYear: {
          type: String,
        },
        endYear: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],

    // ================= WORK EXPERIENCE =================
    workExperience: [
      {
        company: {
          type: String,
          //   required: true,
        },
        position: {
          type: String,
          //   required: true,
        },
        startYear: {
          type: String,
        },
        endYear: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],

    // ================= SKILLS =================
    skills: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Posts", resumeSchema);
export default Post;
