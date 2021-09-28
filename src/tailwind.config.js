module.exports = {
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        project: "url(urlFor(project.mainImage).url())",
      }),
    },
  },
};
