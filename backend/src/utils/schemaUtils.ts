import Ajv from "ajv";

const ajv = new Ajv();

export const validateSchemaStructre = (inputSchema: object) => {
  const schema = JSON.parse(JSON.stringify(inputSchema));
  try {
    // validate schema
    const validate = ajv.compile(schema);
    return { valid: true };
  } catch (error) {
    if (error instanceof Error) {
      return { valid: false, error: error?.message };
    } else {
      return { valid: false, error: "Invalid Json Schema" };
    }
  }
};
