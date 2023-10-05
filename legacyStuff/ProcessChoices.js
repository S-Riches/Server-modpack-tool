import Button from "@mui/material/Button";
const ProcessChoices = ({ modChoices }) => {
  const convertChoicesToSetToProcess = () => {
    let uniqueChoices = [...new Set(modChoices)];
    console.log(uniqueChoices);
  };
  return (
    <>
      <Button variant="contained" onClick={convertChoicesToSetToProcess}>
        Process Choiceswa
      </Button>
    </>
  );
};

export default ProcessChoices;
