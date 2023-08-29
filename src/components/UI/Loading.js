import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function ButtonExample() {
  return (
    <>
      <Button variant="primary">
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </>
  );
}

export default ButtonExample;
