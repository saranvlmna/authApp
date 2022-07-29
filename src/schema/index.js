module.exports = {
  userSchema: {
    type: "object",
    properties: {
      name: {
        type: "string"
      },
      email: {
        type: "string",
        format: "email"
      },
      phone: {
        type: "string" || "number"
      },
      password: {
        type: "string"
      }
    },
    required: ["name", "email", "phone", "password"],
    additionalProperties: true
  },

  loginSchema: {
    type: "object",
    properties: {
      email: {
        type: "string",
        format: "email"
      },
      password: {
        type: "string"
      }
    },
    required: ["email", "password"],
    additionalProperties: false
  }
};
