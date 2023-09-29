import Ajv from "ajv";

const ajv = new Ajv();

export const validateSchemaStructure = (inputSchema: object) => {
  try {
    // validate schema
    const validate = ajv.compile(inputSchema);
    return { valid: true };
  } catch (error) {
    if (error instanceof Error) {
      return { valid: false, error: error?.message };
    } else {
      return { valid: false, error: "Invalid Json Schema" };
    }
  }
};

export const validateSchema = (schema: object, data: object) => {
  try {
    // validate schema
    const validate = ajv.compile(schema);
    const valid = validate(data);

    if (valid) {
      return { valid: true, error: null };
    } else {
      return {
        valid: false,
        error: validate.errors?.map((error) => error.message).join(),
      };
    }
  } catch (error) {
    return { valid: false, error: "Error Validating Schema" };
  }
};
