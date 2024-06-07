import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "./button.scss";
import { Button } from "@chakra-ui/react";

type PropsType = {
  btnNextClick: any;
  btnPrevClick: any;
  currentQuestion: number;
  data: object[];
};
export const ButtonComponent = ({
  btnNextClick,
  btnPrevClick,
  currentQuestion,
  data
}: PropsType) => {
  return (
    <div className="button-container">
      <Button
        colorScheme="orange"
        variant="solid"
        isDisabled={currentQuestion === 0 ? true : false}
        className="button-btn"
        onClick={btnPrevClick}
        leftIcon={<ChevronLeftIcon />}
      >
        Prev
      </Button>
      <Button
        rightIcon={<ChevronRightIcon />}
        colorScheme="orange"
        variant="solid"
        onClick={btnNextClick}
      >
        {currentQuestion === data.length - 1 ? `Result` : `Next`}
      </Button>
    </div>
  );
};
export { Button };
