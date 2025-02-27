import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filer/sort</p>
      </Row>

      <Row>
        <CabinTable></CabinTable>
      </Row>
    </>
  );
}

export default Cabins;
