import { ActionP, ContainerDiv, DescriptionP, StartLink, TitleH1 } from "./Home.styled";

import ROUTER from "utils/router";

export function Home() {
  return (
    <ContainerDiv>
      <TitleH1>Welcome to Car Shop!</TitleH1>

      <DescriptionP>Your perfect place to find a car to rent!</DescriptionP>

      <ActionP>
        {"Click "}
        <StartLink to={ROUTER.CATALOG}>Start</StartLink>
        {" to commence discovering our wide selection of cars!"}
      </ActionP>
    </ContainerDiv>
  );
}
