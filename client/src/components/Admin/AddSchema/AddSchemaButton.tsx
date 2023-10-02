import { Button } from "antd";

function AddSchemaButton({ ...otherProps }) {
  return (
    <Button type="primary" {...otherProps}>
     New Schema
    </Button>
  );
}

export default AddSchemaButton;
